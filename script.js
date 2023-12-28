const input = document.querySelector('#inputText');
const todoList = document.querySelector('#todoList');
const doneList = document.querySelector('#doneList');


// fas 

function addList(text){
    const checkButton = document.createElement('i');
    checkButton.className = "far fa-check-square";
    const trashIcon = document.createElement('i');
    trashIcon.className = "far fa-trash-alt";

    let icons = document.createElement('div');
    icons.className = 'icons';
    icons.appendChild(checkButton);
    icons.appendChild(trashIcon);

    let p = document.createElement('p');
    p.innerHTML = text;

    let li = document.createElement('li');
    li.className = 'item';
    li.appendChild(p);
    li.appendChild(icons);

    todoList.appendChild(li);
}

function addDoneList(text){
    let li = document.createElement('li');
    li.innerHTML = text;
    doneList.appendChild(li);
}

input.addEventListener('keydown', e =>{
    let newitem;
    if(e.code === 'Enter' && input.value != ""){
        newitem = input.value;
        // Add to li
        addList(newitem);
        input.value = "";
    }
});


todoList.addEventListener('click', e => {
    if(e.target.className === 'far fa-check-square'){
        let clickedLi = e.target.parentNode.parentNode;
        // move to done list
        let text = clickedLi.querySelector('p').textContent;
        console.log(text);
        clickedLi.remove();
        addDoneList(text);
    }
    else if(e.target.className === 'far fa-trash-alt'){
        let currentLi = e.target.parentNode.parentNode;
        currentLi.remove();
        // delete from the list
    }
});
