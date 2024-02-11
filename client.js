const sendbutton = document.getElementById('send')
const input = document.getElementById('message')
const textbox = document.getElementById('chats')
var socket = io()

sendbutton.addEventListener('click',(e)=>{
socket.emit('chat',input.value)
var ele = document.createElement('p')
ele.innerText = input.value
ele.setAttribute('class','mymessage')
textbox.append(ele)
input.value = ''
})

socket.on('chat',(msg)=>{
    var ele = document.createElement('p')
    ele.innerText = msg
    ele.setAttribute('class','clientmessage')
    textbox.append(ele)
})