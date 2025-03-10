<!-- loio9e6305746b8742f69faa55fae27ee220 -->

# Layering Concept

SAPUI5 flexibility uses a consistent layering concept to store the UI changes as semantic delta information. This layering concept applies consistently to all users of SAPUI5 flexibility \(end users, key users, and developers\).

The delta changes are stored in a repository, called *layered repository*, as it contains different layers where the UI changes of the different users are stored in respective layers. Here's an overview:


<table>
<tr>
<th valign="top">

Layer

</th>
<th valign="top">

Used by

</th>
<th valign="top">

Stores changes by

</th>
<th valign="top">

Type of changes

</th>
</tr>
<tr>
<td valign="top">

`USER` 

</td>
<td valign="top">

Customer

</td>
<td valign="top">

End users

</td>
<td valign="top">

User-specific personalization settings \(for object pages\)

</td>
</tr>
<tr>
<td valign="top">

`PUBLIC` 

</td>
<td valign="top">

Customer

</td>
<td valign="top">

End users

</td>
<td valign="top">

Views that the end user saves as *Public* 

</td>
</tr>
<tr>
<td valign="top">

`CUSTOMER` 

</td>
<td valign="top">

Customer

</td>
<td valign="top">

Key users

</td>
<td valign="top">

UI changes to adapt apps for all users made using key user adaptation

</td>
</tr>
<tr>
<td valign="top">

`CUSTOMER_BASE` 

</td>
<td valign="top">

Customer

</td>
<td valign="top">

Developers

</td>
<td valign="top">

UI changes made using the Adaptation Editor in SAP Business Application Studio.

</td>
</tr>
<tr>
<td valign="top">

`VENDOR` 

</td>
<td valign="top">

SAP

</td>
<td valign="top">

SAP

</td>
<td valign="top">

Example: Update of an app

</td>
</tr>
</table>

The semantic changes are attached to stable IDs. This makes them upgrade-safe, for example, if the controls of the app get exchanged.

**How are the layered changes stored?**

The changes are stored in the respective layers separately from the original content that remains unchanged. The repository stores the logical information for the changes that are to be applied to the original entity in a JSON-based file. The repository calls the client API to create, update, and delete these changes and calls the REST services to update the back-end system.

**Related Information**  


[SAPUI5 Flexibility: Adapting UIs Made Easy](sapui5-flexibility-adapting-uis-made-easy-a8e55aa.md "Modification-free, cost-saving, easy to use, and performant: Discover the new flexibility when adapting SAP Fiori UIs using SAPUI5 flexibility.")

[Example: Layering of UI Changes](example-layering-of-ui-changes-17d2d4e.md "Here's an example of how the layering of UI changes based on SAPUI5 flexibility works.")

[SAPUI5 Flexibility: Enable Your App for UI Adaptation](../05_Developing_Apps/sapui5-flexibility-enable-your-app-for-ui-adaptation-f1430c0.md "Here's what you have to consider when developing apps that support UI adaptation.")

[Stable IDs: All You Need to Know](../05_Developing_Apps/stable-ids-all-you-need-to-know-f51dbb7.md "Stable IDs are IDs for controls, elements, or components that you set yourself in the respective id property or attribute as opposed to IDs that are generated by SAPUI5. Stable means that the IDs are concatenated with the application component ID and do not have any auto-generated parts.")

