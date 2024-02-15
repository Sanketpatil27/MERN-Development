type GreeArg = number | string | boolean;

// interfaces can't let you to do that for without object like structure

// function sayHey(id: number | string) {  or
function sayHey(id: GreeArg) {
    return id; 
}

sayHey(1)
sayHey("1")