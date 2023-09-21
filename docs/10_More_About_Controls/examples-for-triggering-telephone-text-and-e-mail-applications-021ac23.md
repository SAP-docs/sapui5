<!-- loio021ac23c547c48f087adfef85aca8413 -->

# Examples for Triggering Telephone, Text and E-Mail Applications

Code samples for triggering telephone, text and e-mail applications.

Sample data used in the examples:

```js

var person = {
    name : "John Smith",
    tel : "+49 62227
          747474",
    sms : "+49 173 123456",
    email : "john.smith@sap.com",
    website : "http://www.sap.com"
};
```

You can trigger an external application at any time, but it is usually triggered as a reaction to a UI control throwing an event. The next sections illustrate some of the most typical use cases.



<a name="loio021ac23c547c48f087adfef85aca8413__section_N10021_N10011_N10001"/>

## Click Button To Trigger Phone Call

The following button can be used to place a call.

```js

new sap.m.Button({
    text : person.tel,
    icon : "images/action.png", /* Depends where your images are located */
    press : function() {
        sap.m.URLHelper.triggerTel(person.tel);
    }
});
```



<a name="loio021ac23c547c48f087adfef85aca8413__section_N10038_N10011_N10001"/>

## Click Image To Trigger E-mail

The following code snippet gives an example for triggering an e-mail application. You can also set the subject and message of the e-mail application:

```js

new sap.m.Image({
    src : "images/website.png", /* Depends where your images are located */
    press : function() {
        sap.m.URLHelper.triggerEmail(person.website, "Info", "Dear " + person.name + ",");
    }
});
```



<a name="loio021ac23c547c48f087adfef85aca8413__section_N1004A_N10011_N10001"/>

## Inside List

`DisplayListItem` with active feedback is the most popular use case for the following example.

```js

new sap.m.DisplayListItem({
    label : "Sms",
    value : "( " + person.sms + " )",
    type : "Active",
    press : function() {
        sap.m.URLHelper.triggerSms(person.sms);
    }
});
```

To use any other control inside the list, use `InputListItem`:

```js

new sap.m.InputListItem({
    label : "Website",
    content : new sap.m.Button({
        text : person.website,
        press : function() {
            sap.m.URLHelper.redirect(person.website);
        }
    })
});
```

