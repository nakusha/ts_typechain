import * as CryptoJS from "crypto-js";

class Block { 
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (index:number, previousHash:string, timestamp:number, data:string):string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString()

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

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);


export {};