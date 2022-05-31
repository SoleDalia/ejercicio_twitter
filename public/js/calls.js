
const helpers = {
  innerTWEET: (tweet) => {
    return `
      <div class="tw-tweet">
    <div class="tw-tweet-input">
      <img src="https://via.placeholder.com/150" alt="" />
      <div class="tw-user-info">
        <a href="">Felipe Fontana</a>
        <span>@fontii 1h</span>
      </div>
    </div>
    <div class="tw-tweet-text">
      <p>
        ${tweet.text}
      </p>
    </div>
  </div>
  
      `
  },
  errorFeedback: (div, tweetBtn) => {
    //Make the border red
    div.addClass('border-danger');
    div.addClass('text-danger');
    if (tweetBtn) {
      tweetBtn.addClass('disabled');
    }
  }
}
$(document).ready(function () {
  getTweets();
});
$('#tweetInput').on('input', function () {
  const tweet = $('#tweetInput').val();
  if (tweet.length > 140) {
    helpers.errorFeedback($('#tweetInput'), $('#tweetBtn'));
    return false;
  } else {
    $('#tweetInput').removeClass('border-danger text-danger');
    $('#tweetBtn').removeClass('disabled');
    return true;
  }
});




function getTweets() {
  $.ajax({
    url: '/api/tweets',
    type: 'GET',
    success: function (response) {
      //Here we are going to loop through the response and append the data to the page.
      response.forEach(tweet => {
        $('#tweets').append(helpers.innerTWEET(tweet));
      });
    }
  });
}

function postTweet() {
  const tweet = $('#tweetInput').val();
  $.ajax({
    url: '/api/tweets',
    type: 'POST',
    data: {
      text: tweet
    },
    success: function (response) {
      $('#tweets').prepend(helpers.innerTWEET(response));
    }
  });
}


