//variable connects you to 'notes' that were stored on the page and transforms data in notes (strings) into js objects
const notes = JSON.parse(localStorage.getItem('notes'))
// variable connects you to button 'add'
const addBtn = document.getElementById('add')

if(notes) {
    notes.forEach(note => addNewNote(note))
}
// creates a new note 

addBtn.addEventListener('click', () => addNewNote())
// add event listener 'click', so note is created by click

function updateLS() {
    //in function updateLS created variable that connects you to textarea
    const notesText = document.querySelectorAll('textarea')

    const notes = []
    //crated variable to store notes

    notesText.forEach(note => notes.push(note.value))
    //each notestext takes in a new text that was updated

    localStorage.setItem('notes', JSON.stringify(notes))
    //converts js object (notes) into a string to store it
}

function addNewNote(text = '') {
    const note = document.createElement('div')
    //variable connect you to a div element that is getting created
    note.classList.add('note')


    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `
    // after div was created, we assign what is going to be inside of it

    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')
    //use queryselector to connect to parts of the code responsible bot edit, delete, main and textarea

    textArea.value = text
    main.innerHTML = marked(text)

    deleteBtn.addEventListener('click', () => {
        note.remove()
        //delete note by click

        updateLS()
        // update the list of notes
    })

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target
        //the new text in the new note is stored in a variable

        main.innerHTML = marked(value)
        //html code is getting updated after getting new text in a new note

        updateLS()
    })

    document.body.appendChild(note)
    //new notes are added to the body of the document
}