<!-- loio258d1745a0804f9abaffab5cea5beb98 -->

# Step 5: Navigating from the Start Page to Other Pages

In this step, we will show how to set up navigation using the standard routing pattern.

First, please create three empty views and the corresponding controllers:

-   `ProcessFlow.view.xml`

-   `ChartContainer.view.xml`

-   `Reviews.view.xml`






### Startpage.view.xml

You can view and download this step in the Demo Kit at [Ice Cream Machine - Step 5 - Navigating from the Start Page to Other Pages](https://ui5.sap.com/#/entity/sap.suite.ui.commons.tutorial.icecream/sample/sap.suite.ui.commons.tutorial.icecream.05).

```xml

<mvc:View
    ...
    <Page title="{i18n>title}">
        <layout:VerticalLayout class="sapUiResponsiveMargin">
            ...
            <layout:HorizontalLayout allowWrapping="true">
                <GenericTile
                    class="sapUiTinyMarginBegin sapUiTinyMarginTop"
                    header="{i18n>startpagePFTileTitle}"
                    subheader="{i18n>startpagePFTileSubTitle}"
                    press=".onNavToProcessFlow">                    
                    <tileContent>
                        ...
                    </tileContent>
                </GenericTile>
                    ...
                <GenericTile
                    class="sapUiTinyMarginBegin sapUiTinyMarginTop"
                    header="{i18n>startpageUserReviewsTileTitle}"
                    press=".onNavToReviews">
                    <tileContent>
                        ...
                    </tileContent>
                </GenericTile>
                <GenericTile
                    class="sapUiTinyMarginBegin sapUiTinyMarginTop"
                    header="{i18n>startpageTestResultsTileTitle}"
                    subheader="{i18n>startpageTestResultsTileSubTitle}"
                    press=".onNavToChartContainer">                   
                    <tileContent>
                        ...
                    </tileContent>
                </GenericTile>
                ...
            </layout:HorizontalLayout>
            ...
        </layout:VerticalLayout>
    </Page>
</mvc:View>
```

We will add the *press* event to the `GenericTiles` with the *Production Process*, *User Reviews*, and *Quality Control* titles. This is to trigger navigation with a function. The press event function will be implemented in the controller file.





### Startpage.controller.js

```js

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/format/NumberFormat",
    "sap/base/strings/formatMessage"
], function(Controller, JSONModel, NumberFormat) {
    "use strict";

    return Controller.extend("sap.suite.ui.commons.demokit.tutorial.icecream.05.controller.Startpage", {
        ...
        onNavToProcessFlow: function() {
            this.getRouter().navTo("processFlow");
        },

        onNavToChartContainer: function() {
            this.getRouter().navTo("chartContainer");
        },
        onNavToReviews: function() {    
            this.getRouter().navTo("reviews");
        },
    
        getRouter: function() {
            return this.getOwnerComponent().getRouter();
        }
});
```

`getRouter` returns the router instance of the component.

`onNavToProcessFlow` is called when the user clicks on the first tile. It triggers the navigation to the view with the `ProcessFlow`.

`onNavToChartContainer` is called when the user clicks on the fourth tile. It triggers the navigation to the view with the `ChartContainer`.

`onNavToReviews` is called when the user clicks the third tile. It triggers the navigation to the view with the `Timeline`.

**Parent topic:** [Ice Cream Machine](ice-cream-machine-e5b7f8a.md "In this tutorial, we will show you how to use SAPUI5 controls like Generic Tiles, Micro Charts, and Process Flow.")

**Next:** [Step 4: Generic Tiles in Line Mode](step-4-generic-tiles-in-line-mode-10fa7fd.md "In this step, we will create two GenericTiles in line mode.")

**Previous:** [Step 6: Chart Container](step-6-chart-container-9847648.md "In this step, we will use the ChartContainer control to display information in a detailed view.")

