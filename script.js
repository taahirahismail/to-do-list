let listArr = [];

function add() {
    let listItem = {
        id: '',
        name: document.getElementById("todo").value,
        createdDate: '',
        completed: '',
    };

    listArr.push(listItem);

    let list = document.querySelector("#list");
    list.innerHTML = "";
    listArr.forEach((data) => {
        list.innerHTML += `
        <div class="list-items">
        <input type="checkbox" id="check" value="done" onclick="done()">
        <li style="list-style-type: none">${data.name}</li>
        <button onclick="clrItem('${data}')">x</button>
        </div>`

        document.getElementById("todo").value = "";
    })
}

function sorting() {
    listArr.sort();
    document.getElementById("todo").innerHTML = listArr;
}

function done() {
    let check = document.getElementById("check");
    if (check.checked === true) {
        document.getElementsByTagName("li").style.textDecoration = "line-through";
    } else {
        document.getElementsByTagName("li").style.textDecoration = "none";
    }
}

function clrItem(obj) {
    listArr = listArr.splice(listArr.indexOf(obj),1)
    let list = document.querySelector("#list");
    list.innerHTML = "";
    listArr.forEach((data) => {
        list.innerHTML += `
        <div class="list-items">
        <input type="checkbox" id="check" value="done" onclick="done()">
        <li style="list-style-type: none">${data.name}</li>
        <button onclick="clrItem('${data}')">x</button>
        </div>`

        document.getElementById("todo").value = "";
    })


    // console.log(JSON.parse(listArr.slice(0, listArr.indexOf(className)) + listArr.slice(listArr.indexOf(className) + 1, listArr.length - 1)));
    // console.log(listArr);
    return null
}

[]