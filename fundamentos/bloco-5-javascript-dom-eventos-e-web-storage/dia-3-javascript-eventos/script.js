function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// REQUESITO 01

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');

    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  };
};
createDaysOfTheMonth();

// REQUESITO 02
function holidayButton(buttonName) {
  const divButton = document.querySelector('.buttons-container'); // onde adiciona
  const button = document.createElement('button'); // o que adiciona
  button.id = 'btn-holiday'; // quem é
  button.innerHTML = buttonName;

  divButton.appendChild(button); // onde e oque adiciona
}
holidayButton('Feriados');

// REQUESITO 03
function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function () {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};
displayHolidays();

// REQUESITO 04
function buttonFriday(buttonName) {
  let getDivButtonsContainer = document.querySelector('.buttons-container'); // recebe os botoes com a classe .buttons-container
  let buttonFriday = document.createElement('button'); // cria o botão
  buttonFriday.id = 'btn-friday'; // identifica
  buttonFriday.innerHTML = buttonName; // recebe o argumento passado por parametro da função
  getDivButtonsContainer.appendChild(buttonFriday); // atribui o botão criado (buttonFriday) como filho da div (getDivButtonsContainer).
};
buttonFriday('Sexta-feira');

// REQUESITO 05
function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function () {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
      } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
};

let dezFridays = [4, 11, 18, 25];
displayFridays(dezFridays);

// REQUESITO 06
function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function (event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

dayMouseOver();
dayMouseOut();

// REQUESITO 07
function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto:');

// REQUESITO 08
function addLegend(color) {
  let taskElement = document.querySelector('.my-tasks');
  let element = document.createElement('div');
  element.className = 'task';

  element.style.backgroundColor = color;
  taskElement.appendChild(element);
}
addLegend('red');

// REQUESITO 09
function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

// REQUESITO 10;
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

// REQUESITO BONUS
function addNewTask() {
  let getInputField = document.querySelector('#task-input'); // input
  let addInputButton = document.querySelector('#btn-add'); // botão adicionar
  let getTaskList = document.querySelector('.task-list'); // lista ul

  addInputButton.addEventListener('click', function() { // Ao clicar no botão ADICIONAR:
    if (getInputField.value.length > 0) { // se algo for digitado no input...
      let newLi = document.createElement('li'); // cria elemento 'li'
      newLi.innerText = getInputField.value; // recebe o que foi digitado como valor, e adiciona como texto à 'li'

      getTaskList.appendChild(newLi); // adiciona a 'li' criada (newLi) como filho da 'ul' (getTaskList)
      getInputField.value = ''; // torna o input vazio.
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) { // Ao pressionar ENTER:
    if (event.key === 'Enter' && getInputField.value.length > 0) { // se o enter for pressionado E o input conter algum conteúdo...
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();