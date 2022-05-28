import Sortable from 'sortablejs'
var grid = document.getElementById('acronym-grid');
var sortableGrid = Sortable.create(grid, { group: 'acronym'});
var acronymInput = document.getElementById('acronym-input');

const dictionary = {
    a: 'Apple',
    b: 'Banana',
    c: 'Cat'
}

function addAcronym(acronym) {
    const col = document.createElement('div');
    col.setAttribute('class', 'col-sm-6');
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', 'card');
    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');

    const string = acronym.trim()
    const wordArray = string.split(' ')

    const wordElement = document.createElement('h5');
    wordElement.textContent = wordArray.join(', ')
    cardDiv.appendChild(wordElement);
    wordArray.forEach(word => {
        const letter = word[0];
        const text = document.createElement('h3');

        text.setAttribute('class', 'acronym');
        // so numbers don't break we add the or syntax it goes to the right when the number doesn't exist in the dictionary
        text.textContent = dictionary?.[letter] || word;
        cardBody.appendChild(text);
    });
    cardDiv.appendChild(cardBody)
    col.appendChild(cardDiv)
    grid.appendChild(col)
}

acronymInput.onkeydown = function(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        addAcronym(acronymInput.value);
        acronymInput.value = "";
    }
}

