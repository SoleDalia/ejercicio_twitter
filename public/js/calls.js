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
<<<<<<< HEAD
  <div class="tw-tweet-text">
    <p>${tweet.text}</p>
  </div>
  <div class="tw-tweet-footer">
    <a
      ><div class="tw-tweet-icon primary">
        <i class="fa-regular fa-comment"></i></div
    ></a>
    <a
      ><div class="tw-tweet-icon success"><i class="fa-solid fa-retweet"></i></div
    ></a>
    <a onclick="postLike('${tweet._id}')"
      ><div id="${tweet._id}" class="tw-tweet-icon danger"><i class="fa-regular fa-heart"><span class="tw-counter"></span></i></div
    ></a>
    <a
      ><div class="tw-tweet-icon primary"><i class="fa-solid fa-arrow-up-from-bracket"></i></div
    ></a>
  </div>
</div>
`
=======
  
      `
>>>>>>> eb20a24fad7708100640890df15c19c2bc65ba55
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


<<<<<<< HEAD
=======
$(document).ready(function () {
  getTweets();
});
>>>>>>> eb20a24fad7708100640890df15c19c2bc65ba55
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
<<<<<<< HEAD
      for (let i = 0; i < 20; i++) {
        response.tweets[i].liked = response.tweets[i].likes.includes(response.user);
        $('#tweets').append(helpers.innerTWEET(response.tweets[i]));
        updateLikeButton(response.tweets[i], response.tweets[i].liked);
        updateLikeCounter(response.tweets[i]);
      }
    }
  });
}

function getUserTweets() {
  $.ajax({
    url: '/api/tweets/get/' + window.location.pathname.split('/')[2],
    type: 'GET',
    success: function (tweet) {
=======
>>>>>>> eb20a24fad7708100640890df15c19c2bc65ba55
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

<<<<<<< HEAD
function postLike(tweetId) {
  //Llamada ajax
  $.ajax({
    url: '/api/tweets/like/' + tweetId,
    type: 'POST',
    success: function (response) {
      updateLikeButton(response.tweet, response.liked);
      updateLikeCounter(response.tweet);
    }
  })
}

function updateLikeButton(tweet, liked) {
  //Switch the icon
  if (liked) {
    //Cambiar el icono de like a unlike
    $(`#${tweet._id}`).html(`<i class="fa-solid fa-heart danger"><span class="tw-counter"></span></i>`);
  } else {
    //Cambiar el icono de unlike a like
    $(`#${tweet._id}`).html(`<i class="fa-regular fa-heart"><span class="tw-counter"></span></i>`);
  }
}

function updateLikeCounter(tweet) {
  $.ajax({
    url: '/api/tweets/' + tweet._id,
    type: 'GET',
    success: function (response) {
      const counter = response.likes.length;
      if (counter > 0) {
        $(`#${response._id}`).find('.tw-counter').text(response.likes.length);
      }
    }
  });
}

$(document).ready(function () {
  //Verify the location of the user
  if (window.location.pathname === '/home') {
    getTweets();
  } else if (window.location.pathname.includes('/user/')) {
    getUserTweets();
    isFollowing();
  }
});

function isFollowing() {
  $.ajax({
    url: '/api/user/isFollowing/' + window.location.pathname.split('/')[2],
    type: 'POST',
    success: function (isFollowing) {
      if (isFollowing) $('#followBtn').text('Unfollow');
      else $('#followBtn').text('Follow');
    }
  });
}
=======
>>>>>>> eb20a24fad7708100640890df15c19c2bc65ba55

$('#followBtn').click(function () {
  $.ajax({
    url: '/api/user/followHandler/' + window.location.pathname.split('/')[2],
    type: 'POST',
    success: function (isFollowing) {
      if (isFollowing) {
        $('#followBtn').text('Unfollow')
      } else {
        $('#followBtn').text('Follow')
      }
    }
  });
});