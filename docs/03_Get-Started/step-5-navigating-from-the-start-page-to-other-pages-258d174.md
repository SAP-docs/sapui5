<!-- loio258d1745a0804f9abaffab5cea5beb98 -->

# Step 5: Navigating from the Start Page to Other Pages

In this step, we show how to set up navigation using the standard routing pattern.

First, create three empty views and the corresponding controllers:

-   `ProcessFlow.view.xml`

-   `ChartContainer.view.xml`

-   `Reviews.view.xml`






### `Startpage.view.xml`

You can view and download this step in the Demo Kit from the [Ice Cream Machine - Step 5 - Navigating from the Start Page to Other Pages](https://ui5.sap.com/#/entity/sap.suite.ui.commons.tutorial.icecream/sample/sap.suite.ui.commons.tutorial.icecream.05).

```xml
<mvc:View
    controllerName="sap.suite.ui.commons.demokit.tutorial.icecream.12.controller.Startpage"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns="sap.m"
    xmlns:layout="sap.ui.layout"
    xmlns:microchart="sap.suite.ui.microchart">
    <Page title="{i18n>title}" titleAlignment="Center">
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

Add the <code><i>press</i></code> event to the `GenericTiles` with the *Production Process*, *User Reviews*, and *Quality Control* titles. This is to trigger navigation with a function. The press event function is implemented in the controller file.





### `Startpage.controller.js`

```js
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/format/NumberFormat",
    "sap/base/strings/formatMessage"
], function (Controller, JSONModel, NumberFormat, formatMessage) {
    "use strict";

    return Controller.extend("sap.suite.ui.commons.demokit.tutorial.icecream.05.controller.Startpage", {
        ...
        onNavToProcessFlow: function () {
            this.getRouter().navTo("processFlow");
        },

        onNavToChartContainer: function () {
            this.getRouter().navTo("chartContainer");
        },

        onNavToReviews: function () {
            this.getRouter().navTo("reviews");
        },

        getRouter: function () {
            return this.getOwnerComponent().getRouter();
        }
    });
});

```

-   `getRouter`: Returns the router instance of the component.

-   `onNavToProcessFlow`: Called when the user clicks on the first tile. It triggers the navigation to the view with the `ProcessFlow`.

-   `onNavToChartContainer`: Called when the user clicks on the fourth tile. It triggers the navigation to the view with the `ChartContainer`.

-   `onNavToReviews`: Called when the user clicks the third tile. It triggers the navigation to the view with the `Timeline`.


