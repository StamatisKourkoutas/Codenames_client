import socketIOClient from "socket.io-client";

const endpoint = "https://codenames-serv.herokuapp.com";
const socket = socketIOClient(endpoint);

export default socket;