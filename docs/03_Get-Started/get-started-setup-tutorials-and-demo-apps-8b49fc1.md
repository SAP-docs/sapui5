<!-- loio8b49fc198bf04b2d9800fc37fecbb218 -->

# Get Started: Setup, Tutorials, and Demo Apps

Set up your development environment and go through our tutorials. They introduce you to all major development paradigms of SAPUI5 using practical examples in an interactive format. The demo apps show SAPUI5 in action.



<a name="loio8b49fc198bf04b2d9800fc37fecbb218__tutorials_prerequisites"/>

## Prerequisites and Setup

-   You should be familiar with JavaScript.

-   Set up your [Development Environment](../05_Developing_Apps/development-environment-7bb04e0.md).

-   Set up a folder where you would place the application content. We will refer to this folder as the “app folder”.




<a name="loio8b49fc198bf04b2d9800fc37fecbb218__tutorials_path"/>

## Learning Path

![](images/Image_Map_SAPUI5_Learning_Map_e32da15.png)



> ### Tip:  
> **Learn with openSAP:**
> 
> The openSAP course [Developing Web Apps with SAPUI5](https://open.sap.com/courses/ui51) introduces you to the main concepts of SAPUI5.
> 
> The JavaScript exercises for each unit will give you the technical background needed to develop your own responsive Web apps. We’ll start from scratch with the very basics and lots of hands-on coding. As we go through the weeks of this course, you’ll learn more about the powerful development concepts and truly master SAPUI5.
> 
> The openSAP course [Evolved Web Apps with SAPUI5](https://open.sap.com/courses/ui52) for more experienced SAPUI5 developers and ambitious beginners introduces more advanced scenarios and concepts.



<a name="loio8b49fc198bf04b2d9800fc37fecbb218__tutorials_download"/>

## Downloading Code for a Tutorial Step

To download the code from the Demo Kit, follow these steps:

1.  Choose the link in the *Coding* section of the tutorial step you want to work on or find the code in the *Samples* section of the Demo Kit \(filter by "*Tutorial*" to get a list of the tutorials that are available\).

2.  Choose the icon with the *Show source code for this sample* tooltip in the right-hand part of the header bar to display all files included in this sample.

3.  Choose the *Download* button. A `zip` file is downloaded to your local machine.

4.  Extract or upload the `zip` file to your development environment.

5.  Adjust the project configuration files to match your development environment as described below.

6.  Test the project by calling one of the HTML pages in your development environment and make sure that the app is displaying the features exactly as shown in the preview of the step.




<a name="loio8b49fc198bf04b2d9800fc37fecbb218__tutorials_adaptation"/>

## Adapting Code to Your Development Environment

You might have to adapt parts of the coding to your local development environment to make the app work. Please check the following settings carefully:

-   **Project Path and Deployment**

    All tutorials assume that the app is deployed and can be accessed under a certain path on a web server. You will not be able to run the app without a Web server as the browser does not allow you to load the required resources locally due to security restrictions.

-   **SAPUI5 Resources**

    You can either download and deploy the runtime to your \(local\) Web server or reference the CDN version located at `https://ui5.sap.com/resources/sap-ui-core.js`. Some development environments such as the SAP Web IDE also provide a local runtime for testing purposes. If you download the code from the samples in the Demo Kit, you will have to adapt the **resource path in the bootstrap section** of all HTML pages included in the project. In the tutorial code, we assume that SAPUI5 can be accessed from the `/resources` path of the server.

-   **Accessing Remote Services**

    Browsers typically prevent accessing remote resources due to the Cross-Origin Resource Sharing \(CORS\) policy. If you would like to call a real service or remote resources, you will have to either configure the development environment or the remote server to accept these requests. This strongly depends on the development environment and is described in more detail below.




<a name="loio8b49fc198bf04b2d9800fc37fecbb218__tutorials_troubleshooting"/>

## Troubleshooting

If you get stuck, check the [Troubleshooting](../04_Essentials/troubleshooting-615d9e4.md) section under *Essentials*, or refer to the [Troubleshooting tutorial](troubleshooting-5661952.md).

If you can't fix the problem, try downloading the solution of the previews or current step. This should get your project fixed again, just don’t forget to check the resource path and the project configuration files again.



<a name="loio8b49fc198bf04b2d9800fc37fecbb218__section_fbp_hjc_tkb"/>

## See SAPUI5 in Action - Our Demo Apps

If you want to see some practical examples for SAPUI5 apps, check out our [Demo Apps](https://ui5.sap.com/#/demoapps). These are fully-functional apps that showcase certain floorplans, control libraries, or other SAPUI5 features. You can also download the source code of each demo app to find out how everything works together. Feel free to explore!

**Related Information**  


[Demo Apps](demo-apps-a3ab54e.md "With the Demo Kit, we deliver some demo apps that show you how you can use the various features and controls of SAPUI5.")

