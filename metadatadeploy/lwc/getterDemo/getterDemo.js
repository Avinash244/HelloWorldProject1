import { LightningElement } from 'lwc';

export default class GetterDemo extends LightningElement {
    title="this is a getter power";
    selectedBtn="OFF";
    get getTitle(){
       return this.title.toUpperCase();
    }
    clickHandler(event){
        console.log(event.currentTarget.innerText);
        this.selectedBtn=event.currentTarget.innerText;
    }
    /*get boxStatus(){
        return this.selectedBtn=== "ON" ? "box-green":"box-red";
    }*/
    get boxStatus(){
       // return "${this.selectedBtn === 'ON' ? 'box-green':'box-red'}";
        //return 'box-'+this.selectedBtn === 'ON' ? 'green':'red';
        return this.selectedBtn=== "ON" ? "box-green":"box-red";
    }
}
