import { api, LightningElement } from 'lwc';
import uploadFile  from '@salesforce/apex/FileUploaderClass.uploadFile';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class FileUploaderCompLwc extends LightningElement {
    @api recordId;
    fileData;
    openFileUpload(event){
        console.log('tevent.target.files>>'+JSON.stringify(event.target.files));
        const file=event.target.files[0];
        let reader=new FileReader();
        reader.onload =()=>{
            var base64= reader.result.split(',')[1];
            this.fileData={
                'filename':file.name,
                'base64':base64,
                'recordId':this.recordId
            }
            console.log('this.fileData>>'+JSON.stringify(this.fileData));
        }
        reader.readAsDataURL(file)
    }

    clickHandler(){
        let base64=this.fileData.base64;
        let fileName=this.fileData.filename;
        let recordId=this.fileData.recordId;
       // const {base64,filename,recordId}=this.fileData;
        uploadFile({ base64:base64, fileName:fileName, recordId:recordId }).then(result =>{   
            console.log('result>> '+result+' uploaded successfully');
            const event = new ShowToastEvent({
                title: 'Toast message',
                message: result+' uploaded successfully',
                variant: 'success',
                mode: 'dismissable'
            });
            this.dispatchEvent(event);
            this.fileData=null;
        })
    }
}