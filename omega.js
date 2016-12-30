var queue = [];
var possibleStates = ['open','close','last','not-last'];

var optionToString = function(queueOption) {
	var strings = [
		'|   ',
		'    ',
		'L-- ',
		'Y-- '];
	var convertion = possibleStates.indexOf(queueOption);
	if(convertion > -1 && convertion < strings.length) {
		return strings[convertion];
	}
	return 'xxxx';
};

function Folder(name, path) {
	this.name = name;
	//this.path = path;
	this.subFolders = [];
}

var createFolderObject = function(path, name) {

    var fs = require("fs");
    var subdirs = [];

	var mainFolder = new Folder(name, path);

	var kolekcja = fs.readdirSync(path);
	var funkcja = function(file) {

        var filePath = path+'/'+file;

        var stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            mainFolder.subFolders.push(createFolderObject(filePath, file));
        } 

    };


	kolekcja.forEach(funkcja);

    return mainFolder;

};

var showLine = function(folderObj) {
	showQueue();
	showFolder(folderObj);
}

var showQueue = function() {
	
};

var listAllSubfolders = function(path,name) {
	showLine(createFolderObject(path,name));
};

// {
// 	name: 'Kat111',
// 	subfolders: []
// }

// OiPol
// 	/KatA
// 		/KatB
// 			/KatC
// 		/KatD

// 	{
// 		name: 'OiPol',
// 		subfolders: [
// 			{
// 				name: 'KatA',
// 				subfolders: [
// 					{
// 						name: 'KatB',
// 						subfolders: [
// 									{
// 								name: 'KatC',
// 								subfolders: []
// 							}
// 						]
// 					},
// 					{
// 						name: 'KatD',
// 						subfolders: []
// 					}

// 				]
// 			}
// 		]
// 	}

	

	




// -- OiPol - /Kat1 plik1 
// 	/Kat1 -	plik1 /Kat11 plik2 ... /Kat12
// 			/Kat11 - /Kat111 plik1 plik2


// /Kat2 plik2 plik3 /Kat3


// {
// 	name: 'OiPol',
// 	subfolders: [
// 		{
// 			name: 'Kat1'
// 			subfolders: [
// 				{
// 					name: 'Kat11',
// 					subfolders: [
// 						{
// 							name: 'Kat111',
// 							subfolders: []
// 						}
// 					]
// 				},
// 				{
// 					name: 'Kat12',
// 					subfolders: []
// 				}
// 			]
// 		}		
// 	]
// }
	

	

// 	OiPol
// 		/Kat1
// 			/Kat11
// 				/Kat111
// 			/Kat12 
// 		/Kat2
// 			/Kat21
// 			/Kat22
// 				/Kat221
// 		/Kat3

console.time('Wyszukiwanie');

var wynik = listAllSubfolders('c:\\project\\OiPol','OiPol');
console.log('Wynik dzialania funckji',JSON.stringify(wynik,null,4));

console.timeEnd('Wyszukiwanie');

// var catalog = {
// 	name: string
// 	sub: []
// };

// {
// 	name: 'my-project',
// 	path: '',
// 	sub: [{name: 'app',sub: []}, {name: 'brock', sub: []}]
// }

// drawLine();

// var x = 24;
// var currentDeep;
// for(var i=0 ; i< x; i++)
// {
// 	if(i=== x-1) {

// 	} else {

// 	}
// }
// ['pending','close','last']
// var quee = ['pending','close','not-last'];
