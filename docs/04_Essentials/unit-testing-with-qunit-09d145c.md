<!-- loio09d145cd86ee4f8e9d08715f1b364c51 -->

# Unit Testing with QUnit

QUnit is a powerful, easy-to-use JavaScript unit testing framework. It is used by the jQuery, jQuery UI and jQuery Mobile projects and is capable of testing any generic JavaScript code. It supports asynchronous tests out-of-the-box.

> ### Note:  
> Before you begin setting up a QUnit test environment, read the background information and introduction to the QUnit test API itself, which is available on the external web site `http://api.qunitjs.com/`. This official QUnit documentation features a complete description of the QUnit test API and contains many examples.



## Why Does SAPUI5 Use QUnit Tests?

QUnit tests provide good support for asynchronous testing. These types of tests are often needed for UI functional tests, for example if you have to wait until rendering is done, animations are complete, or a backend call returns. In addition, a QUnit test page can be executed standalone in the browser without the need of an additional "tool". This makes the creation and execution of single QUnit tests much easier. Finally, QUnit is closely related to jQuery, which is also a fundamental part of SAPUI5.

