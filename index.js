//1 Переменные
//camelCase
var name = 'Vladislav' // устаревшая конструкция можно менять

const lastName = 'Khnychenko' // readonly
// let age = 26 // можно менять


name = 'Vlad'

const _ = 'private'
const $ = 'some value'

// 2 Мутирование
// console.log('Имя человека: '+ name + ', а возраст человека: ' + age)
// const lastName = prompt('Введите фамилию')
// alert(name + ' ' + lastName)

//3 Операторы
const currentYear = 2020
const birthYear = 1996

const age = currentYear - birthYear

//4 типы данных 

//6 Условные операторы
// 8 функции
function calculateAGE(year){
	return 2020 - year
}

const myAge = calculateAGE(1996)

// 9 Массивы

// const cars = [1,2,3]
// const cars = new Array(1,2,3)

// Функции

function greet(name){
	console.log('Привет ' + name)
}

const arrow = (name) => {
	console.log('Привет ' + name)
}

const arrow2 = name => console.log('Привет ' + name)

//Замыкания
function createMember(name){
	return function(lastName){
		console.log(name + lastName)
	}
}