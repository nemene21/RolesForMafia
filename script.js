
let roles = []

for (let i = 0; i < 1000000; i++) {
    Math.random();
}

function remove_from_list(list, el) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] == el) {
            list.slice(i, 1);
            return;
        }
    }
}

let roleList = document.getElementById("role_list");

let addRoleBtn = document.getElementById("add_role");
addRoleBtn.onclick = (event) => {
    let newRole = prompt("Role name:");
    roles.push(newRole);

    roleList.innerHTML = "<p> Roles: </p>";
    for (let i = 0; i < roles.length; i++) {
        let roleDiv = document.createElement("div");
        roleDiv.classList.add("role_div");

        console.log(roles[i]);
        roleDiv.innerHTML = `
        ${roles[i]}
        <div class="number_button_div">
            <button onclick="incr_role('${roles[i]}')"> + </button> <br>
            <button onclick="decr_role('${roles[i]}')"> - </button>
        </div>
        <span class="number_span"> 1 </span>
        <button onclick="remove_role('${roles[i]}')"> × </button>
        `;
        roleDiv.id = roles[i];
        roleList.appendChild(roleDiv);
    }
}

function remove_role(name) {
    let role = document.getElementById(name);
    remove_from_list(roles, name);
    role.remove();
}

function incr_role(name) {
    let role = document.getElementById(name);
    let numberTag = role.getElementsByClassName("number_span")[0];
    numberTag.textContent = String(parseInt(numberTag.textContent) + 1);
}

function decr_role(name) {
    let role = document.getElementById(name);
    let numberTag = role.getElementsByClassName("number_span")[0];
    numberTag.textContent = String(parseInt(numberTag.textContent) - 1);
}

function choose_roles() {
    let roleMagicHat = [];
    let roleDivs = document.getElementsByClassName("role_div");

    for (let i = 0; i < roleDivs.length; i++) {
        let role = roleDivs[i];
        let numberTag = role.getElementsByClassName("number_span")[0];
        
        for (let j = 0; j < parseInt(numberTag.textContent); j++) {
            roleMagicHat.push(role.id);
        }
    }

    while (roleMagicHat.length > 0) {
        alert("Next role...");
        let roleId = Math.floor(Math.random() * roleMagicHat.length);
        alert("Your role is: " + roleMagicHat[roleId]);
        roleMagicHat.splice(roleId, 1);
    }
}