function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
        h = h - 12;
        ampm = " PM";
    } else if (h == 12){
        h = 12;
        ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };

  if(h==0) {
    h=12;
  }

    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

jQuery(function(){

$("#red").click(function() {
  $("#red").css("opacity", "0.9");
  }, function() {
  $("#red").css("opacity", "1");
  $("#orange").css("opacity", "0.5");
  $("#yellow").css("opacity", "0.5");
  $("#blue").css("opacity", "0.5");
});

$("#orange").click(function() {
  $("#orange").css("opacity", "0.9");
  }, function() {
  $("#red").css("opacity", "0.5");
  $("#orange").css("opacity", "1");
  $("#yellow").css("opacity", "0.5");
  $("#blue").css("opacity", "0.5");
});

$("#yellow").click(function() {
  $("#yellow").css("opacity", "0.9");
  }, function() {
  $("#red").css("opacity", "0.5");
  $("#orange").css("opacity", "0.5");
  $("#yellow").css("opacity", "1");
  $("#blue").css("opacity", "0.5");
});

$("#blue").click(function() {
  $("#blue").css("opacity", "0.9");
  }, function() {
  $("#red").css("opacity", "0.5");
  $("#orange").css("opacity", "0.5");
  $("#yellow").css("opacity", "0.5");
  $("#blue").css("opacity", "1");
});


});

function genQuote() {
  var randNum = Math.floor(Math.random() * 8) + 1;
  document.getElementById('quote').innerHTML = quotes[randNum];
  var tweetQuote = quotes[randNum].split(' ').join('%20');
  tweetQuote = tweetQuote.split('<br>').join('');
  tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
  $('.twitter-share-button').attr('href', tweetQuote);
}

//quote array
var quotes = ["Blank",
              "A Man Paints with his mind not with his hands <br> -Michaelangelo";
              "The Atonement of Jesus Christ makes the Savior’s invitation to “be ye therefore perfect, even as your Father which is in heaven is perfect” perfectly possible rather than frustratingly out of reach. <br> - Allen D. Haynie";
              "He Provided the way by his death. He showed us the way by his life.<br> - Kaela Lloyd";
              "That which holds the attention determines the action	William James";
              "The greatest discovery of my age is that men can change their circumstances by changing the attitude of their minds.<br> - William James";








             ];

//date
function startDate() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
}


