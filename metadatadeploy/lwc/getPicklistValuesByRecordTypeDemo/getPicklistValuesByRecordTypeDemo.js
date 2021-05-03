import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';


export default class GetPicklistValuesByRecordTypeDemo extends LightningElement {
    picklistvalue;shippingGeocodeAccuracy;
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo;
    @wire(getPicklistValuesByRecordType, { objectApiName: ACCOUNT_OBJECT, recordTypeId: '$objectInfo.data.defaultRecordTypeId' })
    accountPicklists({data,error}){
        console.log('error::>>'+JSON.stringify(error));
        console.log('data::>>'+JSON.stringify(data));
        if(data){
            console.log('data::>>'+JSON.stringify(data));
            this.shippingGeocodeAccuracy=data.picklistFieldValues.ShippingGeocodeAccuracy;
        }
        if(error){
            console.log('error::>>'+JSON.stringify(error));
        }
    }
  changeHandler(event){
        this.picklistvalue=event.target.value;
    }
}