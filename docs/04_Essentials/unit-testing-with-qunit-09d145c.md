<!-- loio09d145cd86ee4f8e9d08715f1b364c51 -->

# Unit Testing with QUnit

QUnit is a powerful, easy-to-use JavaScript unit testing framework. It is used by the jQuery, jQuery UI and jQuery Mobile projects and is capable of testing any generic JavaScript code. It supports asynchronous tests out-of-the-box.

> ### Note:  
> Before you begin setting up a QUnit test environment, read the background information and introduction to the QUnit test API itself, which is available on the external web site `http://api.qunitjs.com/`. This official QUnit documentation features a complete description of the QUnit test API and contains many examples.



## Why Does SAPUI5 Use QUnit Tests?

QUnit tests provide good support for asynchronous testing. These types of tests are often needed for UI functional tests, for example if you have to wait until rendering is done, animations are complete, or a backend call returns. In addition, a QUnit test page can be executed standalone in the browser without the need of an additional "tool". This makes the creation and execution of single QUnit tests much easier. Finally, QUnit is closely related to jQuery, which is also a fundamental part of SAPUI5.

-   **[Creating a QUnit Test Page](creating-a-qunit-test-page-7080029.md "")**  

-   **[Executing a QUnit Test](executing-a-qunit-test-a9c949c.md "")**  

-   **[Code Coverage Measurement](code-coverage-measurement-7ef3242.md "You can measure the code coverage for your test inside the
			Control.qunit.html page either via HTML or JavaScript code using
			Blanket.js.")**  
You can measure the code coverage for your test inside the `Control.qunit.html` page either via HTML or JavaScript code using `Blanket.js`.
-   **[Sinon.JS: Spies, Stubs, Mocks, Faked Timers, and XHR](sinon-js-spies-stubs-mocks-faked-timers-and-xhr-457eaad.md "By integrating Sinon.JS for QUnit, you can use spies, stubs, mocks, faked timers or faked XHR. For more information about using sinon.js, see the
		official documentation at http://sinonjs.org/docs/.")**  
By integrating Sinon.JS for QUnit, you can use spies, stubs, mocks, faked timers or faked XHR. For more information about using sinon.js, see the official documentation at `http://sinonjs.org/docs/`.
-   **[How to Test SAPUI5 Controls with QUnit](how-to-test-sapui5-controls-with-qunit-a6b0657.md "Comprehensive overview of QUnit testing for controls.")**  
Comprehensive overview of QUnit testing for controls.

