import socketIOClient from "socket.io-client";

/*const endpoint = "https://codenames-serv.herokuapp.com";*/
const endpoint = "http://localhost:4001/"
const socket = socketIOClient(endpoint);

export default socket;