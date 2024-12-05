<!-- loio87aac894a40640f89920d7b2a414499b -->

# OData V4 Metadata JSON Format

The OData V4 model provides access to metadata in a streamlined JSON format which is described in the section below.

It is different to the $metadata service's JSON format \(see [OData JSON Format Version 4.0](http://docs.oasis-open.org/odata/odata-json-format/v4.0/os/odata-json-format-v4.0-os.html)\) and the OData JSON Format for Common Schema Definition Language \(CSDL\) Version 4.0 \(see [corresponding specification](http://docs.oasis-open.org/odata/odata-json-csdl/v4.0/odata-json-csdl-v4.0.html)\), intended to simplify client-side processing.

In the sections below, angled brackets indicate variable parts. The numbers next to each expression correspond to the numbered sections in the official specification, see [OData Version 4.0 Part 3: Common Schema Definition Language \(CSDL\) Plus Errata 03](https://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part3-csdl.html). Comments highlight optional properties, especially those that have certain default values.



## Design Rationale

We have prefixed constant property names with `"$"` as this is a legal first character for JavaScript identifiers, but not for OData simple identifiers. This way, **inline annotations** can be added via `"@<14.3.1 Annotation Term>#<14.3.2 Annotation Qualifier>" : <value>` everywhere without name clashes. This is shortly shown as `"@..." : <value>` below.

We assume that schema **aliases** have been resolved. We add a trailing dot after a schema's namespace; thus, the qualified name "A.B" cannot clash with schema namespace "A.B.". This trailing dot is also present for `"$Include"`, `"$TermNamespace"`, and `"$TargetNamespace"` values.

<code><b>$kind</b></code> has been added to each object with a \(qualified\) OData name and to almost each object which can be annotated via external targeting, but not to enum members! Actions and functions are arrays of overloads, and `$kind` has been added to each overload.

We assume each **enum member** to have a value via the fallback rule *"If no values are specified, the members are assigned consecutive integer values in the order of their appearance, starting with zero for the first member."*

Facets like `MaxLength`, `Precision`, and `Scale` are represented as numbers, if possible \(`"$Scale" : "variable"` is the only exception\). `DefaultValue` is represented as a string for lack of type information in the general case.

> ### Note:  
> `"$MaxLength" : "max"` is omitted and will be treated the same as an unspecified length on the client side.

We assume that a "17.5 **TargetPath**" used as "13.4.1 Attribute Path" or "13.5.3/13.6.3 Attribute EntitySet" is *normalized* in the following sense: a simple identifier is used instead of a target path for entity sets \(or singletons\) within the same container.

> ### Note:  
> We assume each annotation to specify a value, i.e. default values need to be repeated here. To allow conversion from XML to JSON on the client side \(w/o reading the vocabulary!\), we assume that `true` is the only default value which is relevant. Accordingly, `$DefaultValue` has been omitted for the time being.

Annotations with external targeting are represented as a `"$Annotations"` map inside the schema itself. This way, annotations belong to a schema and the "3.4 Element Include" feature can be implemented on the client side.

*Normalization:* For all EDM elements which allow both inline annotations and external targeting, we assume that only external targeting is used. This affects edm:ActionImport, edm:ComplexType, edm:EntityContainer, edm:EntitySet, edm:EntityType, edm:EnumType, edm:FunctionImport, edm:Member, edm:Singleton, edm:Term, edm:TypeDefinition, edm:NavigationProperty, edm:Property. The goal is to reduce cases that contain a mixture of inline annotations and external targeting to the bare minimum.

**Update for 4.01:** [\[OData-CSDL-JSON-v4.01\] 14.2.2 Target](https://docs.oasis-open.org/odata/odata-csdl-json/v4.01/csprd04/odata-csdl-json-v4.01-csprd04.html#sec_Target) now says, *"External targeting is possible for actions, functions, their parameters, and their return type, either in a way that applies to all overloads of the action or function or all parameters of that name across all overloads, or in a way that identifies a single overload."* Thus, we also normalize towards external targeting here.

We use the <code>"&lt;<b>key</b>&gt;@&lt;14.3.1 Annotation Term&gt;#&lt;14.3.2 Annotation Qualifier&gt;" : &lt;value&gt;</code> syntax for inline annotations in the following cases to avoid explicit object representations:

-   "7.2 Element ReferentialConstraint" with key `"<7.2.1 ReferentialConstraint Property>"`

-   "7.3 Element OnDelete" with key `"$OnDelete"` 

-   "14.3 Annotation" with key `"@<14.3.1 Annotation Term>#<14.3.2 Annotation Qualifier>"` \(yes, this does lead to a double at-sign `"@...#...@...#..."`!\)

-   "14.5.14.2 Element PropertyValue" with key `"<14.5.14.2.1 PropertyValue Property>"`


> ### Note:  
> For segments which represent a path, such as the keys for the `"$ReferentialConstraint"` and`"$NavigationPropertyBinding"` maps, you need to use URL encoding for the slash character \(`"%2F"`\).
> 
> > ### Example:  
> > Escaping the Slash Character
> > 
> > ```xml
> > <EntitySet Name="Customer" EntityType="...CustomerParameters">
> > <NavigationPropertyBinding Path="Set/Parameters" Target="Customer"/>
> > ```
> > 
> > ```js
> > oMetaModel.getObject('/Customer/$NavigationPropertyBinding/Set%2FParameters')
> > ```



## Metadata JSON Structure

The following JSON file represents the metadata document which corresponds to `GET <serviceRoot>/$metadata`. We assume it to be sent over the wire this way in future. In the first step, the transformation from XML to JSON can happen on the client side. Note that, in this case, **a wire format for annotations, references and includes is not needed! They are sent as XML, and the API on the client side will offer inlined annotations and resolve references and filter includes, etc.**

```json
{
  "$Version" : "<3.1.1 Edmx Version>",
  "$Annotations" : {
    "<14.2.1 Annotations Target>" : {
      // Note: "<14.3.2 Annotation Qualifier>" defaults to "<14.2.2 Annotations Qualifier>",
      // qualifiers are optional, "#" is omitted then
      "@<14.3.1 Annotation Term>#<14.3.2 Annotation Qualifier>" : <value> // constant or dynamic expression
      "@<14.3.1 Annotation Term>#<14.3.2 Annotation Qualifier>@..." : <value> // annotation of an annotation
    }
  },
  "$EntityContainer" : "<5.1.1 Schema Namespace>.<13.1.1 EntityContainer Name>", // root entity container for this $metadata document
  "$Reference" : {
    // server-relative, dereferencable URLs (to $metadata) only!
    "<3.3.1 Reference Uri>" : { "@..." : <value>,
      "$Include" : ["<3.4.1 Include Namespace>.", ...], // optional
      "$IncludeAnnotations" : [{
        "$TermNamespace" : "<3.5.1 IncludeAnnotations TermNamespace>.",
        "$Qualifier" : "<3.5.2 IncludeAnnotations Qualifier>", // optional
        "$TargetNamespace" : "<3.5.3 IncludeAnnotations TargetNamespace>." // optional
      }, ...] // optional
    }
  }, // optional
  "<5.1.1 Schema Namespace>." : {
    "$kind" : "Schema",
    "@..." : <value> // place inline annotations for schema itself here!
  },
  "<5.1.1 Schema Namespace>.<8.1.1 EntityType Name>" : {
    "$kind" : "EntityType",
    "$BaseType" : "<8.1.2 EntityType BaseType>", // optional
    "$Abstract" : true, // omit in case of default value: false
    "$OpenType" : true, // omit in case of default value: false
    "$HasStream" : true, // omit in case of default value: false
    "$Key" : [
      "<8.3.1 PropertyRef Name>", // in case no Alias is given
      {"<8.3.1 PropertyRef Alias>" : "<8.3.1 PropertyRef Name>"},
      ...
    ], // optional
    "<6.1.1 Property Name>" : {
      "$kind" : "Property",
      "$Type" : "<6.1.2 Property Type>",
      "$isCollection" : true, // omit in case of default value: false
      "$Nullable" : false, // omit in case of default value: true
      "$MaxLength" : <6.2.2 MaxLength>, // optional, number
      "$Precision" : <6.2.3 Precision>, // optional, number
      "$Scale" : <6.2.4 Scale> | "variable", // optional, number or fixed string
      "$Unicode" : false, // omit in case of default value: true
      "$SRID" : "<6.2.6 SRID>", // optional
      "$DefaultValue" : "<6.2.7 DefaultValue>" // optional
    },
    "<7.1.1 NavigationProperty Name>" : {
      "$kind" : "NavigationProperty",
      "$Type" : "<7.1.2 NavigationProperty Type>",
      "$isCollection" : true, // omit in case of default value: false
      "$Nullable" : false, // omit in case of default value: true
      "$Partner" : "<7.1.4 NavigationProperty Partner>", // optional
      "$ContainsTarget" : true, // omit in case of default value: false
      "$ReferentialConstraint" : {
        "<7.2.1 ReferentialConstraint Property>" : "<7.2.2 ReferentialConstraint ReferencedProperty>",
        "<7.2.1 ReferentialConstraint Property>@..." : <value>
      }, // optional
      "$OnDelete" : "<7.3.1. OnDelete Action>", // optional
      "$OnDelete@..." : <value>
    },
  },
  "<5.1.1 Schema Namespace>.<9.1.1 ComplexType Name>" : {
    "$kind" : "ComplexType",
    "$BaseType" : "<9.1.2 ComplexType BaseType>", // optional
    "$Abstract" : true, // omit in case of default value: false
    "$OpenType" : true, // omit in case of default value: false
    "<6.1.1 Property Name>" : {
      // see above
    },
    "<7.1.1 NavigationProperty Name>" : {
      // see above
    }
  },
  "<5.1.1 Schema Namespace>.<10.1.1 EnumType Name>" : {
    "$kind" : "EnumType",
    "$UnderlyingType" : "<10.1.2 EnumType UnderlyingType>", // omit in case of default value: Edm.Int32
    "$IsFlags" : true, // omit in case of default value: false
    "<10.2.1 Member Name>" : "<10.2.2 Member Value>" // use string value in case of base type Edm.Int64, else number
  },
  "<5.1.1 Schema Namespace>.<11.1.1 TypeDefinition Name>" : {
    "$kind" : "TypeDefinition",
    "$UnderlyingType" : "<11.1.2 TypeDefinition UnderlyingType>",
    "$MaxLength" : <11.1.3 MaxLength>, // optional, number
    "$Precision" : <11.1.3 Precision>, // optional, number
    "$Scale" : <11.1.3 Scale> | "variable", // optional, number or fixed string
    "$Unicode" : false, // omit in case of default value: true
    "$SRID" : "<11.1.3 SRID>" // optional
  },
  "<5.1.1 Schema Namespace>.<12.1.1 Action Name>" : [{
    "$kind" : "Action",
    "$IsBound" : true, // omit in case of default value: false
    "$EntitySetPath" : "<12.1.3 Action EntitySetPath>", // optional
    "$Parameter" : [{
      "$Name" : "<12.4.1 Parameter Name>",
      "$isCollection" : true, // omit in case of default value: false
      "$Type" : "<12.4.2 Parameter Type>",
      "$Nullable" : false, // omit in case of default value: true
      "$MaxLength" : <12.4.4 MaxLength>, // optional, number
      "$Precision" : <12.4.4 Precision>, // optional, number
      "$Scale" : <12.4.4 Scale> | "variable", // optional, number or fixed string
      "$SRID" : "<12.4.4 SRID>" // optional
    }, ...], // optional
    "$ReturnType" : {
      "$isCollection" : true, // omit in case of default value: false
      "$Type" : "<12.3.1 ReturnType Type>",
      "$Nullable" : false, // omit in case of default value: true
      "$MaxLength" : <11.1.3 MaxLength>, // optional, number
      "$Precision" : <11.1.3 Precision>, // optional, number
      "$Scale" : <11.1.3 Scale> | "variable", // optional, number or fixed string
      "$SRID" : "<11.1.3 SRID>" // optional
    } // optional
  }, ...],
  "<5.1.1 Schema Namespace>.<12.2.1 Function Name>" : [{
    "$kind" : "Function",
    "$IsBound" : true, // omit in case of default value: false
    "$IsComposable" : true, // omit in case of default value: false
    "$EntitySetPath" : "<12.2.4 Function EntitySetPath>", // optional
    "$Parameter" : [{
      // see above
    }, ...], // optional
    "$ReturnType" : {
      // see above
    }
  }, ...],
  "<5.1.1 Schema Namespace>.<13.1.1 EntityContainer Name>" : {
    "$kind" : "EntityContainer"
//      "$Extends" : "<13.1.2 EntityContainer Extends>", // not in the 1st step
    "<13.2.1 EntitySet Name>" : {
      "$kind" : "EntitySet",
      "$Type" : "<13.2.2 EntitySet EntityType>", // Note: renamed for consistency!
      "$IncludeInServiceDocument" : false, // omit in case of default value: true
      "$NavigationPropertyBinding" : {
        "<13.4.1 NavigationPropertyBinding Path>" : "<13.4.2 NavigationPropertyBinding Target>" // normalized
      } // optional
    },
    "<13.3.1 Singleton Name>" : {
      "$kind" : "Singleton",
      "$Type" : "<13.3.2 Singleton Type>",
      "$NavigationPropertyBinding" : {
        "<13.4.1 NavigationPropertyBinding Path>" : "<13.4.2 NavigationPropertyBinding Target>" // normalized
      } // optional
    },
    "<13.5.1 ActionImport Name>" : {
      "$kind" : "ActionImport",
      "$Action" : "<13.5.2 ActionImport Action>",
      "$EntitySet" : "<13.5.3 ActionImport EntitySet>" // optional, normalized
    },
    "<13.6.1 FunctionImport Name>" : {
      "$kind" : "FunctionImport",
      "$Function" : "<13.6.2 FunctionImport Function>",
      "$EntitySet" : "<13.6.3 FunctionImport EntitySet>", // optional, normalized
      "$IncludeInServiceDocument" : true // omit in case of default value: false
    }
  },
  "<5.1.1 Schema Namespace>.<14.1.1 Term Name>" : {
    "$kind" : "Term",
    "$isCollection" : true, // omit in case of default value: false
    "$Type" : "<14.1.2 Term Type>",
    "$BaseTerm" : "<14.1.3 Term BaseTerm>", // optional
//    "$DefaultValue" : "<14.1.4 Term DefaultValue>", // omit in case of default value: null
//    "$AppliesTo" : "<14.1.5 Term AppliesTo>", // JSON clients need not validate
    "$Nullable" : false, // omit in case of default value: true
    "$MaxLength" : <14.1.6 MaxLength>, // optional, number
    "$Precision" : <14.1.6 Precision>, // optional, number
    "$Scale" : <14.1.6 Scale> | "variable", // optional, number or fixed string
    "$SRID" : "<14.1.6 SRID>" // optional
  }
}
```



## Constant and Dynamic Expressions

**Constant Expressions**


<table>
<tr>
<th valign="top">

Expression

</th>
<th valign="top">

Options

</th>
<th valign="top">

Additional Information

</th>
</tr>
<tr>
<td valign="top">

14.4 Constant Expressions

</td>
<td valign="top">

`{"$Binary" : "T0RhdGE"}`

`{"$Date" : "2000-01-01"}`

`{"$DateTimeOffset" : "2000-01-01T16:00:00.000-09:00"}`

`{"$Decimal" : "3.14"}`

`{"$Duration" : "P11D23H59M59.999999999999S"}`

`{"$Guid" : "21EC2020-3AEA-1069-A2DD-08002B30309D"}`

`{"$TimeOfDay" : "21:45:00"}`

</td>
<td valign="top">

"Binary", "Date", "DateTimeOffset", "Decimal", "Duration", "Guid", "TimeOfDay" are objects with a single property that has a string value.

</td>
</tr>
<tr>
<td valign="top">

14.4.2 Expression `Bool` 

</td>
<td valign="top">

`false`

`true`

</td>
<td valign="top">

Is represented by the JavaScript boolean literals.

</td>
</tr>
<tr>
<td valign="top">

14.4.7 Expression `EnumMember` 

</td>
<td valign="top">

`{"$EnumMember" : 42}`

`{"$EnumMember" : "1234567890123456789"}`

</td>
<td valign="top">

Is represented like above object notation, but with a JavaScript number literal as long as the value is a safe integer, else with a string value.

</td>
</tr>
<tr>
<td valign="top">

14.4.8 Expression `Float` 

</td>
<td valign="top">

`3.1415926535`

`{"$Float" : "-INF"}`

`{"$Float" : "INF"}`

`{"$Float" : "NaN"}`

</td>
<td valign="top">

Is represented by a JavaScript number literal \(except for the `nanInfinity` ABNF rule which needs an object notation with a string value\).

</td>
</tr>
<tr>
<td valign="top">

14.4.10 Expression `Int` 

</td>
<td valign="top">

`42`

`{"$Int" : "1234567890123456789"}`

</td>
<td valign="top">

Is represented by a JavaScript number literal as long as the value is a safe integer. Else the above object notation is used.

</td>
</tr>
<tr>
<td valign="top">

14.4.11 Expression `String` 

</td>
<td valign="top">

`"Product Catalog"` 

</td>
<td valign="top">

Is represented by a JavaScript string literal.

</td>
</tr>
</table>

**Dynamic Expressions**


<table>
<tr>
<th valign="top">

Expression

</th>
<th valign="top">

Options and Additional Information

</th>
</tr>
<tr>
<td valign="top">

14.5.1 Comparison and Logical Operators

</td>
<td valign="top">

edm:Not is written as `{"$Not" : <value>, "@..." : <value>}`. All others are written like `{"$And" : [<value>, <value>], "@..." : <value>}` because they require two child expressions.

</td>
</tr>
<tr>
<td valign="top">

14.5.2 Expression `AnnotationPath` 

</td>
<td valign="top">

`{"$AnnotationPath" : "..."}` 

</td>
</tr>
<tr>
<td valign="top">

14.5.3 Expression `Apply` 

</td>
<td valign="top">

`{"$Apply" : [<value>, ...], "$Function" : "<14.5.3.1 Apply Function>", "@..." : <value>}` 

</td>
</tr>
<tr>
<td valign="top">

14.5.4 Expression `Cast` 

</td>
<td valign="top">

```js

{
"$Cast" : <value>,
"$isCollection" : true, // omit in case of default value: false
"$Type" : "<14.5.4.1 Cast Type>",
"$MaxLength" : <6.2.2 MaxLength>, // optional, number
"$Precision" : <6.2.3 Precision>, // optional, number
"$Scale" : <6.2.4 Scale> | "variable", // optional, number or fixed string
"$SRID" : "<6.2.6 SRID>", // optional
"@..." : <value>
}
```



</td>
</tr>
<tr>
<td valign="top">

14.5.5 Expression `Collection` 

</td>
<td valign="top">

`[<value>, ...]`

Simply an array. No additional properties, no annotations possible.

</td>
</tr>
<tr>
<td valign="top">

14.5.6 Expression `If` 

</td>
<td valign="top">

`{"$If" : [<value>, <value>, <value>], "@..." : <value>}`

Condition, then, else \(which is optional inside a "14.5.5 Expression Collection" only\).

</td>
</tr>
<tr>
<td valign="top">

14.5.7 Expression `IsOf` 

</td>
<td valign="top">

```js

{
"$IsOf" : <value>,
"$isCollection" : true, // omit in case of default value: false
"$Type" : "<14.5.7.1 IsOf Type>",
"$MaxLength" : <6.2.2 MaxLength>, // optional, number
"$Precision" : <6.2.3 Precision>, // optional, number
"$Scale" : <6.2.4 Scale> | "variable", // optional, number or fixed string
"$SRID" : "<6.2.6 SRID>", // optional
"@..." : <value>
}
```



</td>
</tr>
<tr>
<td valign="top">

14.5.8 Expression `LabeledElement` 

</td>
<td valign="top">

`{"$LabeledElement" : <value>, "$Name" : "<5.1.1 Schema Namespace>.<14.5.8.1 LabeledElement Name>", "@..." : <value>}` 

</td>
</tr>
<tr>
<td valign="top">

14.5.9 Expression `LabeledElementReference` 

</td>
<td valign="top">

`{"$LabeledElementReference" : "<QualifiedName name of a labeled element expression in scope>"}` 

</td>
</tr>
<tr>
<td valign="top">

14.5.10 Expression `Null` 

</td>
<td valign="top">

`null`

`{"$Null" : null, "@..." : <value>}`

The object notation is needed in case of inline annotations.

</td>
</tr>
<tr>
<td valign="top">

14.5.11 Expression `NavigationPropertyPath` 

</td>
<td valign="top">

`{"$NavigationPropertyPath" : "..."}` 

</td>
</tr>
<tr>
<td valign="top">

14.5.12 Expression `Path` 

</td>
<td valign="top">

`{"$Path" : "..."}` 

</td>
</tr>
<tr>
<td valign="top">

14.5.13 Expression `PropertyPath` 

</td>
<td valign="top">

`{"$PropertyPath" : "..."}` 

</td>
</tr>
<tr>
<td valign="top">

14.5.14 Expression `Record` 

</td>
<td valign="top">

The record itself is a map:

```js

{
  "$Type" : "<14.5.14.1 Record Type>",
  "<14.5.14.2.1 PropertyValue Property>" : <value>,
  "@..." : <value>
}
```



</td>
</tr>
<tr>
<td valign="top">

14.5.15 Expression `UrlRef` 

</td>
<td valign="top">

`{"$UrlRef" : <value>, "@..." : <value>}` 

</td>
</tr>
</table>

**Related Information**  


[OData JSON Format Version 4.0](http://docs.oasis-open.org/odata/odata-json-format/v4.0/os/odata-json-format-v4.0-os.html)

[OData JSON Format for Common Schema Definition Language \(CSDL\) Version 4.0](http://docs.oasis-open.org/odata/odata-json-csdl/v4.0/odata-json-csdl-v4.0.html)

[OData Version 4.0 Part 3: Common Schema Definition Language \(CSDL\) Plus Errata 03](https://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part3-csdl.html)

