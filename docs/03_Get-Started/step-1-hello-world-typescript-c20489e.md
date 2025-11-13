<!-- loioc20489e2a59d46e99c83f0510392cb6c -->

# Step 1: Hello World! \(TypeScript\)

As you know, SAPUI5 is all about HTML5. Let's get started with building a first "Hello World" with HTML. This tutorial version has been set up in a way that allows the use of UI5 CLI in combination with it.



## Preview

  
  
**The browser shows the text "Hello World"**

![The browser shows the text "Hello World"](images/UI5_Walkthrough_Step_01_1dd4563.png "The browser shows the text "Hello World"")



<a name="loioc20489e2a59d46e99c83f0510392cb6c__section_lv5_lvy_zbc"/>

## Setup

Open a terminal and install UI5 CLI globally on your machine by executing the following command:

`npm install --global @ui5/cli`



<a name="loioc20489e2a59d46e99c83f0510392cb6c__section_js2_mhx_kzb"/>

## Coding

You can view all files at [OpenUI5 TypeScript Walkthrough - Step 1: Hello World!](https://github.com/sap-samples/ui5-typescript-walkthrough/tree/main/steps/01) and [download the solution as a zip file](https://sap-samples.github.io/ui5-typescript-walkthrough/ui5-typescript-walkthrough-step-01.zip).

Create a folder on your local machine which will contain all the sources of the app we're going to build. We refer to this folder as the "app root directory".



<a name="loioc20489e2a59d46e99c83f0510392cb6c__section_ks2_mhx_kzb"/>

## webapp/index.html \(New\)

In the app root directory, we create a new folder named `webapp`. This folder exists to store all the sources that become available in the browser later. We refer to this folder as the "webapp folder".

In our `webapp` folder, we create a new HTML file named `index.html` and enter the following content:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>UI5 TypeScript Walkthrough</title>
</head>
<body>
	<div>Hello World</div>
</body>
</html>
```

> ### Note:  
> An HTML document consists basically of two sections: head and body. The head part will be used by the browser to process the document.
> 
> Using meta tags, we can influence the behavior of the browser. In this case, we tell the browser to use `UTF-8` as the document character set.
> 
> We also give our app a title that will be displayed in the browser. Our hard-coded title can be overruled by the app, for example to show a title in the language of the user. The body part describes the layout of the page. In our case, we simply display "Hello World" by using a `div` tag.



<a name="loioc20489e2a59d46e99c83f0510392cb6c__section_czs_c3x_kzb"/>

## webapp/manifest.json \(New\)

The manifest file, also known as the "descriptor" or "app descriptor," serves as a crucial configuration file for applications, components, and libraries. Stored in the `webapp` folder, this file is read by SAPUI5 to instantiate a component. Although we haven't created a component yet \(which is part of [Step 9: Component Configuration \(TypeScript\)](step-9-component-configuration-typescript-f9d0e2f.md)\), we need to create the app descriptor now because UI5 CLI we intend to use for development also requires it.

Hence, we create a new file named `manifest.json` in the webapp folder and define its essential attributes:

-   The `_version` attribute is a mandatory field in the app descriptor that indicates the format version of the descriptor. This attribute is crucial for identifying application settings when the descriptor is read by various tools. As new features or changes are introduced in future versions of the descriptor, the version number helps to ensure compatibility and proper interpretation of the descriptor's contents. Consequently, with each new version of SAPUI5 a corresponding version of the app descriptor is released. For this tutorial, we have determined that our app requires a minimum SAPUI5 version of 1.128. Therefore, we specify the descriptor format version as 1.65.0, aligning it with the appropriate SAPUI5 version.

    > ### Note:  
    > To find the appropriate `_version` for each SAPUI5 release, see [Manifest \(Descriptor for Applications, Components, and Libraries\)](../04_Essentials/manifest-descriptor-for-applications-components-and-libraries-be0cf40.md).

-   The **`sap.app`** namespace is used to define properties that are specific to the application itself. It includes the following obligatory application-specific attributes:

    -   `id`: This property specifies a unique identifier for the application and states the namespace of the application. It's used to identify the application within the SAP Fiori launchpad or any other deployment environment. The `id` has to be provided in dot notation and must not exceed 70 characters.

    -   `title`: This property defines the title of the application, which can be displayed in the SAP Fiori launchpad or other application management tools.

        > ### Note:  
        > It's recommended to make the title language-dependent, although for now we use a static title. We'll discuss how to implement language-dependent titles in [Step 10: Descriptor for Applications \(TypeScript\)](step-10-descriptor-for-applications-typescript-2a46b75.md).

    -   `applicationVersion`: This property is used to specify the version of the application. It's typically used for tracking and managing changes to the application over time. The application version must be provided using semantic versioning principles.

    -   `type`: This property defines the type of your project, such as `application` or `component`. It helps in determining the project's behavior and how it should be loaded. While the type is actually not a mandatory attribute, it provides a useful project description; hence, it makes sense to configure it as well. We describe an `application` here.



```
{
  "_version": "1.65.0",
  "sap.app": {
    "id": "ui5.walkthrough",
    "type": "application",
    "title": "UI5 TypeScript Walkthrough",
    "applicationVersion": {
      "version": "1.0.0"
    }
  }
}
```

> ### Note:  
> In this tutorial step, we focus on adding the absolute minimum configuration to the app descriptor file. In certain development environments you might encounter validation errors due to missing settings. However, for the purposes of this tutorial you can safely ignore these errors. In [Step 10: Descriptor for Applications](step-10-descriptor-for-applications-8f93bf2.md) we'll examine the purpose of the file in detail and configure some further options.



<a name="loioc20489e2a59d46e99c83f0510392cb6c__section_e2v_fmx_kzb"/>

## UI5 CLI

The following steps are tailored for using this project with [UI5 CLI](../02_Read-Me-First/the-ui5-ecosystem-b72ccb5.md#loiod8ab43d845cd42ceb0aa4e47b44a8fcc).



<a name="loioc20489e2a59d46e99c83f0510392cb6c__section_mfb_4mx_kzb"/>

## package.json \(New\)

We create a new file called `package.json` in the app root directory. It allows us to execute commands and consume packages from the [npm registry](https://www.npmjs.com/) via the npm command line interface.

Enter the following content:

```
{
  "name": "ui5.walkthrough",
  "version": "1.0.0",
  "description": "UI5 TypeScript Walkthrough",
  "scripts": {
      "start": "ui5 serve -o index.html"
  }
}

```

Next, we install UI5 CLI and add it as development dependency to our project. For this, we open a terminal in the app root folder and execute the following command:

`npm install --save-dev @ui5/cli`

Finally, we initialize the UI5 CLI configuration for our project by executing the following command on the app root folder:

`ui5 init`

This generates a `ui5.yaml` file in our app root directory, which is essential for using UI5 CLI with our project.

To start the web server, execute the following command:

`npm start`

This opens a new browser window hosting your newly created `index.html`.

**Related Information**  


[Manifest \(Descriptor for Applications, Components, and Libraries\)](../04_Essentials/manifest-descriptor-for-applications-components-and-libraries-be0cf40.md "The manifest (also known as descriptor for applications, components, and libraries, in short: app descriptor) is inspired by the WebApplication Manifest concept introduced by the W3C. The manifest provides a central, machine-readable, and easy-to-access location for storing metadata associated with an application, an application component, or a library.")

[Development Environment](../05_Developing_Apps/development-environment-7bb04e0.md "This part of the documentation introduces you to some common and recommended use cases for the installation, configuration, and setup of SAPUI5 development environments.")

[App Development](../05_Developing_Apps/app-development-b1fbe1a.md "There are several ways to develop OpenUI5 or SAPUI5 applications. Select the one that meets the requirements of your projects and your expectations best.")

[UI5 CLI: Getting Started](https://ui5.github.io/cli/stable/pages/GettingStarted/)

