<!-- loio9feb96da02c2429bb1afcf6534d77c79 -->

# Compatibility Version Information

Compatibility version flags allow applications to react to incompatible changes in SAPUI5.

> ### Caution:  
> The concept of compatibility versions has been abandoned as of version 1.28. Therefore, there will be no new compatibility version flags in the future. If you start building a new application please set `data-sap-ui-compatVersion="edge"` on your SAPUI5 bootstrap tag.

As described in the compatibility rules, changes to SAPUI5 features are compatible, see [Compatibility Rules](../02_Read-Me-First/compatibility-rules-91f0873.md). In some cases, however, it may make sense to change the behavior of a feature, for example, to change the default values or to use an optimized implementation and these changes may lead to incompatibilities.

> ### Note:  
> We recommend to adapt to new feature versions as soon as possible.

The compatibility version configuration works as follows:

-   A version flag is introduced if a feature change is incompatible.
-   The version flag has to be defined in the SAPUI5 bootstrap tag either globally \(`data-sap-ui-compatVersion` or individually for each feature \(for example `data-sap-ui-compatVersion-xyz`\). Example with `compatVersion "1.18"`

    ```html
    <script id="sap-ui-bootstrap" 
            type="text/javascript"
            src="resources/sap-ui-core.js"
            data-sap-ui-theme="sap_horizon"
            data-sap-ui-libs="sap.m"
            data-sap-ui-compatVersion="1.18"
            data-sap-ui-compatVersion-xyz="1.16"
            >
    </script> 
    ```

-   If no version is defined, the default behavior of the feature applies.
-   If an explicit version is specified, the behavior of the specified version is applied.
-   If a version edge is specified, the newest behavior of the feature is applied.
-   A fallback mechanism is implemented. The following table is an example of possible configuration options for feature "xyz":


    <table>
    <tr>
    <th valign="top">

    data-sap-ui-compatVersion
    
    </th>
    <th valign="top">

    data-sap-ui-compatVersion-xyz
    
    </th>
    <th valign="top">

    Default feature xyz
    
    </th>
    <th valign="top">

    Resulting compatibility version
    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    \--
    
    </td>
    <td valign="top">
    
    \--
    
    </td>
    <td valign="top">
    
    1.14
    
    </td>
    <td valign="top">
    
    1.14
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    1.16
    
    </td>
    <td valign="top">
    
    \--
    
    </td>
    <td valign="top">
    
    1.14
    
    </td>
    <td valign="top">
    
    1.16
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    \--
    
    </td>
    <td valign="top">
    
    1.16
    
    </td>
    <td valign="top">
    
    1.14
    
    </td>
    <td valign="top">
    
    1.16
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    1.18
    
    </td>
    <td valign="top">
    
    1.16
    
    </td>
    <td valign="top">
    
    1.14
    
    </td>
    <td valign="top">
    
    1.16
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    edge
    
    </td>
    <td valign="top">
    
    ..
    
    </td>
    <td valign="top">
    
    1.14
    
    </td>
    <td valign="top">
    
    1.18
    
    </td>
    </tr>
    </table>
    

SAPUI5 supports the following compatibility version flags:


<table>
<tr>
<th valign="top">

Flag

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

`data-sap-ui-compatVersion-sapMeTabContainer`

</td>
<td valign="top">

The `TabContainer` was deprecated in 1.15. When the compatibility version is 1.16 or higher, an error is logged to the console indicating that `sap.m.IconTabBar` should be used instead.

Default value: 1.14

</td>
</tr>
<tr>
<td valign="top">

`data-sap-ui-compatVersion-sapMeProgessIndicator`

</td>
<td valign="top">

\--

</td>
</tr>
<tr>
<td valign="top">

`data-sap-ui-compatVersion-sapMGrowingList`

</td>
<td valign="top">

\--

</td>
</tr>
<tr>
<td valign="top">

`data-sap-ui-compatVersion-sapMListAsTable`

</td>
<td valign="top">

\--

</td>
</tr>
<tr>
<td valign="top">

`data-sap-ui-compatVersion-sapMDialogWithPadding`

</td>
<td valign="top">

By default, the content area of `Dialog` had paddings. To make the padding consistent with other popups, the padding is removed for compatibility versions 1.16 or higher. If the padding is still needed inside the content area of `Dialog`, you can use the [Container Content Padding CSS Classes](using-container-content-padding-css-classes-c71f6df.md).

Default value: 1.14

</td>
</tr>
<tr>
<td valign="top">

`data-sap-ui-bindingSyntax`

</td>
<td valign="top">

This configuration parameter defines whether the simple or the complex binding syntax is used. The parameter only affects bindings that are defined as strings, for example in the constructor of a control, or when specifying a binding in a declarative view, such as an XML view.

For versions lower than 1.28, the default value is `default` which only has very limited features. As of version 1.28, the default is `complex`.

</td>
</tr>
</table>

**Related Information**  


[Compatibility Rules](../02_Read-Me-First/compatibility-rules-91f0873.md "The following sections describe what SAP can change in major, minor, and patch releases. Always consider these rules when developing apps, features, or controls with or for SAPUI5.")

