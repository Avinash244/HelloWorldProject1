import { LightningElement } from 'lwc';
import signInTemplate from './signInTemplate.html'
import signUpTemplate from './signUpTemplate.html'
import defaultTemplate from './renderMultipleDemo.html'
export default class RenderMultipleDemo extends LightningElement {
    selected=null;

    render(){
        return this.selected=== 'Sign Up' ? signUpTemplate: this.selected === "Sign In" ? signInTemplate:defaultTemplate;
    }
    /*handlerClick(event){
        console.log(JSON.stringify(event.target.innerText));
        this.selected=event.target.innerText;
    }*/
    handleClick(event){
        this.selected = event.target.label
    }
    submitHandler(event){
        if(event.target.label === 'Sign In'){
            console.log("Sign In Successfully")
        } else if (event.target.label === 'Sign Up'){
            console.log("Sign Up Successfully")
        } else {

        }
    }
}