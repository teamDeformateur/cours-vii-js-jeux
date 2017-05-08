var position = 101;
var mines = new Array();

window.addEventListener("keydown", function (event) {
    var key = event.keyCode;
    var nouvellePosition = 0;
    var deplacement = false;
    // fleche droite
    if (key === 39) {
        if ((position % 25) !== 0) {
            nouvellePosition = position + 1;
            deplacement = true;
        }
        // fleche bas
    } else if (key === 40) {

        nouvellePosition = position + 100;
        if (nouvellePosition < 2526) {
            deplacement = true;
        }
    }
    // fleche gauche
    else if (key === 37) {
        nouvellePosition = position - 1;
        if ((nouvellePosition % 100) !== 0) {
            deplacement = true;
        }
    }
    // fleche haut
    else if (key === 38) {
        nouvellePosition = position - 100;
        if (nouvellePosition > 100) {
            deplacement = true;
        }
    }

// si on doit se déplacer
    if (deplacement) {
        // déplacement de la cellule
        var ancienneCell = document.getElementById(position);
        ancienneCell.className = "fondBlanc";
        var nouvelleCell = document.getElementById(nouvellePosition);
        nouvelleCell.className = "fondRouge";

        // MAJ de la position
        position = nouvellePosition;
    }

    // si on est dans la dernière case 
    if (position === 2525) {
        alert('Vous avez gagné !');
    }
    // Si on est sur une mine
    if(mines[nouvellePosition]){
        alert('Vous avez perdu !');
        location.reload();
    }

    // apparition d'une mine
    var randomColumn = Math.floor(Math.random() * 25);
    var randomLine = Math.floor(Math.random() * 25)*100;
    var coordonnees = randomLine + randomColumn;
    var cell = document.getElementById(String(coordonnees));
    cell.className = "fondBlanc mined";
    // MAJ du tableau de mines
    mines[coordonnees] = 1;

});

var table = document.createElement("table");
for (var i = 1; i <= 25; i++) {
    var row = document.createElement("tr");
    for (var j = 1; j <= 25; j++) {
        var cell = document.createElement("td");
        cell.className = "fondBlanc";
        cell.id = parseInt(i) * 100 + parseInt(j);
        cell.appendChild(document.createTextNode('  '));
        row.appendChild(cell);
    }
    table.appendChild(row);
}
var p = document.getElementById("demo");
p.appendChild(table);

// init de la première cellule
var firstCell = document.getElementById("101");
firstCell.className = "fondRouge";
firstCell.innerHTML = "<img height=\"25px\" width=\"25px\" src=\"./img/depart.png\"/>";

// init de la dernière
var lastCell = document.getElementById("2525");
lastCell.innerHTML = "<img height=\"25px\" width=\"25px\" src=\"./img/green-waving-flag-icon-679.png\"/>";

// init des mines
var cell = document.getElementById("1013");
cell.className = "fondBlanc mined";

function uniKeyCode(event) {
    var key = event.keyCode;
    alert("Unicode KEY code: " + key);
}