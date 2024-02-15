type keyInput = "up" | "down" | "left" | "right";   // constants to avoid bug as stated below while calling fun.
// it can one way to handle the bug, but best way is we use `enum`

enum Direction {
    up = "up",       // 0 initially it will be like indexes 
    down = "down",   // 1
    left = "left",   // 2
    right = "right"  // 3
}


// function doSomething(keyPressed: keyInput) {     // using constnats  
function doSomething(keyPressed: Direction) {       // using enums
    if(keyPressed == Direction.up) 
        return;
}

// doSomething("up");
// doSomething("down");
// doSomething("Downrandom");  // should not accept but it will compile as its string
// so to avoid it we use constants

// for enum
doSomething(Direction.up);
doSomething(Direction.down);
console.log(Direction.down);
console.log(Direction.up);
