const steps = ['one', 'two', 'three'];
//.foreach
// steps.forEach(function(item){
//     console.log(item);
// })

steps.forEach(showSteps);

function showSteps(item){
    console.log(item)
};

// .map - creates a new array based on the original array

let myList = document.querySelector('#myList');

const stepsHtml = steps.map(listTemplate);

function listTemplate(item){
    return `<li>${item}</li>`;
};

myList.innerHTML = stepsHtml.join(''); //join turns the array into a string, and we can specify a separator if we want one, but in this case we don't want one so we just use an empty string
//join turns the array into a string, and we can specify a separator if we want one, but in this case we don't want one so we just use an empty string

let grades = [`A`, `B`, `C`];

let points;

let gpaPoints = grades.map(convert);


function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
console.log(gpaPoints);

//.reduce - takes an array and reduces it to a single value

let totalPoints = gpaPoints.reduce(getTotal);

function getTotal(total, items){
    return total + items;
};
console.log(totalPoints);

let gpaAverage = totalPoints / gpaPoints.length;

console.log(gpaAverage);

//.filter - creates a new array based on the original array, but only includes items that meet a certain condition


const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = words.filter(function(word){
    return word.length < 6
});
console.log(shortWords);

//.indexof - returns the index of the first occurrence of a specified value in an array, or -1 if it is not found

const myArray = [12, 34, 21, 54];

const luckyNumber = 21;

let luckyIndex = myArray.indexOf(luckyNumber);

console.log(luckyIndex);

//dynamic content

let container = document.querySelector('#studentContainer');


const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];

students.forEach(function(item) {
    let name = document.createElement('div');
    name.className = 'format';

    let html = `
    <span>${item.first}</span>
    <span>${item.last}</span>
    <hr>
`;

name.innerHTML = html;
container.appendChild(name)

});