import bootstrap from 'bootstrap';
import Sortable from 'sortablejs'
import moment from 'moment'

// setting attributes for each section

function addColumn(name) {
  const board = document.getElementById('kanban-board')
  const columnDiv = document.createElement('div')
  columnDiv.setAttribute('class', 'col')
  const columnUl = document.createElement('ul')
  const columnTitle = document.createElement('h5')
  columnTitle.setAttribute('style', 'text-transform: capitalize;')
  columnUl.setAttribute('id', 'kanban-column-' + name)
  columnUl.setAttribute('class','bg-light rounded border d-grid gap-3 p-3')
  columnTitle.textContent = name;
  columnDiv.appendChild(columnTitle)
  columnDiv.appendChild(columnUl)
  board.appendChild(columnDiv)
  
  Sortable.create(columnUl, { group: 'column'});
}

addColumn('backlog')
addColumn('todo')
addColumn('progress')
addColumn('done')


// Modal javascript https://getbootstrap.com/docs/5.0/components/modal/// 
// coming up with what comes up in the original cards on the board 
const backlogCards = [
    {
        title: 'Write Week 3 Lecture',
        dueDate: new Date('May 24, 2022 00:04:30'),
        priority: 'low',
        subject: 'PSYC1111'
    },
    {
        title: 'Start Quiz',
        dueDate: new Date('June 5, 2022 00:17:00'),
        priority: 'medium',
        subject: 'INFS3051'
    },
    {
        title: 'Review Tutorial Readings',
        dueDate: new Date('June 15, 2022 00:09:00'),
        priority: 'high',
        subject: 'DESN2033'
    },
]


// setting up attributes for each section 
function addCardToBacklog(card) {
    const backlog = document.getElementById('kanban-column-backlog');
    const cardLi = document.createElement('li');
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', 'card');
    cardDiv.setAttribute('data-bs-toggle', 'modal');
    cardDiv.setAttribute('data-bs-target', '#editCard');
    const cardHeader = document.createElement('div');
    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('h5');
    // adding card header https://getbootstrap.com/docs/4.0/components/card/#card-styles" 
    cardTitle.setAttribute('class', 'card-header mb-3')
    const cardSubtitle = document.createElement('h6');
    // giving it spacing through mx-3 https://getbootstrap.com/docs/5.0/utilities/spacing/#notation
    cardSubtitle.setAttribute('class', 'mx-3');
    const cardText = document.createElement('p');
    const cardDaysLeft = document.createElement('div');
    cardDaysLeft.setAttribute('class', 'mx-3');
    const cardDueDate = document.createElement('div');
    cardDueDate.setAttribute('class', 'mx-3');
    const flag = document.createElement('i');
    flag.setAttribute('class', 'bi bi-flag-fill')
    if (card.priority == 'low') {
        flag.setAttribute('style', 'color: green;')
      } else if (card.priority == 'medium') {
        flag.setAttribute('style', 'color: orange;')
        } else if (card.priority == 'high') {
        flag.setAttribute('style', 'color: red;')
      }
    cardDueDate.textContent = moment(card.dueDate).format('MMM Do YY')
    cardDaysLeft.textContent = moment(card.dueDate).fromNow()
    cardTitle.textContent = card.title;
    cardSubtitle.textContent = card.subject;

    //Here I am making a function for reach to create and build html elements 
    cardLi.appendChild(cardDiv)
    cardDiv.appendChild(cardHeader)
    cardDiv.appendChild(cardBody)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardSubtitle)
    cardBody.appendChild(cardText)
    cardBody.appendChild(cardDaysLeft)
    cardBody.appendChild(cardDueDate)
    cardBody.appendChild(flag) 

    backlog.appendChild(cardLi)
}




backlogCards.map(card => {
    addCardToBacklog(card)
})

var createCardButton = document.getElementById('card-create-button');
createCardButton.onclick = function() {
    const titleInput = document.getElementById('create-card-title-input')
    const subject = document.getElementById('create-subject-input')
    const inputDate= document.getElementById('create-due-date-input')
    const priorityInput = document.querySelector('input[name="create-priority-input"]:checked')
    console.log("???", priorityInput)
    addCardToBacklog({
        title: titleInput.value || 'Task Title',
        dueDate: inputDate.value || new Date(),
        priority: priorityInput.value || 'low',
        subject: subject.value || 'PSYC1111',
    })

}

var createColumnButton = document.getElementById('new-column-button')
createColumnButton.onclick = function() {
  const columnName = document.getElementById('new-column-name')
  addColumn(columnName.value)
  // make the input go back to empty after adding something
  columnName.value = "";
}
