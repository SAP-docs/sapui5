<!-- loio3169195311f84bdcb63703c1de84b14e -->

# Best Practices for ARIA Labeling

Sometimes the UI and the control usage may not allow standard ARIA labeling. Here we introduce some best practices on handling the labels in these cases.



## **Adding additional labeling to existing controls**

**Use Case:**

There are two fields in a form, but there is only one label for both of them. For example, street and street no. share the same label - Street.

**Solution:**

Introduce the following association to controls:

> ### Source Code:  
> ```
> ariaLabelledBy : {
> 
> type : "sap.ui.core.Control",
> 
> multiple : true,
> 
> singularName : "ariaLabelledBy"
> 
> }
> 
> ```

This association can be used to point to other controls that provide the needed labeling using the `aria-labelledby` property.



## **No suitable labeling text available on the UI which can be used with `aria-labelledby`**

**Use Case:**

In some cases a suitable labeling text may not be available on the UI or it is hard for the application to reference it \(text is contained in an inner control of a control, so the application would need to know the internals of the control\).

**Solution:**

Use the new control `sap.ui.core.InvisibleText` which provides a hidden text and can be referenced in the `ariaLabelledBy` association.



## **Using the `labelFor` attribute together with `aria-labelledby`**

**Use Case:**

The `labelFor` attribute provides additional benefits besides the pure labeling \(for example, focus handling\). When the label which is referenced with the `labelFor` attribute also has an `aria-labelledby` attribute of a referenced control, it is not read by the screen reader.

**Solution:**

A mapping table is introduced. The table is ID-based and matches label and labeled control. The `writeAccessibilityState` function of the `RenderManager` takes the mappings into account and adds the label to the `aria-labelledby` attribute of the labeled control \(only when an `ariaLabelledBy` association is also present\).



## **Internal labeling within a control**

**Use Case:**

In some cases controls need to add additional label texts by themselves for a proper screen reader announcement, for example value states, messages, table headers and further descriptions.

**Solution:**

1.  If the control already provides an `ariaLabelledBy` association, the additional texts must be referenced in other means \(for example, with hidden texts within the control\).

    > ### Note:  
    > It’s not possible to combine `aria-labelledby` with `aria-label`.

2.  If the control does not provide an `ariaLabelledBy` association, but it could, then the association should be added to follow the option above.


