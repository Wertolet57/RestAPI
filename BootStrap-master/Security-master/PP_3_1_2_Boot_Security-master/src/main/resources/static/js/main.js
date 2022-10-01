userId()
function fillTable(){
    let elem = document.getElementById("my-table");
    elem.innerHTML="";
    fetch("http://localhost:8080/api/admin")
        .then( response => response.json())
            .then(result =>{
    for (let i = 0; i<result.length;i++){
        let row = document.createElement("tr");

        let row_id = document.createElement("td");
        row_id.innerHTML = result[i].id;
        row.appendChild(row_id);
        let row_firstName = document.createElement("td");
        row_firstName.innerHTML = result[i].firstname;
        row.appendChild(row_firstName);
        let row_lastName = document.createElement("td");
        row_lastName.innerHTML = result[i].lastname;
        row.appendChild(row_lastName);
        let row_age = document.createElement("td");
        row_age.innerHTML = result[i].age;
        row.appendChild(row_age);
        let row_email = document.createElement("td");
        row_email.innerHTML = result[i].email;
        row.appendChild(row_email);
        let row_role = document.createElement("td");
        row_role.innerHTML = result[i].role;
        row.appendChild(row_role);

        let row_edit = document.createElement("td");
        let row_form_edit = document.createElement("form");
        let row_form_button_edit = document.createElement("button");
        row_form_button_edit.setAttribute("type","button");
        row_form_button_edit.setAttribute("name","edit");
        row_form_button_edit.setAttribute("class","btn btn-info");
        row_form_button_edit.setAttribute("value",result[i].id);
        row_form_button_edit.setAttribute("data-bs-toggle","modal");
        row_form_button_edit.setAttribute("data-bs-target","#exampleModal");
        row_form_button_edit.setAttribute("onclick","editForm(value)");
        row_form_button_edit.innerHTML = "Edit";
        row_form_edit.appendChild(row_form_button_edit);
        row_edit.appendChild(row_form_edit);
        row.appendChild(row_edit);

        let row_delete = document.createElement("td");
        let row_form_delete = document.createElement("form");
        let row_form_button_delete = document.createElement("button");
        row_form_button_delete.setAttribute("type","button");
        row_form_button_delete.setAttribute("name","delete");
        row_form_button_delete.setAttribute("class","btn btn-danger");
        row_form_button_delete.setAttribute("value",result[i].id);
        row_form_button_delete.setAttribute("data-bs-toggle","modal");
        row_form_button_delete.setAttribute("data-bs-target","#modal");
        row_form_button_delete.setAttribute("onclick","deleteForm(value)");
        row_form_button_delete.innerHTML = "Delete";
        row_form_delete.appendChild(row_form_button_delete);
        row_delete.appendChild(row_form_delete);
        row.appendChild(row_delete);

        elem.appendChild(row);
    }});
}
fillTable();
function userId() {
    let elemId = document.getElementById("ID");
    let elemFirstName = document.getElementById("firstname");
    let elemLastName = document.getElementById("lastname");
    let elemAge = document.getElementById("age");
    let elemEmail = document.getElementById("email");
    let elemHeaderEmail = document.getElementById("email-header");
    let elemRole = document.getElementById("role");
    let elemHeaderRole = document.getElementById("role-header");
    fetch("http://localhost:8080/api/user")
        .then(response => response.json())
        .then(user => {
            elemId.textContent = user.id;
            elemFirstName.textContent = user.firstname;
            elemLastName.textContent = user.lastname;
            elemAge.textContent = user.age;
            elemEmail.textContent = user.email;
            elemHeaderEmail.textContent = user.email;
            elemRole.textContent = user.role;
            elemHeaderRole.textContent = user.role;
        });
}
function newUser() {
    let elemFirstName = document.getElementById("firstname3");
    let elemLastName = document.getElementById("lastname3");
    let elemAge = document.getElementById("age3");
    let elemEmail = document.getElementById("email3");
    let elemPassword = document.getElementById("password3");
    let roles = "";
    for (let option of document.getElementById("role3").options)
    {
        if (option.selected) {
            if (roles.length != 0){
                roles += ", "
            }
            roles += option.value;
        }
    }
    let user = {
        firstname: elemFirstName.value,
        lastname: elemLastName.value,
        age: elemAge.value,
        email: elemEmail.value,
        password: elemPassword.value,
        role: roles
    };
    fetch("http://localhost:8080/api/admin", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    setTimeout(fillTable, 1000);
}
var del;
var edit;
function deleteUser() {
    var url = "http://localhost:8080/api/admin/" + del;
    fetch(url, {method: 'DELETE'});

    setTimeout(fillTable, 1000);
}
function deleteForm(a) {
    del=a;
    let elemId = document.getElementById("id2")
    let elemFirstName = document.getElementById("firstname2");
    let elemLastName = document.getElementById("lastname2");
    let elemAge = document.getElementById("age2");
    let elemEmail = document.getElementById("email2");
    let elemRole = document.getElementById("role2");
    let url = "http://localhost:8080/api/admin/" + del;
    fetch(url)
        .then(response => response.json())
        .then(user => {
            elemId.value = user.id;
            elemFirstName.value = user.firstname;
            elemLastName.value = user.lastname;
            elemAge.value = user.age;
            elemEmail.value = user.email;
            for (let option of elemRole.options) {
                option.selected = false;
                if (user.role.indexOf(option.value) >= 0) {
                    option.selected = true;
                }
            }
        });
}
function editForm(a) {
    edit=a;
    let elemId = document.getElementById("id1")
    let elemFirstName = document.getElementById("firstname1");
    let elemLastName = document.getElementById("lastname1");
    let elemAge = document.getElementById("age1");
    let elemEmail = document.getElementById("email1");
    let elemPassword = document.getElementById("password1");
    let elemRole = document.getElementById("role1");
    let url = "http://localhost:8080/api/admin/" + edit;
    fetch(url)
        .then(response => response.json())
        .then(user => {
            elemId.value = user.id;
            elemFirstName.value = user.firstname;
            elemLastName.value = user.lastname;
            elemAge.value = user.age;
            elemEmail.value = user.email;
            elemPassword.value = user.password;
            for (let option of elemRole.options) {
                option.selected = false;
                if (user.role.indexOf(option.value) >= 0) {
                    option.selected = true;
                }
            }
        });
}
function editUser() {
    let elemFirstName = document.getElementById("firstname1");
    let elemLastName = document.getElementById("lastname1");
    let elemAge = document.getElementById("age1");
    let elemEmail = document.getElementById("email1");
    let elemPassword = document.getElementById("password1");
    let roles = "";
    for (let option of document.getElementById("role1").options)
    {
        if (option.selected) {
            if (roles.length != 0){
                roles += ", "
            }
            roles += option.value;
        }
    }
    let user = {
        firstname: elemFirstName.value,
        lastname: elemLastName.value,
        age: elemAge.value,
        email: elemEmail.value,
        password: elemPassword.value,
        role: roles
    };
    let url = "http://localhost:8080/api/admin/" + edit;
    fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    setTimeout(fillTable, 1000);
}