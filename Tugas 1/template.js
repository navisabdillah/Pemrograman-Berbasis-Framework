let fname = 'Cristiano';
let lname = 'Ronaldo';
let age = prompt("Masukkan Umur Cristiano Ronaldo!");

//Cara Lama
//let result = fname + ' ' + 'is' + age + 'years old'
//alert(result);

// Memakai template strings
let result = `${fname} ${lname} is ${age} years old`;
alert(result);