/* Task
Complete the function in the editor. It has one parameter: an array, , of objects. Each object in the array has two integer properties denoted by  and .
The function must return a count of all such objects  in array  that satisfy .*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let n = 0;
    for (let o of objects) {
        n += (o.x == o.y); //returns either true or false.When we add that to n which is an integer its get converted to integer as well.
    }                      //This way we're counting the amount of true returned.
    return n;
}


function main() {
    const n = +(readLine());
    let objects = [];

    for (let i = 0; i < n; i++) {
        const [a, b] = readLine().split(' ');

        objects.push({ x: +(a), y: +(b) });
    }

    console.log(getCount(objects));
}