import { api, LightningElement, wire } from 'lwc';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_PHOME from '@salesforce/schema/Account.Phone';
import ACCOUNT_OWNER_NAME from '@salesforce/schema/Account.Owner.Name';

import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';

import ACCOUNT_ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue';

let FIELDS=['Account.Name','Account.Phone','Account.Owner.Name','Account.Industry','Account.AnnualRevenue'];
export default class GetRecordDemo extends LightningElement {
    @api recordId;
    result={};
    //@wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NAME,ACCOUNT_PHOME,ACCOUNT_OWNER_NAME,ACCOUNT_INDUSTRY,ACCOUNT_ANNUAL_REVENUE]})
    //we can use Optional fields option
   // @wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NAME,ACCOUNT_PHOME], optionalFields: [ACCOUNT_OWNER_NAME,ACCOUNT_INDUSTRY,ACCOUNT_ANNUAL_REVENUE]})
    /* @wire(getRecord, { recordId: '$recordId', fields: FIELDS})
   wiredRecord({data,error}){
            if(data){
                const {fields}=data;
                Object.keys(fields).forEach(item=>{
                    let value=fields[item] &&fields[item].displayValue ? fields[item].displayValue: fields[item].value
                    this.result={...this.result,[item]:value}
                })
                console.log("data::::::::"+JSON.stringify(data));
            }
            else{
                console.error("error::::::::"+JSON.stringify(error));
            }
        }*/
   @wire(getRecord, { recordId: '$recordId', fields: FIELDS})account;
    get name(){
        return getFieldValue(this.account.data, ACCOUNT_NAME)
    }
    get phone(){
        return getFieldValue(this.account.data, ACCOUNT_PHOME)
    }
    get owner(){
        return getFieldValue(this.account.data, ACCOUNT_OWNER_NAME)
    }
    get industry(){
        return getFieldValue(this.account.data, ACCOUNT_INDUSTRY)
    }
    get revenue(){
        return getFieldValue(this.account.data, ACCOUNT_ANNUAL_REVENUE)
    }

   
}