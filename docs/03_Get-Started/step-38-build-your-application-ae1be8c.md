<!-- loioae1be8cc26064274bbc5925a9cd59640 -->

# Step 38: Build Your Application

In this step we're going to build our application and consume the speed of a built SAPUI5 application.



## Preview

  
  
**The UI5 application is built and served**

![The overview page of the application. Contains a Hello World header with buttons and a text input. The lower part shows list of invoices with details, grouped by vendor names.](images/UI5_Walkthrough_Step_38_fb12cea.png "The UI5 application is built and served")



<a name="loioae1be8cc26064274bbc5925a9cd59640__section_uxj_4h4_tyb"/>

## Coding

You can view and download all files at [Walkthrough - Step 38](https://ui5.sap.com/#/entity/sap.m.tutorial.walkthrough/sample/sap.m.tutorial.walkthrough.38).



<a name="loioae1be8cc26064274bbc5925a9cd59640__section_vxj_4h4_tyb"/>

## package.json

We introduce a new npm script called "build", which executes a UI5 CLI build. As command-line arguments, we add `-all` to also build the framework dependencies \(e.g. `sap.ui.core`, etc.\) and `--clean-dest` to clear any output of a previous build from the `dist` folder before creating the new build result.

```
{
  "name": "ui5.walkthrough",
  "version": "1.0.0",
  "description": "The UI5 walkthrough application",
  "scripts": {
      "start": "ui5 serve -o test/mockServer.html",
      "build": "ui5 build --all --clean-dest"
  },
  "devDependencies": {
    "@ui5/cli": "^3",
    "ui5-middleware-simpleproxy": "^3"
  }
}
```

Open a terminal and execute `npm run build` in the project root folder.

Congrats! You have successfully built your UI5 application.



<a name="loioae1be8cc26064274bbc5925a9cd59640__section_f2r_rh4_tyb"/>

## Install a Local Web Server

To test the built result, we can serve the build output locally. To do this, we have to add a local web server hosting the built resources. For this tutorial we choose an npm package called [local-web-server](https://www.npmjs.com/package/local-web-server).

Therefore, we have to install the new package by executing `npm i -D local-web-server`.

To actually use the newly added web server, we have to add a new script to our `package.json` which we'll call `serve-dist`. This script starts the `local-web-server` by pointing to the UI5 build output located in the `dist` folder of our project. The `--compress` flag optimizes the responses sent by the server to the client.



<a name="loioae1be8cc26064274bbc5925a9cd59640__section_cxw_th4_tyb"/>

## package.json

```
{
  "name": "ui5.walkthrough",
  "version": "1.0.0",
  "description": "The UI5 walkthrough application",
  "scripts": {
      "start": "ui5 serve -o test/mockServer.html",
      "build": "ui5 build --all --clean-dest",
      "serve-dist": "ws --compress -d dist --open"
  },
  "devDependencies": {
    "@ui5/cli": "^3",
    "local-web-server": "^5",
    "ui5-middleware-simpleproxy": "^3"
  }
}
```

Now it's time to start the server by executing `npm run serve-dist` in a terminal in the project root folder. Your default browser opens automatically and the built application is hosted. The `local-web-server` does not offer proxy capabilities so far, nor does it allow to open a specific HTML file in the browser. To display any actual data, it is therefore necessary to open the `test/mockServer.html` file in the browser instead of the `index.html`.



<a name="loioae1be8cc26064274bbc5925a9cd59640__section_u12_lby_tfb"/>

## Congratulations!

You've completed the walkthrough, good job! You should now be familiar with all the major development paradigms and concepts of SAPUI5. Our other tutorials focus on particular aspects of SAPUI5 and some advanced topics, so if you want to dive deeper into specific topics, feel free to explore!

**Related Information**  


[UI5 CLI documentation](https://ui5.github.io/cli/stable/)

