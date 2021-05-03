public with sharing class newsController {
    public newsController() {

    }
    @AuraEnabled
    public static Map<String,Object> retrieveNews(){
        Map<String,Object> newsJsonData=new Map<String,Object>();
        HttpRequest request=new HttpRequest();
        request.setEndPoint('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c8fc2b37e2854a72b622d380b07dd764');
        request.setMethod('GET');
        String str=null;
        try{
            http h=new Http();
            HttpResponse response=h.send(request);
            if(response.getStatusCode()==200){
                str=response.getBody();
            }else {
                throw new CalloutException(response.getBody());
            }
        }catch(Exception ex){
            throw ex;
        }
        if(str!=null){
            newsJsonData=(Map<String,Object>)JSON.deserializeUntyped(str);
        }
        if(!newsJsonData.isEmpty()){
            return newsJsonData;
        }else {
            return null;            
        }
    }
}
