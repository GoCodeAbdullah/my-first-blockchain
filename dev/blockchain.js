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

Blockchain.prototype.getLastBlock = function (){
    return this.chain[this.chain.length - 1];
}

Blockchain.prototype.CreateNewTransaction = function(amount,senderAddress,recieverAddress){
    const newTransaction={
        amount: amount,
        senderAddress: senderAddress,
        recieverAddress: recieverAddress
    }

    this.pendingTransactions.push(newTransaction);

    return this.getLastBlock()['index'] + 1;
}



module.exports = Blockchain;