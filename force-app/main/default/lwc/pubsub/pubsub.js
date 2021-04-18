// import { LightningElement } from 'lwc';

// export default class Pubsub extends LightningElement {}
//step 1 : create a store
const store={}

// step 2 :create a subscribe method
const subscribe=(eventName,callback)=>{
    if(!store[eventName]){
        store[eventName]=new Set();
    }
    store[eventName].add(callback);
}   

//step 3 : create a publish method
const publish=(eventName,payLoad)=>{
    if(store[eventName]){
        store[eventName].array.forEach(callback => {
            try{
                callback(payLoad);
            }catch(error){
                console.log(JSON.stringify(error))
                console.error(error);
            }
        });
    }
}
//step 4: create an unsubscribe method
const unSubscribe=(eventName,callback)=>{
    if(store[eventName]){
        store[eventName].delete(callback);
    }
}

export default{
    publish,
    subscribe,
    unSubscribe
}