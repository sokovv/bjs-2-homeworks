function cachingDecoratorNew(func) {
  let cache = {};
  function wrapper(...args) {
    const key = args.join(',')
    if (key in cache) {
      console.log("Из кэша: " + cache[key]);
      return "Из кэша: " + cache[key];
    } else {
      const result = func(...args)
      cache[key] = result
      if (Object.keys(cache).length > 5) {
        delete cache[Object.keys(cache)[0]];
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  }
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let timer;
  function wrapper(...args) {
    if (timer) {
      clearTimeout(timer)
      timer = setTimeout(() => func(...args), ms)
    } else {
      timer = setTimeout(func)
    }
  }
  return wrapper;
}

function debounceDecorator2(func, ms) {
  let timer;
  function wrapper(...args) {
    wrapper.count.push(args);
    if (timer) {
      clearTimeout(timer)
      timer = setTimeout(() => func(...args), ms)
    } else {
      timer = setTimeout(func)
    }
  }
  wrapper.count = [];
  console.log(wrapper.count)
  return wrapper;
}
