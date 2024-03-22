document.querySelector('.js-todo-add-button')
  .addEventListener('click', () => {
    addTodo();
  })

// Almost finishing: 9:26:38
function renderTodoList(){
    const todoListElement = document.querySelector('.js-todo-list')

    let todoListHTML = ``;
    
    todoList.forEach((todoObject, index) => {
        
        const {name, dueDate} = todoObject;

        todoListHTML += `

        <span class='name'><input class='checklist' type='checkbox'> ${name}</span>
        <span class='dueDate'>${dueDate}</span>
        <span>
            <button class="delete-button js-delete-todo-button">Delete</button>
        </span>`
        ;
    });

    todoListElement.innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
      .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
          todoList.splice(index, 1);
          renderTodoList();
        })
      })
}


function addTodo(){
    const inputNameElement = document.querySelector('.js-name-input');
    const inputDateElement = document.querySelector('.js-due-date-input'); 

    const name = inputNameElement.value;
    const dueDate = inputDateElement.value;

    // Using shorthand property
    todoList.push({
        name,
        dueDate
    });

    inputNameElement.value = "";
    inputDateElement.value = "";

    renderTodoList();
}
let todoList = [];
renderTodoList();

