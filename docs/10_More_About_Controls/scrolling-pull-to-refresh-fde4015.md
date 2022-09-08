<!-- loiofde40159afce478eb488ee4d0f9ebb99 -->

# Scrolling: Pull to Refresh

The SAPUI5 mobile library supports the pull down to refresh functionality that allows users to refresh lists or page content with fresh data from server.

To implement it, create a `PullToRefresh` control and put it as the first control into a page or a scroll container that contains the list that needs to be refreshed.

Example:

```js

var pullToRefresh = new sap.m.PullToRefresh({ description: getLastUpdatedTime(), refresh: function(){
    pullToRefresh.setDescription("loading from server..."); 
  //request new data from server     
  getNewData({ 
    // when data comes from server  
    onSuccess: {
      pullToRefresh.hide();
      pullToRefresh.setDescription(getLastUpdatedTime());
      redrawList(); } }); }; 
```

The application should request new data on the refresh event and call the hide method when the data is received and the list is refreshed. You can provide a URL to a custom logo image with customIcon or switch display of logo of by setting showIcon to false. The first line of text "Pull to refresh" is standard and cannot be changed. However, you may set an optional description text to display, for example, the last update time.

> ### Note:  
> `PullToRefresh` control is part of the scroll area and therefore its height is reflected in the scroll bar calculation and display. The user can see that the page can be scrolled down to reveal the pull-down area.



<a name="loiofde40159afce478eb488ee4d0f9ebb99__section_N10030_N10011_N10001"/>

## Carousel

Pull to Refresh does not work with a Carousel if both are contained in a page: in order to make Pull to Refresh work, the page has to enable scrolling which leads to problems with the Carousel \(Carousel not visible\). Suggested Workaround: Add a `sap.m.PullToRefresh` instance to each page that you add to your Carousel.

**Related Information**  


[API Reference: `sap.m.PullToRefresh`](https://ui5.sap.com/#/api/sap.m.PullToRefresh)

