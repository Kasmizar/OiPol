var queue = [];
var  possibleStates = ['open','close','last','not-last'];

var optionToString = function(queueOption) {
	var strings = [
		'|   ',
		'    ',
		'L-- ',
		'Y-- '];
};



function folder(name,subfolders) {
	this.name = name;
	this.subfolders = subfolders;
}


var getAllFoldersFromFolder = function(dir) {

    var fs = require("fs");
    var results = [];

	var kolekcja = fs.readdirSync(dir);
	var funkcja = function(file) {

        var filePath = dir+'/'+file;

        var stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllFoldersFromFolder(filePath));
            results.push(file);
        } 

    };

	kolekcja.forEach(funkcja);

    return results;

};



console.time('Wyszukiwanie');
//var wynik = getAllFoldersFromFolder('c:\\project');
//console.log('Wynik dzialania funckji',wynik);
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
