<!-- loiobe54950cae1041f59d4aa97a6bade2d8 -->

# Using Native HTML in XML Views

With the `sap.html` library, you can write standard HTML tags directly inside XML views and freely mix them with regular SAPUI5 controls while staying within the SAPUI5 programming model \(data binding, models, event handling\).



## Context

The `sap.html` library provides lightweight typed SAPUI5 control wrappers for native HTML elements. Elements are written with their native lowercase tag names \(`div`, `a`, `input`, …\) and inherit from `sap.ui.core.Control`, which allows them to be aggregated into other SAPUI5 controls wherever the respective aggregation allows it.

Note that it is the responsibility of the application developer to ensure valid HTML. With the exception of void elements \(see the table below\), the `sap.html` library does not enforce valid nesting of HTML tags.

> ### Note:  
> The former approach of embedding native \(X\)HTML through the XHTML namespace \(`xmlns:html="http://www.w3.org/1999/xhtml"`\) is deprecated as of SAPUI5 version 1.120. Use the `sap.html` library instead.



## Procedure

1.  Add `sap.html` as a library dependency in your `manifest.json`:

    ```
        {
            "sap.ui5": {
                "dependencies": {
                    "libs": { "sap.html": {} }
                }
            }
        }
    ```

2.  Declare the `sap.html` XML namespace in your view. You can choose any namespace name. In the following example, it is set as the default namespace for a native developer experience. Elements use their native lowercase tag names:

    ```
    <mvc:View
        xmlns:mvc="sap.ui.core.mvc"
        xmlns:m="sap.m"
        xmlns="sap.html">
        ...
    </mvc:View>
    ```

3.  Write native HTML and mix it freely with SAPUI5 controls:

    ```
    <mvc:View controllerName="my.app.Main"
        xmlns:mvc="sap.ui.core.mvc"
        xmlns:m="sap.m"
        xmlns="sap.html">
    
        <m:Panel headerText="Native HTML + UI5">
            <div class="myLayout">
                <h1>Welcome, {/userName}</h1>
                <p>You can mix native HTML with SAPUI5 controls:</p>
    
                <!-- an SAPUI5 control, nested inside native HTML -->
                <m:Button text="A UI5 Button" press=".onPress"/>
    
                <!-- native anchor with data binding; opens safely in a new tab -->
                <a href="{/docsUrl}" target="_blank">Open documentation</a>
    
                <!-- void tags must not have a closing tag -->
                <input type="datetime-local" value="{/when}"/>
            </div>
        </m:Panel>
    </mvc:View>
    ```


You can also use the elements programmatically by importing the corresponding module from the `sap.html` library:

```
sap.ui.require(["sap/html/Div", "sap/html/A"], function (Div, A) {
    new Div({ children: [ new A({ href: "https://example.com", text: "Link" }) ] });
});
```

> ### Note:  
> The imported modules are capitalized, as is customary for SAPUI5 control classes. In XML views, use the native lowercase tag names \(for example, `div` and `a`\).



## Native HTML vs. the SAPUI5-Supported Subset

The `sap.html` library supports the vast majority of HTML elements and stays as close to native HTML as possible. In some cases, it intentionally deviates, mostly for security reasons or to integrate with the SAPUI5 rendering and model layer.

> ### Note:  
> Different compatibility rules apply to the `sap.html` library than to other SAPUI5 libraries. To stay aligned with the evolving HTML specification, the mapping of HTML elements and attributes to SAPUI5 controls and properties may change in future versions.

The following table shows where `sap.html` behavior differs from native HTML:

**Differences Between Native HTML and sap.html Behavior**


<table>
<tr>
<th valign="top">

Topic

</th>
<th valign="top">

Native HTML

</th>
<th valign="top">

`sap.html` Behavior

</th>
<th valign="top">

Why We Deviate

</th>
</tr>
<tr>
<td valign="top">

Unsafe / structural tags \(`script`, `style`, `iframe`, `object`, `embed`, `link`, `meta`, `base`, `audio`, `video`, `source`, `track`, `template`, `noscript`, `html`/`head`/`body`, …\)

</td>
<td valign="top">

Available

</td>
<td valign="top">

**Not provided**

</td>
<td valign="top">

Security — these are the classic script/style/resource-loading injection vectors \(and are meaningless inside the SAPUI5 control tree\)

</td>
</tr>
<tr>
<td valign="top">

Inline event handlers \(`onclick`, `onerror`, …\)

</td>
<td valign="top">

HTML attributes containing script

</td>
<td valign="top">

Exposed as **SAPUI5 events**, never rendered as attributes

</td>
<td valign="top">

Security — prevents inline-script injection and integrates with SAPUI5 event handling

</td>
</tr>
<tr>
<td valign="top">

URL attributes \(`href`, `src`, `action`, `formaction`, `cite`, `ping`, `poster`, …\)

</td>
<td valign="top">

Any string

</td>
<td valign="top">

Typed `sap.ui.core.URI`; validated against the `sap/base/security/URLListValidator`. Unsafe schemes are dropped.

</td>
<td valign="top">

Security — blocks `javascript:`/`data:` XSS via `URLListValidator`

</td>
</tr>
<tr>
<td valign="top">

Allowed URL schemes

</td>
<td valign="top">

Any \(`mailto:`, `tel:`, …\)

</td>
<td valign="top">

Specific URLs and schemes must be allow-listed

</td>
<td valign="top">

Follows the standard SAPUI5 URL allowlist; apps opt in to more schemes via `URLListValidator.add(...)`

</td>
</tr>
<tr>
<td valign="top">

`rel` on `<a>`/`<area>` with `target` opening a new context

</td>
<td valign="top">

Author-controlled

</td>
<td valign="top">

`noopener` is automatically merged into `rel` if not present

</td>
<td valign="top">

Security — prevents reverse tabnabbing \(existing `rel` tokens are preserved\)

</td>
</tr>
<tr>
<td valign="top">

`class` attribute

</td>
<td valign="top">

HTML attribute

</td>
<td valign="top">

Not a property; `class` maps to SAPUI5's **custom style classes** \(`addStyleClass`\)

</td>
<td valign="top">

Integrates with SAPUI5's style-class management

</td>
</tr>
<tr>
<td valign="top">

`data-*` attributes

</td>
<td valign="top">

HTML attributes

</td>
<td valign="top">

Become SAPUI5 **`CustomData`** \(rendered to the DOM\)

> ### Note:  
> Names starting with `data-sap-ui-` are reserved for framework purposes and cannot be used.



</td>
<td valign="top">

Integrates with the SAPUI5 custom-data model

</td>
</tr>
<tr>
<td valign="top">

`contenteditable` attribute

</td>
<td valign="top">

Global attribute, available on any element

</td>
<td valign="top">

**Not provided**

</td>
<td valign="top">

It opens a freeform DOM editing surface that cannot be reconciled with the SAPUI5 control tree

</td>
</tr>
<tr>
<td valign="top">

Enum-like attributes \(`<input type>`, `<a target>`, …\)

</td>
<td valign="top">

Native string values

</td>
<td valign="top">

Native values are used \(for example, `type="datetime-local"`\)

</td>
<td valign="top">

Harmonizes with native HTML authoring. This deliberately diverges from the classic SAPUI5 capitalized-enum convention.

</td>
</tr>
<tr>
<td valign="top">

Void elements \(`<br>`, `<img>`, `<input>`, …\)

</td>
<td valign="top">

Cannot have content

</td>
<td valign="top">

Text/child content is rejected \(error in XML view\)

</td>
<td valign="top">

Matches HTML void-element semantics

</td>
</tr>
<tr>
<td valign="top">

Inline text & mixed content

</td>
<td valign="top">

Text nodes

</td>
<td valign="top">

Inline text between children is preserved in the SAPUI5 control tree and allows for full *data binding*

</td>
<td valign="top">

Mixed HTML/SAPUI5 and text content is allowed, but only within HTML elements defined declaratively in XMLViews. Not supported for programmatic usage of the `sap.html` library.

</td>
</tr>
<tr>
<td valign="top">

Child controls

</td>
<td valign="top">

DOM children

</td>
<td valign="top">

Every element has a default `children` aggregation for nesting SAPUI5 controls or more HTML

</td>
<td valign="top">

HTML, web components, and SAPUI5 controls can be composed freely

</td>
</tr>
<tr>
<td valign="top">

Element `id`

</td>
<td valign="top">

`id` attribute

</td>
<td valign="top">

The SAPUI5 control ID is rendered as the DOM `id`

</td>
<td valign="top">

Consistency with SAPUI5 ID handling

</td>
</tr>
<tr>
<td valign="top">

Theming / CSS

</td>
<td valign="top">

Developers style the element via style classes

</td>
<td valign="top">

The `sap.html` library ships **no** additional styles

</td>
<td valign="top">

The HTML wrapper controls are intentionally unstyled. You can style them through your app's CSS/style classes.

</td>
</tr>
</table>

> ### Caution:  
> Our offering in `sap.html` assumes that styles are given "literally" and therefore can be trusted. Using data binding introduces a new risk that needs to be tackled by the developer using it. Unlike URL-bearing attributes such as `href`, the `style` attribute value is not validated by the `sap.html` library. A bound value could apply arbitrary styles, for example, a `background-image` URL pointing to an uncontrolled endpoint. To counter such risks, you could use a formatter that sanitizes the style retrieved from the model.

> ### Note:  
> `sap.html` is a low-level building block. For most application UIs, prefer the higher-level SAPUI5 control libraries \(for example, `sap.m`\). Use `sap.html` when you need native HTML structure inside a view. HTML is especially powerful when building custom layouts such as flex grids.
> 
> While `<input>`, `<textarea>`, and `<select>` are supported by the `sap.html` library, they do not provide the SAP-grade UX qualities available with the corresponding SAPUI5 controls \(for example, `sap.m.Input` or `sap.m.DatePicker`\). When you need two-way user input, prefer the corresponding SAPUI5 controls. Use the `sap.html` library primarily for layouting needs.

