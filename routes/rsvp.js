var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(request, response){
  response.render('rsvp', data);
};

/*
 * Controller to handle POST requests.
 */
exports.addRSVP = function (req, res) {
  var rsvpEmail = req.body.rsvpEmail;

  // Debug message: print to terminal whenever the POST request is made.
  console.log (rsvpEmail);

  // Add to current data.
  data.rsvp.push (rsvpEmail);

  // Send back some data so the browser knows it worked.
  res.send (rsvpEmail);
}
