
const root_Element = document.getElementById('root');
const fragment = document.createDocumentFragment()
const template_li = document.getElementById('template_li').content



console.log(template_li)

class Todo {

    dataBase = [
        {
            title:"Alfin TERMINE",
            description:"Termine por fin mi app de tareas solo quedan agregar las utlimas funcionalidades y listo",
            id:"3b86171450c043c4a511034f6ced0b74"
        },
        {
            title:'DevOps',
            description: 'Me queda para mi, la parte mas importante de este proyecto, desplegarlo por ahora en gitgub page, para comenzar con el desarrollo del servidor de esta todo app',
            id:"fb3ade28c45246c6ac89d22d913398cc"
        },
        {
            title:'Update function',
            description:'Lograr incorporar la opcion de actualizar mi todo, el CRUD estara listo, al ser el primero que hago me siento satisfecho y con cada vez mas fuerzas para ser un desarrollador de software',
            createdTodo:'Created : 6-3-2023 / 22:21',
            id:"a08302de31bf4dac9dbf4ae1a1c631a0"
        },
        {
            title:'Regalo Deleted',
            description:'Esta tarea es de test para probar la app en todas las pantallas',
            createdTodo:'Created : 6-3-2023 / 22:21',
            id:"d7b1417f6a5a4581b76af223c2b7fc92"
        },
        {
            title:'Futuro no tan sercano',
            description:'Crear el dark mode de la app es la principal ambición de este desarrollador lograr todo con vanilla javascript es sensacional 😊. Tareas secundarias: - agregar notificaciones en base a cada click de la app - agregar una foto ( opcinal ) en la tarea - agregar users creador de cada tarea, para esto el select',
            createdTodo:'Created : 6-3-2023 / 22:24',
            id:"0b75387d9db24a868b70c5614d47928f"
        }
    ]

    
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
            template_li.querySelector('.todo-text').innerHTML = todo.description


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