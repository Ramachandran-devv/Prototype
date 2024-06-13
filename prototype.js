"use strict";
/**
 * The Prototype pattern is used when creating an instance of a class is expensive or complex.
 * It provides a way to create a new object by copying an existing object.
 * It is used to create objects based on a template of an existing object through cloning.
 */
class ConcretePrototype1 {
    constructor(field) {
        this.field = field;
    }
    clone() {
        // Shallow copy, suitable for simple data structures
        return Object.assign({}, this);
    }
    toString() {
        return `Field: ${this.field}, type: ConcretePrototype1`;
    }
}
class ConcretePrototype2 {
    constructor(list) {
        this.list = list;
    }
    clone() {
        // Deep copy, necessary when the object contains references to other objects
        const clone = Object.create(this);
        clone.list = this.list.slice(); // Duplicate the array or deeper structure if needed
        return clone;
    }
    toString() {
        return `List: ${this.list.join(", ")}, type: ConcretePrototype2`;
    }
}
function clientCode() {
    const p1 = new ConcretePrototype1(42);
    const p1Clone = p1.clone();
    console.log(p1.toString());
    console.log(p1Clone.toString());
    const p2 = new ConcretePrototype2(['a', 'b', 'c']);
    const p2Clone = p2.clone();
    console.log(p2.toString());
    console.log(p2Clone.toString());
}
clientCode();
