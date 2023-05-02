<!-- loioa71400bc82284449bb6c680a4516cc63 -->

# ATC Check SAPUI5 Component Consistency

The ATC check class `CL_CI_TEST_UI5_COMP` checks if the component IDs used in single repositories are unique and valid.

**Unique** means that the same component ID must not be contained in more than one single repository.

**Valid** means that the component ID fulfills the following rules:

-   Consists only of alphanumeric characters
-   Contains only lowercase letters in all segments except the last segment; the last segment may contain camel case letters
-   Does not begin with a number
-   Does not contain special characters
-   Contains a dot \(.\) as a separator of the namespace
-   Is no longer than 70 characters; each individual segment is no longer than 40 characters \(separated by a dot\)

The check class `CL_CI_TEST_UI5_COMP` also reports any errors that occurred when the `manifest.json` file was parsed.

