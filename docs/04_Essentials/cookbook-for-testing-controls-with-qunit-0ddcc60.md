<!-- loio0ddcc60b05ee40dea1a3be09e8fee8f7 -->

# Cookbook for Testing Controls with QUnit



## Test Cases

You can use a factory function. To keep this pointer and have a descriptive message, you should use the test inside of the function and pass a test name to it.

Internally, we prefer to pass an object to the test for retrieving the values - it makes the test cases readable.

```js
// "Bar" required from module "sap/m/Bar"
// "nextUIUpdate" required from module "sap/ui/qunit/utils/nextUIUpdate"
function renderBarInPageTestCase(sTestName, oOptions) {
    QUnit.test(sTestName, async(assert) => { 
        // System under Test
        const oBar = new Bar();

        oBar.placeAt("qunit-fixture");

        // Act
        oBar.applyTagAndContextClassFor(oOptions.context);

        await nextUIUpdate();

        // Assert
       assert.strictEqual(oBar.getDomRef().nodeName, oOptions.expectedTag.toUpperCase());
       assert.ok(oBar.$().hasClass(oOptions.expectedClass), "The bar has the context class: " + oOptions.expectedClass);

        // Cleanup
        oBar.destroy();
    });
};

renderBarInPageTestCase("Should render the header context", {
    context : "header",
    expectedTag : "header",
    expectedClass : "sapMHeader-CTX"
});

renderBarInPageTestCase("Should render the header context", {
    context : "subheader",
    expectedTag : "header",
    expectedClass : "sapMSubHeader-CTX"
});

renderBarInPageTestCase("Should render the header context", {
    context : "footer",
    expectedTag : "footer",
    expectedClass : "sapMFooter-CTX"
});
```



## Testing User Interactions

When testing user interactions, you can use `sap.ui.test.qunit` to trigger events.

Here is an example for when a user presses [Esc\] on the select:

```js
// "Item" required from module "sap/ui/core/Item"
// "Select" required from module "sap/m/Select"
// "KeyCodes" required from module "sap/ui/events/KeyCodes"
// "nextUIUpdate" required from module "sap/ui/qunit/utils/nextUIUpdate"
// "QUnitUtils" required from module "sap/ui/qunit/QUnitUtils"
QUnit.test("Should close the popup menu if it is open and you press escape", async(assert) => {
    // Arrange
    const oConstructor = {
        items: [
        new Item({
            key: "0",
            text: "item 0"
        }),

        new Item({
            key: "1",
            text: "item 1"
        })
       ]
    };

    // System under test
    const oSelect = new Select(oConstructor);

    oSelect.placeAt("select-content");
    await nextUIUpdate();

    // Arrange after rendering
    oSelect.focus();
    const fnEscapeSpy = this.spy(oSelect, "onsapescape");
    const fnCloseSpy = this.spy(oSelect, "close");

    // Act
    QUnitUtils.triggerKeydown(oSelect.getDomRef(), KeyCodes.ESCAPE);

    // Assertion
    assert.strictEqual(fnEscapeSpy.callCount, 1, "onsapescape() method was called exactly once");
    assert.strictEqual(fnCloseSpy.callCount, 0, "close() method is not called");

    // Cleanup
    oSelect.destroy();
});
```



<a name="loio0ddcc60b05ee40dea1a3be09e8fee8f7__section_REREN"/>

## Rendering and Re-rendering Controls within Tests

In the rendering tests part, you have to place your control in the DOM. The best place to put it is the `qunit-fixture` div, since its content gets deleted after every test.

Make sure you destroy your control, since SAPUI5 will keep a reference to it and may also rerender it.

It's crucial that you wait for the Promise of `sap/ui/qunit/utils/nextUIUpdate` after each time you've caused a rerendering.

Executing the module returns a Promise which resolves after rendering. If you don't wait for the Promise, the DOM won't be updated yet.

You can use the following template to make sure that you remember to destroy your control:

```js
// "nextUIUpdate" required from module "sap/ui/qunit/utils/nextUIUpdate"
QUnit.test("Should do Something", async(assert) => {
    // Arrange
    const oConstructor = {

    };

    // System under Test
    const oMyControl = new nameSpace.myControl(oConstructor);
    oMyControl.placeAt("qunit-fixture");

    // Wait for the rendering before proceeding the test
    await nextUIUpdate();

    // Act

    // Assert

    // Cleanup
    oMyControl.destroy();
});
```

> ### Caution:  
> Using `nextUIUpdate` in combination with fake timers has some pitfalls. If fake timers are used, you need to pass the `clock` of the fake timer to the `nextUIUpdate` function call.
> 
> When working with a fake timer, keep in mind to either execute all timeouts before restoring the fake timer or to make sure that no rendering is pending. Not executing the pending timeouts can lead to issues within the following tests, for example by interupting the rendering lifecycle.

Example usage of `nextUIUpdate` in combination with a fake timer:

```js
// nextUIUpdate with fake timer
QUnit.test("Test with fake timers", async() => {
    this.clock = sinon.useFakeTimers();

    // Coding which requires rendering, e.g.
    const oButton = new Button();
    oButton.placeAt("qunit-fixture");

    await nextUIUpdate(this.clock);

    // Continue with your test

    // Release all timers at the end of the test
    // to avoid e.g. blocking the rendering within
    // following tests and to ensure that other
    // timeouts triggered through integration are
    // released
    oButton.destroy()
    this.clock.runAll();
    this.clock.restore();
}
```

In the example below, you will test to see whether the control fails to rerender. The control has overwritten the setter of the tooltip property to avoid triggering a re-rendering.

To test this, we add an `eventDelegate` to see how often the rendering function is called. We need to make sure that we wait for the next rendering:

```js
// "Label" required from module "sap/m/Label"
// "nextUIUpdate" required from module "sap/ui/qunit/utils/nextUIUpdate"
QUnit.test("Should suppress rerendering when tooltip is set", async(assert) => { 
    // Arrange
    const oConstructor = {
        tooltip : "foo"
        };
    const oRerenderingSpy = this.spy();

    // System under Test
    const oLabel = new Label(oConstructor);
    oLabel.placeAt("qunit-fixture");

    // wait for rendering
    await nextUIUpdate();

    oLabel.addEventDelegate({
        onBeforeRendering : oRerenderingSpy
    });

    // Act
    oLabel.setTooltip("bar");

   // wait for rendering
    await nextUIUpdate();

    // Assert
    assert.strictEqual(oRerenderingSpy.callCount, 0, "Did not rerender");
    assert.strictEqual(oLabel.getTooltip(), "bar", "Tooltip property got set");
    assert.strictEqual(oLabel.$().attr("title"), "bar", "Tooltip got updated");

    // Cleanup
    oLabel.destroy();
});
```



## Testing with Models

As your control should work together with models, it makes sense to do integration tests with a mock server. This is especially important for more complex controls, e.g. using paging. When testing with models, you need to make sure that you also set up/destroy the model itself inside your test. In the following, we will show an example using the OData V2 mock server:

```js

// "MockServer" required from module "sap/ui/app/MockServer"

function startMockServer(iRespondAfter) {
    // configure respond to requests delay
    MockServer.config({
        autoRespond : true,
        autoRespondAfter : iRespondAfter || 10
    });

    // create mockserver
    var oMockServer = new MockServer({
        rootUri : "http://sap.com/service/"
    });

    // start and return
    oMockServer.simulate("data/metadata.xml", "data");
    oMockServer.start();
    return oMockServer;
}

//Your test:
QUnit.test("Should do something with the model", function (assert) {
    //Arrange
    var oMockServer = startMockServer(0),
    
    // System under Test + Act

    //Cleanup
    oMockServer.stop();
});
```

When using the OData V2 mock server, you can use async tests since calling respond each time on the mock server does not help the readability of the test.

After setting up the OData V2 mock server, we set up the model as follows:

```js

// "ODataModel" required from module "sap/ui/model/v2/ODataModel"
// "jQuery" required from module "sap/ui/thirdparty/jquery"

function createODataModel(sURL, mSettings) {
    sURL = sURL || "http://sap.com/service/";
    var oModel = new ODataModel(sURL);
    
    mSettings = mSettings || {};
    jQuery.each(mSettings, function(sProperty, vValue) {
        sProperty = sProperty[0].toUpperCase() + sProperty.substring(1);
        oModel["set" + sProperty](vValue);
    });
    
    return oModel;
}

//Your test:
QUnit.test("Should do something with the model", function(assert) {
    // Arrange
    var oModel = createODataModel(),
    oMockServer = startMockServer(0),
    done = assert.async();

    // System under Test + Act + call done();

    // Cleanup
    oModel.destroy();
    oMockServer.stop();
});
```

You can now bind your model against your control and test whatever you want.

We use `clock.tick` to trigger the server response. If you didn't do this, the text of the label would still be empty:

```js
// "Label" required from module "sap/m/Label"
// "nextUIUpdate" required from module "sap/ui/qunit/utils/nextUIUpdate"

//Your test:
QUnit.test("Should do something with the model", async(assert) => {
    // Arrange
    const oModel = createODataModel(),
        oMockServer = startMockServer(50);

    // System under Test
    const oLabel = new Label({
        text : "{/myProperty}"
    });

    oLabel.placeAt("qunit-fixture");
    await nextUIUpdate();

    // Act - trigger the request
    sinon.clock.tick(50);

    // Assert
    assert.strictEqual("myExpected", oLabel.getText(), "The expected text was present");

    // Cleanup
    oModel.destroy();
    oMockServer.stop();
    sinon.clock.reset() 
});
```



<a name="loio0ddcc60b05ee40dea1a3be09e8fee8f7__section_ljv_b3r_rzb"/>

## Testing for a Theme Change

```js
sap.ui.require(["sap/ui/core/Theming"], (Theming) => {
    QUnit.test("Check if theme change was done correctly", function(assert){
        const myTestFunction = () => {
            // Test changes are applied
            Theming.detachApplied(myTestFunction);
        }
        Theming.setTheme("myTestTheme");
        Theming.attachApplied(myTestFunction);
    });
});
```

