nudge-webapp
============

Frontend for Nudge-Backend (http://github.com/kondeo/nudge-backend)

The frontend of nudge is programmed in JavaScript using the AngularJS framework. You will need fully working Node.JS (nodejs.org) installed on your machine, and the ability to execute "grunt serve".

The frontend of nudge connects to the backend for any functionality past static screens. Currently, without the backend you cannot get past the login gateway.

--------------

MVP FUNCTIONALITY --
(sorted by priority):   > for todo, x for complete

> Accounts:
	> Register
	> Login
	> Profile
	> Edit
	> Delete
	> Ratings/Reviews
> Events
	> Create
	> Edit
	> Delete
	> Basic search
	> RSVP
		> Accept
		> Decline

-------------

RELEASE FUNCTIONALITY --
(not a complete list, still in creation):

Release:
> Notifications work
> Can add friends
> Can see what friends are attending
> Can categorize events
> Can view events based on their category
> Can search events based on their category

  
-----------

Team: 

Jacob > Design
Aaron > Frontend dev
Julian > Backend dev

-----------

Ideas:

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
