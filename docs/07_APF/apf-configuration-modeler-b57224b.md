<!-- loiob57224b3f6d14640b36e696537653e98 -->

# APF Configuration Modeler

You use the APF Configuration Modeler to design or enhance your APF-based applications.

To get an overview of the APF Configuration Modeler UI, you can view the [APF Configuration Modeler Demo App](https://ui5.sap.com/test-resources/sap/apf/newDemokit/modeler/index.html) in the Demo Kit and watch the following video:



To configure a **new** application, the following steps are relevant and build on one another:

1.  Create an **application**

    In this step, you create a node under which you can define several different configurations. This step only serves to organize configurations in a structured way. At runtime, the information you enter here is not reflected on the UI.

    All configurations that you create under one application node share a common text pool, that is, one text file that contains the texts for all configurations belonging to an application node. This is useful if you have configurations that have very similar content and therefore share large parts of their texts. Having all these texts in one text file can also save translation costs.

2.  Create one or more **configurations**

    You can define several configurations under one application. At runtime, only one configuration is used at a time.

3.  Create **categories** for a configuration

    The categories you define here are displayed on the first level of the analysis step gallery. They help to clearly arrange the analysis steps, for example, by drill-down dimensions or by KPIs.

    Note that the assignment of steps to categories is done manually. The steps cannot be assigned automatically based on their content.

4.  Create **analysis steps** for each category

    Here, you define the steps that a user can choose from in the analysis step gallery and that make up the actual analysis in an APF-based application. Analysis steps have a request assigned that retrieves the data to be analyzed, and one or more representations that determine the chart types.

5.  Create **representations** for each analysis step

    Representations define how the data of an analysis step is visualized on the UI, that is, which chart type is used. You can define several representations for each step so that the user can then select the required one in the analysis step gallery. At runtime, the user can switch between the different representations of a step.

6.  Create **filters** for a configuration

    Using filters, the user can set global filter values that apply to an entire analysis path.

7.  Create **navigation targets** for a configuration

    Navigation targets are displayed in the *Open In...* menu of an APF-based application. When you navigate to another application, the context of the current analysis path is handed over to the navigation target.


> ### Note:  
> In SAP S/4HANA, the APF Configuration Modeler provides in-app help to get context-sensitive user assistance for individual entry fields. To use the in-app help, you must configure your SAP Web dispatcher accordingly. For more information, see the Installation Guide for SAP S/4HANA, section "User Assistance Settings".

To **change** an application that was shipped by SAP, you must first import the relevant files into the APF Configuration Modeler. You can then edit the elements listed above. For more information about importing files, see [Import](import-6528aa8.md).

A configuration that was created or enhanced using the APF Configuration Modeler is stored in a table. Each configuration has its own table entry with its own ID. At runtime, the configuration is read from the table, that is, JSON files are not used in this scenario.When you import the JSON file of a shipped application into the APF Configuration Modeler to enhance the application, the configuration is also written into a table.

