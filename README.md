# DevConnector

This is an app written by Brad Traversy as part of his MERN Stack Front to Back course on Udemy.  In this version, we 
have tried to turn the app into a progressive web app.  In this regard, we have have updated the manifest.json file so that
you can add an app icon to the home screen of your mobile device, and we've turned on the service worker in CRA so that 
the app will load on your mobile device even when you do not have a wireless connection (provided that you have visited
the app once on your mobile device).

Going forward, additional features that we like to add are as follows:

1) Push Notifications -- in order to have the app perform more like a native app, we would need to enable push notifications.
    This can be done using service workers.  However, it was a challenge to update the service worker provided as part
    of CRA to enable push notifications.
   
2) Device Camera -- in order to have the app perform more like a native app, we would need to enable access to the device
   camera, take a photo and then save the photo to the user's comment feed (or perhaps a new user feed...new React 
   component...specifically for photos.
   
3) Background Sync -- in order to have the app perform more like a native app, we would need to enable background sync.
   This would allow a logged in user to work in the app (i.e., add/delete posts, add/delete comments and add/delete likes)
   while the mobile device is off-line and then, once a connection to the web is re-established, the app would be updated 
   to reflect the user's actions that have been performed while the mobile device was off-line.


App Info
Original Author: Brad Traversy, Traversy Media

Modified By:  Mark Greenquist

License
This project is licensed under the MIT License
