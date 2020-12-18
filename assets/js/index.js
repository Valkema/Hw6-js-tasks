
// task 1  Напишите функцию, которая подсчитавает сумму четных элементов массива

function EvenNumSum(arr) {
    let summa;
    summa = 0;   
    let i;
     for (i = 1; i <= arr.length - 1; i +=2) {
         summa += arr[i]; 
     }     
     console.log(summa);
     return summa;
}


//task2 Напишите функцию, которая возвращает общий массив из двух заданных

function GeneralArr(arr1, arr2) {
    let res;
    res = [];
    for (i = 0; i <= arr1.length - 1; i++) {
        res[i] = arr1[i];
    };
    for (j = 0; j <= arr2.length - 1; j++) {
        res[arr1.length + j] = arr2[j];
    };
    console.log(res);
    return res;
};


// task4 Напишите функцию, которая дополняет нулями целое число до указанной длины.

function AddZeroes(num, leng) {
    if (num  < 0) {
        num = - num;
        for (i = 1; i < leng; i++) {
        num = '0' + num;
        } 
        num = '-' + num;
    }  else {
        for (i = 1; i < leng; i++) {
            num = '0' + num;
        };
    };              
console.log(num);
return num;
};

//task5 Создайте и опишите объект worker.  Выведите его в консоль. 

let worker = {
    firstName: 'Ivan',
    lastName: 'Petrov',
    age: 22,
    workExperience: 5,
    isMale: true,
    salary: 10000,
};

console.log(worker);

