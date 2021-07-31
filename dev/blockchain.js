function Blockchain(){
    this.chain= [];
    this.pendingTransactions= []
}

Blockchain.prototype.CreateNewBlock = function (nonce,prevHash,hash){

    const newBlock ={
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        previousHash: prevHash,
        Hash: hash
    }

    this.pendingTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
}

module.exports = Blockchain;