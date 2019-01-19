var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    event.preventDefault();
    
    var text = document.getElementById("message").value;

    Messages.newMessage(text, "testroom");
    //
    // 
    // get the text of the message, username, room, and date
    // send info to Messages.

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};

// handles the message input
// --> should/shouldn't make the object?
// 