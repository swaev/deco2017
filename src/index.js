import bootstrap from 'bootstrap';
import Sortable from 'sortablejs'

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
        priority: 0,
        subject: 'PSYC1111'
    },
    {
        title: 'Start Quiz',
        dueDate: new Date('June 5, 2022 00:17:00'),
        priority: 1,
        subject: 'INFS3051'
    },
    {
        title: 'Review Tutorial Readings',
        dueDate: new Date('June 15, 2022 00:09:00'),
        priority: 2,
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

    backlog.appendChild(cardLi)
}


backlogCards.map(card => {
    addCardToBacklog(card)
})

var createCardButton = document.getElementById('card-create-button');
createCardButton.onclick = function() {
    const titleInput = document.getElementById('create-card-title-input')
    addCardToBacklog({
        title: titleInput.value,
        subject: 'sadfasdfafd'
    })
}

{/* <li id="placeholder">
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
        </li> */}

