$(document).ready(function() {
  var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];

   /*for (var i = 0; i < users.length; i++) {
    getUserStream(users[i]);
  }*/

   users.forEach(function(user) {
    getUserStream(user);
  });

  function getUserStream(user) {
    $.ajax({
     type: 'GET',
     url: 'https://api.twitch.tv/kraken/channels/' + user,
     headers: {
       'Client-ID': '11dithbd4in0tzxu0d91v5phrdj9mm'
     },
     success: function(data) {
       $("#display").on("click", function(){
          window.open(data.url, "_blank");
       })
       console.log(data);
       if (!data.game) {
         $('#display').append('<li><img src=' +data.logo+ '>' +data.display_name+ ' is offline</li>'); //for users that aren't streaming
       } else {
         $('#display').append('<li><img src=' +data.logo+ '>' + data.display_name+ ' is playing '+ data.game + '</li>'); //for users that are streaming
       }
     }
    })
    return
  }
});
