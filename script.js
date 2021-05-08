alert ('здраствуйте! здесь вы должны ввести имена и возраст своих 10 друзей ')
let i = 1;
do {
  var user = prompt ('введите имя  друга ');
  var age = +prompt ('введите его возраст');
  console.log(`${i} Друг ` );
  console.log(`Имя: ${user} `);
  console.log(`Возраст: ${age}`);
  i++
} while (i <= 10); 
alert('Нажмите F12')

