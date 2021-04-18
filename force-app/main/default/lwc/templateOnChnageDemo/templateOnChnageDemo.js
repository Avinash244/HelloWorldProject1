import { LightningElement } from 'lwc';

export default class TemplateOnChnageDemo extends LightningElement {
    inputText=null;
    changeHandler(event){
        this.inputText=event.target.value;
    }
    get checkText(){
        return this.inputText=== "Troops"
    }
}