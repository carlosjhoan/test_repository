
const but_save = document.getElementById("guardar");
but_save.setAttribute("onclick", "save_data()")


function save_data () {
    let data;
    const now = new Date();
    const date  = now.toDateString();
    const time = now.toLocaleTimeString();
    const vr_origen = document.getElementById("cant-orig").value;
    const vr_destino = document.getElementById("cant-dest").value;
    const divisa_destino = document.getElementById("div-dest").value;
    const divisa_origen = document.getElementById("div-orig").value;
    data = [date, time, vr_origen, divisa_origen, vr_destino, divisa_destino];
    console.log(data)
   fetch("../data/data.csv")
   .then(data => data.text())
   .then(dat => console.log(dat))
   .catch("hay un error")
}
