# AlgaeCal Web Developer Test

Thank you for taking the time to take our test. We're excited to have you as a 
candidate and look forward to reviewing your results!


## Instructions
1. Clone this repo
2. Install the packages. ```npm install```
3. Run the server ```npm serve```

### Task 1: Fix the following issues on the page
1. The 3rd product bundle doesn't match the other two. It should have the blue box around it, but
the prices are not formatted correctly. Also "You Save $x" should be Red (#ff0000) for all
pricing bundles. And the dollar sign is missing in multiple places. The color of the \"Most Popular\"
wrapper should be #0196ae
2.  The video doesn\'t play when it is clicked on. We have set up a custom overlay image but a click
event needs to trigger the video to play. (see: https://wistia.com/support/developers/player-api)
3. Clicking on "Scientific References" creates a jerky transition. Please adjust it to work more like
the accordion of the FAQ above it.
5. There is a bubble over the 1 Month Bonebuilder Pack that says "0% Off" -- if the amount is 0, it doesn\'t
make sense to show the bubble. Hide (but do not delete) this bubble (in a real world page like this, the bubble 
could change to have a value >0 if a coupon were added).
6. The product boxes should all be the same height. For the "Most popular" product box, this means the interior
white box should line up in height with the other two product boxes.

### Task 2: 
1. Add a new section following the "As Seen On" section but preceding the pricing bundles. It should 
match the screen shot. The link should open up a modal window that populates with our 7-month guarantee.
2. Use an ajax request to populate this modal. The data that you need to request can be found here:
https://www.algaecal.com/wp-json/acf/v3/options/options ... populate it with the acf.7yr_full_copy 
3. Notice the guarantee contains a wistia video. Make sure this video loads and is playable.

### Task 3:
1. We encourage our customers to call us, but we aren't able to accept calls 24 hours a day. Our hours of operation
can be found in our api as well, https://www.algaecal.com/wp-json/acf/v3/options/options as acf.office_hours
2. In the header we have a message that says "Speak to our Bone Health Consultants!". When our call center
is closed, this message should be hidden. Don't forget about timezones.

## Tips:

* **Git:** be sure to commit often and use expressive messages on your commits.
* **Code Quality:** make sure your code is clear to someone who is experienced reading code. 
Use comments sparingly to add clarity where it is otherwise lacking. You can also add comments
to explain any choices or shortcuts you may have taken since this is a skills test. JS should
follow the [AirBnB style guide](https://github.com/airbnb/javascript).
* **Browser Compatibility:** the only requirement is that it must run in the latest Chrome browser, you are
encouraged to use modern features. It should be responsive, looking good on mobile and desktop and
everything in between.
* **Node Modules** Add any node modules you like. Make sure I can easily install them when I pull your
repo and run ```npm install```.
* **jQuery** Avoid using jQuery. We are currently in the process of converting our code from jQuery so we
would love to see a demonstration of your coding without jQuery. Unfortunately, Bootstrap modules are dependent
on jQuery, so do use it where *necessary*.