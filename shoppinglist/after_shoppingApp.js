let rootList = document.querySelector('.items');
let addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', () => {
  let content = document.querySelector('.footer__input');
  if (content.value !== '') {
    let thing = document.createElement('li');
    let text = document.createElement('span');
    thing.className = 'item';
    text.textContent = content.value;
    //지우는 버튼
    thing.append(text);
    let eraseBtn = document.createElement('i');
    eraseBtn.className = 'fas fa-trash-alt eraseBtn';
    eraseBtn.addEventListener('click', (e) => {
      e.target.parentNode.remove();
    });
    thing.append(eraseBtn);

    rootList.append(thing);
    content.value = '';
    thing.scrollIntoView({ block: 'center' });
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key == 'Enter') {
    document.querySelector('#addBtn').click();
  }
});
