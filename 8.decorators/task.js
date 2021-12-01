function cachingDecoratorNew(func) {
  let cache = {};
  function wrapper(...args) {
    const key = args.join(',')
    if (key in cache) {
      console.log("Из кэша: " + cache[key]);
      return "Из кэша: " + cache[key];
    }
    const result = func(...args)
    cache[key] = result
    if (Object.keys(cache).length > 5) {
      delete cache[Object.keys(cache)[0]];
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;

  }
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let timer;
  function wrapper(...args) {
    if (timer == undefined) {
      wrapper.count++
      timer = func(...args)
    }
    clearTimeout(timer)
    console.log(wrapper.count)
    return timer = setTimeout(() => {
      wrapper.count++;
      func(...args)
    }, ms);
  }
  wrapper.count = 0;
  return wrapper;
}

function debounceDecorator2(func, ms) {
  let timer;
  function wrapper(...args) {
    if (timer == undefined) {
      wrapper.count++
      timer = func(...args)
    }
    clearTimeout(timer)
    console.log(wrapper.count)
    return timer = setTimeout(() => {
      wrapper.count++;
      func(...args)
    }, ms);
  }
  wrapper.count = 0;
  return wrapper;
}
