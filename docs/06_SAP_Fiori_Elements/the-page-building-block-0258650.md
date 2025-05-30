<!-- loio025865041ec64c6daf58034d78f11310 -->

# The `Page` Building Block

You can use the `Page` building block to create a new flexible programming model page with a layout similar to the object page.

You can configure the content of the building block as per your requirements. For example, in the following sample code, two panels containing a text element have been configured.

> ### Sample Code:  
> ```
> <macros:Page title="Page title" description="Page description" avatarSrc="sap-icon://page">
>     <Panel headerText="First content" id="firstContent">
>         <Text text="This is the first content of the page" />
>     </Panel>
>     <Panel headerText="Second content" id="secondContent">
>         <Text text="This is the second content, it is properly padded" />
>     </Panel>
> </macros:Page>
> 
> ```

Check out our live example in the flexible programming model explorer at [Page](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/page/pageDefault).



<a name="loio025865041ec64c6daf58034d78f11310__section_z2b_p5v_2fc"/>

## API

For information about the `Page` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.Page).

