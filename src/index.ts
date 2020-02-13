import * as CryptoJS from "crypto-js";

class Block { 
    static calculateBlockHash = (index:number, previousHash:string, timestamp:number, data:string):string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString()
    static validateStructure = (aBlock: Block): boolean => 
        typeof aBlock.index === "number" && 
        typeof aBlock.hash === "string" && 
        typeof aBlock.previousHash === "string" && 
        typeof aBlock.timestamp === "number" &&
        typeof aBlock.data === "string";

    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    constructor(index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
        ){
            this.index = index;
            this.hash = hash;
            this.previousHash = previousHash;
            this.data = data;
            this.timestamp = timestamp;
        }
}


const genesisBlock:Block = new Block(0, "123gvi2b1bd", "", "hello", 123456);

let blockchain:Block[] = [genesisBlock];

// Block 배열에 string가 들어가려해서 ts에서 자동으로 애러처리함
//blockchain.push("stuff");

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex : number = previousBlock.index + 1;
    const newTimeStamp: number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimeStamp, data);
    const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimeStamp)
    addBlock(newBlock);
    return newBlock;
};

const getHashforBlock = (aBlock: Block): string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);

const isBlockValid = (canidateBlock: Block, previousBlock: Block): boolean => {
    if (!Block.validateStructure(canidateBlock)) {
        return false;
    }else if (previousBlock.index + 1 !== canidateBlock.index) {
        return false;
    }else if (previousBlock.hash !== canidateBlock.previousHash) {
        return false;
    }else if (getHashforBlock(canidateBlock) !== canidateBlock.hash) {
        return false;
    } else{
        return true;
    }
};

const addBlock = (candidateBlock: Block): void => {
    if (isBlockValid(candidateBlock, getLatestBlock())){
        blockchain.push(candidateBlock);
    }
}

createNewBlock("second");
createNewBlock("third");
createNewBlock("fourth");

console.log(blockchain);

export {};