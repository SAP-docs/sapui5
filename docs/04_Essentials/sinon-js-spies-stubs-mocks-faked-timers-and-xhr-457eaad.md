<!-- loio457eaada68a24187858fd5e8b21a4892 -->

# Sinon.JS: Spies, Stubs, Mocks, Faked Timers, and XHR

By integrating Sinon.JS for QUnit, you can use spies, stubs, mocks, faked timers or faked XHR. For more information about using sinon.js, see the official documentation at `http://sinonjs.org/docs/`.

All you have to do is add a sinon section to the test suite configuration as shown below:

```js
sap.ui.define(function() {
	"use strict";
 
	return {
		name: "TestSuite for myapp",
		defaults: {
			qunit: {
				version: 2
			},
			sinon: {
				version: 4,
				qunitBridge: true,
				useFakeTimers: false
			}
		},

		// ...

	};
});
```

The variable `sinon` is now globally available in your test.

The following examples show you the basic way in which Sinon.JS can be used. These examples are adapted from the official Sinon.JS documentation available at `http://sinonjs.org/docs/`:



<a name="loio457eaada68a24187858fd5e8b21a4892__section_wn1_n3q_f1c"/>

## Spies

A simple spy test:

```js
/*global QUnit sinon */
sap.ui.define(["sap/m/Button"], function(Button) {
	 "use strict";

	 QUnit.test("Spy", 2, function(assert) {

	 	var callback = sinon.spy();
	 	var oButton = new Button();
	 	oButton.attachPress(callback);
	 	assert.ok(!callback.called, "Callback Spy not called yet");
	 	oButton.firePress();
	 	assert.ok(callback.called, "Callback Spy called");
	 	oButton.destroy();

	 });
});
```



<a name="loio457eaada68a24187858fd5e8b21a4892__section_bxx_43q_f1c"/>

## Stubs

A simple stub test:

```js
/*global QUnit sinon */
sap.ui.define([], function() {
 	"use strict";
 
 	QUnit.test("Stub", 1, function(assert) {
 		sinon.stub(jQuery, "ajax").yieldsTo("success", [1, 2, 3]);
 
 		jQuery.ajax({
 			success: function (data) {
 				assert.deepEqual(data, [1, 2, 3], "Right data set"); 
 			}
 		});
 		jQuery.ajax.restore();
 	});
})
```



<a name="loio457eaada68a24187858fd5e8b21a4892__section_mbs_q3q_f1c"/>

## Mocks

A simple mock test:

```js
/*global QUnit sinon */
sap.ui.define([], function() {
	 "use strict";

 	QUnit.test("Mock", 2, function(assert) {
 		var myAPI = { method: function () {} };
 
 		var mock = sinon.mock(myAPI);
		mock.expects("method").once().throws();
 
 		try {
 			myAPI.method();
 		} catch (exc) {
 			assert.ok(mock.verify(), "Mock function called and all expectations are fullfilled");
 		}
 		mock.restore();
 	});
});
```



<a name="loio457eaada68a24187858fd5e8b21a4892__section_FAKETIM"/>

## Faked Timers

A simple faked timer test:

```js
/*global QUnit sinon */
sap.ui.define([], function() {
 	"use strict";

 
 	QUnit.test("Basic", 1, function(assert) {
 		var oClock = sinon.useFakeTimers();
 		setTimeout(function() {
 			assert.ok(true, "Called without need of async test");
 		}, 800);
 		oClock.tick(800);
 		oClock.restore();
 	});
});
```

If you use `sinon.qunit`, it will automatically use fake timers by itself. Fake timers will prevent any `setTimeout/setInterval` function from being executed, unless you call `this.clock.tick(milliseconds)` in your test. This means that a mock server with auto-respond won't respond, and OPA won't be able to wait for controls.

In addition, control events might be fired inside a `setTimeout(, 0)`, so the event might not be triggered at all.

In general, fake timers should only be used if needed in specific test scenarios.

> ### Note:  
> Be aware that `sinon` v4 and below does not provide a mock for all stubbed performance APIs, e.g. `Performance.getEntriesByType` or properties such as `Performance.timeOrigin`. In case the code under test relies on these APIs, you need to provide them.
> 
> Keep in mind that fake timers affect each usage of `setTimeout`, `clearTimeout`, `setInterval`, `clearInterval`, `setImmediate`, `clearImmediate`, `process.hrtime`, `performance.now` \(when available\), and `Date`, also the ones **not** under your control, e.g triggered by the SAPUI5 framework.
> 
> Before restoring the fake timers, you should always execute any possibly pending callbacks via `clock.runAll()`.

```js
QUnit.test("Test with fake timers", assert() => {
    // Setup fake timer
    const timeOrigin = performance.timeOrigin;
    const clock = sinon.useFakeTimers();
    // Mock performance API in case it's used by the code under test
    performance.getEntriesByType = function() {
        return [];
    };
    performance.timeOrigin = timeOrigin;

    ...

    // Cleanup
    delete performance.getEntriesByType;
    delete performance.timeOrigin;
    // Execute all pending timer callbacks
    this.clock.runAll();
    this.clock.restore();
});
```



<a name="loio457eaada68a24187858fd5e8b21a4892__section_mfx_g3q_f1c"/>

## Faked XHR

A simple faked XHR test:

```js
/*global QUnit sinon */
sap.ui.define([], function() {
	"use strict";

	QUnit.module("Faked XHR", {
		beforeEach: function() {
			this.xhr = sinon.useFakeXMLHttpRequest();
			var requests = this.requests = [];

			this.xhr.onCreate = function (xhr) {
				requests.push(xhr);
			};
		},

		afterEach: function() {
			this.xhr.restore();
		}
	});

	QUnit.test("Basic", 2, function(assert) {
		var callback = sinon.spy();

		jQuery.ajax("test", {
			success: callback
		});

		assert.equal(1, this.requests.length, "Right number of requests");

		this.requests[0].respond(200, {
			"Content-Type": "application/json"
		}, '[{ "foo": "bar", "bar" : "foo" }]');
		assert.ok(callback.calledWith([{ "foo": "bar", "bar" : "foo" }]), "Data is called right");
	});
```

