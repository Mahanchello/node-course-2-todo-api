const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5bad0402e7ac511b3a2eb9cc11';

// if(!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
//  console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => { 
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}
//  console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));


User.findById('5baa9cf2a0177c0161ef826e').then((user) => {
	if (!user) {
		return console.log ('User not found');
	}
	console.log(JSON.stringify(user, undefined, 2));
},(e) => {
	console.log(e);
});
