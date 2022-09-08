<!-- loio1b6dcd39a6a74f528b27ddb22f15af0d -->

# Navigation and Routing

SAPUI5 comes with a powerful routing API that helps you control the state of your application efficiently. This tutorial will illustrate all major features and APIs related to navigation and routing in SAPUI5 apps by creating a simple and easy to understand mobile app. It represents a set of best practices for applying the navigation and routing features of SAPUI5 to your applications.

In classical Web applications, the server determines which resource is requested based on the URL pattern of the request and serves it accordingly. The server-side logic controls how the requested resource or page is displayed in an appropriate way.

In single-page applications, only one page is initially requested from the server and additional resources are dynamically loaded using client-side logic. The user only navigates within this page. The navigation is persisted in the hash instead of the server path or URL parameters.

For example, a classical Web application might display the employee’s resume page when URL `http://<your-host>/<some-path-to-the-app>/employees/resume.html?id=3` or `http://<your-host>/<some-path-to-the-app>/employees/3/resume` is called. A single-page application instead would do the same thing by using a hash-based URL like `http://<your-host>/<some-path-to-the-app>/#/employees/3/resume`.

The information in the hash, namely everything that is following the `#` character, is interpreted by the router.

> ### Note:  
> This tutorial does not handle cross-app navigation with the SAP Fiori launchpad. However, the concepts described in this tutorial are also fundamental for navigation and routing between apps in the SAP Fiori launchpad.

We will create a simple app displaying the data of a company’s employees to show typical navigation patterns and routing features. The complete flow of the application can be seen in the figure below. We'll start with the home page which lets users do the following:

-   Display a *Not Found* page

-   Navigate to a list of employees and drill further down to see a *Details* page for each employee

-   Show an *Employee Overview* that they can search and sort


   
  
<a name="loio1b6dcd39a6a74f528b27ddb22f15af0d__fig_uzp_dcp_ls"/>Page flow of the final app

 ![](images/Tutorial_Navigation_and_Routing_Screen_Flow_92cdce7.png "Page flow of the final app") 

Throughout this tutorial we will add features for navigating to pages and bookmarking them. We will add backward and forward navigation with common transition animations \(slide, show, flip, etc.\). We will add more pages to the app and navigate between them to show typical use cases. We will even learn how to implement features for bookmarking a specific search, table sorting via filters, and dialogs.

> ### Tip:  
> You don't have to do all tutorial steps sequentially, you can also jump directly to any step you want. Just download the code from the previous step, and start there.
> 
> You can view and download the files for all steps in the Demo Kit at [Navigation and Routing](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.navigation). Copy the code to your workspace and make sure that the application runs by calling the `webapp/index.html` file. Depending on your development environment you might have to adjust resource paths and configuration entries.
> 
> For more information check the following sections of the tutorials overview page \(see [Get Started: Setup, Tutorials, and Demo Apps](get-started-setup-tutorials-and-demo-apps-8b49fc1.md)\):
> 
> -   [Downloading Code for a Tutorial Step](get-started-setup-tutorials-and-demo-apps-8b49fc1.md#loio8b49fc198bf04b2d9800fc37fecbb218__tutorials_download)
> 
> -   [Adapting Code to Your Development Environment](get-started-setup-tutorials-and-demo-apps-8b49fc1.md#loio8b49fc198bf04b2d9800fc37fecbb218__tutorials_adaptation)

1.  [Step 1: Set Up the Initial App](step-1-set-up-the-initial-app-df245bd.md "We start by setting up a simple app for this tutorial. The app displays mock data
		only and mimics real OData back-end calls with the mock server as you have seen in the
			Walkthrough tutorial.")  
We start by setting up a simple app for this tutorial. The app displays mock data only and mimics real OData back-end calls with the mock server as you have seen in the *Walkthrough* tutorial.
2.  [Step 2: Enable Routing](step-2-enable-routing-cf3c57c.md "In this step we will modify the app and introduce routing. Instead of having the home
		page of the app hard coded we will configure a router to wire multiple views together when
		our app is called. The routing configuration controls the application flow when the user
		triggers a navigation action or opens a link to the application directly.")  
In this step we will modify the app and introduce routing. Instead of having the home page of the app hard coded we will configure a router to wire multiple views together when our app is called. The routing configuration controls the application flow when the user triggers a navigation action or opens a link to the application directly.
3.  [Step 3: Catch Invalid Hashes](step-3-catch-invalid-hashes-e047e05.md "Sometimes it is important to display an indication that the requested resource was
		not found. To give you an example: If a user tries to access an invalid pattern which does
		not match any of the configured routes, the user is notified that something went wrong. You
		might also know this as a “404” or Not Found Page from
		traditional web pages. In this step, we will implement a feature that detects invalid hashes
		and visualizes this in a nice way.")  
Sometimes it is important to display an indication that the requested resource was not found. To give you an example: If a user tries to access an invalid pattern which does not match any of the configured routes, the user is notified that something went wrong. You might also know this as a “404” or *Not Found Page* from traditional web pages. In this step, we will implement a feature that detects invalid hashes and visualizes this in a nice way.
4.  [Step 4: Add a Back Button to Not Found Page](step-4-add-a-back-button-to-not-found-page-66670b0.md "When we are on the Not Found page because of an invalid hash,
		we want to get back to our app to select another page. Therefore, we will add a
			Back button to the Not Found view and make
		sure that the user gets redirected to either the previous page or the overview page when the
			Back button is pressed.")  
When we are on the *Not Found* page because of an invalid hash, we want to get back to our app to select another page. Therefore, we will add a *Back* button to the *Not Found* view and make sure that the user gets redirected to either the previous page or the overview page when the *Back* button is pressed.
5.  [Step 5: Display a Target Without Changing the Hash](step-5-display-a-target-without-changing-the-hash-d9efab3.md "In this step, you will learn more about targets and how to display a target from the
		routing configuration manually. ")  
In this step, you will learn more about targets and how to display a target from the routing configuration manually.
6.  [Step 6: Navigate to Routes with Hard-Coded Patterns](step-6-navigate-to-routes-with-hard-coded-patterns-782aac0.md "In this step, we'll create a second button on the home page, with which we can
		navigate to a simple list of employees. This example illustrates how to navigate to a route
		that has a hard-coded pattern.")  
In this step, we'll create a second button on the home page, with which we can navigate to a simple list of employees. This example illustrates how to navigate to a route that has a hard-coded pattern.
7.  [Step 7: Navigate to Routes with Mandatory Parameters](step-7-navigate-to-routes-with-mandatory-parameters-f96d252.md "In this step, we implement a feature that allows the user to click on an employee in
		the list to see additional details of the employee. A route pattern can have one or more
		mandatory parameters to identify objects in an app.")  
In this step, we implement a feature that allows the user to click on an employee in the list to see additional details of the employee. A route pattern can have one or more mandatory parameters to identify objects in an app.
8.  [Step 8: Navigate with Flip Transition](step-8-navigate-with-flip-transition-3e5f6f3.md "In this step, we want to illustrate how to navigate to a page with a custom
		transition animation. Both forward and backward navigation will use the “flip”
		transition but with a different direction. We will create a simple link on the
			Employee view that triggers a flip navigation to a page that
		displays the resume data of a certain employee. Pressing the Back
		button will navigate back to the Employee view with a reversed flip
		transition.")  
In this step, we want to illustrate how to navigate to a page with a custom transition animation. Both forward and backward navigation will use the “flip” transition but with a different direction. We will create a simple link on the *Employee* view that triggers a flip navigation to a page that displays the resume data of a certain employee. Pressing the *Back* button will navigate back to the *Employee* view with a reversed flip transition.
9.  [Step 9: Allow Bookmarkable Tabs with Optional Query Parameters](step-9-allow-bookmarkable-tabs-with-optional-query-parameters-b8561ff.md "The resume view contains four tabs as we have seen in the previous
		steps. However, when the user navigates to the resume page, only the first
		tab is displayed initially. Navigating directly to a specific tab or bookmarking a tab is
		not yet supported in our current app.")  
The `resume` view contains four tabs as we have seen in the previous steps. However, when the user navigates to the `resume` page, only the first tab is displayed initially. Navigating directly to a specific tab or bookmarking a tab is not yet supported in our current app.
10. [Step 10: Implement Lazy Loading](step-10-implement-lazy-loading-cdab0a1.md "In the previous steps, we have implemented a Resume view that
		uses tabs to display data. The complete content of the tabs is loaded once, no matter which
		tab is currently displayed. We can increase the performance of our app by avoiding to load
		content that is not visible. Therefore, we implement a “lazy loading” feature that only
		loads the view and data when requested by the user. ")  
In the previous steps, we have implemented a *Resume* view that uses tabs to display data. The complete content of the tabs is loaded once, no matter which tab is currently displayed. We can increase the performance of our app by avoiding to load content that is not visible. Therefore, we implement a “lazy loading” feature that only loads the view and data when requested by the user.
11. [Step 11: Assign Multiple Targets](step-11-assign-multiple-targets-b01840e.md "In this step, we will add a new button to the home page to illustrate the usage of
		multiple targets for a route. When the button is pressed, a new page opens that contains two
		parts: a header part at the top and a content part. The content part displays a table of
		employees that can be sorted and searched. We will use the array notation in the routing
		configuration to assign multiple targets to a route - a feature that we have not yet
		introduced.")  
In this step, we will add a new button to the home page to illustrate the usage of multiple targets for a route. When the button is pressed, a new page opens that contains two parts: a header part at the top and a content part. The content part displays a table of employees that can be sorted and searched. We will use the array notation in the routing configuration to assign multiple targets to a route - a feature that we have not yet introduced.
12. [Step 12: Make a Search Bookmarkable](step-12-make-a-search-bookmarkable-e85da53.md "In this step we will make the search bookmarkable. This allows users to search for
		employees in the Employees table and they can bookmark their search
		query or share the URL.")  
In this step we will make the search bookmarkable. This allows users to search for employees in the *Employees* table and they can bookmark their search query or share the URL.
13. [Step 13: Make Table Sorting Bookmarkable](step-13-make-table-sorting-bookmarkable-3975987.md "In this step, we will create a button at the top of the table which will change the
		sorting of the table. When the current sorting state of the table is changed, the sorting
		state will be reflected in the URL. This illustrates how to make the table sorting
		bookmarkable.")  
In this step, we will create a button at the top of the table which will change the sorting of the table. When the current sorting state of the table is changed, the sorting state will be reflected in the URL. This illustrates how to make the table sorting bookmarkable.
14. [Step 14: Make Dialogs Bookmarkable](step-14-make-dialogs-bookmarkable-5cc3147.md "In this step, we want to allow bookmarking of the dialog box that is opened when the
		user clicks the Sort button. The dialog should automatically open
		when the URL contains the query parameter showDialog. ")  
In this step, we want to allow bookmarking of the dialog box that is opened when the user clicks the *Sort* button. The dialog should automatically open when the URL contains the query parameter `showDialog`.
15. [Step 15: Reuse an Existing Route](step-15-reuse-an-existing-route-877d57e.md "The Employees table displays employee data. However, the
		resumes of the employees are not accessible from this view yet. We could create a new route
		and a new view to visualize the resume again, but we could also simply reuse an existing
		route to cross-link the resume of a certain employee. In this step, we will add a feature
		that allows users to directly navigate to the resume of a certain employee. We will reuse
		the Resume page that we have created in an earlier step. This example
		illustrates that there can be multiple navigation paths that direct to the same
		page.")  
The *Employees* table displays employee data. However, the resumes of the employees are not accessible from this view yet. We could create a new route and a new view to visualize the resume again, but we could also simply reuse an existing route to cross-link the resume of a certain employee. In this step, we will add a feature that allows users to directly navigate to the resume of a certain employee. We will reuse the *Resume* page that we have created in an earlier step. This example illustrates that there can be multiple navigation paths that direct to the same page.
16. [Step 16: Handle Invalid Hashes by Listening to Bypassed Events](step-16-handle-invalid-hashes-by-listening-to-bypassed-events-a7932a7.md "So far we have created many useful routes in our app. In the very early steps we have
		also made sure that a Not Found page is displayed in case the app was
		called with an invalid hash. Now, we proceed further and track invalid hashes to be able to
		detect and correct any invalid links or add new URL patterns that are often requested but
		not found. Therefore, we simply listen to the bypassed events")  
So far we have created many useful routes in our app. In the very early steps we have also made sure that a *Not Found* page is displayed in case the app was called with an invalid hash. Now, we proceed further and track invalid hashes to be able to detect and correct any invalid links or add new URL patterns that are often requested but not found. Therefore, we simply listen to the bypassed events
17. [Step 17: Listen to Matched Events of Any Route](step-17-listen-to-matched-events-of-any-route-4a063b8.md "In the previous step, we have listened for bypassed events to detect possible
		technical issues with our app. In this step, we want to improve the analysis use case even
		more by listening to any matched event of the route. We could use this information to
		measure how the app is used and how frequently the pages are called. Many Web analytic tools
		track page hits this way. The collected information can be used, for example to improve our
		app and its usability.")  
In the previous step, we have listened for bypassed events to detect possible technical issues with our app. In this step, we want to improve the analysis use case even more by listening to any matched event of the route. We could use this information to measure how the app is used and how frequently the pages are called. Many Web analytic tools track page hits this way. The collected information can be used, for example to improve our app and its usability.

