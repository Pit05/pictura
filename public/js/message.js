/**
 * Created by Njara on 02/02/2015.
 */
function  sendMessage(){
    $('form').submit(function(){
        socket.emit('chat message', $('#m').val());

        //    console.log($('#m').value);
        $('#m').val('');
        return false;
    });
    socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg));
    });
}