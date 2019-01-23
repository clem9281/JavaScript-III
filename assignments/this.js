/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global binding: when this is called globally and not attached to any object, it refers to the window object.
 * 2. Implicit binding: when a function is part of an object (a method), this is implicitly bound to that object.
 * 3. New binding: whenever the new keyword is used with a constructor function to create a new object, this is implicitly bound to the new object.
 * 4. Explicit binding: call, apply, and bind can be used to bind this to an object.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function sayThisWindow() {
  console.log("window", this);
}
sayThisWindow(); // this refers to the window

// Principle 2

// code example for Implicit Binding
const implicitObject = {
  aProperty: "This property belongs to ImplicitObject",
  sayThisImplicit: function() {
    console.log("implicit", this);
  }
};
implicitObject.sayThisImplicit(); // this refers to the object the method belongs to

// Principle 3

// code example for New Binding
const NewBinding = function(attrs) {
  this.thing = attrs.thing;
  this.sayThisNew = function() {
    console.log("new", this);
  };
};
let newObj = new NewBinding({ thing: "now this thing belongs to newObj" });
let anotherNewObj = new NewBinding({
  thing: "now this thing belongs to anotherNewObj"
});

newObj.sayThisNew(); // this refers to the newObj
anotherNewObj.sayThisNew(); // this refers to anotherNewObj
// Principle 4

// code example for Explicit Binding
const Parent = function(attrs) {
  this.parentProperty = attrs.parentProperty;
  this.sayThisExplicit = function() {
    console.log("explicit", this);
  };
};
const Child = function(childAttrs) {
  Parent.call(this, childAttrs);
  this.childProperty = childAttrs.childProperty;
};
let kiddo = new Child({
  parentProperty: "I get this property from the Parent!",
  childProperty: "I get this property from the child constructor"
});
kiddo.sayThisExplicit(); // this refers to the kiddo object
