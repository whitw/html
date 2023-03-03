const square = {
	width: 200,
	height: 200,
};

const colorSquare = {
	...square,
	color: 'red',
}
console.log(colorSquare);

const catTypeAnimals = ['고양이', '호랑이', '사자']
const dogTypeAnimals = ['개', '늑대', '여우']
const animals = [...catTypeAnimals, ...dogTypeAnimals, '비버']
console.log(animals)

const {color, ...another} = colorSquare
console.log(color)
console.log(another)

const [first, second, ...rest] = animals
console.log(first)
console.log(second)
console.log(rest)