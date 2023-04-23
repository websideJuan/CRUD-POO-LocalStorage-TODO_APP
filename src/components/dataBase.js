
const root_Element = document.getElementById('root');
const fragment = document.createDocumentFragment()
const template_li = document.getElementById('template_li').content



console.log(template_li)

class Todo {

    dataBase = []

    
    obtener() {
        const local = localStorage.getItem("todo")
        return JSON.parse(local) || []
    }

    getTodos () {
        root_Element.innerHTML = ''
        this.dataBase = this.obtener()
        
        this.dataBase.map(todo => {
            
            todo.completed && template_li.querySelector('.todo-card').getAttribute('class', 'stateTodo')
            template_li.querySelector('.todo-card').dataset.id = todo.id
            template_li.querySelector('.todo-title').textContent = todo.title
            template_li.querySelector('.todo-created').textContent = todo.createdTodo
            template_li.querySelector('.todo-text').textContent = todo.description


            const clone = template_li.cloneNode(true)
            fragment.appendChild(clone)
        });

        root_Element.appendChild(fragment);
        return this.dataBase
    }

    crateTodo(obj) {
        if(!this.validacionDeExistencia(this.dataBase.length)){
            this.dataBase.push(obj)
            this.percistiendoDatos()
        }
        
        return alert('tarea created')
    }

    validacionDeExistencia(id) {
        return this.dataBase.find(todo => todo.id == id)
    }
    
    percistiendoDatos() {
        localStorage.setItem("todo", JSON.stringify(this.dataBase))
    }

    deleteTodo(id) {

        const indexOfElement = this.dataBase.findIndex(todo => todo.id === id)
    
        this.dataBase.splice(indexOfElement, 1)
        this.percistiendoDatos()
    }
}


export default Todo