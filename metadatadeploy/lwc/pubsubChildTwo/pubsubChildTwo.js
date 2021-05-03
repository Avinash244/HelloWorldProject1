import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubsubChildTwo extends LightningElement {
    accordianList=[
        {
            id:1,
            name:'Success',
            selected:false,
            className:'accordian success'
        },
        {
            id:2,
            name:'Info',
            selected:false,
            className:'accordian info'
        },
        {
            id:3,
            name:'Warning',
            selected:false,
            className:'accordian warning'
        },
        {
            id:4,
            name:'Danger',
            selected:false,
            className:'accordian danger'
        }
    ]
    connectedCallback(){
        console.log('connected call back')
        this.callsubscriber()
    }
    callsubscriber(){
        console.log('callsubscriber')
        pubsub.subscribe("accordianTriggered",this.subscriberCallback)
    }
    subscriberCallback(event){
        console.log(event)
        let updatedList=this.accordianList.map(item=>{
            return item.name === event ? {...item,selected:true}:{...item,selected:false}           
        });
        this.accordianList=[...updatedList];
    }
}