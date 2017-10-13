let displayList = (todos, listElement) => {
  emptyList(listElement);
  makeList(todos, listElement);
};

let emptyList = (listElement) => {
  if (listElement) {
    while (listElement.firstChild) {
      listElement.removeChild(listElement.firstChild);
    }
  }
};

let makeList = (todos, listElement) => {
  let itemElement;
  let contentElement;
  let deleteElement;
  todos.forEach((todo) => {
    itemElement = document.createElement('li');
    contentElement = document.createElement('span');
    deleteElement = document.createElement('span');

    itemElement.className = 'todo__item';
    contentElement.textContent = todo.text;
    deleteElement.className = 'todo__item-delete';
    deleteElement.textContent = 'X';

    itemElement.appendChild(contentElement);
    itemElement.appendChild(deleteElement);
    listElement.appendChild(itemElement);
  });
};

let emptyElement = (element) => {
  if (element && element.value) {
    element.value = '';
  }
};

let addButtonHandler = (event, todos, listElement) => {
  event.stopPropagation();

  let inputElement = document.querySelector('.todo__add-input');

  if (inputElement.value.trim() === '') {
    return;
  }

  addTodo(todos, inputElement.value);

  emptyElement(inputElement);
  displayList(todos, listElement);
};

let addTodo = (todos, todoText) => {
  let newTodo = new Todo(todoText);
  todos.push(newTodo);
};

let deleteButtonHandler = (event, todos, listElement) => {console.log('del');
  event.stopPropagation();

  if (!event.target.classList.contains('todo__item-delete')) {
    return;
  }

  let todoContent = event.target.parentElement.children[0].textContent;

  deleteTodo(todos, todoContent);
  displayList(todos, listElement);
};

let deleteTodo = (todos, todoText) => {
  for (var i = 0; i < todos.length; i += 1) {
    if (todos[i].text === todoText) {
      todos.splice(i, 1);
      break;
    }
  }
};

(function() {
  console.log('ready');

  const TODOS = [];

  let listElement = document.querySelector('.todo__list');

  displayList(TODOS, listElement);

  let buttonElement = document.querySelector('.todo__add-button');
  let deleteElement = document.querySelector('.todo__item-delete');

  buttonElement.addEventListener('click', (e) => {
    addButtonHandler(e, TODOS, listElement);
  }, false);

  listElement.addEventListener('click', (e) => {
    deleteButtonHandler(e, TODOS, listElement);
  }, false);

})();
