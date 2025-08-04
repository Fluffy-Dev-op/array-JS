// Возведение в степень каждого элемента в массиве
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

const newNumbers = numbers.map((number) => {
    return number ** 2
});

console.log(numbers)
console.log(newNumbers)

// Уникальный массив, без повторений
const someNumbers = [1, 2, 2, 3, 4, 5, 5, 5, 6, 6]
const filterNumbers = someNumbers.reduce((filtered, number) => {
    if (filtered.includes(number)) {
        return filtered
    }
    return [...filtered, number]
}, []);
console.log(filterNumbers)


// Обратный порядок массива без reverse()
const otherNumbers = [1, 2, 2, 3, 4, 5, 6]
const sumNumbers = otherNumbers.reduce((sum, number) => {
    return sum += number
}, 0);
console.log(sumNumbers)

const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const reverseArray = someArray.reduce((reverse, number) => {
    return [number, ...reverse]
}, [])
console.log(reverseArray)


const newOtherNumbers = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filteredNumbers = []
for (i = newOtherNumbers.length - 1; i >= 0; i--) {
    filteredNumbers.push(i)
};
console.log(filteredNumbers)


// Переопределение массивов объявленных через let и const
let someLet = 'Some'
const someConst = 'body'

someLet = 'Every'
// someConst = 'qwerty' Не сработает переопределение переменной, так как она была объявлена через const (то что нельзя переопределить)
console.log(someLet)
// console.log(someConst) 

let letSomeArray = [1, 2, 3, 4, 5, 6, 7]

console.log('Массив объявленный через let ' + letSomeArray)
letSomeArray.push(99)
console.log('Массив объявленный через let ' + letSomeArray)
letSomeArray.shift()
console.log('Массив объявленный через let ' + letSomeArray)
letSomeArray = [2, 4]
console.log('Массив объявленный через let ' + letSomeArray)


const constSomeArray = ['orange', 'blue', 'green']
console.log('Массив объявленный через const ' + constSomeArray)
constSomeArray.push('CONST')
console.log('Массив объявленный через const ' + constSomeArray)
constSomeArray.shift()
console.log('Массив объявленный через const ' + constSomeArray)
// constSomeArray = [2, 4] //Переопределение не работает, так как это создает новую ссылку, а переопределение не работает для const 
// console.log('Массив объявленный через const ' + constSomeArray)