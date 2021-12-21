
console.log('Sample JavaScript HW#1');

/*
 * #1
 *
 * Создайте переменные со значениями
 */
// имя переменной: myNum, значение: 10
var myNum = 10;
console.log(myNum);
// имя переменной: myStr, значение: 'строка'
var myStr = 'сторока';
console.log(myStr);
// имя переменной: myBool, значение: true
var myBool = true;
console.log(myBool);
// имя переменной: myArr, значения: 1, 2, 3, 4, 5
var myArr = [1,2,3,4,5];
console.log(myArr);
// имя переменной myObj, значения: first: 'First Name', last: 'Last Name'
var myObj = {
  first:'First name',
  last:'Last name'
};
console.log(myObj);

/*
 * #2
 *
 * Отформатируйте целое число, которое хранится в переменной myNum,
 * чтобы получить результат с 2 знаками после запятой.
 * Результат сохраните в переменную decimal2.
 */

// decimal2
var decimal2 = myNum.toFixed(2);
console.log(decimal2);
/*
 * #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */

// i
var i = 5

console.log(i);
console.log(i++);
console.log(++i);
console.log(++i);
console.log(--i);
console.log(i--);
/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */

// myTest
var myTest = 20

// +=
console.log(myTest += myNum);
// –=
console.log(myTest -= myNum);
// *=
console.log(myTest *= myNum);
// /=
myTest /= 2;
console.log(myTest);
// %=
myTest %= 2;
console.log(myTest);
/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */

// константа Pi → myPi
console.log(Math.PI);

// округленное значение числа 89.279 → myRound
console.log(Math.round(89.279));

// случайное число между 0..10 → myRandom
console.log(Math.random()* 10);

// 3 в 5 степени → myPow
console.log(Math.pow(3,5));

/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */

// Мама мыла раму, рама мыла маму

// strObj
var strObj = {str:'Мама мыла раму, рама мыла маму'};
strObj.length = strObj.str.length;
console.log(strObj);

/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */

// isRamaPos
var isRamaPos = strObj.str;
console.log(isRamaPos.indexOf('рама'));
/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace
var strReplace = strObj.str;
strReplace = strReplace.replace('мыла', 'моет');
strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log(strReplace);
/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */
console.log(strReplace.toUpperCase('Мама моет раму, Рама держит маму'));
console.log(strReplace.toLowerCase('Мама моет раму, Рама держит маму'));