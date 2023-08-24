<!-- loiof38c21c2f71e455e8d4a959522035a1f -->

# ARIA Labeling

Proper labeling of all UI elements is needed in order to ensure the screen reader announces everything correctly. Here we describe the available options and how and when they should be used.



## Labeling

There are several options for labeling:

1.  `Label` element with `labelFor` attribute

    -   Single ID reference to the labeled control

    -   Reference is maintained on the label, not on the labeled control

    -   Multiple references are not possible


    > ### Example:  
    > <code>&lt;Label text="Product price" required="true" <b>labelFor="productPriceInput"</b>/&gt;</code>

2.  The `aria-label` attribute

    -   Text is directly provided in the attribute, no extra HTML control needed

    -   Attribute is maintained on the labeled control

    -   Only indirect support for multiple texts


3.  The `aria-labelledBy` attribute

    -   Whitespace separated list of ID references to controls

    -   Attribute is maintained on the labeled control

    -   Explicitly designed for multiple references



> ### Caution:  
> The different options cannot be used in conjunction. There is a precedence rule, which determines how the labeling attributes are prioritized and read by the screen reader. As an application developer, you need to be aware of the order in which the labeling is read by your screen reader.

**Related Information**  


[Best Practices for ARIA Labeling](best-practices-for-aria-labeling-3169195.md "Sometimes the UI and the control usage may not allow standard ARIA labeling. Here we introduce some best practices on handling the labels in these cases.")

