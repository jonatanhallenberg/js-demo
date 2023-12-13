function sum(a, b) {
    return a + b;
}

const sum = (a, b) => {
    return a + b;
}

// Jobba med listor / arrayer

// .filter

const numbers = [ 2, 3, 4, 23, 24];

const newNumbers = numbers.filter(number => number > 10);

//newNumbers = [ 23, 24 ]

const cars = [
    {
        id: 1,
        manufacturer: "Volvo"
    },
    {
        id: 2,
        manufacturer: "Saab"
    },
    {
        id: 3,
        manufacturer: "Ford"
    }
]

cars.filter(car => car.manufacturer.indexOf("o"))

// .map

const numbers2 = [ 2, 3, 4, 23, 24];
numbers2.map(number => number + " apelsiner")

cars.map(car => `<div>${car.manufacturer}</div>`)

// .sort

numbers2.sort((a, b) => a - b)

const names = [ "Jonatan", "Anna", "Örjan", "Berit" ]
names.sort((a, b) => a.localeCompare(b))

// Destructing - objekt

const car = {
    id: 1,
    manufacturer: "Volvo",
    speed: 200
};

// const id = car.id;
// const manufacturer = car.manufacturer;
// const speed = car.speed;

const { id, manufacturer, speed } = car;

const printCar = ({ id, manufacturer, speed }) => {
    console.log(`Jag har en ${manufacturer} med id: ${id} som kör i ${speed}km/h`)
}

// Destructing - array

const catNames = [ "Frasse", "Pelle", "Maja" ];

// const name1 = catNames[0];
// const name2 = catNames[1];
// const name3 = catNames[2];

const [ name1, name2, name3 ] = catNames;