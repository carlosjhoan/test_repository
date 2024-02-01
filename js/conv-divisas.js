const origContainer = document.getElementById("cant-orig");
const destContainer = document.getElementById("cant-dest");
const origSelect = document.getElementById("div-orig");
const destSelect = document.getElementById("div-dest");



(async function addCoutnries() {
    const url = "https://cdn.dinero.today/api/latest.json";
    const result = await fetch(url);
    const json = await result.json();
    const rates = json.rates
    
    for(const key in rates) {
        const element = document.createElement("option");
        element.value = key;
        element.textContent = key;
        origSelect.appendChild(element);
    }
    for(const key in rates) {
        const element = document.createElement("option");
        element.value = key;
        element.textContent = key;
        destSelect.appendChild(element);
    }
})();


