import { makeAutoObservable } from "mobx"

class Couter {
    count = 0
    timer = 0
    constructor() {
        makeAutoObservable(this)
    }

    increment() {
        this.count = this.count + 1
    }
    
    decrement() {
        this.count = this.count - 1
    }

    get total() {
        return `Count + timer = ` + (this.count + this.timer)
    }

}

export default new Couter()