


class HashMap{
    constructor(){
        this.loadFactor = 1
        this.capacity = 16
        this.map = new Array(this.capacity)
        
    }

    hash(key){
        let hashCode = 0
        const primeNumber = 31;
        for(let i = 0; i < key.length; i++){
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity
        }
        
        return hashCode;
    }

    set(key, value){
        const hashcode = this.hash(key);
        this.map[hashcode] = value
        console.log(this.map)
    }
}

const HM = new HashMap()

HM.set("honkydonky", "wah");
HM.set("honkydonky", "shuba");


