<!-- loioa0143eee5f944f3b8f3b799b27f39a67 -->

# If You Only Use Default Change Handlers

Here's how to proceed if you didn't write any custom change handlers, but only use the default change handlers provided by SAP.

If you only use default change handlers, register your change handlers directly in the `library.js` file under `extensions > flChangeHandlers`.

> ### Sample Code:  
> library.js
> 
> ```
> ...
> extensions: {
>     flChangeHandlers: {
>         "sap.uxap.ObjectPageLayout": {
>             "moveElements": "default"
>         },
>         "sap.uxap.ObjectPageSection": {
>             "hideControl": "default",
>             "unhideControl": "default",
>             "stashControl": "default",
>             "unstashControl": "default"
>         }
>     }
> }
> ...
> ```

