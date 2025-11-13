<!-- loio10fa7fd7f0d54f6384b3b31c65ac78f5 -->

# Step 4: Generic Tiles in Line Mode

In this step, we will create two `GenericTiles` in line mode.



<a name="loio10fa7fd7f0d54f6384b3b31c65ac78f5__section_t2l_ydn_j1b"/>

## Preview

![](images/Step4_1_0add8de.png)



<a name="loio10fa7fd7f0d54f6384b3b31c65ac78f5__section_ypz_g2n_j1b"/>

## Two `GenericTiles` in `LineMode`

Certain tiles are not used often. To save space, you can reduce the number of tiles and only show the header and subheader. Use `LineMode` as the `mode` property of the `GenericTile`.

You can view and download this step in the Demo Kit from the [Ice Cream Machine - Step 4 - Generic Tiles in Line Mode](https://ui5.sap.com/#/entity/sap.suite.ui.commons.tutorial.icecream/sample/sap.suite.ui.commons.tutorial.icecream.04).



### `Startpage.view.xml`

```xml
<mvc:View
    controllerName="sap.suite.ui.commons.demokit.tutorial.icecream.04.controller.Startpage"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns="sap.m"
    xmlns:layout="sap.ui.layout"
    xmlns:microchart="sap.suite.ui.microchart">
    <Page title="{i18n>title}" titleAlignment="Center">
        <layout:VerticalLayout class="sapUiResponsiveMargin">
            ...
            <Title
                titleStyle="H2"
                text="{i18n>startpageLinksGroupTitle}"
                class="sapUiTinyMarginBegin sapUiMediumMarginTop"/>
            <layout:HorizontalLayout allowWrapping="true">
                <GenericTile
                    header="{i18n>startpageLineTile1Title}"
                    subheader="{i18n>startpageLineTile1SubTitle}"
                    mode="LineMode"
                    class="sapUiTinyMarginBegin"/>
                <GenericTile
                    header="{i18n>startpageLineTile2Title}"
                    mode="LineMode"
                    class="sapUiTinyMarginBegin"/>
            </layout:HorizontalLayout>
        </layout:VerticalLayout>
    </Page>
</mvc:View>

```

Create a new layout container for the tiles that you want to show. You do this to separate the two tile types and their alignment. These two tiles can be created in a similar way as the `GenericTiles`, except that the `mode` property must be set to `LineMode`.

