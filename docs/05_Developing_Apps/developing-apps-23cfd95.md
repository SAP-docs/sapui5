<!-- loio23cfd955f58142389fa7c9097e11559c -->

# Developing Apps

Create apps with rich user interfaces for modern web business applications, responsive across browsers and devices, based on HTML5.



![](images/DevelopingApps_Process_71f8bf5.png)



<a name="loio23cfd955f58142389fa7c9097e11559c__section_ovf_25f_qbb"/>

## Project Setup

Before you start developing apps with SAPUI5, you start by setting up the development environment of your choice. You can find our recommendations under [Development Environment](../03_Get-Started/development-environment-7bb04e0.md).

After that, you define the project setup. If you work in a team, we recommend using a continuous integration setup as described under [Continuous Integration: Ensure Code Quality](continuous-integration-ensure-code-quality-fe7a158.md). If you work alone, you should at the very least set up an automated testing environment.



<a name="loio23cfd955f58142389fa7c9097e11559c__section_znq_f5f_qbb"/>

## Development

When faced with developing an app, you have several ways to get started ranging from app templates or a make-em-completely-from-scratch approach. But which approach is right for your situation? In most cases, it's your level of expertise or need for flexibility and freedom that will decide.

An easy start to app development are app templates offered by SAP Fiori Tools. Think of app templates as a kind of best practice for app development. They incorporate current recommendations and can be used as a starting point for developing apps according to the SAP Fiori design guidelines. They include generic application functionality and tests that can be easily extended with custom functionality if needed. The templates are introduced under [Developing Apps with SAP Fiori Tools](../03_Get-Started/developing-apps-with-sap-fiori-tools-a460a73.md).

If you're skilled at coding and want the freedom and flexibility, you can build an app completely from scratch. In the chapters in this section, you will find some guidance on how to deal with crucial concepts such as accessibility, security, device adaptation.

Be sure to check out information about things that you really should avoid doing while coding: [Coding Issues to Avoid](coding-issues-to-avoid-3877872.md).

You can also use SAP Fiori elements or the reuse components of Analysis Path Framework. For more information, see [Developing Apps with SAP Fiori Elements](../06_SAP_Fiori_Elements/developing-apps-with-sap-fiori-elements-03265b0.md) and [Developing Apps with Analysis Path Framework \(APF\)](../07_APF/developing-apps-with-analysis-path-framework-apf-1c457c5.md).



<a name="loio23cfd955f58142389fa7c9097e11559c__section_vp3_n5f_qbb"/>

## Packaging and Deployment

How you deploy your app when you're finished depends on the tools you use and the platform where your app is going to run. See the related documentation for details.

For example, it's quite easy to deploy an app to SAP Business Technology Platform with SAP Business Application Studio. For more information about SAP Business Application Studio, see the documentation on the SAP Help Portal at [SAP Business Application Studio](https://help.sap.com/viewer/product/SAP%20Business%20Application%20Studio/Cloud/en-US).

> ### Note:  
> For more information about packaging apps, read the blog post [Optimizing OpenUI5/SAPUI5 Apps](https://blogs.sap.com/2015/02/18/optimizing-openui5-apps/).

-   **[Continuous Integration: Ensure Code Quality](continuous-integration-ensure-code-quality-fe7a158.md "This section describes the setup of a development project where multiple developers
		work together on the same code.")**  
This section describes the setup of a development project where multiple developers work together on the same code.
-   **[App Overview: The Basic Files of Your App](app-overview-the-basic-files-of-your-app-28b59ca.md "We recommend creating at least three files for your app: the descriptor
			(manifest.json), the component (Component.js),
		and the main view of the app (App.view.xml).")**  
We recommend creating at least three files for your app: the descriptor \(`manifest.json`\), the component \(`Component.js`\), and the main view of the app \(`App.view.xml`\).
-   **[App Initialization: What Happens When an App Is Started?](app-initialization-what-happens-when-an-app-is-started-d2f5869.md "When a user starts an app (in the SAP Fiori launchpad (FLP) or using an HTML page),
		several steps will be performed in the background.")**  
When a user starts an app \(in the SAP Fiori launchpad \(FLP\) or using an HTML page\), several steps will be performed in the background.
-   **[Folder Structure: Where to Put Your Files](folder-structure-where-to-put-your-files-003f755.md "The details described here represent a best practice for structuring an application
		that features one component, one OData service and less than 20 views. If you're building an
		app that has more components, OData services and views, you may have to introduce more
		folder levels than described here.")**  
The details described here represent a best practice for structuring an application that features one component, one OData service and less than 20 views. If you're building an app that has more components, OData services and views, you may have to introduce more folder levels than described here.
-   **[Device Adaptation: Using Device Models for Your App](device-adaptation-using-device-models-for-your-app-8dbd35e.md "Depending on the capabilities of the device on which the app is running, the
		functionality and the design of the application might differ. By introducing a local JSON
		model holding the device-dependent data, we can bind properties of our views to the device's
		capabilities.")**  
Depending on the capabilities of the device on which the app is running, the functionality and the design of the application might differ. By introducing a local JSON model holding the device-dependent data, we can bind properties of our views to the device's capabilities.
-   **[Performance: Speed Up Your App](performance-speed-up-your-app-408b40e.md "If a web app has performance issues, finding the cause can be both a time-consuming
		and nerve-consuming task. To help you avoid and solve performance issues in your app, here
		are some good practices we've discovered while dealing with SAPUI5 apps. ")**  
If a web app has performance issues, finding the cause can be both a time-consuming and nerve-consuming task. To help you avoid and solve performance issues in your app, here are some good practices we've discovered while dealing with SAPUI5 apps.
-   **[Stable IDs: All You Need to Know](stable-ids-all-you-need-to-know-f51dbb7.md "Stable IDs are IDs for controls, elements, or components that you set yourself in the
		respective id property or attribute as opposed to IDs that are generated by
			SAPUI5. Stable means
		that the IDs are concatenated with the application component ID and do not have any
		auto-generated parts.")**  
Stable IDs are IDs for controls, elements, or components that you set yourself in the respective `id` property or attribute as opposed to IDs that are generated by SAPUI5. *Stable* means that the IDs are concatenated with the application component ID and do not have any auto-generated parts.
-   **[Reacting on User Input Events](reacting-on-user-input-events-c75861e.md "User input events can either be handled automatically by the framework or manually by the application.")**  
User input events can either be handled automatically by the framework or manually by the application.
-   **[Whitespaces Concept](whitespaces-concept-37deb0b.md "Whitespace characters represent the empty space between all the characters that you can
		see on the screen.")**  
Whitespace characters represent the empty space between all the characters that you can see on the screen.
-   **[SAPUI5 Flexibility: Enable Your App for UI Adaptation](sapui5-flexibility-enable-your-app-for-ui-adaptation-f1430c0.md "Here's what you have to consider when developing apps that support UI adaptation.")**  
Here's what you have to consider when developing apps that support UI adaptation.
-   **[Coding Issues to Avoid](coding-issues-to-avoid-3877872.md "This section lists some of the most important issues that should be avoided when
		creating applications using SAPUI5, split into different categories for reasons of
		simplicity.")**  
This section lists some of the most important issues that should be avoided when creating applications using SAPUI5, split into different categories for reasons of simplicity.
-   **[Securing Apps](securing-apps-91f3d87.md "The following section provides information about security aspects of SAPUI5. The information is
        intended for SAPUI5 application
        and control developers, as well as to system administrators running applications based on
            SAPUI5.")**  
The following section provides information about security aspects of SAPUI5. The information is intended for SAPUI5 application and control developers, as well as to system administrators running applications based on SAPUI5.
-   **[Right-to-Left Support](right-to-left-support-8d7b286.md "SAPUI5 application
		developers need to be aware of how applications behave when right-to-left (RTL)
		directionality is selected. Changing the directionality has a big impact on text-displaying
		controls, images and the alignment of the whole application.")**  
SAPUI5 application developers need to be aware of how applications behave when right-to-left \(RTL\) directionality is selected. Changing the directionality has a big impact on text-displaying controls, images and the alignment of the whole application.
-   **[Accessibility](accessibility-03b914b.md "In this guide we cover the most important accessibility aspects for application
		development, based on SAPUI5.")**  
In this guide we cover the most important accessibility aspects for application development, based on SAPUI5.
-   **[The SAPUI5 ABAP Repository and the ABAP Back-End Infrastructure](the-sapui5-abap-repository-and-the-abap-back-end-infrastructure-91f3467.md "The SAPUI5 ABAP repository is
		used to store SAPUI5 apps, components, and libraries. SAP uses it for delivering various
		types of SAPUI5 apps, for example
		SAP Fiori or High Performance Analytics (HPA) apps. The SAPUI5 ABAP repository can also be
		used by customers to store their own SAPUI5 apps and extension
		projects.")**  
The SAPUI5 ABAP repository is used to store SAPUI5 apps, components, and libraries. SAP uses it for delivering various types of SAPUI5 apps, for example SAP Fiori or High Performance Analytics \(HPA\) apps. The SAPUI5 ABAP repository can also be used by customers to store their own SAPUI5 apps and extension projects.

