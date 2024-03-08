const sections = document.querySelectorAll('.section')
const story = document.querySelector('.story')

let currentBox;



sections.forEach((section)=>{

    let id = section.id;

    section.addEventListener('dragover',(e)=>{

        e.preventDefault();
    })
    section.addEventListener('drop',(e)=>{
        e.preventDefault();
        document.querySelector(`#${id}`).append(currentBox)
    })
})

story.addEventListener('keyup',(e)=>{
    
    let key = e.key;
    let {value} = e.target

    if(key === 'Enter' && value != ''){

        /*
            Dynamically create card & add story input
            to the card
        */

        let card = document.createElement('div')
        card.className = 'card'
        card.draggable = true
        card.textContent = value
        
        let deleteDiv = document.createElement('div')
        let btn = document.createElement('button')
        deleteDiv.className = 'delete'
        
        deleteDiv.append(btn)
        card.append(deleteDiv)
        
        sections[0].append(card)
        
        story.value = ""

        btn.addEventListener('click', (e)=>{

            card.remove()
        })
    }


    const boxes = document.querySelectorAll('.card')
    
    if(boxes.length>0){

        boxes.forEach((box)=>{
        
            box.addEventListener('dragstart',()=>{

                currentBox = box
            })
            box.addEventListener('dragend',()=>{
                currentBox = null;
            })
    })
}
})


// todo.addEventListener('dragover',(e)=>{

//     e.preventDefault();
//     console.log('dragover');
// })
// todo.addEventListener('drop',(e)=>{


//     e.preventDefault();
//     document.querySelector('.todo').append(currentBox)
//     console.log('drop');
// })


// stories.addEventListener('dragover',(e)=>{

//     e.preventDefault();
//     console.log('dragover');
// })
// stories.addEventListener('drop',(e)=>{


//     e.preventDefault();
//     document.querySelector('.stories').append(currentBox)
//     console.log('drop');
// })



