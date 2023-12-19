const form = document.querySelector("form");
const Name = document.getElementById("name");
const phone = document.getElementById("phone");
let lines = "";
let names = []
let numbers = []

form.addEventListener('submit', function(e){
    e.preventDefault();
    addLine();
    tableRefresher();
})

function addLine(){
    const warning = document.getElementById("warning"); 
    if(names.includes(Name.value)){
        warning.style.display = "block";
        warning.innerHTML = `<p>O nome ${Name.value} já está cadastrado, escolha outro.</p>`;
    } else {
        warning.style.display = "none";
        warning.innerHTML = " ";
        if(numbers.includes(phone.value)){
            warning.style.display = "block";
            warning.innerHTML = `<p>O número ${phone.value} já está cadastrado, escolha outro.</p>`;
        } else{
            warning.style.display = "none"
            warning.innerHTML = " ";

            let columns = `<tr>`;
            columns += `<td id="element">${Name.value}</td>`;
            columns += `<td id="element">${phone.value}</td>`;
            columns += `</tr>`;

            names.push(Name.value);
            numbers.push(phone.value);

            lines += columns;

            Name.value = "";
            phone.value = "";
        }
    }
}

function tableRefresher(){
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = lines;
}
