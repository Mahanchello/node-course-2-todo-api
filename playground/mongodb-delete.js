const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {

	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
		console.log('Connected to MongDB server');
		const db = client.db('TodoApp');
		
		//deletemany
		// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
		// 	console.log(result);
		// });

		//deletOne
		// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => { 
		// 	console.log(result);
		// });

		//findAndDelete
		// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
		// 	console.log(result);
		// });


		// db.collection('Users').deleteMany({name: 'Anastasiya'}).then((result) => {
		// 	console.log(result);
		// });

		db.collection('Users').findOneAndDelete({_id: 123}).then((result) => { 
			console.log(result);
		});
		// client.close();
	});
