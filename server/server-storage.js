class Storage {
  constructor() {
    this._rooms = {
      allRooms: []
    };
    this._Ids = {};
  }

  // Purpose: retrieve all messages.
  retrieveAll() {
    return this._rooms.allRooms;
  }
  // Purpose: retrieve messages filtered by room.
  retrieve(room) {
    if(this._rooms[room]) {
      return this._rooms[room];
    } else {
      throw 'It appears you have made a mistake. Lol.'
    }
  }
  
  // Purpose: assign processed message to roomname
  // and add to all messages.
  add(message) {
    if(!message.roomname || message.roomname === '') {
      message.roomname = 'lobby';
    }
    message.objectId = this.generateId();
    this._rooms.allRooms.push(message);
    if(!this._rooms[message.roomname]) {
      this._rooms[message.roomname] = [message];
    } else {
      this._rooms[message.roomname].push(message);
    }     
  
  }
  
  // Purpose: generate unique id.
  generateId() { 
    var id = "";
    while (this._Ids[id] || id.length === 0) { 
      var num = Math.floor(Math.random() * 26 + 97);
      id += String.fromCharCode(num);
    }
    this._Ids[id] = id;
    return id;
  }
}

var exports = module.exports = {};
exports.Storage = Storage;