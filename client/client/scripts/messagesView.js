var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Messages.fetchAll();
  },
  
  render: function(messages) { //expect array
    /*
    for every message 
    render all messages that match the room
    */

    this.$chats.html('');
    for (var i = 0; i < messages.length; i++) {
      this.renderMessage(messages[i]);
    }
  },
  
  renderMessage: function(message) { //individual messages
    if (message.username === undefined) {
      return;
    }
    if (message.text === undefined) {
      return;
    }
    if (message.roomname === undefined) {
      return;
    } else { 
      this.$chats.append(MessageView.render(message));
    }
  },
  
};