class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('error text');
        }
        for (let i = 0; i < this.alarmCollection.length; i++) {
            if (this.alarmCollection[i].id === id) {
                return console.error();
            }
        }
        this.alarmCollection.push({ id, time, callback })
        return;
    }

    removeClock(id) {
        let before = this.alarmCollection.length;
        let after;
        for (let i = 0; i < before; i++) {
            if (this.alarmCollection[i].id === id) {
                this.alarmCollection.splice(i, 1);
                after = this.alarmCollection.length;
            }
        }
        if (before > after) {
            return true;
        } else {
            return false;
        }
    }

    getCurrentFormattedTime() {
        let formatted;
        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        if (hours < 10 && minutes >= 10) {
            formatted = `0${hours}:${minutes}`
        };
        if (minutes < 10 && hours >= 10) {
            formatted = `${hours}:0${minutes}`
        };
        if (minutes < 10 && hours < 10) {
            formatted = `0${hours}:0${minutes}`
        };
        if (minutes >= 10 && hours >= 10) {
            formatted = `${hours}:${minutes}`
        };
        return formatted;
    }

    start() {
        if (this.timerId == null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(element => {
                    if (element.time == this.getCurrentFormattedTime()) {
                        return element.callback();
                    }
                });
            }, 10000);
        }


    }

    stop() {
        if (this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(element => console.log(`Id ${element.id} Time ${element.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection.splice(0);
    }
}


