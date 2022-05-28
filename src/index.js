import bootstrap from 'bootstrap';
import Sortable from 'sortablejs'
import moment from 'moment'
var backlog = document.getElementById('backlog');
var todo = document.getElementById('todo');
var progress = document.getElementById('progress');
var done = document.getElementById('done');
var sortableBacklog = Sortable.create(backlog, { group: 'column'});
var sortableTodo = Sortable.create(todo, { group: 'column'});
var sortableDone = Sortable.create(progress, { group: 'column'});
var sortableBacklog = Sortable.create(done, { group: 'column'});

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
    const cardLi = document.createElement('li');
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', 'card');
    cardDiv.setAttribute('data-bs-toggle', 'modal');
    cardDiv.setAttribute('data-bs-target', '#editCard');
    const cardHeader = document.createElement('div');
    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('h5');
    const cardSubtitle = document.createElement('h6');
    const cardText = document.createElement('p');
    const cardDaysLeft = document.createElement('div');
    const cardDueDate = document.createElement('div');
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
    cardSubtitle.textContent = card.subtitle;

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
    const inputDate= document.getElementById('due-date-input')
    const priorityInput = document. querySelector('input[name="priorityRadio"]:checked')
    addCardToBacklog({
        title: titleInput.value,
        dueDate: inputDate.value,
        priority: priorityInput.value,
        subject: 'sadfasdfafd'
    })

}

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

        // https://flatpickr.js.org/examples/?fbclid=IwAR03voeGnx7gzd4UGKOOLYxncdXPGTZmcYY01RacVRr32WcPn2MJ-BN94q4
        // const flatpickr = require("flatpickr");

// const flatpickr = require("flatpickr");
// date.{
//     enableTime: true,
//     dateFormat: "Y-m-d H:i",
// }