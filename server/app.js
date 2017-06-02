const express = require('express');  //grabbing modules from the package.json file
const cors = require('cors');		//grabbing modules from the package.json file

const app = express(); //creating instance of express --

app.use(cors());

const plantStats = [{
	name: 'Beans',
	seeding: 'June',
	harvest: 'September'
}, {
	name: 'Beets',
	seeding: 'May',
	harvest: 'September',
}, {
	name: 'Tomato',
	seeding: 'April',
	harvest: 'August',
}, {
	name: 'Bell Pepper',
	seeding: 'April',
	harvest: 'August',
}, {
	name: 'Cucumber',
	seeding: 'June',
	harvest: 'September',
}, {
	name: 'Lettuce',
	seeding: 'April',
	harvest: 'September',
}, {
	name: 'Peas',
	seeding: 'May',
	harvest: 'September',
}, {
	name: 'Broccoli',
	seeding: 'May',
	harvest: 'October',
}, {
	name: 'Brussel Sprout',
	seeding: 'May',
	harvest: 'October',
}, {
	name: 'Spinach',
	seeding: 'May',
	harvest: 'October',
}];

app.get('/plantStats', (request, response) => {   //endpoint through a GET request
	response.json(plantStats); //turned to string under the hood and sent off
})

const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log("Listening on port 3000!"); //trigger point for the server to actually make sure we are using that server
})
