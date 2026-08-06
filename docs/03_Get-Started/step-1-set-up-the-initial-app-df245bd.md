<!-- loiodf245bd449a7470c8c2a0926ca8d78de -->

# Step 1: Set Up the Initial App

We start by setting up a simple app for this tutorial. The app displays mock data only and mimics real OData back-end calls with the mock server as you have seen in the *Walkthrough* tutorial.



## Preview Navigation and Routing Tutorial

In classical Web applications, the server determines which resource is requested based on the URL pattern of the request and serves it accordingly. The server-side logic controls how the requested resource or page is displayed in an appropriate way.

In single-page applications, only one page is initially requested from the server and additional resources are dynamically loaded using client-side logic. The user only navigates within this page. The navigation is persisted in the hash instead of the server path or URL parameters.

For example, a classical Web application might display the employee's resume page when URL `http://<your-host>/<some-path-to-the-app>/employees/resume.html?id=3` or `http://<your-host>/<some-path-to-the-app>/employees/3/resume` is called. A single-page application instead would do the same thing by using a hash-based URL like `http://<your-host>/<some-path-to-the-app>/#/employees/3/resume`.

The information in the hash, namely everything that is following the `#` character, is interpreted by the router.

> ### Note:  
> This tutorial does not handle cross-app navigation with the SAP Fiori launchpad. However, the concepts described in this tutorial are also fundamental for navigation and routing between apps in the SAP Fiori launchpad.

We will create a simple app displaying the data of a company's employees to show typical navigation patterns and routing features. The complete flow of the application can be seen in the figure below. We'll start with the home page which lets users do the following:

-   Display a *Not Found* page

-   Navigate to a list of employees and drill further down to see a *Details* page for each employee

-   Show an *Employee Overview* that they can search and sort


  
  
**Page flow of the final app**

![](images/Tutorial_Navigation_and_Routing_Screen_Flow_92cdce7.png "Page flow of the final app")

Throughout this tutorial we will add features for navigating to pages and bookmarking them. We will add backward and forward navigation with common transition animations \(slide, show, flip, etc.\). We will add more pages to the app and navigate between them to show typical use cases. We will even learn how to implement features for bookmarking a specific search, table sorting via filters, and dialogs.

> ### Tip:  
> You don't have to do all tutorial steps sequentially, you can also jump directly to any step you want. Just download the code from the previous step, and start there.
> 
> You can view and download the files for all steps in the Demo Kit at [Navigation and Routing](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.navigation). Copy the code to your workspace and make sure that the application runs by calling the `webapp/index.html` file. Depending on your development environment you might have to adjust resource paths and configuration entries.
> 
> For more information check the [Downloading Code for a Tutorial Step](get-started-setup-tutorials-and-demo-apps-8b49fc1.md#loio8b49fc198bf04b2d9800fc37fecbb218__tutorials_download) section of the tutorials overview page [Get Started: Setup, Tutorials, and Demo Apps](get-started-setup-tutorials-and-demo-apps-8b49fc1.md).



## Preview Step 1

The structure and data model created in this step will be used throughout the rest of this tutorial. The initial app created in this step will be extended in the subsequent steps to illustrate the navigation and routing features of SAPUI5.

  
  
**Initial app with a simple button**

![](images/Tutorial_Navigation_and_Routing_Step_01a_2a2a284.png "Initial app with a simple button")



## Setup

1.  To set up your project for this tutorial, download the files at [Navigation and Routing - Step 1](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.navigation/sample/sap.ui.core.tutorial.navigation.01).

2.  Extract the downloaded `.zip` file at the desired location on your local machine.
3.  Open a shell in the extracted folder and execute `npm install`.
4.  Execute `npm start` to start the web server and to open a new browser window hosting your newly created `index.html`.

You should have the same files as displayed in the following figure:

  
  
**Folder structure with downloaded files**

![](images/Tutorial_Navigation_and_Routing_Step_01b_cf75e00.png "Folder structure with downloaded files")

> ### Note:  
> The content of the `localService` folders will not be changed in this tutorial. The `i18n` folder will always contain the `i18n.properties` file only. Therefore, we will show both subfolders collapsed in the following steps.



## The Initial App

With the downloaded coding, you have an initial app with recommended settings that provides the basic features of an SAPUI5 app:

-   **Home Page**

    The home page of our app is defined in the `webapp/index.html` file. In this file we bootstrap SAPUI5 and tell the runtime where to find our custom resources. Furthermore, we initialize the `MockServer` to simulate back-end requests as we do not have a real back-end service throughout this tutorial. Finally, we instantiate the application component, assign it to a `sap.m.Shell` control, and place the shell into the body. The corresponding `Component.js` file in the `webapp` folder will be extended throughout this tutorial.

-   **Data**

    In the `webapp/localService/mockserver.js` file, we configure the mock server. Using the mock server in this tutorial allows us to easily run the code even without network connection and without the need of having a remote server for our application data.

    The `metadata.xml` file used by the mock server describes our OData service. The service only has two OData entities:

    -   Employee

        An `employee` has typical properties like `FirstName` and `LastName` as well as a navigation property to a resume entity referenced by a `ResumeID`. Of course, the entity also has an ID property: `EmployeeID`. The corresponding `EntitySet` is `Employees`. The actual test data containing several employees is located in the `webapp/localService/mockdata/Employees.json` file.

    -   Resume

        In our case, we want to keep the resume of employees very simple. Therefore, we just have simple properties of type `Edm.String`. The properties are `Information`, `Projects`, `Hobbies` and `Notes`; all of them contain textual information. The entity has an ID property `ResumeID` and the corresponding `EntitySet` is `Resumes`. The resume data for an employee is located in file `webapp/localService/mockdata/Resumes.json`.


-   **Configuration of the App**

    In the `webapp/manifest.json` descriptor file, we configure our app. The descriptor file contains the following most interesting sections:

    -   `sap.app`

        In this section we reference an `i18n.properties` file and use a special syntax to bind the texts for the `title` and `description` properties.

        In the `dataSources` part, we tell our app where to find our OData service `employeeRemote`. As you might guess, the `uri` correlates to the `rootUri` of our mock server instance which can be found in `webapp/localService/mockserver.js`. It is important that these two paths match to allow our mock server to provide the test data we defined above. The `localUri` is used to determine the location of the `metadata.xml` file.

    -   `sap.ui5`

        Under `sap.ui5` we declare with the `rootView` parameter that our `sap.ui.demo.nav.view.App` view shall be loaded and used as the `rootView` for our app. Furthermore, we define two `models` to be automatically instantiated and bound to the `i18n` component and a default model `""`. The latter references our `employeeRemote` `dataSource` which is declared in our `sap.app` section as an OData 2.0 data source. The `i18n` file can be found at `webapp/i18n/i18n.properties`. This data source will be mocked by our mock server.



So far we have a basic app that does not really have any navigation or routing implemented. This will change in the next steps when we implement our first navigation features.

