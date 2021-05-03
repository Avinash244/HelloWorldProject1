
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from "@salesforce/schema/Account"
import { getListUi } from 'lightning/uiListApi';


export default class GetListUiDemo extends LightningElement {
    accResult;
    @wire(getListUi, {
        objectApiName:ACCOUNT_OBJECT,
        //listViewApiName:"AllAccounts"
        listViewApiName:"Alldata"
    })wiredListView({error,data}){
        console.log("data>>"+JSON.stringify(data))
        console.log("error>>"+JSON.stringify(error))
        if(data){
            console.log("data>>"+JSON.stringify(data))
            this.accResult=data.records.records;
        }
    }
}