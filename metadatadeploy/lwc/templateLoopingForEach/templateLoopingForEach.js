import { LightningElement } from 'lwc';

export default class TemplateLoopingForEach extends LightningElement {
    carList=["Ford","Audi","Maruti","Hyundai","Marcedes"];
    programmingList=[
        {
            id:"06868",
            language:"HTML"
        },
        {
            id:"19797",
            language:"CSS"
        },
        {
            id:"298789",
            language:"JAVASCRIPT"
        },
        {
            id:"398798",
            language:"APEX"
        },
        {
            id:"48967",
            language:"AURA"
        },
        {
            id:"58798",
            language:"JAVA"
        }
    ];
}