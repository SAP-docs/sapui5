<!-- loio8bb4723002ef4dc19a065b2e30c5498f -->

# Programmatic Access to RTL

Some controls need to provide specific coding for right-to-left mode \(RTL\), for example, because they position or animate elements programmatically, and not via CSS. To read the SAPUI5 RTL configuration, use the following function call:

```js
sap.ui.require(["sap/base/i18n/Localization"], (Localization) => {
    const bRtl = Localization.getRTL();
});
```

