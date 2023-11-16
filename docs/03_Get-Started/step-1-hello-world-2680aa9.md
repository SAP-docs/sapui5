<!-- loio2680aa9b16c14a00b01261d04babbb39 -->

# Step 1: Hello World!

As you know SAPUI5 is all about HTML5. Let’s get started with building a first “Hello World” with only HTML.



## Preview

![The browser shows the text "Hello World"](images/UI5_Walkthrough_Step_01_1dd4563.png)



## Coding

You can view and download all files at [Walkthrough - Step 1](https://ui5.sap.com/#/entity/sap.m.tutorial.walkthrough/sample/sap.m.tutorial.walkthrough.01).

1.  Create a folder on your local machine which will contain all the sources of the app we're going to build. We'll refer to this folder as the “app root folder”.
2.  Create a new file called `package.json` which will enable you to execute commands and consume packages from the[npm registry](https://www.npmjs.com/) via the npm command line interface. Enter the following content:

    **package.json \(New\)**

    ```
    {
      "name": "ui5.walkthrough",
      "version": "1.0.0",
      "description": "The UI5 walkthrough application",
      "scripts": {
          "start": "ui5 serve -o index.html"
      }
    }
    
    ```

3.  Create a new folder named `webapp` in the app root folder. It will contain all the sources that become available in the browser later. We'll refer to this folder as the "webapp folder".

4.  Create a new HTML file named `index.html` in your webapp folder and enter the following content:

    **webapp/index.html \(New\)**

    ```html
    <!DOCTYPE html>
    <html>
    <head>
    	<meta charset="utf-8">
    	<title>UI5 Walkthrough</title>
    </head>
    <body>
    	<div>Hello World</div>
    </body>
    </html>
    ```

    > ### Note:  
    > An HTML document consists basically of two sections: head and body. The head part will be used by the browser to process the document.
    > 
    > Using meta tags, we can influence the behavior of the browser. In this case, we tell the browser to use `UTF-8` as the document character set.
    > 
    > We also give our app a title that will be displayed in the browser. Our hard-coded title can be overruled by the app, for example to show a title in the language of the user. The body part describes the layout of the page. In our case, we simply display “Hello World” by using a `div` tag.

5.  Create a new file named `manifest.json` in the webapp folder; it's also known as the "app descriptor". All application-specific configuration options which we'll introduce in this tutorial will be added to this file. Enter the following content:

    **webapp/manifest.json \(New\)**

    ```
    {
      "_version": "1.58.0",
      "sap.app": {
        "id": "ui5.walkthrough"
      }
    }
    ```

    > ### Note:  
    > In this tutorial step, we only enter the most basic settings and parameters of the app descriptor file. In some development environments, you may get validation errors because some settings are missing; you can ignore them in this context. [Step 10: Descriptor for Applications](step-10-descriptor-for-applications-8f93bf2.md) explains the purpose of the file in general and describes some configuration options.

6.  Open a terminal in the app root folder and execute `npm i -D @ui5/cli` to install UI5 Tooling.

7.  Execute `ui5 init` in the app root folder.

8.  Execute `npm start` to start the web server and to open a new browser window hosting your newly created `index.html`.


