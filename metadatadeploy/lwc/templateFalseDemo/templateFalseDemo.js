import { LightningElement } from 'lwc';

export default class TemplateFalseDemo extends LightningElement {
    hideText=false;
    hideHandler(event){
        this.hideText= true;
    }
    hideText2={"result":false};
    hideHandler2(event){
        this.hideText2= {...this.hideText2, "result":true };
    }
}