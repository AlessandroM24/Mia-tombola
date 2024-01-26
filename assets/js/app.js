let righe = 10;
let colonne = 10;
let numeriUsciti = [];

function DisegnaTabella() {

    let div1 = document.getElementById('div1');
    let tabella = document.createElement("table");

    var i = 1;
    for (var r = 0; r < righe; r++) {
        let row = document.createElement("tr");
        for (var c = 0; c < colonne; c++, i++) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode(i);
            cell.id = "casella" + i;
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tabella.appendChild(row);
    }

    div1.appendChild(tabella);

}

function cambiaColore() {
    let num;

    do {
        num = Math.floor(Math.random() * 100) + 1;
    } while (numeriUsciti.includes(num))

    numeriUsciti.push(num);

    document.getElementById("casella" + num).style.backgroundColor = "yellow";
}

DisegnaTabella();
