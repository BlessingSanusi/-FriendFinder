// ===============================================================================
// LOAD DATA

var friendsData = require("../app/data/friends");

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

    var userAns = req.body
    var userRes = userAns.scores
    var newArr = [];
    var diff;
    for (var i = 0; i < friendsData.length; i++) {
      diff = 0;
      for (var j = 0; j < userRes.length; j++) {
        diff += Math.abs(friendsData[i].scores[j] - userRes[j]);
      }
      newArr.push(diff);
    }

    var match = newArr.indexOf(Math.min(...newArr));
    friendsData.push(userAns);
    res.json(friendsData[match]);

  });
};