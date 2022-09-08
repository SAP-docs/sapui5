<!-- loio20f6ea7552c34e248ba7bd4a1d28565b -->

# Troubleshooting



<a name="loio20f6ea7552c34e248ba7bd4a1d28565b__section_vzn_wkf_2fb"/>

## How do I get the new Logger module on the browser console?

`jQuery.sap.log` is currently still available and the module `sap/base/Log` is not yet globally available. So, if a developer wants to set a log level with the new module on the console, additional code is required.

Old:

```
jQuery.sap.log.setLevel(3);
// OR
jQuery.sap.log.setLevel(jQuery.sap.log.Level.INFO);
```

New:

```
sap.ui.require("sap/base/Log").setLevel(3);
// OR
var Log = sap.ui.require("sap/base/Log"); Log.setLevel(Log.Level.INFO);
```



<a name="loio20f6ea7552c34e248ba7bd4a1d28565b__section_unv_wkf_2fb"/>

## How can I mock or spy the new modules?

The new modules are no longer global. Spying or mocking them on `jQuery.sap.*` does not work. The module has to be loaded with `sap.ui.require`:

```

sap.ui.require(["sap/base/Log"],function(Log){

    QUnit.test("My Test", function(assert) {

        var oLogSpy = sinon.spy(Log, "warning");

        ...

        assert.equal(oLogSpy.callCount, 1, "Warning should be logged");

        Log.warning.restore();

    });

});

```

> ### Note:  
> Some of the new modules were changed from objects to functions, for example `sap/base/util/uid` and `sap/base/strings/hash`. This means that the export of a module is used for import into other modules. Each importing module has its own reference to the original export. The test can change its own reference, but not the reference that other modules have obtained already. The value of the reference \(the function\), however, is always the same.
> 
> Until further testing capabilities are available, you should write the tests in a way that it is not necessary to mock them, because they are used inside the actual API, which should be tested instead.

