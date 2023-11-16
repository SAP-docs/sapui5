<!-- loio493a15aa978d4fe9a67ea9407166eb01 -->

# Is Your Application Ready for Asynchronous Loading?

Find a collection of information that helps you to find out if your application is ready for asynchronous loading.

Applications benefit from the configuration of the SAPUI5 module loader to work asynchronously. However, if an application or library is not yet fully compatible with asynchronous loading, you may encounter issues. To avoid running into these issues, the following list provides information that helps you to find out whether your application needs to be adapted to enable asynchronous loading. The list is not exhaustive, but points to additional information and should give you a good start in getting your applications ready for asynchronous loading.

-   For asynchronous loading, your application modules have to facilitate the concept for defining and handling of modules in SAPUI5 that is aligned with the asynchronous module definition \(AMD\) standard. For an overview, see [Best Practices for Loading Modules](../04_Essentials/best-practices-for-loading-modules-00737d6.md).

-   Existing applications may still use synchronous variants of factory methods. To make your application ready for asynchronous loading, you need to use asynchronous variants of factory methods instead. For information how you can replace the synchronous variants with asynchronous variants, see [Legacy Factories Replacement](../04_Essentials/legacy-factories-replacement-491bd9c.md).

-   The global access to legacy APIs triggers a compatibility layer to load such modules synchronously and needs to be replaced to enable your application for asynchronous loading. For information how you replace the global access, see [Legacy jQuery.sap Replacement](../04_Essentials/legacy-jquery-sap-replacement-a075ed8.md).

-   The Support Assistant also helps you to identify issues in your application, especially issues related to synchronous or asynchronous loading. For information about the Support Assistant, see [Support Assistant](../04_Essentials/support-assistant-57ccd7d.md).

-   If your application relies on certain points in time, you may run into runtime issues when you switch from synchronous to asynchronous module loading and the points in time on which your application relies are different due to this change. Here are two examples of such issues:

    An event gets triggered before potential listeners had the chance to attach themselves. Whereas this may have worked for synchronous loading where the timing of module loading and initializing is different, this causes issues for asynchronous loading. To resolve this and to ensure that all modules are properly loaded and exectued, all necessary module dependencies for the module that actually triggers the event need to be handled by `sap.ui.require` or `sap.ui.define`.

    A controller listens on the `EventBus` for a certain event that is triggered by another controller. Depending on the loading time of the corresponding views, the `init` controller methods may be called at a different point in time. For information how to resolve this, see [Best Practices for Loading Modules](../04_Essentials/best-practices-for-loading-modules-00737d6.md).

-   Issues with asynchronous loading can also occur if your application uses XML views that are configured to be loaded asynchronously via the `manifest` property, for example for the root view `sap.ui5/rootView/async=true`. To detect such issues, we recommend to do extensive \(automatic\) testing to ensure the application continues to work as expected.

-   If your application uses expression bindings, keep in mind that `sap.ui.base.ExpressionParser` loads some resources synchronously. To avoid this, make sure to load them in advance, for example by declaring them in the `sap.ui.define` statement in your application code that runs before the expression bindings are evaluated. The following expression bindings are affected:


    <table>
    <tr>
    <th valign="top" align="center">

    Expression Binding\(s\)
    
    </th>
    <th valign="top" align="center">

    Resource to be Preloaded
    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    "odata.compare", e.g. `value="{=odata.compare(2,3)}"` 
    
    </td>
    <td valign="top">
    
    `sap.ui.model.odata.v4.ODataUtils`
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    "odata.uriEncode", e.g. `value="{=odata.uriEncode('foo', 'Edm.String')}"` 
    
    </td>
    <td valign="top">
    
    `sap.ui.model.odata.ODataUtils`
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    "odata.fillUriTemplate", e.g. `value="{=odata.fillUriTemplate('http://foo/{t},{m}', {'t': ${/mail}, 'm': ${/tel}})}"` 
    
    </td>
    <td valign="top">
    
    `sap.ui.thirdparty.URITemplate`
    
    </td>
    </tr>
    </table>
    
    For more information on the preload of dependencies, see [Modules and Dependencies](../04_Essentials/modules-and-dependencies-91f23a7.md).




<a name="loio493a15aa978d4fe9a67ea9407166eb01__section_jxt_wj5_zfb"/>

## Known Incompatibilities

The `sap.viz` library uses another module loader in addition to the SAPUI5 module loader in some scenarios. In combination with the `` configuration parameter, this currently leads to issues and may break your application.

