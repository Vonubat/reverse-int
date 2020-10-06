module.exports = function reverse(n) {
  // приводим к абсолютному значению
  let absValues = Math.abs(n);
  // преобразуем в строку
  let str = '' + absValues;
  //  разделяем строку на массив
  let tempArr1 = str.split('');
  // делаем реверс массива
  let tempArr2 = tempArr1.reverse();
  // создаём из массива строку
  let reversedStr = tempArr2.join('');
  return reversedStr;
}
