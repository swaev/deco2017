import Sortable from 'sortablejs'
var grid = document.getElementById('acronym-grid');
var sortableGrid = Sortable.create(grid, { group: 'acronym'});
var acronymInput = document.getElementById('acronym-input');

//completing a string manipulation to split the words into individual words
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
// https://www.w3schools.com/jsref/jsref_includes_array.asp
const dictionary = {
    a: 'apple',
    b: 'banana',
    c: 'cat',
    d: 'dog',
    e: 'egg',
    f: 'fish',
    g: 'giraffe',
    h: 'horn',
    i: 'ice',
    j: 'jack',
    k: 'kg',
    l: 'light',
    m: 'mom',
    n: 'no',
    o: 'octopus',
    q: 'queef',
    r: 'run',
    s: 'salt',
    t: 'toe',
    u: 'uno',
    v: 'vick',
    w: 'wave',
    x: 'xray',
    y: 'yes',
    z: 'zebra',
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

// clearing the input and calling the function to add an acronym card after pressing enter
acronymInput.onkeydown = function(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        addAcronym(acronymInput.value);
        acronymInput.value = "";
    }
}

