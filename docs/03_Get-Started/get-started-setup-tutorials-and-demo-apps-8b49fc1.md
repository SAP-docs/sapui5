<!-- loio8b49fc198bf04b2d9800fc37fecbb218 -->

# Get Started: Setup, Tutorials, and Demo Apps

Set up your development environment and go through our tutorials. They introduce you to all major development paradigms of SAPUI5 using practical examples in an interactive format. The demo apps show SAPUI5 in action.



<a name="loio8b49fc198bf04b2d9800fc37fecbb218__tutorials_prerequisites"/>

## Prerequisites and Setup

-   You should be familiar with JavaScript.

-   Set up your [Development Environment](development-environment-7bb04e0.md).

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

-   **[Development Environment](development-environment-7bb04e0.md "This part of the documentation introduces you to some common and recommended use cases for the installation, configuration, and setup
		of SAPUI5 development environments.")**  
This part of the documentation introduces you to some common and recommended use cases for the installation, configuration, and setup of SAPUI5 development environments.
-   **[Quick Start](quick-start-592f36f.md "Unleash your SAPUI5 skills with this simple three-step tutorial. We start
		with a simple &quot;Hello World&quot; example, and convert it to a minimalist two-page app.")**  
Unleash your SAPUI5 skills with this simple three-step tutorial. We start with a simple "Hello World" example, and convert it to a minimalist two-page app.
-   **[Walkthrough](walkthrough-3da5f4b.md "In this tutorial we will introduce you to all major development paradigms of SAPUI5.")**  
In this tutorial we will introduce you to all major development paradigms of SAPUI5.
-   **[Troubleshooting](troubleshooting-5661952.md "In this tutorial, we will show you some tools that will help you if you run into
		problems with your SAPUI5
		app.")**  
In this tutorial, we will show you some tools that will help you if you run into problems with your SAPUI5 app.
-   **[Data Binding](data-binding-e531093.md "In this tutorial, we will explain the concepts of data binding in SAPUI5. ")**  
In this tutorial, we will explain the concepts of data binding in SAPUI5.
-   **[OData V4](odata-v4-bcdbde6.md "In this tutorial, we explore how features of OData V4 can be used in SAPUI5. We write a small app
		that consumes data from an OData V4 service to understand how to access, modify, aggregate,
		and filter data in an OData V4 model.")**  
In this tutorial, we explore how features of OData V4 can be used in SAPUI5. We write a small app that consumes data from an OData V4 service to understand how to access, modify, aggregate, and filter data in an OData V4 model.
-   **[Navigation and Routing](navigation-and-routing-1b6dcd3.md "SAPUI5 comes with a
		powerful routing API that helps you control the state of your application efficiently. This
		tutorial will illustrate all major features and APIs related to navigation and routing in
			SAPUI5 apps by creating a
		simple and easy to understand mobile app. It represents a set of best practices for applying
		the navigation and routing features of SAPUI5 to your
		applications.")**  
SAPUI5 comes with a powerful routing API that helps you control the state of your application efficiently. This tutorial will illustrate all major features and APIs related to navigation and routing in SAPUI5 apps by creating a simple and easy to understand mobile app. It represents a set of best practices for applying the navigation and routing features of SAPUI5 to your applications.
-   **[Testing](testing-291c912.md "In this tutorial we will test application functionality with the testing tools that
		are delivered with SAPUI5. At
		different steps of this tutorial you will write tests using QUnit, OPA5, and the OData V2
		mock server. Additionally, you will learn about testing strategies, Test Driven Development
		(TDD), and much more. ")**  
In this tutorial we will test application functionality with the testing tools that are delivered with SAPUI5. At different steps of this tutorial you will write tests using QUnit, OPA5, and the OData V2 mock server. Additionally, you will learn about testing strategies, Test Driven Development \(TDD\), and much more.
-   **[OData V2 Mock Server](odata-v2-mock-server-3a9728e.md "In this tutorial, we will explore some advanced features of the OData V2 mock server. ")**  
In this tutorial, we will explore some advanced features of the OData V2 mock server.
-   **[Worklist App](worklist-app-6a6a621.md "In this tutorial we will build an app using SAPUI5 that, for example, a
		shop owner can use to manage his product stock levels.")**  
In this tutorial we will build an app using SAPUI5 that, for example, a shop owner can use to manage his product stock levels.
-   **[Flexible Column Layout App](flexible-column-layout-app-c4de2df.md "In this tutorial, we showcase how to structure your SAPUI5 app using the layout
		patterns that comply with the SAP Fiori design guidelines.")**  
In this tutorial, we showcase how to structure your SAPUI5 app using the layout patterns that comply with the SAP Fiori design guidelines.
-   **[Rule Builder Control](rule-builder-control-67fcb30.md "In this tutorial you will learn how to embed a rule builder control to manage
		business rules in your application.")**  
In this tutorial you will learn how to embed a rule builder control to manage business rules in your application.
-   **[Smart Controls](smart-controls-64bde9a.md "In this tutorial you learn how to work with smart controls.")**  
In this tutorial you learn how to work with smart controls.
-   **[3D Viewer](3d-viewer-8deac9d.md "In this tutorial, you will learn how to work with the controls in the Visual
		Interaction toolkit (sap.ui.vk library) to create applications with 3D
		viewing functionality.")**  
In this tutorial, you will learn how to work with the controls in the Visual Interaction toolkit \(`sap.ui.vk` library\) to create applications with 3D viewing functionality.
-   **[Ice Cream Machine](ice-cream-machine-e5b7f8a.md "In this tutorial, we will show you how to use SAPUI5 controls like Generic Tiles, Micro
		Charts, and Process Flow.")**  
In this tutorial, we will show you how to use SAPUI5 controls like Generic Tiles, Micro Charts, and Process Flow.
-   **[Demo Apps](demo-apps-a3ab54e.md "With the Demo Kit, we deliver some demo apps that show you how you can use the
		various features and controls of SAPUI5.")**  
With the Demo Kit, we deliver some demo apps that show you how you can use the various features and controls of SAPUI5.
-   **[Best Practices for App Developers](best-practices-for-app-developers-28fcd55.md "In this section, we have compiled a set of best practice recommendations to help you develop high-quality SAPUI5 apps.")**  
In this section, we have compiled a set of best practice recommendations to help you develop high-quality SAPUI5 apps.

**Related Information**  


[Demo Apps](demo-apps-a3ab54e.md "With the Demo Kit, we deliver some demo apps that show you how you can use the various features and controls of SAPUI5.")

