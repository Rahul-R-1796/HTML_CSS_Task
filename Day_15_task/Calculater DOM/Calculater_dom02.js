const result = document.querySelector('#result');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.value === '=') {
      result.value = eval(result.value);
    } else if (button.value === 'AC') {
      result.value = '0';
    } else if (button.value === 'DEL') {
        result.value = result.value.slice(0, -1);
    } 
    else {
      result.value += button.value;
    }
  });
});



