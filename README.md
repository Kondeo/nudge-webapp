nudge-webapp
============

Frontend for Nudge-Backend (http://github.com/kondeo/nudge-backend)

The frontend of nudge is programmed in JavaScript using the AngularJS framework. You will need fully working Node.JS (nodejs.org) installed on your machine, and the ability to execute "grunt serve".

The frontend of nudge connects to the backend for any functionality past static screens. Currently, without the backend you cannot get past the login gateway.

--------------

<b>Install Requirements</b><br />

Incomplete list<br />
<br />
ndDialog - https://github.com/likeastore/ngDialog
-bower install ngDialog
<br />
Also need to include in app.js, and index.html (.js ad ngdialog default theme and ngdialog css)
<br />
may need to add "ngDialog": "0.3.12" to dependencies of bower.json and bower update

--------------

<b>MVP Functionality</b><br />
Sorted by priority<br />
Italics for complete.

> Accounts<br />
	> <i>Register</i><br />
	> <i>Login</i><br />
	> <i>Profile</i><br />
	> Edit Profile<br />
	> <i>Add Friends</i><br />
	> Remove Friends<br />
	> <i>Accept Friends</i><br />
	> <i>Deny Friends</i><br />
	> Delete Account<br />
	> Ratings/Reviews<br />
> Events<br />
	> <i>Create</i><br />
	> Edit<br />
	> Delete<br />
	> <i>Basic search</i><br />
	> RSVP<br />
		> Accept<br />
		> Decline<br />

-------------

<b>Release Functionality</b><br />
Incomplete list.

> Notifications work<br />
> Can see what friends are attending<br />
> Can categorize events<br />
> Can view events based on their category<br />
> Can search events based on their category


-----------

<b>Team</b><br />

Jacob > Design<br />
Aaron (torch2424)> Frontend dev ;)<br />
Julian > Backend dev

-----------

<b>Ideas</b>

Interactive tiles that have clickable titles or interactive content.
Tile areas that contain different tiles that are alike in type.
Tile areas can become tiles themselves as a sort of layered effect on devices where screen isnt large enough to display full tile area effectively.
Featured/Near you.
Nudge-O-Meter displays party insanity level based on parties you have attended, and based on features party hosts specify.
Possible dimming of tiles around the tile that is being hovered on? Creating a nice layered effect.
  -Blurring of tiles?
  -Maybe only add the effect once clicked
Definitely some form of filter for finding things near you that uses larger tile to display toggles
single tiles + double tiles
  -not sure how to display information in a simple manner to fit tile theme

Users can request an RSVP to events and hosts can accept or decline that request
User ratings and profile ranking. users can rank eachother as long as they have attended the same party

-----------

<b>License</b>

The license for this software is viewable in the LICENSE.md file in the root of this repository.
