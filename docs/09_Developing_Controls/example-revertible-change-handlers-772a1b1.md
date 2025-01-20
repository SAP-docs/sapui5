<!-- loio772a1b1eb2da4943af48bbe546a61085 -->

# Example: Revertible Change Handlers

Here's how you can make change handlers revertible.

When navigating between control variants \(views\), it's necessary to revert the changes that have been applied to a certain variant when displaying another variant where that change isn't present. Therefore you need to make your change handler revertible. This is easy to achieve: Together with the `applyChange` method, your change handler must contain a `revertChange` method, which is responsible for reverting the change.

In the usual case, before applying the change in `applyChange`, store the information that's required to restore the state of the control in the change. The `revertChange` method then reads this data and is able to bring the control to its previous state.

> ### Remember:  
> After the change is reverted, remember to reset \(clear\) the revert data on the change.

> ### Note:  
> ***Move* Change Handler**
> 
> When you implement a custom change handler for the *move* action, remember that the change may already have been performed before `applyChange` is called, for example when you move something using drag and drop. Generally, we recommend saving the index that the control currently has, but in this case this doesn't work. If the change was already performed, the current index and the target index are the same. In this case, you need to save the source index from the change data in order to guarantee that the *revert* action works.

> ### Note:  
> **Revert Data Rules**
> 
> Although the `revertData` object accepts any content, do not save any object instances or IDs. If you need to keep a reference to a control, save its selector \(`oModifier.getSelector(oControl, oAppComponent)`\) or its position in the aggregation \(in cases like *move* or *combine*\). This ensures that the control is always found, even when you're processing XML. You also get a warning if you're saving a reference to an invalid control, such as a control with an unstable ID.

It's a best practice to make every change handler revertible.

Here's an example for the `BaseRename` change handler:

> ### Sample Code:  
> BaseRename.js
> 
> ```
> ...
> applyChange: function(oChange, oControl, mPropertyBag) {
>     const oModifier = mPropertyBag.modifier;
>     const sPropertyName = mRenameSettings.propertyName;
>     const sValue = oChange.getText(mRenameSettings.changePropertyName); 
> 
>     ...
> 
>     if (sValue) {
>         oChange.setRevertData(oModifier.getProperty(oControl, sPropertyName)); // Here the information is stored on the change
>     ...
> ...
> 
> revertChange: function(oChange, oControl, mPropertyBag) {
>     const sOldText = oChange.getRevertData(); // Retrieve the stored information
>     if (sOldText || sOldText === "") {
>         const oModifier = mPropertyBag.modifier;
>         const sPropertyName = mRenameSettings.propertyName;
>         oModifier.setProperty(oControl, sPropertyName, sOldText);
> 
>         oChange.resetRevertData(); // Clear the revert data on the change
>     } else {
>         // It is also good to have error handling to ensure that the revert is working as intended
>         Utils.log.error("Change doesn't contain sufficient information to be reverted. Most likely the change didn't go through applyChange.");
>     }
> }
> 
> ...
> ```

