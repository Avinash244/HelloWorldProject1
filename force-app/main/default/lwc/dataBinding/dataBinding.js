import { LightningElement, track } from 'lwc';

export default class DataBinding extends LightningElement {
    fullname="Salesforce lwc One way data binding";
    @track title="salesforce developer";

    changeHandler(event){
        this.title=event.target.value;
    }
}