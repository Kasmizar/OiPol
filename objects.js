console.log('Objects');
module.exports = {
	mapping: function (objectId) {
		
	},
	map: {
		'0': {
			name: 'Floor',
			type: 'object', // object
			symbol: '.'
			crossable: true,
			noise: 2,
		},
		'1': {
			name: 'Wall`',
			type: 'object', // object
			symbol: '#'
			crossable: false,
			noise: 0,
		}
	}
};



// public 
function Box(color) // Constructor
{
    this.color = color;
}

Box.prototype.getColor = function()
{
    return this.color;
};

// private
function Box(col)
{
   var color = col;

   this.getColor = function()
   {
       return color;
   };
}

// usage
var blueBox = new Box("blue");
alert(blueBox.getColor()); // will alert blue

var greenBox = new Box("green");
alert(greenBox.getColor()); // will alert green




name:
symbol:
type:

Object:

crossable:
transparent:
stepNoise: 
noiseSource:
hasItem: 
isOpen:
lightSource: 
isLocked: 

item: 
position

Czy są otwarte?
	Czy wymaga klucza?
		Czy ma prawidłowy klucz?

czy zawiera przedmiot?
	czy przedmiot to xxx?

Czy można przez to przejść?
Czy można ruszyć?
Czy zawiera osobę?


11111
10301
10001
1112111111
1000200002
1111111111

#####
#.@.#
#...#
###_######
#........|
##########

if(widziWroga) {
	kryj sie
} else {
	if(glodny) {
		if(czy w kuchni) {
			zjedz 
		} else {
			idz_do_kuchnia
		}

	} else {
		patroluj
	}
}

Osoba:

function Guard(name, symbol, positionX, positionY, knownPlaces, items, stats) {

	var name = name;
	var symbol = symbol;
	var	position = [ positionX, positionY];
	var	knownPlaces = knownPlaces;
	var items = items;

	var stats = {
		hunger: {
			current: stats['hunger'] ? stats['hunger']['current'] : 10;
			min:
			max
		},	
		thirst: {
			current
			min
			max
		},
		health: {
			current
			min
			max
		},
		booring: {
			current
			min
			max
		},
		fatigue: {
			current
			min
			max
		},
		memory: {
			size
			current
		},	
		view: {
			direction
			range
		},	
		suspicious: {
			current
			max	
		},
		alcohol: {
			current:
			max:
		}
		sleep: {
			current:
			min: 
		}

	}
	
	this.isEnemyInRange = function() {
		return true;
	};

	this.isHungry = function() {
		return hunger === 0;
	};

	this.isThirsty = function() {
		return thirst === 0;
	};

	this.isBoored = function() {
		return booring === 0;
	};
		
	this.isLookingForEnemy = function() {
		return suspiciousCurrent >= suspiciousMax;
	};
	
	this.use = function(item) {
		if(item && item.name && item.stat && item.value) {
			stats[item.stats].current += item.value;
		} else {
			item.use();
		}
	};

	this.go = function() {

	};
}

Czy patrzy w moją stronę?
	Czy mnie widzi?
Czy jest głodny?
Czy jest spagniony?
Czy coś słyszał?
Czy jest podejrzliwy?
	Czy mnie szuka?
Czy jest znudzony?
Co zapamiętał?

memory: [{name: 'Świeczka', state: 'Off', position: [4,6]},{}]



object:
	
	door
	wall
	window
	carpet
	wooden floor
	stone floor

	curtain
	CONTAINERS
		table
		desk
		chair
		furnace
		chest
		barrel
		wardrobe
		bed

items:

creatures:

