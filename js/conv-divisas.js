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


    origContainer.addEventListener("input", () => {
        let origValue = origContainer.value;
        const origSelectValue = origSelect.value;
        const destSelectValue = destSelect.value;
        console.log(origSelectValue)
        if(origSelectValue === "none" & destSelectValue === "none") {
            alert("Choose conversion")
        } 
        origValue = origValue / json.rates[origSelectValue];
        console.log(origValue)
        const convert = origValue / json.rates[destSelectValue];
        console.log(convert)
        destContainer.value = convert.toFixed(1)
    })
    
    destContainer.addEventListener("input", () => {
        let destValue = destContainer.value;
        const origSelectValue = origSelect.value;
        const destSelectValue = destSelect.value;

        if(origSelectValue === "none" & destSelectValue === "none") {
            alert("Choose conversion")
        } 
        destValue = destValue / json.rates[`${destSelectValue}`];
        console.log(destValue)
        const convert = destValue / json.rates[`${origSelectValue}`];
        console.log(convert)
        origContainer.value = convert.toFixed(1)
    })
})();



