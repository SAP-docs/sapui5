<!-- loiod1b26a248c0a47f6a96849236250dc90 -->

# Checking the Operating System your Application is Running On

A platform attribute as well as \(in case of mobile platforms\) a platform-dependent CSS class in the HTML tag offer important information and additional options for developers.

A platform attribute is added to the HTML tag. This attribute provides information about the current operating system and version. In case of mobile platforms, SAPUI5 also adds a platform-dependent CSS class to the HTML tag of the page. This enables control or application developers to create platform-dependent styling for their controls or applications.



## Technical Details

When the SAPUI5 bootstrap script file is loaded, a check is performed to see which platform the application is running on. The attribute and \(in case of mobile platforms\) the CSS class are added to the HTML tag.



### Platform Attribute

The platform attribute value has the following connotation: **OS + version**, for example `iOS13.0` or `Android9.1.1`. **OS** can have the following values:

-   `iOS` \(iOS devices\)
-   `mac` \(macOS devices\)
-   `Android` \(Android devices\)
-   `win` \(Windows devices\)

The version numbers are separated by dots.



### CSS Class

The possible values for the CSS class are:

-   `sap-ios` \(Apple devices\)
-   `sap-android` \(Android devices\)



### Example

The platform attribute or CSS class is used as follows:

-   To provide a different font on Android devices, you specify your font by directly using the CSS class `sap-android`.

    ```
    
    .sap-android {
    	     font-family: Roboto;
    }
    ```

-   Example for providing a different font when running on `Android 9.x`:

    ```
    
    html[data-sap-ui-os^='Android9'].sap-android {
    	font-family: "Droid Sans";
    }
    ```


**Related Information**  


[API Reference: `sap.ui.Device.os.OS`](https://ui5.sap.com/#/api/sap.ui.Device.os.OS)

