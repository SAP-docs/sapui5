<!-- loio642dab291a7b47ec9d46c39b3c482aba -->

# Bootstrapping SAPUI5 Flexibility

You can define an alternative route from where to load SAPUI5 flexibility.



<a name="loio642dab291a7b47ec9d46c39b3c482aba__section_ch4_3bf_pkb"/>

## Location

If you want SAPUI5 flexibility to be loaded from the default location as part of the SAPUI5 bootstrap, you don't need to do anything.

If you'd like to disable SAPUI5 flexibility during SAPUI5 bootstrap, set the parameter value to an empty string.



<a name="loio642dab291a7b47ec9d46c39b3c482aba__section_dwl_nbf_pkb"/>

## Using Connectors

For various use cases, you can also define a list of connectors within `flexibilityServices`. These connectors are targeted at a specific use case and can be combined.

You provide the list of connectors as a string, because `flexibilityServices` is a string as well. Example: `flexibilityServices ='[{"connector": "SessionStorageConnector"}]'`.



### Configuring the Connectors for Layering

The connectors control the layers to which changes are written. Every connector has a default layering configuration, but you can limit this default by specifying certain layers. Example: As a result of the following string, only the SessionStorage connector is used for CUSTOMER layer content \(see [Layering Concept](layering-concept-9e63057.md)\):

`flexibilityServices ='[{"connector": "SessionStorageConnector", layers: ["CUSTOMER"]}]’`



### Connectors for Productive Usage


<table>
<tr>
<th valign="top">

Name

</th>
<th valign="top">

Supported Layers

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

`BtpServiceConnector`

</td>
<td valign="top">

`CUSTOMER`

</td>
<td valign="top">

Used to connect key user adaptation, shared views, **and end-user personalization** on SAP BTP, Cloud Foundry environment.

For more information, see [Developing Applications Running Standalone](https://help.sap.com/docs/UI5_FLEXIBILITY_KEY_USER/0f8b49c4dfc94bc0bda25a19aa93d5b2/7f1c8c8aa7e1487a9d79a0b001e8060b.html/?&version=Cloud#adding-sapui5-flexibility-services-to-the-sapui5-bootstrap).

</td>
</tr>
<tr>
<td valign="top">

`KeyUserConnector` 

</td>
<td valign="top">

`CUSTOMER`

</td>
<td valign="top">

> ### Caution:  
> .
> 
> If you develop apps running standalone on SAP BTP, Cloud Foundry environment, we strongly recommend that you replace the `KeyUserConnector` with the `BtpServiceConnector` in your SAPUI5 bootstrap.

Used to connect key user adaptation and shared views on SAP BTP, Cloud Foundry environment.

For more information, see [Developing Applications Running in the SAP Cloud Portal Service](https://help.sap.com/docs/UI5_FLEXIBILITY_KEY_USER/0f8b49c4dfc94bc0bda25a19aa93d5b2/55433c585c5a43ef96d9b8d4bc4bc464.html/?&version=Cloud#adding-sapui5-flexibility-services-to-the-sapui5-bootstrap).

</td>
</tr>
</table>



### Connectors Used by SAP - Not for Public Usage


<table>
<tr>
<th valign="top">

Name

</th>
<th valign="top">

Supported Layers

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

`LrepConnector`

</td>
<td valign="top">

`CUSTOMER, USER`

</td>
<td valign="top">

Default connector used to handle ABAP back-end systems as well as SAP BTP, Neo environment

</td>
</tr>
<tr>
<td valign="top">

`PersonalizationConnector`

</td>
<td valign="top">

`USER`

</td>
<td valign="top">

Used to connect personalization within an SAPUI5 application on SAP BTP, Cloud Foundry environment

</td>
</tr>
</table>



### Connectors for Testing and Demo Purposes

> ### Note:  
> To apply the mocked data correctly, you need a dependency to the `sap.ui.fl` library. You can establish this through dependencies within the used libraries or via the applications manifest.
> 
> Alternatively, add `sap.ui.fl` to the bootstrap of the test setup:
> 
> ```html
> data-sap-ui-libs = '…,sap.ui.fl'
> ```


<table>
<tr>
<th valign="top">

Name

</th>
<th valign="top">

Supported Layers

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

`LocalStorageConnector`

</td>
<td valign="top">

All

</td>
<td valign="top">

Used to store all entries within the local storage of the browser.

> ### Caution:  
> This storage is shared in case of parallel testing.



</td>
</tr>
<tr>
<td valign="top">

`SessionStorageConnector`

</td>
<td valign="top">

All

</td>
<td valign="top">

Used to store all entries within the session storage of the browser.

> ### Note:  
> This is the recommended connector for testing.

**Example:**

If you want to verify that a user can add additional files, the configuration should look like this:

```
data-sap-ui-flexibilityServices = '[{"connector": "SessionStorageConnector"}]'
```



</td>
</tr>
<tr>
<td valign="top">

`JsObjectConnector`

</td>
<td valign="top">

All

</td>
<td valign="top">

Used to store all entries within a JSON object persisting only for the session.

> ### Note:  
> This is the recommended connector for testing.



</td>
</tr>
<tr>
<td valign="top">

`ObjectPathConnector`

</td>
<td valign="top">

None

</td>
<td valign="top">

Used to load mocked back-end responses. It needs an additional parameter `path`, which specifies the absolute path to the mock file.

The mocked file contains the data as JSON with the following structure:

```json
{
    changes: [<list of changes as JSON>],
    compVariants: [<list of filters for comp controls as JSON>]
}

```

**Example:**

If you want to verify that a mocked back-end system provides data, the configuration should look like this:

```
data-sap-ui-flexibilityServices = '[{"connector": "ObjectPathConnector", "path": "/some/path/to/the/mocked/data.json"}]'
```



</td>
</tr>
</table>

**Example:**

If you want to verify both, that a mocked back-end system provides data and a user can add additional files, the configuration should look like this:

```
data-sap-ui-flexibilityServices = '[{"connector": "ObjectPathConnector", "path": "/some/path/to/the/mocked/data.json"},{"connector": "SessionStorageConnector"}]'
```

> ### Caution:  
> There are additional connectors for internal usage or super classes which must not be used within a configuration.



**Related Information**  


[Layering Concept](layering-concept-9e63057.md "SAPUI5 flexibility uses a consistent layering concept to store the UI changes as semantic delta information. This layering concept applies consistently to all users of SAPUI5 flexibility (end users, key users, and developers).")

[Step 2: Bootstrap](../03_Get-Started/step-2-bootstrap-fe12df2.md "Before we can do something with SAPUI5, we need to load and initialize it. This process of loading and initializing SAPUI5 is called bootstrapping. Once this bootstrapping is finished, we simply display an alert.")

[Bootstrapping: Loading and Initializing](bootstrapping-loading-and-initializing-a04b0d1.md "To use SAPUI5 features in your HTML page, you have to load and initialize the SAPUI5 library.")

