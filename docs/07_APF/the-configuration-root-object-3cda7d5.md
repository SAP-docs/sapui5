<!-- loio3cda7d53b5c19456e10000000a423f68 -->

# The Configuration Root Object

The configuration root object encapsulates all configuration objects that represent a function and that exist as runtime objects. The format is as follows:

```

{
  steps : [ <step> | <hierarchicalStep>* ],
  requests : [ <request>* ],
  bindings : [ <binding>* ],
  categories : [ <category>* ],
  representationTypes : [ <representationType>* ],
  facetFilters : [ <facetFilter>* ],    // optional
  smartFilterBar : <smartFilterBarConfiguration>,    // optional
  navigationTargets : [ <navigationTarget>* ],    // optional
  configHeader : <configurationInformation>
 }
```

> ### Note:  
> The notation <code>[ <i class="varname">&lt;type&gt;</i>* ]</code> indicates an array of one or more elements.
> 
> The configuration can have either facet filters or a smart filter bar, not both.

