public with sharing class APexdatatypes {
    public APexdatatypes() {

    }

    //Apex data types
    Boolean userhasAccess = TRUE;//False
    Integer phone = 12345;
    String name = 'dasfrog user1223***';
    String company = 'dasfrog';
    Date todaysDate = date.today();
    DateTime todaysDatetime = Datetime.now();
    Decimal percentageDiscount = 12.4;
    ID accountID = '5008d00000Al3PgAAJ';
    Account acc = new Account();//SObject

    //users firstName is dasfrog , then create a case

    public static void createcase(){

        if(hasAccess()){
            Case cs = new Case();
            cs.origin = 'Phone';
            cs.status = 'New';
            cs.subject = 'my case is linked to an account and has a proposed date';
            cs.description = 'same here';
            //replace the ids with your organisation ids.
            //Hard coding id is just for learning purpose not recommended while coding.
            cs.recordtypeId = '0128d0000009AhHAAU';
            cs.AccountId = '0018d000004Y56PAAS';
            cs.proposed_date__c = date.today()+5;
            insert cs;
        }
    }


    public static Boolean hasAccess(){
        String name = userinfo.getFirstName();
        Boolean hasAccess;
        if(name == 'dasfrog') {
            hasAccess = TRUE;
        }
        return hasAccess;
    }
}
