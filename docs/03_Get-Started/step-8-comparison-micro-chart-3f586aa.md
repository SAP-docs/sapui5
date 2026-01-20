<!-- loio3f586aa9a89443888e60831d0732e891 -->

# Step 8: Comparison Micro Chart

In this step, you will create the `ComparisonMicroChart` on the *Production Process* page.



<a name="loio3f586aa9a89443888e60831d0732e891__section_ixf_1ml_l1b"/>

## Preview

![](images/Step_8_Comparison_Micro_Chart_0f8e08a.png)



<a name="loio3f586aa9a89443888e60831d0732e891__section_xkp_2ml_l1b"/>

## `ComparisonMicroChart`

You can include information of your suppliers' delivery times to compare them. You can use the `ComparisonMicroChart` to visualize the comparison of several values.



### `ProcessFlow.view.xml`

You can view and download this step in the Demo Kit from the [Ice Cream Machine - Step 8 - Comparison Micro Chart](https://ui5.sap.com/#/entity/sap.suite.ui.commons.tutorial.icecream/sample/sap.suite.ui.commons.tutorial.icecream.08).

```xml
<mvc:View
    ...
                <m:headerContainer>
                    <m:HeaderContainer
                        scrollStep="200"
                        scrollTime="500"
                        showDividers="true"
                        class="sapUiSmallMargin">
                        ...
                        <m:FlexBox
                            width="16rem"
                            height="10rem"
                            alignItems="Center"
                            justifyContent="Center"
                            direction="Column">
                            <m:Title
                                text="{
                                    parts: [
                                    'i18n>processFlowChartsDeliveryTimeComparison',
                                    'suppliers>/timeMeasure'
                                ],
                                formatter: '.formatMessage'
                                }"
                                class="sapUiSmallMargin"/>
                            <m:FlexBox width="16rem" height="6rem" renderType="Bare">
                                <mc:ComparisonMicroChart
                                    size="Responsive"
                                    press=".press"
                                    data="{suppliers>/Suppliers}">
                                    <mc:data>
                                        <mc:ComparisonMicroChartData
                                            title="{suppliers>id}"
                                            value="{suppliers>deliveryTime}"
                                            displayValue="{suppliers>deliveryTime}"
                                            color="{suppliers>deliveryTimeSemantics}"/>
                                    </mc:data>
                                </mc:ComparisonMicroChart>
                            </m:FlexBox>
                        </m:FlexBox>

                    </m:HeaderContainer>
                </m:headerContainer>
            ...
</mvc:View>

```

The structure that surrounds the `ComparisonMicroChart` is similar to the structure you used for the `RadialMicroChart`. The chart dimensions are inherited from `FlexBox` as the `isResponsible` property is used. The internal structure is different since the `ComparisonMicroChart` contains an aggregation of the `ComparisonMicroChartData` items. Each item is responsible for a particular line in the chart.

