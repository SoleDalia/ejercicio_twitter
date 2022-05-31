const pages = {
  first: $("#step-1"),
  second: $("#step-2"),
  third: $("#step-3"),
  fourth: $("#step-4"),
};
const page_number = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
};
const message = $("#message");
const btn = $("#nextStep");

//This function will switch through the modal pages
function switchStep(current, next) {
  //Hide the current page
  current.removeClass("active").addClass("hidden");
  //Show the next page
  next.removeClass("hidden").addClass("active");
  //Update the message
  updateMessage();
}

//This function will update the message showing the current step
function updateMessage() {
  //Update the message to show the current step
  for (let key in pages) {
    if (pages[key].hasClass("active")) {
      message.text(`Step ${page_number[key]} of 4`);
    }
  }
}

//This function will call an a callback when the button is clicked
btn.click(function () {
  if (pages.first.hasClass("active")) switchStep(pages.first, pages.second);
  else if (pages.second.hasClass("active")) switchStep(pages.second, pages.third);
  else if (pages.third.hasClass("active")) switchStep(pages.third, pages.fourth);
  else if (pages.fourth.hasClass("active")) switchStep(pages.fourth, pages.first);
});
