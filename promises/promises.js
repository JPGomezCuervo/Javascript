const STATE = {
    FULFILLED: "FULFILLED",
    REJECTED: "REJECTED",
    PENDING: "PENDING"
}


class MyPromise {
    constructor(callback) {
        this.value = value;
        this.state = undefined;
        this.handlers = [];

        try {
            callback(this._resolve, this._rejected);
        } catch (err) {
            this._rejected();
        }
    };

    _resolve(value) {

    };

    _rejected(error) {
        
    };

    then(onSuccess, onFail) {

    };

    catch(onFail) {

    }

    updateResult(value, state) {
        setTimeout(() => {     
            if (this.state === STATE.PENDING) return;

            if (isThenable(value)) return value.then(this._resolve, this._rejected);

            this.state = state;
            this.value = value;

            this.executeHandlers();
        }, 0);
    }

    isThenable(value) {
        return value instanceof MyPromise;
    }

    executeHandlers(){}


}