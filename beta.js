var _getAllFilesFromFolder = function(dir) {

    var fs = require("fs");
    var results = [];

	var kolekcja = fs.readdirSync(dir);
	var funkcja = function(file) {

        var filePath = dir+'/'+file;

        var stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllFilesFromFolder(filePath));
            results.push(file);
        } 

    };

	kolekcja.forEach(funkcja);

    return results;

};


var wynik = _getAllFilesFromFolder('c:\\projectx');
console.log('Wynik dzialania funckji',wynik);


var catalog = {
	name: string
	sub: []
};

{
	name: 'my-project',
	path: '',
	sub: [{name: 'app',sub: []}, {name: 'brock', sub: []}]
}

drawLine();

var x = 24;
var currentDeep;
for(var i=0 ; i< x; i++)
{
	if(i=== x-1) {

	} else {

	}
}
['pending','close','last']
var quee = ['pending','close','not-last'];

var toDraw = '';
for(var i=0 ; i< quee.length; i++)
{
	
	switch(quee[i]) {
		case 'pending': toDraw += '|   ';
						break;
		case 'close': toDraw += '    ';
		break;
	}
	
}