var MessageView = {

  render: _.template(
    `<div class="message">
        <div class="username"><%- username %></div>
        <div class="text"><%- text %></div>
        <div class="room"><%- roomname %></div>
      </div>`)

};