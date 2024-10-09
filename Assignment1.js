const students = [

    { id: 1, name: 'Ram', age: 22, score: 85, grade: 'B' },
    
    { id: 2, name: 'Shyam', age: 23, score: 90, grade: 'A' },
    
    { id: 3, name: 'shivam', age: 21, score: 78, grade: 'C' },
    
    { id: 4, name: 'gautam', age: 25, score: 92, grade: 'A' },
    
    { id: 5, name: 'shourya', age: 20, score: 88, grade: 'B' },
    
    { id: 6, name: 'shubham', age: 22, score: 75, grade: 'C' },
    
    { id: 7, name: 'sita', age: 24, score: 94, grade: 'A' },
    
    { id: 8, name: 'geeta', age: 23, score: 80, grade: 'B' },
    
    { id: 9, name: 'keerat', age: 22, score: 67, grade: 'D' },
    
    { id: 10, name: 'sirat', age: 20, score: 82, grade: 'B' }
    
];

// Finding out students having score above 75
const data = students.filter((student) => {
    return student.score > 75
})


console.log(data)
let array = []
students.map((stu) => {
    
    array.push(stu.name, stu.score)
})

console.log(array)


let total = 0
students.forEach((stu) => {
    total = total + stu.score
})
const average = total/students.length
console.log(average)

const data4 = students.find((stu) => {
    return stu.score < 70
})

// console.log(data4)

let accArray = students.sort((a, b) => a.score - b.score)
let decArray = students.sort((a , b) => b.score - a.score)
console.log(accArray)
console.log(decArray)

let total2 = 0
students.forEach((s) => {
    if(s.score > 85){
        total2 = total2 + s.score
    }
})
const average85 = total2/students.length
console.log(average85)