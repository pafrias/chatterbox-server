var Messages = { 
  _storage: [],
  
  newMessage: function(text, roomname) {
    // make a new object
    //assign user room and text keys
    //generate a createdAt string
    //post to server
    //on successful post, GET from setver and display new messages
    var message = {
      username: App.username,
      roomname: roomname,
      text: text,
      createdAt: Date.now()
    };
    Parse.create(message, () => {
      // Parse.readAll(() => {
      //   MessagesView.render();
      window.location.reload(true);
      //})
    });
  },

  fetchAll: function() {
    MessagesView.render(this._storage);
  },

  fetchRoom: function(room) {
    var result = [];
    for (var message of this._storage) {
      if (message.roomname === room) {
        result.push(message);
      }
    }
    MessagesView.render(result);
  }
  // stores local messages
  
  // push to server
  // fetch from server


};