'use strict';

'use strict';



let name = 'джон';
let admin = name;
alert(admin)


let gorod = prompt('Название города', 'Чита');
let data = prompt('Год образования города', '1980');
let cifra = prompt('Количество населения города', '600');
let time = '2024'-data;

alert(`Городу ${gorod} исполнилось ${time} лет с момента образования.Населения -  ${cifra} количество человек`);

let radius = prompt('Введите радиус', '10');
let p = Math.PI * (radius**2);
alert(p);

let c1 = prompt('Введите первое число', '2');
let c2 = prompt('Введите второе число', '3');
alert(`Сумма ${+c1 + +c2} `);
alert(`Разность ${c1 - c2} `);
alert(`Частное ${c1 / c2} `);
alert(`Произведение ${с1 * c2} `);