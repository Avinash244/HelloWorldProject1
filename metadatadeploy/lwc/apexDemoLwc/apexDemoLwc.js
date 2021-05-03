import { LightningElement, wire } from 'lwc';
import getSObjectValue from '@salesforce/apex';
import getAccountList from '@salesforce/apex/AccountController62.getAccountList';
import getAccountById from '@salesforce/apex/AccountController62.getAccountById';
import getContactList from '@salesforce/apex/AccountController62.getContactList';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
export default class ApexDemoLwc extends LightningElement {
            //Wire as a property
    @wire(getAccountById,{"accId":"001N0000021n9mcIAA"})wiredAccounts2;
    get name1(){
        console.log('this.wiredAccounts2>>'+JSON.stringify(this.wiredAccounts2));
        let data=JSON.stringify(this.wiredAccounts2.data);
        
        return JSON.stringify(this.wiredAccounts2.data);
        //return this.wiredAccounts2.data ? getSObjectValue(this.wiredAccounts2.data, NAME_FIELD) : '';

        //return this.wiredAccounts2.data ? getSObjectValue(this.wiredAccounts2.data[0], ACCOUNT_NAME_FIELD):''
    }
    results;
    
    //Wire as a property
   // @wire(getAccountList)wiredAccounts;
      //Wire as a function
      @wire(getAccountList)wiredAccounts({data,error}){
          if(data){
              this.results=data;
          }if(error){
              console.error(error)
          }
      };
      
      contacts;
      error;

      handleLoad(){
          // apexImperativeMethod call
        getContactList()  .then(result => {
            this.contacts = result;
            console.log('this.contacts'+JSON.stringify(this.contacts));
        })
        .catch(error => {
            this.error = error;
        });
      };
      

      ///////
   
}