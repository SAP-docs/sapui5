<!-- loiod4e69addc9ee4a6088441840eb0af509 -->

# Aggregation

This control is defined by the `swipeContent` aggregation of the list or table. You can add any control as `swipeContent`, but keep in mind that your content cannot be higher than a list item. See the following examples:

-   Button `swipeContent`

    ```js
    
    <List
        headerText="Products"
        items="{/ProductCollection}" >
        <StandardListItem
          title="{Name}"
          description="{ProductId}"
          icon="{ProductPicUrl}" 
          iconDensityAware="false"
          iconInset="false" />
        <swipeContent>
          <Button
            text="Delete Item"
            type="Reject"
            press="handleReject" />
        </swipeContent>
      </List>
     
    ```

-   Control combination as `swipeContent`

    ```js
    
    new sap.m.List({
        swipeContent : new sap.m.HBox({
            items : [
          <List
        headerText="Products"
        items="{/ProductCollection}" >
        <StandardListItem
          title="{Name}"
          description="{ProductId}"
          icon="{ProductPicUrl}" 
          iconDensityAware="false"
          iconInset="false" />
        <swipeContent>
          <Button
            text="Delete Item"
            type="Reject"
            press="handleReject" />
        </swipeContent>
      </List>
    
    ```


