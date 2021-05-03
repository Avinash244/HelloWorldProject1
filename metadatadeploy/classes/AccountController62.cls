public with sharing class AccountController62 {
    public AccountController62() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [select id,name,AnnualRevenue from Account where AnnualRevenue!=null limit 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountById(Id accId){
        return [select id,name,AnnualRevenue,Phone from Account where Id=: accId ];
    }

    @AuraEnabled
    public static List<Contact> getContactList(){
        return [select id,name from Contact  limit 100 ];
    }
}
