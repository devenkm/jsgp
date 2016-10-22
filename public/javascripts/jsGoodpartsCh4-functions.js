/**
 * Created by devenmishra on 10/15/16.
 * Function objects are linked to Function.prototype (Linked to Object.prototype)
 * Every function is also created with additional hidden properties: the functions's context
 * and the code that implements the functions's behavior
 *
 *  Every function object is also created with a prototype property.
 *  Its value is an object with a constructor property whose value is the function.
 *
 *  Functions are objects, that can be used like any other value, and as such can be stored in
 *  - variables,
 *  - objects, and
 *  - arrays.
 *  When a function is stored as a property as a property of an object, we call it a method
 *
 */


var myObject = {
    value:0,
    increment: function(inc){
        this.value += typeof inc === 'number' ? inc: 1;
        return this.value;
    }
};

//myObject.increment(1);
//console.info("when incrementing no value for the parameter"+myObject.value);
myObject.increment(0);
console.info("when incrementing by 0:"+myObject.value);
myObject.increment(2);
console.info("when incrementing by 2:"+myObject.value);
myObject.increment(2);
console.info("when incrementing 2 "+myObject.value);
console.info("when incrementing 4 :"+myObject.increment(4));
console.info("when incrementing 4 :"+myObject.increment(4));

var add = function (a, b) {
    return a + b;
};

myObject.double = function double()
{
    var that = this;
    var helper = function(){
        that.value = add(that.value, that.value);
        return that.value;
    }
    helper();

}

myObject.double();

console.info("when doubling the existing value of value :"+myObject.value);

console.info("========> the constructor Invocation pattern:");
//Create a constructor function called Quo
var Quo = function(string){
    this.status = string;
};

//give all instances of Quo a public method called get_status
Quo.prototype.get_status = function(){
    return this.status;
};

var myQuo = new Quo("confused");

console.info(myQuo.get_status());



console.info("========> the Apply Invocation Pattern:");

var array =[3, 4];
var sum = add.apply(0, array);
console.info(sum);

var statusObject = {
   status: "A-OK"
};
var status = Quo.prototype.get_status.apply(statusObject);
console.info(status);

console.info("Arguments:");

var sum = function(){
    var i, sum = 0;

    for (i =0; i< arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}

console.info("sum ="+ sum(4,8,15, 16,23, 42 ));