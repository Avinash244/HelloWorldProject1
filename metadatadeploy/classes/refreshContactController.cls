public with sharing class refreshContactController {
    public refreshContactController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
       return [select id,FirstName,LastName,Email from Contact limit 10];
    }
}
