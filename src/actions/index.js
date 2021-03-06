import * as types from '../constants/ActionTypes'

//action creators for chat component- sending and receiving messages
export const outgoingMsg = (msg, sender, datetime, roomid) => ({
	type: types.OUTGOING_MSG,
	id: datetime,
	msg,
	sender,
	roomid
})

export const incomingMsg = (msg, sender, id, roomid) => ({
	type: types.INCOMING_MSG,
	id: id,
	msg,
	sender,
	roomid
})

//action creators for contacts component- registering users and listing all users online
export const addContact = (name, uid) => ({
	type: types.REGISTER_USR,
	id: uid,
	name
})

export const peerContact = (name, uid) => ({
	type: types.PEER_REGISTER,
	id: uid,
	name
})

export const removeUser = (uid) => ({
	type: types.REMOVE_USR,
	id: uid
})

export const onlineUsers = (onlineUsers) => ({
	type: types.USERS,
	onlineUsers
})

//action creators for room creation, joining and listing  rooms
export const userRooms = (rooms) => ({
	type: types.USER_ROOMS,
	 rooms
})

export const createRoom = (roomName, uid, name) => ({
	type: types.CREATE_ROOM,
	id: uid,
	roomName: roomName,
	roomUsers: [name]
})

export const peerCreate = (roomName, uid, name) => ({
	type: types.PEER_CREATE,
	id: uid,
	roomName: roomName,
	roomUsers: [name]
})

export const joinRoom = (uid, name) => ({
	type: types.JOIN_ROOM,
	id: uid,
	newUser: name
})

export const peerJoin = (uid, name) => ({
	type: types.PEER_JOIN,
	id: uid,
	newUser: name
})

export const removeUserFromRooms = (name) => ({
	type: types.RM_FROM_ROOMS,
	name: name
})

//action creators for call feeds
export const feeds = (feeds) => ({
	type: types.FEEDS,
	 feeds
})

export const addFeed = (stream, sender, roomid) => ({
	type: types.ADD_FEED,
	src: stream,
	sender: sender,
	roomid: roomid
})

export const peerFeed = (stream, sender, roomid) => ({
	type: types.PEER_FEED,
	src: stream,
	sender: sender,
	roomid: roomid
})
