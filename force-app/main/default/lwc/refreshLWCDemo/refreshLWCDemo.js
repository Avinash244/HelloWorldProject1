import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/refreshContactController.getContactList';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import { refreshApex } from '@salesforce/apex';

const columns=[
    {
        label:"First Name",
        fieldName:"FirstName",
        editable:true
    },
    {
        label:"Last Name",
        fieldName:"LastName",
        editable:true
    },
    {
        label:"Email",
        fieldName:"Email",
        type:'email'
    }
]
export default class RefreshLWCDemo extends LightningElement {
    columns=columns;
    draftValues=[];
    contactsResult=null;
    @wire(getContactList)wiredData;
   /* @wire(getContactList)
    wiredData(result){
        contactsResult=result;
        const {data,value}=result;
    };*/

    get isContactAvailable(){
        console.log(JSON.stringify(this.wiredData.data))
        return this.wiredData.data  && this.wiredData.data.length>0 ? 'YES':'NO'
    }
    handleSave(event){
        console.log('event.detail.draftValues>>'+JSON.stringify(event.detail.draftValues));
        const recordInputs=event.detail.draftValues.slice().map(draft=>{
            const fields=Object.assign({}, draft);
            return {fields}
        });
        console.log('recordInputs>>'+JSON.stringify(recordInputs));
        const promises=recordInputs.map(recordInput => updateRecord(recordInput));
        Promise.all(promises).then(result=>{
           // this.showToastMessage('success','contacts updated','success')
            const event = new ShowToastEvent({
            title: 'contacts updated',
            message: 'contacts updated',
            variant:'success'
            });
            this.dispatchEvent(event);
            this.draftValues=[];
            refreshApex(this.wiredData);
        }).catch(error=>{
            const event = new ShowToastEvent({
                title: 'error while creaction record',
                message: error.body.message,
                variant:'error'
            });
            this.dispatchEvent(event);
           // this.showToastMessage('error while creaction record',error.body.message,error)
        })

    }

}