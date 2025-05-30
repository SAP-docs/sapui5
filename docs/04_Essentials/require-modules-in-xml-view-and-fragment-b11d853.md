<!-- loiob11d853a8e784db6b2d210ef57b0f7d7 -->

# Require Modules in XML View and Fragment

Modules can be required in XML views and fragments and assigned to aliases which can be used as variables in properties, event handlers, and bindings.

The `require` attribute with namespace URI `sap.ui.core` can be used to define the module aliases and paths. In the following sections we assume that the namespace prefix `core` is used to define the URI `sap.ui.core` which makes the attribute to be written as `core:require`. This attribute can be used at every element of an XML view or fragment. You can specify a list of required modules as Unified Resource Names, similar to `sap.ui.require`, and assign aliases to them using a JSON-like syntax.

```xml
<mvc:View xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc"
   core:require="{
      Box: 'sap/m/MessageBox',
      Toast: 'sap/m/MessageToast'
   }">
   ...
</mvc:View>
```

> ### Note:  
> The modules defined in the `core:require` attribute are loaded first before any other attributes of the element with `core:require` are processed. Therefore, they can be used in the same element for bindings, event handlers, and so on.

`core:require` can only handle static imports which require the module path to be defined by using a string literal. It is not possible to use a binding or an expression for defining the module path. As `core:require` is not interpreted as a binding expression, it is not necessary to escape the curly braces in `core:require` which is different than in the other attributes.

The aliases can then be used to access the modules' static functions. The alias is valid for the element where the alias is defined and the subtree of that element.

> ### Note:  
> When you use the view in combination with fragments, keep in mind that the alias does not work in embedded fragments. In this case, define a separate `core:require` inside the fragments.



<a name="loiob11d853a8e784db6b2d210ef57b0f7d7__section_msm_sk3_43b"/>

## Example With Event Handler

You can use the XML `require` to reference static functions of a module which can serve as event handlers. This works with static strings as well as with any model data. For a description how this is done, see [Handling Events in XML Views](handling-events-in-xml-views-b0fb4de.md). As the `Box` module is defined on the root element, it can be used in the whole view.

```xml
<mvc:View controllerName="module:some/Controller" xmlns="sap.m"
      xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc"
      core:require="{Box:'sap/m/MessageBox'}">
   <Panel>
      <Image src="http://www.sap.com/global/ui/images/global/sap-logo.png"/>
      <Button text="Press Me!" press="Box.show('Hello!')"/>
   </Panel>
</mvc:View>
```

> ### Note:  
> `$controller`, `$event`, `$parameters`, and `$source` are reserved keywords for resolving an event handler. Avoid using these keywords as aliases for the required modules with `core:require`.



<a name="loiob11d853a8e784db6b2d210ef57b0f7d7__section_zxd_xk3_43b"/>

## Example With Data Binding

You can also use the `require` module with data binding. Formatters and factory functions can be defined with the `require` modules, as well as expression bindings. The following code extract also shows, that the `Factory` module, which is defined on the List element, can only be used there, and not in sibling or parent controls:

```xml
<mvc:View controllerName="module:some/Controller" xmlns="sap.m"
      xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc"
      core:require="{Util:'some/Util'}">
  <Panel>
      <Image src="http://www.sap.com/global/ui/images/global/sap-logo.png"/>
      <Text text="{formatter: 'Util.format', path: '/text'}"/>
      <List core:require="{
              Factory:'some/Factory'
          }" id="list" items="{path:'/items', factory:'Factory.createItem'}">
      </List>
   </Panel>
</mvc:View>
```



<a name="loiob11d853a8e784db6b2d210ef57b0f7d7__section_jnp_zk3_43b"/>

## `core:require` in Fragments

`core:require` can be used in fragments and set on every element, including `FragmentDefinition`. However, `core:require` on `FragmentDefinition` node does not have any effect in the following use cases:

-   The view where a fragment is used is preprocessed. For more information about preprocessing, see [Preprocessing XML Views](preprocessing-xml-views-48b81b9.md).

-   A fragment is defined inline within a View.

    ```xml
    <mvc:View controllerName="module:some/Controller" xmlns="sap.m"
          xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc">
      <FragmentDefinition>
          <!-- core:require can't be defined on the above FragmentDefinition -->
          ...
      </FragmentDefinition>
      ...
    </mvc:View>
    ```


`core:require` does not work as expected in both of the above use cases because the `FragmentDefinition` node is **not** part of the resulting view. Therefore, the module information which is defined in the `core:require` on `FragmentDefinition` node is not available for its child nodes.

