const tampilBtn = document.getElementById('tampilBtn');
const hapusBtn = document.getElementById('hapusBtn');
const tbody = document.querySelector('tbody')

const data = {
    nama: ["Da reean", "Amar", "Ruhel"],
    nim : ["F55124086", "F55124098", "F55123078"]
}


tampilBtn.addEventListener('click', function() {
    tbody.innerHTML = ''
    for (let i = 0; i < data.nama.length; i++) {
        const tr = document.createElement("tr")
        tr.innerHTML = `<td>${data.nama[i]}</td><td>${data.nim[i]}</td>`
        tbody.appendChild(tr)
    }
});

hapusBtn.addEventListener('click', function() {
    tbody.innerHTML = '';
});