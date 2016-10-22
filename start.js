console.log('Hello World!');
var hero= 
{ 
	"name": "Boganin",
	"class": "wojownik",
	"backpack": [
		{
			"name": "Miecz",
			"damage": 5,
			"onSelf": false,
			"stealed": false

		},
		{
			"name": "Apple",
			"damage": -10,
			"onSelf": true
		}
	],
	"stats": {
		"power": 5,
		"int": 2,
		"con": 4
	}
};
console.log('Hero name: ',hero.name);
for(var i = 0 ; i < hero.backpack.length ; i++) {
	console.log('Nazwa', hero.backpack[i].name); // wyświetli wartość imię kolejnych obiektów z plecaka
	if(!hero.backpack[i].onSelf) { // wyświetli tylko obrażenia obiektów których NIE można użyć na sobie. ! oznacza negację. A warunek jest wykonywany gdy jest prawdziwy
		console.log('Obrażenia',hero.backpack[i].damage)
	}
}

