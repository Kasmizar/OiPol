module.exports = {
	name: 'Pierwszy pokój',	// map's name
	map: [	// array of objects
		[1,1,2,1,1,2,1],
		[1,0,0,0,1,0,1],
		[2,0,0,0,4,0,1],
		[1,1,1,3,1,0,1],
		[2,0,0,0,0,0,1],
		[1,1,1,1,1,3,1],
		],
	objects: {	//each types of objects
		'0': {
			name: 'Floor',
			type: 'object', // object
			symbol: function() { return this.item ? ',' : '.';},
			crossable: function() { return true},
			noise: 2,
			item: null
		},
		'1': {
			name: 'Wall`',
			type: 'object', // object
			symbol: function() { return '#';},
			crossable:  function() { return true}
		},
		'2': {
			name: 'Window',
			type: 'object', // object
			symbol: function() { return '*';},
			crossable:  function() { return true}
		},
		'3': {
			name: 'Door N-S',
			type: 'object', // object
			symbol: function() { return this.isOpen ? '|' : '_';},
			crossable:  function() { return true},
			noise: 2,
			isOpen: true,
			isLocked: true,
			Open: function(key) {}
		},
		'4': {
			name: 'Door E-W',
			type: 'object', // object
			symbol: function() { return this.isOpen ? '_' : '|';},
			crossable:  function() { return true},
			noise: 2,
			isOpen: true,
			isLocked: false
		}
	},
	objectsModifications: [], // list of modifications e.g. particlar door have to be opened
	items: [] // list of items available on the map
};