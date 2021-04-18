import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class CreateRecordDemo extends LightningElement {
    formFields={
        Name:'',Industry:'',Phone:'',Type:''
    }
    changeHandler(event){
        const {value,name}=event.target;
        this.formFields={...this.formFields,[name]:value}
    }
    handleClick(){
        const fields={}
        fields[ACCOUNT_NAME.fieldApiName]=this.formFields.Name;
        fields[ACCOUNT_PHONE.fieldApiName]=this.formFields.Phone;
        fields[ACCOUNT_TYPE.fieldApiName]=this.formFields.Type;
        fields[ACCOUNT_INDUSTRY.fieldApiName]=this.formFields.Industry;
        let recordInput={apiName:ACCOUNT_OBJECT.objectApiName,fields}
        createRecord(recordInput).then(result=>{
            this.formFields={}
            console.log('Account Created Id{'+JSON.stringify(result.id))
            const event = new ShowToastEvent({
                "title": "Success!",
                "message": "Record {0} created! See it {1}!"+JSON.stringify(result.id),
                "messageData": [
                    'Salesforce',
                    {
                        url: 'http://www.salesforce.com/',
                        label: 'here'
                    }
                ]
            });
            this.dispatchEvent(event);
        }).catch(error=>{
            console.error();
        })
    }
}