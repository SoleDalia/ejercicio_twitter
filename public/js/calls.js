
const helpers = {
  innerTWEET: (tweet) => {
    return `
    <div class="tw-tweet">
  <div class="tw-tweet-input">
    <img src="${tweet.author.photo}" alt="" />
    <div class="tw-user-info">
      <a href="/user/${tweet.author._id}">${tweet.author.firstname} ${tweet.author.lastname}</a>
      <span>@${tweet.author.username} 1h</span>
    </div>
  </div>
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
      ><div id="${tweet._id}" class="tw-tweet-icon danger"><i class="fa-regular fa-heart"></i></div
    ></a>
    <a
      ><div class="tw-tweet-icon primary"><i class="fa-solid fa-arrow-up-from-bracket"></i></div
    ></a>
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
      for (let i = 0; i < 20; i++) {
        $('#tweets').append(helpers.innerTWEET(response[i]));
      }
    }
  });
}
function getUserTweets() {
  $.ajax({
    url: '/api/tweets/get/' + window.location.pathname.split('/')[2],
    type: 'GET',
    success: function (tweet) {
      //Here we are going to loop through the response and append the data to the page.
      //Show only 20 tweets at a time.
      for (let i = 0; i < 20; i++) {
        $('#tweets').append(helpers.innerTWEET(tweet[i]));
      }
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

function postLike(_id) {
  //Obtiene el id del tweet

  //Llamada ajax
  $.ajax({
    url: '/api/tweets/like/' + _id,
    type: 'POST',
    success: function (response) {
      updateLikeButton(response);
    }
  })
}

function updateLikeButton(response) {
  console.log(`#${response.tweet._id}`);
  //Switch the icon
  if (response.liked) {
    //Cambiar el icono de like a unlike
    $(`#${response.tweet._id}`).html(`<i class="fa-solid fa-heart danger"></i>`);
  } else {
    //Cambiar el icono de unlike a like
    $(`#${response.tweet._id}`).html(`<i class="fa-regular fa-heart"></i>`);
  }
}

$(document).ready(function () {
  //Verify the location of the user
  if (window.location.pathname === '/home') {
    getTweets();
  } else if (window.location.pathname.includes('/user/')) {
    getUserTweets();
  }
});


