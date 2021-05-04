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
