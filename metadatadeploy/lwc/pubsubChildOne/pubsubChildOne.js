import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubsubChildOne extends LightningElement {
 
    buttonHandler(event){
       // this.eventPublisher("Hello From Child One")
        this.eventPublisher(event.target.label)
    }
    eventPublisher(data){
        console.log(JSON.stringify(data))
        //pubsub.publish("sayhello",data)
        pubsub.publish("accordianTriggered",data)
    }
}