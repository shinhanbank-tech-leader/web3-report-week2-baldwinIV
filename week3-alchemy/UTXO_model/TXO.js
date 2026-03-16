class TXO {
    owner = ""
    constructor(owner, amount) {
        this.spent = false;
        this.owner = owner;
        this.amount = amount;
    }
    spend() {
        this.spent = true;
    }
}

module.exports = TXO;