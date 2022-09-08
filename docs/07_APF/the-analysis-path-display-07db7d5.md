<!-- loio07db7d53b5c19456e10000000a423f68 -->

# The Analysis Path Display

The analysis path display is the UI area where thumbnails of all analysis steps of the current analysis path are displayed. In addition, actions such as editing analysis paths or saving them are performed in the analysis path display. It consists of the following subcomponents:

-   Analysis path title

    Contains the name of the analysis path and the icon to open the actions menu.

    Once an analysis path has been saved, the name of the saved path is displayed. Unsaved changes are indicated by an asterisk in front of the path name.

    The actions menu offers the following options:

    -   *New*

    -   *Open*

    -   *Save*

    -   *Save As*

    -   *Delete*

    -   *Print*


-   Analysis path carousel

    Contains the thumbnails and titles of the analysis steps. More precisely, the carousel renders previews of the analysis step instances that are displayed in the representation container. It also provides the capabilities for adding, rearranging, and deleting analysis steps.


The analysis path controller manages the analysis path with its analysis steps. It provides the APIs to add, delete, and rearrange analysis steps, propagate filters, invalidate path, and recalculation of filters.

