import bootstrap from 'bootstrap';
import Sortable from 'sortablejs'
import moment from 'moment'

{/* <div class="col">
  <h5>To Do Now</h5>
  <ul id="todo" class="bg-light rounded border d-grid gap-2 p-2">
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ul>
</div> */}
function addColumn(name) {
  const board = document.getElementById('kanban-board')
  const columnDiv = document.createElement('div')
  columnDiv.setAttribute('class', 'col')
  const columnUl = document.createElement('ul')
  const columnTitle = document.createElement('h5')
  columnTitle.setAttribute('style', 'text-transform: capitalize;')
  columnUl.setAttribute('id', 'kanban-column-' + name)
  columnUl.setAttribute('class', 'bg-light rounded border d-grid gap-2 p-2')
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



// {
//     title: 'Review Tutorial Readings',
//     dueDate: new Date('June 15, 2022 00:09:00'),
//     priority: 2,
//     subject: 'DESN2033'
// }
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
    const cardText = document.createElement('p');
    const cardDaysLeft = document.createElement('div');
    const cardDueDate = document.createElement('div');
    cardDueDate.setAttribute('class', 'd-inline', 'p-2', 'bg-dark', 'text-white')
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
    /* <li id="placeholder">
          <div class="card" style="width: 18rem;" data-bs-toggle="modal" data-bs-target="#editCard">
              <div class="card-header">
                ! Low Priority !
              </div>
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
              <h5 class="card-title">WRITE WK 3 LECTURE NOTES</h5>
              <h6 class="card-subtitle mb-2 text-muted">PSYC2022</h6>
              <p class="card-text">hi.</p>
              <div class="d-inline p-2 bg-primary text-white">12 days left</div>
              <div class="d-inline p-2 bg-dark text-white">DUE: MAY 30TH</div>
            </div>
          </div>
        </li> */

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



        // https://flatpickr.js.org/examples/?fbclid=IwAR03voeGnx7gzd4UGKOOLYxncdXPGTZmcYY01RacVRr32WcPn2MJ-BN94q4
        // const flatpickr = require("flatpickr");

// const flatpickr = require("flatpickr");
// date.{
//     enableTime: true,
//     dateFormat: "Y-m-d H:i",
// }