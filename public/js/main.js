'use strict';

$(()=>{
  // console.log("jquery working");
  let socket = io.connect();

  $('#sendButton').on('click', function(){
    let name = $('#name').val();
    let message = $('#message').val();
    $('#message').val(' ');

    // console.log("message: ", message);

    socket.emit('sendMessage', {
      message: message,
      name: name
    });
  })

  socket.on('newMessage', function(message){
    console.log("message: ", message);
    let $li = $('<li>').text(`${message.name} - ${message.message}`);
    $('#chat').append($li);
  })
});
