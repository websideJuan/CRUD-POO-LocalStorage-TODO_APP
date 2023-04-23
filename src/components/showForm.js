class ShowMenu {
    constructor(state){
        if(typeof state !== 'string')
            throw new Error('requiered string Parametro')

        this.useState = {
            state: state
        }
    }

    showFormAction() {
        const elemenetValid = document.querySelector(this.useState.state)
        const elementDOM = document.querySelector('form')

        

        elemenetValid.addEventListener('click', () => {
            let initialheigth = 0
            let heigtEClientHeight = elementDOM.clientHeight
            let heigthScrollHeight = elementDOM.scrollHeight

            if(heigtEClientHeight === 0){
                elementDOM.style = `height: ${heigthScrollHeight}px; padding: 1rem; opacity: 1;`
                elemenetValid.innerHTML = `<i class="fa-solid fa-xmark"></i>Close`
                return
            }

            elementDOM.style = `${initialheigth}px padding: inithial; opacity: 0;`
            elemenetValid.innerHTML = `<i class="fa-solid fa-plus"></i>Created`

        }) 
    }
}



export default ShowMenu