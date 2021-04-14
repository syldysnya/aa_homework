function madLib(verb, adj, noun) {
    console.log(
        'We shall '
        + verb.toUpperCase()
        + ' the ' + adj.toUpperCase()
        + ' ' + noun.toUpperCase() + '.'
    )
}

// console.log(madLib('make', 'best', 'guac'));

function isSubstring(str1, str2) {
    if (str1.includes(str2)) {
        return true;
    } else {
        return false;
    }
}

// console.log(isSubstring("time to program", "time"));
// console.log(isSubstring("Jump for joy", "joys"));

function fizzBuzz(array) {
    var newArr = [];

    for (var i = 0; i < array.length; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            continue;
        };
        if (i % 3 === 0 || i % 5 === 0) {
            newArr.push(i);
        }
    }

    return newArr;
}

// console.log(fizzBuzz([2, 3, 5, 6, 7, 15, 10]));

function isPrime(num) {

    for (var i = num - 1; i > 1; i--) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// console.log(isPrime(2));
// console.log(isPrime(10));
// console.log(isPrime(15485863));
// console.log(isPrime(3548563));

function sumOfNPrimes(num) {
    var sum = 0;
    var primes = [];

    var i = 2;
    while (primes.length < num) {
        if (isPrime(i)) {
            primes.push(i);
            sum += i;
        }
        i++;
    }

    return sum;
}


console.log(sumOfNPrimes(0));
console.log(sumOfNPrimes(1));
console.log(sumOfNPrimes(4));