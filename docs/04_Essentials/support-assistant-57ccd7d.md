<!-- loio57ccd7d7103640e3a187ed55e1d2c163 -->

# Support Assistant

The Support Assistant enables developers to check whether their apps are built according to the SAPUI5 best practices and guidelines.



## Goals

The tool aims to reduce maintenance and consulting times and to streamline SAPUI5 app development. It uses a set of predefined rules to check all aspects of an application, for example, accessibility, performance, data binding, usability. With a simple click, you can check the current state of your app. After execution, you can analyze the results and apply corrective measures based on the outcome.

Check out the Support Assistant highlights video for an overview of its main functionalities:

  



## Getting Started

The Support Assistant can be started using a URL or a Technical Information Dialog.



### From a URL Parameter

The Support Assistant is enabled with the following URL parameter: `sap-ui-support=true`. The tool then appears as a toolbar in the footer of the app.

> ### Tip:  
> If you want to run the Support Assistant in a separate window, use the parameter `sap-ui-support=true,window` 

   
  
**Support Assistant Toolbar**

 ![](images/Support_Assistant_Toolbar_c9ec61c.png "Support Assistant Toolbar ") 



### From the Technical Information Dialog

You can also start the Support Assistant from the Technical Information Dialog.

1.  Open the Technical Information Dialog by using the following [shortcut](../02_Read-Me-First/keyboard-shortcuts-for-sapui5-tools-154844c.md):  [Ctrl\] + [Shift\] + [Left-Alt\] / [Left-Option\] + [P\]  

2.  Choose *Activate Support Assistant*.


Starting the Support Assistant from here allows you to run it with a different SAPUI5 version. You can find more details on this topic in [Running the Support Assistant on an Older SAPUI5 Version](running-the-support-assistant-on-an-older-sapui5-version-473201b.md).

Selecting *Rules* will show you the available rulesets. You can then select your rules and start the analysis of the app.



<a name="loio57ccd7d7103640e3a187ed55e1d2c163__section_zxz_jh3_rz"/>

## Persisting Rules and Settings

All scopes and temporary rules can be stored in the local storage of your browser. This will allow you to continue with your work even after you have closed the browser window. To enable this feature, choose *Settings* \(![](images/AS-Settings-Button_24b9cee.png)\) on the banner and select the checkbox *I agree to use local storage persistency for*.

> ### Tip:  
> You can delete your already persisted data by choosing *Delete Persisted Data*.



## Features

-   To learn more about rules and rule management see: [Rules Management](rules-management-3fc864a.md)

-   To learn more about result processing and reporting see: [Results and Analysis](results-and-analysis-f09fab1.md)

-   To learn more about creating your own rules see: [Rule Development Guide](rule-development-guide-cd356da.md)


**Related Information**  


[Step 3: Support Assistant](../03_Get-Started/step-3-support-assistant-35f08e1.md "In this tutorial step, we will have a closer look at Support Assistant. You can use this tool to check whether your app is built according to the best practices with predefined rules.")

