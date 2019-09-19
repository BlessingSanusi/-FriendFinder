// ===============================================================================
// LOAD DATA

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  //   app.get("/api/waitlist", function(req, res) {
  //     res.json(waitListData);
  //   });

  app.post("/api/friends", function (req, res) {

    var userAns = req.body;
    var userRes = userAns.scores;
    var avgScore = 40;
    var tempScore = 0;
    var newfriend = {};

    console.log(`New Friend score: ${userRes}`);


    for (var i = 0; i < friendsData.length; i++) {

      // For each score in the friend's scores array...
      for (var j = 0; j < friendsData[i].scores.length; j++) {
        tempScore += Math.abs(userRes[j] - friendsData[i].scores[j]);
      }

      // If difference is lower than record, update record and the "best match" and reset tempDiff. Else ignore.
      if (tempScore <= avgScore) {
        newfriend = friendsData[i];
        avgScore = tempScore;
      }
      tempScore = 0;
    };
    // Add user data to friends array
    friendsData.push(req.body);

    // Return the best matched friend object
    res.json(newfriend);
  });
};