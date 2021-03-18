const mongoose = require('mongoose');
const db = require('../models');
require('dotenv').config();
const { ObjectId } = require('mongodb');

// This file empties the Books collection and inserts the books below

// const MONGODB_URI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds127260.mlab.com:27260/heroku_zpz7kd01`
// console.log(MONGODB_URI)
const MONGODB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/classroom?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useFindAndModify: false,
	useCreateIndex: true,
	useUnifiedTopology: true
});

const AsssignmentSeed = [
	{
		_id: new ObjectId('5d378db94e84753160e08b4e'),
		title: 'First Assignment',
		body: 'This is your first assignment'
	}
];

const AnnouncementSeed = [
	{
		_id: new ObjectId('5d378db94e84753160e08b4f'),
		title: 'seededAnnouncement title',
		body: 'seeded Announcement body'
	}
];
db.AssignmentModel.deleteMany({})
	.then(() => db.AssignmentModel.collection.insertMany(AsssignmentSeed))
	.then(data => {
		console.log(data.result.n + ' records inserted!');
		// process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});

db.AnnouncementModel.deleteMany({})
	.then(() => db.AnnouncementModel.collection.insertMany(AnnouncementSeed))
	.then(data => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
