// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
// На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.


let arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 'a', 'b', '@', null];

function countEvenOdd (arr){
    let countEven = 0;
    let countOdd = 0;
    let countOther = 0;

    for (let i = 0; i < arr.length; i++){
        if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
            countOther++;
        } else {
            if (arr[i] % 2 === 0) {
                countEven++;
            } else {
                countOdd++;
            }
        }
    }

    return [countEven, countOdd, countOther];
}

let result = countEvenOdd(arrNum);

console.log("Четных элементов " + result[0]);
console.log("Нечетных элементов " + result[1]);
console.log("Других элементов " + result[2]);
