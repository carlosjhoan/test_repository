document.getElementById("guardar").addEventListener("click", () => {
    console.log("hola")
})
function save_data () {
   fetch("../data/data.csv")
   .then(data => data.text())
   .then(dat => console.log(dat))
   .catch("hay un error")
}

