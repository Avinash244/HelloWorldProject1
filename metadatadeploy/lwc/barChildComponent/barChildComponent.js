import { api, LightningElement } from 'lwc';

export default class BarChildComponent extends LightningElement {
    className = "greenBar";
    @api changeBarColor() {
        if(this.className==="greenBar")
        this.className = "redBar"
        else
        this.className = "greenBar"
    }
}