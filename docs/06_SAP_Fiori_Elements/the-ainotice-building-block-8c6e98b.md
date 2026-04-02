<!-- loio8c6e98b0ca914541abfb7763fe4af309 -->

# The `AINotice` Building Block

You must use the `AINotice` building block to display information related to AI features.

This allows users to make an informed decision regarding the handling of AI-generated data. This information is rendered either as a link if the aggregation `popoverContent` is defined, or as a text if there is no aggregation `popoverContent`.

> ### Note:  
> You must also provide documentation to users that explains your AI features and the process behind them to ensure transparency.

You can implement the `AINotice` building block as shown in the following sample code:

> ### Sample Code:  
> The `AINotice` Building Block
> 
> ```
> <macros:AINotice>
>     <VBox>
>         <Text text="This is my custom notice." />
>         <Text text="You can add any custom text or controls here." />
>     </VBox>
> </macros:AINotice>
> 
> ```

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - AI Notice - Overview](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/aiNotice/aiNoticeDefault).



## API

For information about the `AINotice` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.AINotice).

