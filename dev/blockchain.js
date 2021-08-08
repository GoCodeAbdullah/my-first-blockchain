const sha256 = require('sha256');


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


Blockchain.prototype.hashBlock = function(previousHash, newBlockHash, nonce){
    dataAsString = previousHash + nonce.toString() + JSON.stringify(newBlockHash);
    hash = sha256(dataAsString);
    return hash;
}

Blockchain.prototype.proofOfWork = function(previousHash,newBlockHash){
    let nonce = 0;
    let hash = this.hashBlock(previousHash,newBlockHash,nonce);

    while(hash.substring(1,4) != "0101"){
        nonce++;
        //console.log(hash);

        hash = this.hashBlock(previousHash,newBlockHash,nonce);
    }


    return nonce;
}


module.exports = Blockchain;