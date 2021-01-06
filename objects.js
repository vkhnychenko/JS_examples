const person = Object.create(
    {
        callculateAge(){
            console.log('Age: ', new Date().getFullYear() - this.birthYear)
        }
    },
     {
    name: {
        value: 'Vladislav',
        enumerable: true,
        writable: true,
        configurable: true
    },
    surname: {
        value: 'Khnychenko'
    },
    birthYear: {
        value: 1996,
        enumerable: false,
        writable: false,
        configurable: false
    },
    age: {
        get(){
            return new Date().getFullYear() - this.birthYear
        },
        set(value){
            console.log('Set age', value)
        }
    }
})

person.name = 'Maxim'

for (let key in person) {
    console.log('Key', key, person[key])
}

console.log(person.age)
console.log(person.age = 100)
person.callculateAge()