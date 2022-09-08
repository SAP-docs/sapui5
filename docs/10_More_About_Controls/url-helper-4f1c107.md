<!-- loio4f1c1075d88c41a5904389fa12b28f6b -->

# URL Helper

With `sap.m.URLHelper` you can easily trigger native mobile phone applications such as e-mail, telephone, and text messages.

You can set predefined values for the application so that a user does not need to enter this information themselves. When personal information is displayed, for example phone numbers and e-mail addresses, you can initiate a phone call or e-mail with just one tap.

The URLHelper API contains the following triggers for telephone, texts, and e-mail applications:

-   Trigger telephone application

    ```js
    
    sap.m.URLHelper.triggerTel( [Telephone Number] ); //Telephone number is optional
    ```

-   Trigger text messaging application

    ```js
    
    sap.m.URLHelper.triggerSms( [Telephone Number] ); //Telephone number is optional
    ```

-   Trigger e-mail application

    ```js
    
    sap.m.URLHelper.triggerEmail( [Destination Email], [Subject], [Default Message Text], [CC], [BCC] ); 
    // All parameters are optional
    ```

-   Redirect To custom URL

    ```js
    
    sap.m.URLHelper.redirect( URL ); 
    //URL is required and can be used for custom protocols (e.g http, ftp, ...)
    ```


> ### Note:  
> -   iOS does **not** trigger a phone call if the phone number contains "\*" or "\#".
> 
> -   You can add multiple recipients for a text message in Android phones by separating recipient numbers with ";".
> 
> -   According to RFC 2368 you can set multiple subscribers for the e-mail application by separating each with ","; however, this still depends on the application. Outlook, for example, uses ";" as separator.
> 
> -   You can use the `sap.m.URLHelper.redirect` method to use custom URL schemes:
> 
>     -   For iOS: [ http://developer.apple.com/library/safari/\#featuredarticles/iPhoneURLScheme\_Reference/Introduction/Introduction.html](http://developer.apple.com/library/safari/#featuredarticles/iPhoneURLScheme_Reference/Introduction/Introduction.html)
> 
>     -   For Android: [ http://developer.android.com/guide/appendix/g-app-intents.html](http://developer.android.com/guide/appendix/g-app-intents.html) 
> 
>     -   URI schemes: [ http://en.wikipedia.org/wiki/URI\_scheme](http://en.wikipedia.org/wiki/URI_scheme)
> 
> 
> -   If you just want to get a URI back without a redirect, you can use normalize methods which have the same parameter as trigger methods, for example:
> 
>     ```js
>     
>     /*
>      * These methods do not redirect but return URI scheme back as string.
>      * All parameters are optional
>      */
>     sap.m.URLHelper.normalizeTel( [Telephone Number] );
>     sap.m.URLHelper.normalizeSms( [Telephone Number] );
>     sap.m.URLHelper.normalizeEmail( [Destination Email], [Subject], [Default Message Text], [CC], [BCC] );  
>     ```

-   **[Examples for Triggering Telephone, Text and E-Mail Applications](examples-for-triggering-telephone-text-and-e-mail-applications-021ac23.md "Code samples for triggering telephone, text and e-mail applications.")**  
Code samples for triggering telephone, text and e-mail applications.

**Related Information**  


[API Reference: `sap.m.URLHelper`](https://ui5.sap.com/#/api/sap.m.URLHelper)

