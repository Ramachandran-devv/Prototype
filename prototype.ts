/**
 * The Prototype pattern is used when creating an instance of a class is expensive or complex.
 * It provides a way to create a new object by copying an existing object.
 * It is used to create objects based on a template of an existing object through cloning.
 */

/**
 * In this example, we have implemented the prototype pattern in TypeScript.
 * We have created an interface Shape with two methods clone and draw. We have created two concrete classes Circle and Rectangle that implement the Shape interface.
 * We have created a Prototype class that has a static method getShape to get the clone of the shape object.
 * We have created a class App that uses the Prototype class to get the clone of the shape object and draw the shape.
 */

interface Prototype {
    clone(): Prototype;
}

class ConcretePrototype1 implements Prototype {
    public field: number;

    constructor(field: number) {
        this.field = field;
    }

    clone(): this {
        // Shallow copy, suitable for simple data structures
        return Object.assign({}, this);
    }

    toString(): string {
        return `Field: ${this.field}, type: ConcretePrototype1`;
    }
}

class ConcretePrototype2 implements Prototype {
    private list: string[];

    constructor(list: string[]) {
        this.list = list;
    }

    clone(): this {
        // Deep copy, necessary when the object contains references to other objects
        const clone = Object.create(this);
        clone.list = this.list.slice(); // Duplicate the array or deeper structure if needed
        return clone;
    }

    toString(): string {
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
