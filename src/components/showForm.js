class ShowMenu {
    constructor(elements, delegation){

        if(typeof elements !== 'string' && typeof delegation !== 'string')
            throw new Error('requiered string Parametro')

        this.useState = {
            elements: elements,
            delegation: delegation
        }
    }

    showFormAction() {
        const elementDOM = document.querySelectorAll(`.${this.useState.elements}`)
        const elemenetValid = document.querySelectorAll(`.${this.useState.delegation}`)
        
        let initialheigth = 0
        let heigtEClientHeight
        let heigthScrollHeight
     
        for (let i = 0; i < elemenetValid.length; i++) {
                
            elemenetValid[i].addEventListener('click', () => {
                
                const formid = parseInt(elemenetValid[i].dataset.formid)

                for (let i = 0; i < elementDOM.length; i++) {
                 
                    heigtEClientHeight = elementDOM[formid].clientHeight
                    heigthScrollHeight = elementDOM[formid].scrollHeight
                    
                    if(heigtEClientHeight === initialheigth){
                        elementDOM[formid].style = `height:${heigthScrollHeight}px; padding: 1rem 2rem;`
                        return   
                    }

                    elementDOM[formid].style = `height:${initialheigth}; padding: ${initialheigth};`
                }
            })
        }
    }
}



export default ShowMenu