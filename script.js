

/* NUOVO ESERCIZIO
____________________________________________________________________________________________________________

Data una lista della spesa (memorizzata in un array), stampare sulla pagina 
(anche brutalmente, basta che si vedano) gli elementi della lista 
individualmente con un ciclo while.

*/

// Memorizzo una lista casuale della spesa in una variabile array
// Stampo gli elementi della lista in pagina utilizzando un ciclo while.




// Memorizzo una lista casuale della spesa in una variabile array

let shopListElement = ["latte", "uova", "cereali", "farina", "pasta"];
console.log(shopListElement);

// Stabilisco una variabile contatore e il punto di partenza
let index = 0;


let listContainerElement = document.getElementById("list-container");

// Creo il ciclo while



let buttonElement = document.getElementById("show-button");

buttonElement.addEventListener("click", function () {
    
while (index < shopListElement.length) {
    let newLiElement = document.createElement("li");
    listContainerElement.append(newLiElement);
    newLiElement.innerHTML = shopListElement[index];
    index++;  
}
    
})

