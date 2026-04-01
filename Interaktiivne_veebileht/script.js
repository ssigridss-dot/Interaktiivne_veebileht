// Teksti lisamine
function lisaTekst() {
    const input = document.getElementById("inputText").value;
    document.getElementById("tulemus").textContent = "Sa kirjutasid: " + input;
}

// poenimekirja funktsioon
let total = 0;

function addItem() {
    const nameInput = document.getElementById("itemName");
    const priceInput = document.getElementById("itemPrice");

    const name = nameInput.value.trim();
    const price = Number(priceInput.value);

    if (name === "" || price <= 0) {
        alert("Sisesta korrektne nimi ja hind!");
        return;
    }

    // Lisa kogusummale
    total += price;

    // Loo listi element
    const li = document.createElement("li");
    li.textContent = name + " - " + price + " €";

    // Klikk eemaldab toote ja lahutab hinnast
    li.onclick = function () {
        total -= price;
        document.getElementById("total").textContent = total.toFixed(2);
        li.remove();
    };

    document.getElementById("shoppingList").appendChild(li);

    // Uuenda kogusumma
    document.getElementById("total").textContent = total.toFixed(2);

    // Tühjenda inputid
    nameInput.value = "";
    priceInput.value = "";
}

