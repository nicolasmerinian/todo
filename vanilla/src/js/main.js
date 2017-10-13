(function() {
  console.log('ready');

  const TODOS = [
    { text: 'My first todo' }
  ];

  displayList(TODOS, document.querySelector('.list'));
})();

let displayList = (todos, containerElement) => {
  let listElement;
  todos.forEach((todo) => {
    itemElement = document.createElement('li');
    itemElement.textContent = todo.text;
    containerElement.appendChild(itemElement);
  });
};
