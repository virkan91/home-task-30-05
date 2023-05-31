

//1.Дан массив целых чисел, определить, является ли сумма его элементов четной или нечетной.

        // function evenOrOdd(arr) {
        // 	let sum = arr.reduce((acc, cur) => acc + cur, 0)
        // 	if(sum % 2 == 0){
        // 		return "even"
        // 	}
        // 	return "odd"
        // }
        // console.log(evenOrOdd([0]));
        // console.log(evenOrOdd([1]));


//2. Сложить, вычесть, умножить или разделить?


        // function operation(num1, num2) {
        //     if(num1 + num2 == 24){
        //         return "added"
        //     }
        //     if(num1 - num2 == 24){
        //         return "subtracted"
        //     }
        //     if(num1 * num2 == 24){
        //         return "multiplied"
        //     }
        //     if(num1 / num2 == 24){
        //         return "divided"
        //     }
        //     return null;
        // }
        // console.log(operation(15, 9))
        // console.log(operation(26, 2))
        // console.log(operation(11, 11))


//3. Получить сумму всех элементов массива

        // function getSumOfItems(arr) {
        // 	let sum = arr.reduce((acc, cur) => acc + cur)
        // 	return sum;
        // }
        // console.log(getSumOfItems([2, 7, 4]))
        // console.log(getSumOfItems([45, 3, 0]))
        // console.log(getSumOfItems([-2, 84, 23]))



//4.Устранение нечетных чисел в массиве

        // function noOdds(arr) {
        // 	let result = arr.filter(arr => arr % 2 ==0);
        // 	return result;

        // }
        // console.log(noOdds([1, 2, 3, 4, 5, 6, 7, 8]))
        // console.log(noOdds([43, 65, 23, 89, 53, 9, 6]))
        // console.log(noOdds([718, 991, 449, 644, 380, 440]))


//5. Следующее число больше A и B и делится на B

        // function divisibleByB(a, b) {
        // 	let res = 0;
        // 	for(let i = 0; i < b; i++) {
        // 		if((a + i) % b === 0) {
        // 			res += a + i
        // 		}
        // 	}
        // 	return res;
        // }
        // console.log(divisibleByB(17, 8))
        // console.log(divisibleByB(98, 3))
        // console.log(divisibleByB(14, 11))


//6. Удалить Null из массива

        // function removeNull(arr) {
        // 	return arr.filter(a=>a!=null)
        // }
        // console.log(removeNull(["a", null, "b", null]))
        // console.log(removeNull([null, null, null, null, null]))
        // console.log(removeNull([7, 8, null, 9]))




//7. Сделать мой путь домой

        // function distanceHome(arr) {
        // 	let sum = arr.reduce((acc, cur) => acc + cur)
        // 	return Math.abs(sum)
        // }
        // console.log(distanceHome([2, 4, 2, 5]))
        // console.log(distanceHome([-1, -4, -3, -2]))
        // console.log(distanceHome([3, 4, -5, -2]))



//8. Создайте функцию, которая принимает целое число в качестве 
//входных данных и возвращает форму с количеством сторон этого числа. 
//Вот ожидаемые результаты, которые можно получить от этих входов.


        // function nSidedShape(n) {
        // let obj = ["circle", "semi-circle", "triangle", "square", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"]
        // return obj[n]
        // }
        // console.log(nSidedShape(3))



//9.Вернуть последний элемент в массиве

        // function getLastItem(arr) {
        // 	return arr.pop()
        // }
        // console.log(getLastItem([1, 2, 3]));
        // console.log(getLastItem(["cat", "dog", "duck"]));
        // console.log(getLastItem([true, false, true]));


//10. Учитывая массив чисел, создайте функцию, 
// которая возвращает тот же массив, но с индексом 
// каждого элемента в массиве, добавленным к самому себе . 
// Это означает, что вы добавляете 0 к числу с индексом 0, 
// добавляете 1 к числу с индексом 1 и т. д.


        // function addIndexes(arr) {
        // 	return arr.map((val, i) => val + i);
        // }
        // console.log(addIndexes([0, 0, 0, 0, 0]))



//11.
//12.
//13.
//14.
//15.
//16.
//17.
//18.
//19.
//20.

