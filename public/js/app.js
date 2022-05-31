const modals = {
  first: {
    id: $("#step-1"),
    text: 'Next',
    class: 'btn-modal-next',
    type: 'button',
  },
  second: {
    id: $("#step-2"),
    text: 'Next',
    class: 'btn-modal-next2',
    type: 'button',
  },
  third: {
    id: $("#step-3"),
    text: 'Sign up',
    class: 'btn-modal-next3',
    type: 'button',
  },
  fourth: {
    id: $("#step-4"),
    text: 'OK',
    class: 'btn btn-dark',
    type: 'button',
  },
};
const page_number = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
};
const message = $("#message");
const btn = $("#nextStep");

//This function will switch through the modal modals
function switchStep(current, next) {
  //Hide the current page
  current.id.removeClass("active").addClass("hidden");
  //Show the next page
  next.id.removeClass("hidden").addClass("active");
  btn.text(next.text);
  btn.removeClass(current.class).addClass(next.class);
  btn.attr("type", next.type);
  //Update the message
  updateMessage();
}

//This function will update the message showing the current step
function updateMessage() {
  //Update the message to show the current step
  for (let key in modals) {
    if (modals[key].id.hasClass("active")) {
      message.text(`Step ${page_number[key]} of 4`);
    }
  }
}

//This function will call an a callback when the button is clicked
btn.click(function () {
  if (modals.first.id.hasClass("active")) switchStep(modals.first, modals.second);
  else if (modals.second.id.hasClass("active")) switchStep(modals.second, modals.third);
  else if (modals.third.id.hasClass("active")) switchStep(modals.third, modals.fourth);
  else if (modals.fourth.id.hasClass("active")) {
    if (btn.hasClass(modals.fourth.class)) {
      submitForm();
    }
  }
});

function submitForm() {
  //If the button is clicked, submit the form
  $("#signup-form").submit();
}

function openModal() {
  //Open the modal
  $("#modal-signin").modal("show");
}

$(document).ready(function () {
  //Open the modal
  openModal();
});