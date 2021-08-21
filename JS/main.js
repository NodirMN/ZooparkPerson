let name = document.getElementById('userTur')
let address = document.getElementById('userAddress')
let kg = document.getElementById('userkg')
let usercolor = document.getElementById('usercolor')
let progs = document.querySelectorAll('.form-check input[type=checkbox]')
let userLaqabi = document.getElementById('userLaqabi')
let userDepart = document.getElementById('userDepart')
let userxodim = document.getElementById('userxodim')
let userday = document.getElementById('userday')

let users = []
let table = document.querySelector('table')
var myModal = new bootstrap.Modal(document.getElementById('newWorkerModal'), {})
if (localStorage.getItem('users')) {
    try {
        users = JSON.parse(localStorage.getItem('users'));
        show()
    } catch (error) {
        localStorage.removeItem('users')
    }
}

function add() {
    let progLang = []
    progs.forEach(prog => {
        if (prog.checked) {
            progLang.push(prog.value)
        }
    })
    const user = {
        name: name.value,
        address: address.value,
        kg: kg.value,
        userColor: usercolor.value,
        progs: progLang,
        userLaqabi: userLaqabi.value,
        userDepart: userDepart.value,
        userxodim: userxodim.value,
        userday: userday.value,

    }
    users.push(user)
    let readyUsers = JSON.stringify(users)
    localStorage.setItem('user', readyUsers);
    show();
    myModal.hide()

}

function show() {
    let count = 1
    table.innerHTML = `<thead>
        <tr class="table-primary">
            <th scope="col">#</th>
            <th scope="col">Hayvon turi</th>
            <th scope="col">Tugilgan joyi</th>
            <th scope="col">Vazni</th>
            <th scope="col">Rangi</th>
            <th scope="col">Yashash muhiti</th>
            <th scope="col">Laqabi</th>
            <th scope="col">Qaysi zonaga biriktirilishi</th>
            <th scope="col">Qaysi zoopark xodimi javob berishi</th>
            <th scope="col">Qachondan zooparkda yashab boshlashi</th>
            <th scope="col">Button</th>
        </tr>
    </thead>`
    users.forEach(user => {
        table.innerHTML += `<tr><td>${count}</td><td>${user.name}</td><td>${user.address}</td><td>${user.kg}</td><td>${user.userColor}
                <td>${user.progs}</td><td>${user.userLaqabi}</td><td>${user.userDepart}</td><td>${user.userxodim}</td><td>${user.userday}</td>
              <td><button class ="btn btn-danger" onclick="del(${count-1})">Delete</button></td>`
        count++
    })
}

function del(index) {
    users.splice(index, 1)
    let readyUsers = JSON.stringify(users)
    localStorage.setItem('user', readyUsers);
    show()
}