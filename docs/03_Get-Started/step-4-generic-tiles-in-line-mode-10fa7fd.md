<!-- loio10fa7fd7f0d54f6384b3b31c65ac78f5 -->

# Step 4: Generic Tiles in Line Mode

In this step, we will create two `GenericTiles` in line mode.



<a name="loio10fa7fd7f0d54f6384b3b31c65ac78f5__section_t2l_ydn_j1b"/>

## Preview

 ![](images/Step3_1_0add8de.png) 



<a name="loio10fa7fd7f0d54f6384b3b31c65ac78f5__section_ypz_g2n_j1b"/>

## Two GenericTiles in LineMode

There are tiles that you don't use as often as other tiles. To save space, you can reduce the tiles and only show the header and subheader. Use `LineMode` as the *mode* property of the `GenericTile`.

You can view and download this step in the Demo Kit at [Ice Cream Machine - Step 4 - Generic Tiles in Line Mode](https://ui5.sap.com/#/entity/sap.suite.ui.commons.tutorial.icecream/sample/sap.suite.ui.commons.tutorial.icecream.04).



### Startpage.view.xml

```xml

<mvc:View
    controllerName="sap.suite.ui.commons.demokit.tutorial.icecream.04.controller.Startpage"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns="sap.m"
    xmlns:layout="sap.ui.layout"
    xmlns:microchart="sap.suite.ui.microchart">
    <Page title="{i18n>title}">
        <layout:VerticalLayout class="sapUiResponsiveMargin">
            ...
            <Title
                titleStyle="H2"
                text="{i18n>startpageLinksGroupTitle}"
                class="sapUiTinyMarginBegin sapUiMediumMarginTop" />
            <layout:HorizontalLayout allowWrapping="true">
                <GenericTile
                    header="{i18n>startpageLineTile1Title}"
                    subheader="{i18n>startpageLineTile1SubTitle}"
                    mode="LineMode"
                    class="sapUiTinyMarginBegin" />
                <GenericTile
                    header="{i18n>startpageLineTile2Title}"
                    mode="LineMode"
                    class="sapUiTinyMarginBegin" />
            </layout:HorizontalLayout>
        </layout:VerticalLayout>
    </Page>
</mvc:View>
```

We need to create a new layout container for the tiles that we want to show. You do this to separate the two tile types and their alignment. These two tiles can be created in a similar way as the`GenericTiles`, except that the *mode* property must be set to `LineMode`.

**Parent topic:** [Ice Cream Machine](ice-cream-machine-e5b7f8a.md "In this tutorial, we will show you how to use SAPUI5 controls like Generic Tiles, Micro Charts, and Process Flow.")

**Next:** [Step 3: Launch Tile and Slide Tile](step-3-launch-tile-and-slide-tile-e1fc950.md "In this step, we will create a new Launch Tile (GenericTile with ImageContent) and a SlideTile.")

**Previous:** [Step 5: Navigating from the Start Page to Other Pages](step-5-navigating-from-the-start-page-to-other-pages-258d174.md "In this step, we will show how to set up navigation using the standard routing pattern.")

