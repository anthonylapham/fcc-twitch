$(document).ready(function() {
  var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

   /*for (var i = 0; i < users.length; i++) {
    getUserStream(users[i]);
  }*/

   users.forEach(function(user) {
    getUserStream(user);
  });

  function getUserStream(user) {
    $.ajax({
     type: 'GET',
     url: 'https://api.twitch.tv/kraken/streams/' + user,
     headers: {
       'Client-ID': '11dithbd4in0tzxu0d91v5phrdj9mm'
     },
     success: function(data) {
       console.log(data);
       if (!data.stream) {
         $('#display').append('<li>User is offline</li>');
       } else {
         $('#display').append('<li>' + data.stream.game + '</li>');
       }
     }
    })
    return
  }
});
