const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

// bitcoin.CreateNewBlock(1234,'hdjsakdhsakjdsakjhkj','sadfsafdsgdgfdgsfa');
// bitcoin.CreateNewBlock(4321,'dasdkdhsakjdsakjhkj','sadfsadasdasdsgdgfdgsfa');

// bitcoin.CreateNewTransaction(200,'senderaddressss','recieveraddressss');
// bitcoin.CreateNewTransaction(40,'sendersadressss','recievesaddressss');

// bitcoin.CreateNewBlock(421321,'zxczsdkdhsakjdsakjsad','xzcxzcxzsadasdsgdgfdgsfa');

const previousHash = "dsafaskdsadasdakdadsadfdka";
const newBlockHash = [
    {
        amount: 30,
        sender: "asdasdasdasda",
        reciever: "asdasdasdasdadas"
    },
    {
        amount: 30,
        sender: "xasdwdasdasda",
        reciever: "qwewqewqdasd"
    },
]


//var hashValue = bitcoin.hashBlock(previousHash,newBlockHash,nonce);

console.log(bitcoin.proofOfWork(previousHash,newBlockHash));
