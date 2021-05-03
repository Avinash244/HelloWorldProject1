public with sharing class FileUploaderClass {
    public FileUploaderClass() {

    }
    @AuraEnabled
    public static string uploadFile(String base64,String fileName,String recordId){
       ContentVersion cv=createContentVersion(base64,fileName);
       ContentDocumentLink cdl=createContentLink(cv.Id,recordId);
       if(cv==null || cdl==null) return null;
       return cdl.Id;
    }
    
    private static ContentVersion createContentVersion(String base64, string fileName){
        ContentVersion cv=new ContentVersion();
        cv.VersionData=EncodingUtil.base64Decode(base64);
        cv.Title=fileName;
        cv.PathOnClient=fileName;
        try{
            insert cv;
            return cv;
        }
        catch(Exception ex){
            System.debug('ex>>'+ex);
            return null;
        }
    }
    
    private static ContentDocumentLink createContentLink(String contentVersionId, string recordId){
        if(contentVersionId==null || recordId==null ) return null;

        ContentDocumentLink cdl=new ContentDocumentLink();
        cdl.ContentDocumentId=[select ContentDocumentId  from ContentVersion where Id =: contentVersionId].ContentDocumentId;
        cdl.LinkedEntityId=recordId;
        cdl.shareType='V';
        try{
            insert cdl;
            return cdl;
        }
        catch(Exception ex){
            System.debug('ex>>'+ex);
            return null;
        }
    }
}
