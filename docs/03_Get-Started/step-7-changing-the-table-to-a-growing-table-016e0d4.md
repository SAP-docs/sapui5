<!-- loio016e0d44f8ff47d2bdf4fdad9b7bf7cd -->

# Step 7: Changing the Table to a Growing Table

Let’s switch back to developing and add the missing feature for the test we implemented in the previous step. We will simply change the table to a growing table as this is a basic feature of the table. This will display a trigger at the end of the table that the user can click on to display more items.



## Preview

   
  
**The List of posts is now dynamically loading more items when we scroll to the end of the page**

 ![](images/Tutorial_Testing_Step_07_43d882b.png "The List of posts is now dynamically loading more items when we scroll to the
					end of the page") 



## Coding

You can view and download all files in the *Samples* in the Demo Kit at [Testing - Step 7](https://ui5.sap.com/#/entity/sap.m.tutorial.testing/sample/sap.m.tutorial.testing.07).



## webapp/view/Worklist.view.xml

```xml
<mvc:View …
	<semantic:FullscreenPage
		id="page"
		title="{i18n>worklistViewTitle}">
		<semantic:content>
			<Table
				id="table"
				growing="true"

				width="auto"
				…
				>
			…
			</Table>
		</semantic:content>
		…
	</semantic:FullscreenPage>
</mvc:View>
```

We simply set the parameter `growing` to `true` to enable our feature. Now we can run the integration test that we just wrote in the previous step and it should not fail anymore. Similarly, if we run the app, we now see only 20 items initially. And if we choose the *More* button then three more items are loaded.



## Conventions

-   Use OPA tests for UI-related integration tests


**Related Information**  


[Growing Feature for Table and List](../10_More_About_Controls/growing-feature-for-table-and-list-9164ba7.md "sap.m.ListBase provides growing-related properties, which can be used for tables and lists.")

[API Reference: `sap.m.Table`](https://ui5.sap.com/#/api/sap.m.Table)

