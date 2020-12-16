import { handler } from './todo';

const domhandler = (() => {
  // draws side project list
  const draw_project = (proj_list) => {
    const project_list = document.getElementById('project-list');

    const project_arr = [];

    for (let i = 0; i < proj_list.length; i++) {
      project_arr.push(document.createElement('div'));
      project_arr[i].classList.add('project-element');
      project_arr[i].textContent = proj_list[i];
      project_arr[i].dataset.name = proj_list[i];
      project_list.appendChild(project_arr[i]);
    }
  };

  const remove_project = () => {
    const project_list = document.getElementById('project-list');
    project_list.innerHTML = '';
  };

  // draws todo
  const draw_todos = (list_todo) => {
    const todos = document.getElementById('todos');
    const todos_arr = [];

    for (let i = 0; i < list_todo.length; i++) {
      todos_arr.push(todo_card(list_todo[i], i));
      // console.log(todos_arr[i]);
      todos.appendChild(todos_arr[i]);
    }
  };

  const remove_todos = () => {
    const todos = document.getElementById('todos');
    todos.innerHTML = '';
  };

  // makes a todo card
  let todo_card = (todo, i) => {
    const element = document.createElement('div');
    element.classList.add('cls-todo');
    element.dataset.location = i;

    const title = document.createElement('div');
    title.textContent = todo.title;
    title.classList.add('title');
    element.appendChild(title);

    const desc = document.createElement('div');
    desc.textContent = todo.description;
    element.appendChild(desc);
    desc.classList.add('desc');

    const due_date = document.createElement('div');
    due_date.textContent = todo.dueDate;
    element.appendChild(due_date);
    due_date.classList.add('due-date');

    const priority = document.createElement('div');

    if (todo.priority == 3) {
      priority.style.backgroundColor = '#ff5050';
    } else if (todo.priority == 2) {
      priority.style.backgroundColor = '#ffff66';
    } else {
      priority.style.backgroundColor = '#66ff66';
    }

    element.appendChild(priority);
    priority.classList.add('priority');

    const close = document.createElement('div');
    close.classList.add('todo-close');
    close.textContent = 'x';
    element.appendChild(close);
    return element;
  };

  // displays form
  const display_form = (e) => {
    const form_projects = document.getElementById('projects-add');
    const form_todo = document.getElementById('todo-add');

    if (e.target.id == 'add-projects') {
      form_projects.style.display = 'flex';
    } else if (e.target.id == 'add-todo') {
      form_todo.style.display = 'flex';
    }
  };

  // initializes add buttons
  const init_add = () => {
    const projects_add = document.getElementById('add-projects');
    const todo_add = document.getElementById('add-todo');

    projects_add.addEventListener('click', display_form);
    todo_add.addEventListener('click', display_form);
  };

  const close_form = (e) => {
    e.target.parentElement.parentElement.style.display = 'none';
  };

  // initializes close buttons
  const init_close = () => {
    const close_button = document.getElementsByClassName('close');
    for (let i = 0; i < close_button.length; i++) {
      close_button[i].addEventListener('click', close_form);
    }
  };
  // handles project submit
  const submit_project = () => {
    const form_submit = document.getElementById('submit-projects');

    form_submit.addEventListener('click', event_sub_project);
  };

  let event_sub_project = () => {
    const input_project = document.getElementById('input-project');

    handler.add_project(input_project.value);

    remove_project();
    draw_project(handler.get_projList());
    input_project.parentElement.parentElement.style.display = 'none';
  };

  // change projects
  const change_project = (projects) => {
    const side_panel = document.getElementById('side-panel');

    side_panel.addEventListener('click', (e) => {
      handle_change(e, projects);
    });
  };

  let handle_change = (e, projects) => {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].property == e.target.dataset.name) {
        remove_todos();
        draw_todos(handler.get_todos(e.target.dataset.name));

        handler.update_current(e.target.dataset.name);

        console.log('ran');

        const nodes = e.target.parentElement.childNodes;
        for (let j = 0; j < nodes.length; j++) {
          if (nodes[j].nodeName == 'DIV') {
            nodes[j].classList.remove('project-element-selected');
          }
        }

        e.target.classList.add('project-element-selected');
      }
    }
  };

  const event_sub_todo = (e) => {
    const title = document.getElementById('inp-title').value;
    const desc = document.getElementById('inp-desc').value;
    const due_date = document.getElementById('inp-date').value;
    const priority = document.getElementById('inp-prior').value;

    handler.add_todo(handler.get_current(), title, desc, due_date, priority);
    remove_todos();
    draw_todos(handler.get_todos(handler.get_current()));
    close_form(e);
  };

  const add_todo = () => {
    const submit_button = document.getElementById('submit-todo');
    submit_button.addEventListener('click', event_sub_todo);
  };

  const close_todo = () => {
    const container = document.getElementById('container');
    container.addEventListener('click', event_close_todo);
  };

  let event_close_todo = (e) => {
    if (e.target.classList.contains('todo-close')) {
      handler.remove_todo(e.target.parentElement.dataset.location);
    }
    remove_todos();
    draw_todos(handler.get_todos(handler.get_current()));
  };

  // initializes
  const init = () => {
    init_add();
    init_close();
    submit_project();
    add_todo();
    close_todo();
  };
  init();

  return {
    draw_project, draw_todos, init, change_project,
  };
})();

export { domhandler };
