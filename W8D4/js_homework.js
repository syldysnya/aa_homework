
function titleize(arr, cb) {
    
    Array.prototype.map = function () {
        const newArr = [];
        
        
        for (let i = 0; i < this.length; i++) {
            let word = this[i]
            let newStr = word[0].toUpperCase() + word.slice(1);
            newArr.push(`Mx. ${newStr} Jingleheimer Schmidt`);
        };
        
        return newArr;
    };

    Array.prototype.forEach = function (cb) {
        
        for (let i = 0; i < this.length; i++) {
            cb(this[i]);
        };
    };
    
    const newArr = arr.map();
    return newArr.forEach(cb)
};

const printCallback = function (ele) {
    console.log(ele);
}

// console.log(titleize(["Mary", "Brian", "Leo"], printCallback));

function Elephant(name, height, arr) {
    this.name = name;
    this.height = height;
    this.arr = arr;
}

Elephant.prototype.trumpet = function () {
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
}

Elephant.prototype.grow = function () {
    const newHeight = this.height + 12;
    return newHeight;
}

Elephant.prototype.addTrick = function (trick) {
    this.arr.push(trick);
    return this.arr;
}

Elephant.prototype.play = function () {
    const play_str = this.arr[Math.floor(Math.random() * this.arr.length)];
    return `${this.name} is ${play_str}`
}

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

// Elephant.prototype.paradeHelper = function () {
//     console.log(`${this.name} is trotting by!`);
// };

// herd.forEach(function(elephant) {
//     elephant.paradeHelper();
// });

let bfastOrder = dinerBreakfast();

function dinerBreakfast() {

    const order = ["cheesy scrambled eggs"];

    return function (addFood) {

        if (addFood) {
            order.push(`and ${addFood}`);
            return `I'd like ${order.join(" ")} please`
        } else {
            return `I'd like ${order.join(" ")} please`
        }
    }
}

console.log(bfastOrder('tomato soup'));

