//Question 1
// const numbers = [1,2,3,4,5];

// const squarednumbers = numbers.map(num => num * num);

// console.log(squarednumbers);


//Question 2

function getGrade(score) {

    return score >= 90 ? 'A' :
           score >= 80 ? 'B' :
           score >= 70 ? 'C' :
           score >= 60 ? 'D' : 'F';
}

console.log(getGrade(95));
console.log(getGrade(85));
console.log(getGrade(75));
console.log(getGrade(65));
console.log(getGrade(55));

//Question 3

const car = {
    companyName: 'Toyota',
    model: 'Corolla',
    year: 2020
}

function changeCarYear(carObject, newYear) {
    carObject.year = newYear;
}

changeCarYear(car, 2022);
 
const { model, year } = car;

console.log(`Model: ${model}, Year: ${year}`);

// Question 4

// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;
  
//     if (num % 2 === 0 || num % 3 === 0) return false;
  
//     for (let i = 5; i * i <= num; i += 6) {
//       if (num % i === 0 || num % (i + 2) === 0) return false;
//     }
  
//     return true;
//   }

//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// const primeNumbers = numbers.filter(isPrime);

// console.log(primeNumbers)

//Question 5

const numbers = [1,2,3,4,5,6,7,8,9,19];

const evennumbers = numbers.filter(num => num %2 == 0);

console.log(evennumbers);

const numbers1 = [1,2,3,4,5];

const doublednumbers = numbers1.map(function(num) {
    return num * 2
})

console.log(doublednumbers);

var flattened = [[0,1],[2,3],[4,5]].reduce(function(a,b){
    return a.concat(b)
})

console.log(flattened);

//Question 6 

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json();
        console.log(data);

    } catch(error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();

//Question 7

const person = {
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Downtown',
        state: 'CA',
        zip: '12345'
    },
    contact: {
        phone: '555-1234',
        email: 'johndoe@gmail.com'
    }
}

const phoneNumber = person.contact?.phone;

console.log(`Phone Number: ${phoneNumber}`);

const personWithoutContact = {
    name: 'Jane Doe',
    address: {
      street: '456 Elm St',
      city: 'Othertown',
      state: 'NY',
      zip: '67890'
    }
}

const phoneNumberWithoutContact = personWithoutContact.contact?.phone;

console.log(`Phone Number: ${phoneNumberWithoutContact}`);


