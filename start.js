var path = require('path');
var fs = require('fs');
// Read files async:


// show all available map, if parameter pass - check if selected map is valid and then start game
if(!process.argv[2]) {
	fs.readdir('./maps', function (err, files) {
    // "files" is an Array with files names
	    if(err) {
			if(err.code === 'ENOENT') {
				console.log('[ERROR] Nie znaleziono katalogu /maps');
			} else {
				console.log('Wystąpił błąd przy próbie odczytu katalogu /maps',JSON.stringify(err,null,4));
			}
	    } else {
	    	console.log('Dostępne mapy:');
		    files.forEach(function(a){
		    	if(a.indexOf('.js') > -1){
		    		console.log('\t',a);
		    	}
		    });	
	    }
	});	

} else {
	try {
		var map = require(path.join(__dirname, 'maps/' + process.argv[2] + '.js'));
		console.log('Mapa %s wczytana! :)',process.argv[2]);
		fileValidation(map);
		drawMap(map);
	} catch (err) {
		console.log('Odczyt pliku: ', process.argv[2]);
		if(err.code === 'MODULE_NOT_FOUND') {
			console.log('[ERROR] Podany plik nie został znaleziony.');
		} else {
			console.log(err);
		}
	}
}

// Functions

function fileValidation(file) {
	if(file.map) {
		var height = file.map.length;
		var weight = file.map[0].length;
		for(var i=0; i < height; i++) {
			if(file.map[i].length !== weight) {
				return console.log('[ERROR] Map weight isn\'t constant. In line: ',i+1,'Is: ',file.map[i].length,'Should be: ',weight);
			}
		}
	} else {
		return console.log('[ERROR] File without `map` variable.');
	}
		if(file.name) {
			console.log(' - %s - ',file.name);
		} else {
			return console.log('[ERROR] Brak nazwy mapy. Plik musi zawierać zmienną name.');
		}
}

function drawMap(file) {
	var height = file.map.length;
		var weight = file.map[0].length;

		for(var i=0; i < height; i++) {
			for(var j = 0; j < weight; j++) {
				process.stdout.write(file.objects[file.map[i][j]].symbol());
			}
			console.log();
		}
}