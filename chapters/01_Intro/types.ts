// Define an enum, starts at 1 if no values are specified
// enums are converted to objects at compile time
enum MyEnum {
    A,
    B,
    C,
    D = 20
}

// Const enum values in the code will be replaced in-place instead
// of refering to an object; therefore, they do NOT exist in the compile code!
const enum MyConstEnum {
    A,
    B,
    C
}

// Interfaces are useful to define the expected structure of an object

interface IHello {
    world: string
}

// Clases can also be typed!

class Hello implements IHello {
    public world: string

    constructor(world: string) {
        this.world = world
    }
}

class World extends Hello {}

// TypeScript also has generics just like in C#

class Say<T extends IHello> {
    public run(container: T): void {
        console.log(container.world)
    }
}

const s = new Say()
const w = new World('hello')

// Call with an instanciated object
s.run(w)

// Works since IHello is an interface
s.run({ world: 'yay' })
