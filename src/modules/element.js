import { todoApp } from "./todoApp";

const todoCard = ({ description, index }) => {
    const liEl = document.createElement('li');
    liEl.classList.add('todo-wrapper');
    liEl.id = `todo-${index}`;
    liEl.innerHTML = `
      <div class='left-align'>
        <div>
          <input type="checkbox" id="task-${index}" />
        </div>
        <div class='description-wrapper'>
          <p class='description'>${description}</p>
        </div>
      </div>
      <div class='more-delete-wrapper'>
          <ion-icon class='more-icon ionic' name="ellipsis-vertical-outline"></ion-icon>
      </div>
        `;
    return liEl;
  };
  
  const displayItems = () => {
    const listContainer = document.querySelector('.todo-list-holder');
    todoApp.todos.forEach((todo) => {
      listContainer.appendChild(todoCard(todo));
    });
    const moreIcon = document.querySelectorAll('.more-icon');
    let moreIconArr = Array.from(moreIcon);
    moreIconArr.forEach((icon) => {
        icon.addEventListener('click', editEl);
    });   
  };
  
    const editEl = (e) => {
        const moreIcon = e.target
        const todoWrap = moreIcon.parentElement.parentElement;
        console.log(todoWrap)   
        const moreIconWrapper = moreIcon.parentElement;
        console.log( moreIconWrapper)    
        const descWrapper = todoWrap.firstElementChild.lastElementChild
        console.log(descWrapper)
        const desc = descWrapper.querySelector('.description');
        console.log(desc);
    
    const deleteIcon = document.createElement('div');
    deleteIcon.innerHTML =  `<ion-icon class='ionic delete-icon' name="trash-outline"></ion-icon>`
    let inputEl = document.createElement('input');
    inputEl.type = 'text';
    inputEl.classList.add('edit-input')
    inputEl.value = desc.textContent;

    // hide description and moreIcon
    desc.classList.toggle('none');
    moreIcon.classList.toggle('none');
    // Append delete and input element for edit
    moreIconWrapper.appendChild(deleteIcon);
    descWrapper.appendChild(inputEl);
    todoWrap.style.backgroundColor = '#f6f6c8';
    inputEl.focus();

    inputEl.addEventListener('focusout', (e) => {
        let input = e.target;
        desc.textContent = input.value;
        desc.classList.toggle('none');
        moreIcon.classList.toggle('none');
        todoWrap.style.backgroundColor = '';

        deleteIcon.remove();
        input.remove();
    });


  }


  export { todoCard, displayItems, editEl}