import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetObjectInfoDemo extends LightningElement {
    defaultRecordTypeId;
    //@wire(getObjectInfo,{getObjectInfo:ACCOUNT_OBJECT}) 
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })objectInfo;
    data;
    connectedCallback(){
        this.data=JSON.stringify(this.objectInfo);
        this.defaultRecordTypeId=this.objectInfo.data["defaultRecordTypeId"];
        console.log( ' this.data>>>'+JSON.stringify(this.objectInfo.data["defaultRecordTypeId"]));
        
    }
    /*objectInfo({data,error}){
        onsole.log('data::'+JSON.stringify(data));
        console.error('error::'+error);
        if(data){
            console.log('data::'+JSON.stringify(data))
        }
        else if(error){
            console.error('error::'+error);
        }
    };*/
}