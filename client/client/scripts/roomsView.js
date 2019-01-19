var RoomsView = {

  $addButton: $('#rooms button #add_button'),
  $changeButton: $('#rooms button #change_button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$addButton.on('click', RoomsView.handleSubmit);
    RoomsView.$changeButton.on('click', RoomsView.handleSelect);
    Rooms.get();
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var room = window.prompt('Name your room!');
    Rooms.add(room);
  },

  handleSelect: function(event) {
    event.preventDefault();
    if (RoomsView.$select.value === "") {
      Messages.fetchAll();
    } else {
      Messages.fetchRoom(RoomsView.$select.value);
    }
  },

  renderAll: function(rooms) { //all rooms [room1, room2, room3]
    //run render room on all rooms
    this.$select.append(`<option selected="selected"> ~ Select a Room ~ </option>`);
    for (var i = 0; i < rooms.length; i++) {
      this.renderRoom(rooms[i]);
    }
  },
  
  renderRoom: function(room) { //single room
    var roomName = _.template(`<option value = "<%- room %>"><%- room %></option>`);
    var trueName = roomName({room: room});
    this.$select.append(trueName);
  }

};