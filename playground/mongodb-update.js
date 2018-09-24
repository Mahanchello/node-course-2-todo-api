const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {

	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
		console.log('Connected to MongDB server');
		const db = client.db('TodoApp');
		
		
		db.collection('Users').findOneAndUpdate({
			_id: new ObjectID('5ba17b0cfb0e9538bec3bad2')
		}, {
			$set: {
				name: 'Anastasiya'
		},
			$inc: {
				age: 1
			}
		}, {
			returnOriginal: false
		}).then ((result) => {
			console.log(result);
	});
		// client.close();
	});
