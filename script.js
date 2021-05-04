'use strict';

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color'),
      key = 'isChecked',
      persone = {
        name: 'Alexandr',
        age: 105,
      },
      serializedPersone = JSON.stringify(persone);

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        localStorage.setItem(key, true);
    } else {
        localStorage.removeItem(key);
    }
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg')) {
        localStorage.removeItem('bg');
        form.style.backgroundColor = 'white';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

if (localStorage.getItem(key)) {
    checkbox.checked = true;
}
if (localStorage.getItem('bg')) {
    form.style.backgroundColor = 'red';
}

localStorage.setItem('persone', serializedPersone);
console.log(JSON.parse( localStorage.getItem('persone') ));

// regexp

// new RegExp('patten', 'flags');
// /pattern/f

// const ans = prompt('Name?'),
//       reg = /n/i;
// i - case insensitive
// g - global
// m - multiline

// \d - digits;  \D - not digits
// \w - symbols; \W - not symbols
// \s - spaces;  \S - not spaces

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Enter password?');

// console.log(pass.replace(/\./g, "**"));

console.log('12-\t 34- 57 '.replace(/\s/g, ':'));

const str = 'My name is R2D2';
console.log(str.match(/\W/g));
console.log(str.match(/\D/g));
