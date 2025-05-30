<!-- loiof861f7f72c2c44a595cf01083f6d13df -->

# PDF Export

The PDF export allows you to export data to a Portable Document Format \(\*.pdf\).



<a name="loiof861f7f72c2c44a595cf01083f6d13df__section_pyj_jkx_tbc"/>

## Overview

You can export any type of content that has a tabular format, such as tables or lists.

> ### Note:  
> For more information, see the SAP Note [3198506](https://me.sap.com/notes/3198506).

> ### Tip:  
> If the export takes more than 5 minutes, we recommend canceling the process and apply additional filter settings to reduce the amount of data that has to be exported.



<a name="loiof861f7f72c2c44a595cf01083f6d13df__section_vyt_glx_tbc"/>

## Prerequisites

The PDF export is not available in all systems. It is automatically available in systems where the application-specific OData service provides the `com.sap.vocabularies.PDF.v1.Features` annotation. This annotation determines the following:

-   If the PDF export is available

-   Which features are supported by the ABAP back-end system


The PDF export only works with a **server-side** export, since this export is required to support digital signatures.



<a name="loiof861f7f72c2c44a595cf01083f6d13df__section_xh1_2d2_5bc"/>

## Details



### Configuration

You can make the following settings:

-   **Size limit**: As defined by the `com.sap.vocabularies.PDF.v1.Features` annotation, 20,000 rows can be exported \(default value\).

    The size is limited for performance and stability reasons with regards to the ABAP back-end system where the server-side processing takes place.

-   **Filter settings**: The user has to make suitable filter settings before the data is exported.




### Additional Settings on Export User Interface

In addition to the regular `Export` dialog, the user can use the `Export As` dialog in the `SmartTable` or `Table` \(`sap.ui.mdc`\) control, which can be selected from a dropdown list next to the *Export Table* button, to define additional settings for the export.



### Formatting

Some formatting is specific to the PDF export, such as the following:

-   Split cells with multiple values

    This setting defines whether to show cells with more than one OData property in separate columns. For the PDF export, this setting is mandatory. That's why this option is not shown in the dialog for the PDF export but applied automatically.

    > ### Note:  
    > Only numeric values, such as a unit or a currency, are kept within one cell, which is done in the back-end system.

-   Duplicate columns

    The PDF export can't handle duplicate columns. For example, if several columns contain an amount and its related currency code, these columns are split into separate columns, and the currency code column is referenced multiple times. Those duplicates are eliminated, and only the first occurrence of this column becomes visible in the exported PDF file.

-   Column layout

    Since the width of each column is determined by the longest entry in any of its cells, this can result in unusual column layouts if one cell entry in a particular column is larger than the others. The column layout automatically adds as many columns as possible to one page. The last column automatically receives the remaining horizontal space. For PDF files, the layout strategy is "column first": All columns are distributed over the first couple of pages before any additional rows are displayed.

    > ### Tip:  
    > Depending on the back-end system used, the layout strategy for PDF files can result in unusual column layouts. In some back-end systems, the wrapping is not automatically adjusted to make the columns fit on one page. If a narrow column is then placed between two columns with longer texts, this can result in three pages with only one single column per page. In this case, we recommend to adjust the column order.




### Restrictions

The following restrictions apply:

-   The PDF export doesn't support paging.

-   The PDF export doesn't support grouping.


**Related Information**  


[API Reference: `sap.ui.export.ExportHandler`](https://ui5.sap.com/#/api/sap.ui.export.ExportHandler)

