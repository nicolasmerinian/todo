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

    contentElement.textContent = todo.text;
    deleteElement.className += '  delete';
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

let addButtonHandler = (e, todos, listElement) => {
  e.stopPropagation();

  let inputElement = document.querySelector('.addTodo input');

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

(function() {
  console.log('ready');

  const TODOS = [
    { text: 'My first todo' }
  ];

  let listElement = document.querySelector('.list');
  let buttonElement = document.querySelector('.addTodo button');

  buttonElement.addEventListener('click', (e) => {
    addButtonHandler(e, TODOS, listElement);
  }, false);

  displayList(TODOS, listElement);

})();
