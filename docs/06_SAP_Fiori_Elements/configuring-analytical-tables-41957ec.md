<!-- loio41957ec8c9f6405291dba24e1e1110c1 -->

# Configuring Analytical Tables

Analytical tables enable working with aggregated data through automatic calculations, dynamic grouping, and optimized performance in SAP Fiori elements for OData V4. Use them to analyze large datasets efficiently, such as displaying sales totals grouped by region.

Analytical tables are specialized tables designed for working with aggregated data. Unlike standard responsive or grid tables, analytical tables support the following:

-   Data aggregation: Automatically calculate sums, averages, and other aggregate functions for numerical properties.

-   Dynamic grouping: Organize rows into hierarchical groups based on specific data fields.

-   Optimized performance: Request only the data needed for the current view, reducing back-end load.

-   Flexible analysis: Allow users to reorganize and filter data according to their analytical needs.


For example, in a customer management application, you can use an analytical table to display total sales amounts grouped by market segment and country, enabling users to quickly identify high-performing regions without requiring custom development.

Before configuring an analytical table, ensure that your app meets the following prerequisites:

-   Your OData service must support the `@Aggregation.ApplySupported` annotation. For more information, see [Annotating a Service as an Analytical Service](annotating-a-service-as-an-analytical-service-b51afc2.md).

-   Analytical tables require data that is groupable, aggregatable, or both. For more information, see [Defining Groupable Properties](defining-groupable-properties-9062f11.md) and [Defining Aggregatable Properties](defining-aggregatable-properties-564ac6e.md).


**Related Information**  


[Enabling and Disabling the Search Field in Analytical Tables and Tree Tables](enabling-and-disabling-the-search-field-in-analytical-tables-and-tree-tables-9b901ae.md "The search functionality filters large datasets in analytical tables and tree tables by text input across multiple properties. The Search field is enabled by default or requires the search transformation in SAP Fiori elements for OData V4.")

[Aggregation Based on Visible Properties](aggregation-based-on-visible-properties-d230e37.md "Aggregation based on visible properties optimizes analytical table performance by limiting data aggregation to only displayed columns in SAP Fiori elements for OData V4. Use this feature with large datasets to reduce unnecessary back-end requests for key properties that aren't relevant to the current view.")

[Setting Transformation Filters on Aggregate Controls](setting-transformation-filters-on-aggregate-controls-7c6a211.md "Transformation filters enable filtering capabilities for aggregate controls like analytical tables in SAP Fiori elements for OData V4.")

[Using an Analytical Table or Tree Table with a Draft-Enabled Service](using-an-analytical-table-or-tree-table-with-a-draft-enabled-service-8ad8d79.md "Analytical tables and tree tables can be used with draft-enabled services in SAP Fiori elements for OData V4, displaying only active entities with draft indicators. This configuration has specific behaviors for creating and editing records, with some restrictions on object pages and the flexible column layout.")

