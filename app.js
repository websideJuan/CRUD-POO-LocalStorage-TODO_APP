import Todo from "./src/components/dataBase.js";
import ShowMenu from "./src/components/showForm.js";

const root = document.getElementById('root')
const handleSubmit = document.getElementById('handleSubmit')
const handleChange = document.getElementById('form_action')
const popUp_fixed = document.createElement('div')

const todo = new Todo



const showMenu = new ShowMenu('form', 'btn--showForm')


window.addEventListener('DOMContentLoaded', () => {
    const elementString =  `<li>hello </li>`
    root.childElementCount < 0 ? root.appendChild(elementString): todo.getTodos()
    showMenu.showFormAction()
})

handleChange.addEventListener('submit', (e) => {
    e.preventDefault()
    handleChange.reset()
})


root.addEventListener('click', (e) => {

    if(e.target.classList.contains('fa-trash-can')){
        showPopUp(e.target.parentElement.parentElement.parentElement.parentElement)
    }

    if(e.target.classList.contains('btn--todo')){
        showPopUp('none')
    }
    
    if(e.target.classList.contains('valid')){
        todo.deleteTodo(e.target.dataset.id)
        todo.getTodos()
    }

    if(e.target.classList.contains('fa-arrow-up-right-from-square')){
        showContentCard(e.target.parentElement.parentElement.parentElement)
    }

    if(e.target.classList.contains('fa-right-to-bracket')){
        // reference.classList.remove('todo-card--show')
        console.log('click')
    }

    
    e.stopPropagation()
})

function showContentCard (reference) {
    const btnTransform = reference.querySelector('.showDescription')

    reference.classList.add('todo-card--show')

    btnTransform.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i>'

    
    
}

function showPopUp (reference) {
    
    if(typeof reference === 'object'){
        popUp_fixed.style.display = 'flex'
        popUp_fixed.setAttribute('class', 'popUp-fixed')

        const containerForId = {
            title: reference.querySelector('.todo-title').textContent,
            id: reference.dataset.id
        }
        popUp_fixed.innerHTML = `
            <div class="popUp">
                <div class="popUp-header">
                    <h3>Deleted </h3>
                    <i class="fa-solid fa-xmark" ></i>
                </div>

                <p class="popUp-paragraph">
                    Estas seguro de eliminar la tarea <span class="tarea">${containerForId.title}</span>?
                </p>

                <div class="popUp-content">
                    <button class="btn--todo valid" data-id="${containerForId.id}">
                        aceptar
                    </button>
        
                    <button class="btn--todo cancel">
                        cancelar
                    </button>
                </div>
            </div>
        `
        root.appendChild(popUp_fixed)
        return
    }

    if(typeof reference === 'string'){
        popUp_fixed.style.display = reference
        return
    }
    
}


handleSubmit.addEventListener('click', (e) => {
    formImput(e.target.parentElement.parentElement)
    e.stopPropagation()
})


function formImput (referenForm) {
    const newObj = {
        title: referenForm.querySelector('input[type=text]').value,
        completed: referenForm.querySelector('input[type=checkbox]').checked,
        description: referenForm.querySelector('#descriptiom').value,
        createdTodo: `Created : ${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()} / ${new Date().getHours()}:${new Date().getMinutes()}`,
        id: generateUUID()
    }
    
    todo.crateTodo(newObj)
    todo.getTodos()
}

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}