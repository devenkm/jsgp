
//Object Literals

var empty_object = {};

var stooge = {
    "first-name": "Jerome",
    "last-name" : "Howard",
     middleInitial : "S"

};
console.info("middle:" + stooge.middleInitial );

console.info("middle:" + stooge.middleInitial );
console.info("firstname:" + stooge["first-name"] );

//Retrieval

var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2005-09-25",
        city:"Sydney"
    },
    arrival:{
        IATA:"LAX",
        time:"2005-12-12",
        city:"Los Angeles"
    }
}

console.info("Retrieval  ====================");
console.info(flight.equipment);
//console.info(flight.equipment.model);
console.info(flight.equipment && flight.equipment.model);
//console.info(flight.equipment || flight.equipment.model);
console.info(flight.equipment);

console.info("Prototype ====================");
if(typeof Object.create !== 'function'){

    console.info("Adding a Create method to the Object function, that takes the object as the prototype and creates a " +
        "new object");
    Object.create = function(o){
        var F = function(){
            F.prototype = o;
            return new F();
        }

    }
}
var another_stooge = Object.create(stooge);
stooge.address = "new york, ";
another_stooge["first-name"] = "Hillary "

console.info("middle:" + another_stooge.middleInitial );
console.info("firstname:" + another_stooge["first-name"] );
delete another_stooge["first-name"];

console.info("firstname:" + stooge["first-name"] );
console.info("address :" + another_stooge.address);


console.info("Reflection ====================");
console.info("Type of flight :" + typeof flight.airline);
console.info("Type of flight departure:" + typeof flight.departure);
console.info("Type of flight departure time:" + typeof flight.departure.time);
console.info("Type of flight toString:" + typeof flight.toString)
console.info("flight hasOwn Property: " + flight.hasOwnProperty('departure'));

console.info("Enumeration ====================");
var name;
for(name in another_stooge){
    if(typeof another_stooge[name] !== 'function'){
        console.info(name+ " :" + another_stooge[name]);
    }
}


