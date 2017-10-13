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
  todos.forEach((todo) => {
    itemElement = document.createElement('li');
    itemElement.textContent = todo.text;
    listElement.appendChild(itemElement);
  });
};

(function() {
  console.log('ready');

  const TODOS = [
    { text: 'My first todo' }
  ];

  displayList(TODOS, document.querySelector('.list'));

  document.querySelector('.addTodo button')
      .addEventListener('click', (e) => {
    e.stopPropagation();
    let inputElement = document.querySelector('.addTodo input');

    let newTodo = {
      text: inputElement.value
    };
    TODOS.push(newTodo);window.eee=e;

    inputElement.value = "";
      displayList(TODOS, document.querySelector('.list'));
  }, false);
})();
