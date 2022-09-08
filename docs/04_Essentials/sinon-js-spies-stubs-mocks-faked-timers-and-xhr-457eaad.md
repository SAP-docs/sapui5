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

