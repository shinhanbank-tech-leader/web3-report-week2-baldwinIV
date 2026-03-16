class Transaction {
    inputUTXOs;
    outputUTXOs;
    fee = 0;
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
        this.fee = 0;
    }
    execute() {
        if (this.inputUTXOs.some(ret => ret.spent == true))throw new Error();

        if (this.inputUTXOs.reduce((acc, cur) => acc + cur.amount, 0)
             < this.outputUTXOs.reduce((acc, cur) => acc + cur.amount, 0))throw new Error;

        this.inputUTXOs.forEach((val, idx, arr) => val.spent = true);
        this.fee = this.inputUTXOs.reduce((acc, cur) => acc + cur.amount, 0) - this.outputUTXOs.reduce((acc, cur) => acc + cur.amount, 0)
    }
}

module.exports = Transaction;