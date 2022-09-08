<!-- loio329a029f39e249a1bf89e3ffc006c8e1 -->

# Labeling and Tooltips

The following guidelines help you properly label your controls in order to have good accessibility.



<a name="loio329a029f39e249a1bf89e3ffc006c8e1__section_ujj_dpb_t2b"/>

## General Considerations

Top 5 things to do for better screen reader support for labels

-   Label all elements and element containers correctly and completely.

-   Provide text alternatives for visual labels

    Use tooltips only in rare cases. They should not be used as a replacement for a label. For more information, see [Using Tooltips](https://experience.sap.com/fiori-design-web/using-tooltips/) in the Fiori Guidelines.

-   Use the `alt` attribute for images

-   Describe controls and give additional information as part of the UI

    Use `ariaDescribedBy` where needed.

-   Identify regions correctly according to their purpose.

    Use containers with a correct meaning and Landmark roles.

-   Provide accessible alternatives and describe how to use them \(for example in the documentation of the application\).




<a name="loio329a029f39e249a1bf89e3ffc006c8e1__section_ujb_dpb_t2b"/>

## Rules and Guidelines for Labeling and Tooltips

-   Non-decorative `sap.m.Image`/`sap.ui.core.Icon` should provide a meaningful alternative explanation in the `alt` property.

    > ### Example:  
    > ```
    > <Image id="image_not_decorative" src="IMAGE_PATH" alt="This is an image showing an elephant" decorative=false>
    > ```

-   Interactive `sap.m.Image`/`sap.ui.core.Icon` \(that has a press handler\) should not be decorative.

    > ### Example:  
    > ```
    > <Image src="IMAGE_PATH" alt="This is an image with a press handler" decorative=false press=onImagePress>
    > ```

-   Icon-only `sap.m.Button` should have a tooltip.

    > ### Example:  
    > ```
    > <Button icon="sap-icon://action" press="onPress" tooltip="Action Name" ariaLabelledBy="actionButtonLabel"/>
    > ```

-   Button that has a text, should **not** have a tooltip.

    > ### Example:  
    > ```
    > <Button text="Default" press="onPress" />
    > ```

-   Labels should **not** have a tooltip, as it could lead to ambiguity. For more information, see [Firoi Guidelines for Using Tooltips](https://experience.sap.com/fiori-design-web/using-tooltips/).

-   Input elements should have labels. Every input needs a label for its purpose. Even if the app doesn't include one, you can set one in `sap.ui.core.InvisibleText`. The placeholder text should not be used as a label.

-   Tables should have titles. Tables with hidden titles or in containers with titles \(for example,single tables in tab strip panels\) should be labeled with `sap.ui.core.InvisibleText` in combination with `ariaLabelledBy`.

-   `ariaLabelledBy` and `ariaDescribedBy` associations should point to existing DOM elements.

    > ### Example:  
    > ```
    >  <Page title="Page">
    > 	<content>   
    > 		<Button text="Home" ariaLabelledBy="invisibleId"/>   
    > 		<core:InvisibleText id="invisibleId" text="I am a hidden label"/>  
    > 	</content> 
    > </Page>
    > 
    > ```

-   Labels should be connected with the labelled elements via `labelfor`.

    > ### Example:  
    > ```
    > <Label text="Name" labelFor="I1"> 
    > <Input id="I1">
    > 
    > ```


> ### Note:  
> If you want to enlarge the size of the standard tooltips, you need to change the system font size. Tooltips are rendered by the browser using native window API and thus their size cannot be influenced by the SAPUI5 framework.

