// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	initCamera();  // camera initializer call
 	initMap();  // call initMap()
 	initGestures();
 	initRSVPForm();
}

// init jQuery gestures  
function initGestures() {
	// add gestures listener here

	$(function(){

		// Listen to judges image taphold event.
		$(".judge-img").bind("taphold", tapholdHandler);
		function tapholdHandler (event) {

			// Geth the id of the event source.
			var targetIDPrefix = event.target.id;
			console.log ("got prefix: " + targetIDPrefix);

			// Show bio.
			$("#" + targetIDPrefix + "-bio").show();
		}
	})
}

// init RSVP form submit listener
function initRSVPForm() {
  // add your code here

  // Submition handler.
  $('#rsvpForm').submit (function(e) {

  	// Prevent default submit + reload, we only want the submit part.
  	e.preventDefault();
  	console.log ("submitting form...");  // debug msg
  	var rsvpEmail = $("#rsvpEmail").val();

  	// Send the POST request.
  	$.post ('addRSVP', { rsvpEmail: rsvpEmail }, postCallback);
  });

  // Submition succeeds message.
  function postCallback (res) {
  	alert ("RSVP form successfullt submitted!");
  	$('#rsvpEmail').val('');  // clear form
  }
}