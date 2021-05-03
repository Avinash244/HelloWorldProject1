import { LightningElement, track } from 'lwc';
import retrieveNews from '@salesforce/apex/newsController.retrieveNews' 

export default class NewsComponent extends LightningElement {
    @track result=[];
    @track selectedNews={};
    @track isModelOpen=false;
    connectedCallback(){
        this.fetchNews();
    }
    get model(){
        return this.isModelOpen ? "slds-modal slds-fade-in-open" : "slds-modal";
    }
    get modelBackDropClass(){
        return this.isModelOpen ? "slds-backdrop slds-backdrop_open" : "slds-backdrop";
    }
   /* get model(){
        return 'slds-modal ${isModelOpen} ? "slds-fade-in-open" : ""';
    }
    get modelBackDropClass(){
        return 'slds-backdrop ${isModelOpen} ? "slds-backdrop_open" : ""';
       // return this.isModelOpen ? "slds-backdrop slds-backdrop_open" : "slds-backdrop";
    }*/
    fetchNews(){
        retrieveNews().then(respone=>{
            console.log(JSON.stringify(respone));
            this.formatNewsData(respone.articles);
        }).catch(error=>{
            console.log(JSON.stringify(error));
        })
    }
    formatNewsData(res){
        this.result=res.map((item,index)=>{
            let id=index;
            let name=item.source.name;
            let date=new Date(item.publishedAt).toDateString();
            return {...item, id:id, name:name, date:date};
        });
        console.log('result>>'+JSON.stringify(result));
    }
    showModel(event){
        console.log('event.currentTarget.id;>>'+event.target.id);
        //let id=event.target.dataset.item;
        let id=event.target.id;
        console.log('id>>'+id);
        id=Number(id.substring(0,id.indexOf('-')));
        console.log('id>>'+id);
      //  console.log('event.target.dataset.item>>'+event.target.dataset.item);
        
        console.log('this.result>>'+JSON.stringify(this.result));
        
        if(id){
           /* this.result.forEach(item=>{
                if(Number(item.id) === id){
                    this.selectedNews={...item};
                }
            });*/
            this.selectedNews = this.result.find(item=>{
                return item.id === id;
            });
            console.log('this.selectedNews>>'+JSON.stringify(this.selectedNews));
            this.isModelOpen=true;
        }
    }
    closeModel(){
        this.isModelOpen=false;
    }
}