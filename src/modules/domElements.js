const todoCard = ({ description, index }) => {
  const liEl = document.createElement('li');
  liEl.classList.add('todo-wrapper');
  liEl.id = `todo-${index}`;
  liEl.innerHTML = `
      <div class='left-align'>
        <div>
          <input type="checkbox" class='checkbox' id="check-${index}" />
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

const editInputEl = (desc) => { 
  const inputEl = document.createElement('input');
  inputEl.type = 'text';
  inputEl.classList.add('edit-input');
  inputEl.value = desc.textContent;
  return inputEl;
}

const deleteEl = () => {
  const deleteIcon = document.createElement('div');
  deleteIcon.innerHTML = 
  '<ion-icon class=\'ionic delete-icon\' name="trash-outline"></ion-icon>';
  return deleteIcon;
}

export { editInputEl, deleteEl, todoCard};