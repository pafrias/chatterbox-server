var Rooms = {
  _storage: [],

  add: function(roomname) {
    this._storage.push(roomname);
    RoomsView.renderAll(this._storage);
  },

  get: function() {
    for (var message of Messages._storage) {
      this._storage.push(message.roomname);
    }
    this._storage = _.uniq(this._storage);
    RoomsView.renderAll(this._storage);
  }
};