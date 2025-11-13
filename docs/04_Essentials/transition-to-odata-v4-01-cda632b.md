<!-- loiocda632b01c1e4a988ccecab759d19380 -->

# Transition to OData V4.01

OData Version 4.01 comes with many new features; for details, see [What's New in OData Version 4.01](https://docs.oasis-open.org/odata/new-in-odata/v4.01/new-in-odata-v4.01.html). Once 4.01 will be supported by SAPUI5's `v4.ODataModel`, you'll need to consider various aspects. You can already start preparing your application for this transition.

While [2.7 Improved: Case-Insensitive System Query Options without $ prefix](https://docs.oasis-open.org/odata/new-in-odata/v4.01/cn04/new-in-odata-v4.01-cn04.html#sec_ImprovedCaseInsensitiveSystemQueryOp) may offer convenience for handwritten requests, it's a challenge for `v4.ODataModel`'s handling of system query options. Features like auto-$expand/$select need to take an application's $expand and $select parameters into account. Paging takes care of $top and $skip while data aggregation computes its own $apply. Thus the only supported syntax for system query options will continue to be lowercase with a leading dollar sign.

Starting with SAPUI5 1.141.0, an option that is considered an OData V4 custom query option today and might be treated as a system query option with 4.01 in the future thus causes a "\[FUTURE FATAL\]" warning, which will become an error when your application runs with a 4.01 service. This affects the following names: `apply, compute, count, expand, filter, format, id, index, levels, orderby, schemaversion, search, select, skip, top`

In general, there is a number of new features which are passed through by `v4.ODataModel`, but some may be incompatible for or unsupported by other parts of a client-side stack including application code. Keep in mind that switching to 4.01 requires extensive testing of your application! The following is a list of changes to pay attention to, but this is in no way meant to be complete:

-   [8.1 Improved: Exponential Notation for Decimals](https://docs.oasis-open.org/odata/new-in-odata/v4.01/cn04/new-in-odata-v4.01-cn04.html#sec_ImprovedExponentialNotationforDecima)

-   [8.2 Improved: Control Information without prefix odata](https://docs.oasis-open.org/odata/new-in-odata/v4.01/cn04/new-in-odata-v4.01-cn04.html#sec_ImprovedControlInformationwithoutpre)

    > ### Note:  
    > This change is taken care of by SAPUI5's `v4.ODataModel` and transformed back to the 4.0 format. No changes in your application code are needed here.

-   [8.3 Improved: @type for Built-In Primitive Types](https://docs.oasis-open.org/odata/new-in-odata/v4.01/cn04/new-in-odata-v4.01-cn04.html#sec_ImprovedtypeforBuiltInPrimitiveTypes)

    > ### Note:  
    > This change is taken care of by SAPUI5's `v4.ODataModel` and transformed back to the 4.0 format. No changes in your application code are needed here.

-   [8.4 New: Inlined JSON Streams](https://docs.oasis-open.org/odata/new-in-odata/v4.01/cn04/new-in-odata-v4.01-cn04.html#sec_NewInlinedJSONStreams)


