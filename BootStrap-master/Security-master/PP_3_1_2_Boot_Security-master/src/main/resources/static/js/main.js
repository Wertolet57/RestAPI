function userId() {
    var elemId = document.getElementById("ID");
    var elemFirstName = document.getElementById("firstname");
    var elemLastName = document.getElementById("lastname");
    var elemAge = document.getElementById("age");
    var elemEmail = document.getElementById("email");
    var elemRole = document.getElementById("role");
    fetch("http://localhost:8080/api/user")
        .then(response => response.json())
        .then(user => {
            elemId.textContent = user.id;
            elemFirstName.textContent = user.firstname;
            elemLastName.textContent = user.lastname;
            elemAge.textContent = user.age;
            elemEmail.textContent = user.email;
            elemRole.textContent = user.role;
        });
}
userId()
function newUser() {
    let elemFirstName = document.getElementById("firstname3");
    let elemLastName = document.getElementById("lastname3");
    let elemAge = document.getElementById("age3");
    let elemEmail = document.getElementById("email3");
    let elemPassword = document.getElementById("password3");
    let elemRole = document.getElementById("role3");
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
}
var del;
var edit;
function deleteUser() {
    var url = "http://localhost:8080/api/admin/" + del;
    fetch(url, {method: 'DELETE'});
}
function deleteForm(a) {
    del=a;
    let elemId = document.getElementById("id2")
    let elemFirstName = document.getElementById("firstname2");
    let elemLastName = document.getElementById("lastname2");
    let elemAge = document.getElementById("age2");
    let elemEmail = document.getElementById("email2");
    let url = "http://localhost:8080/api/admin/" + del;
    fetch(url)
        .then(response => response.json())
        .then(user => {
            elemId.value = user.id;
            elemFirstName.value = user.firstname;
            elemLastName.value = user.lastname;
            elemAge.value = user.age;
            elemEmail.value = user.email;
        });
}
function editForm(a) {
    edit=a;
    let elemId = document.getElementById("id1")
    let elemFirstName = document.getElementById("firstname1");
    let elemLastName = document.getElementById("lastname1");
    let elemAge = document.getElementById("age1");
    let elemEmail = document.getElementById("email1");
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
        });
}
function editUser() {
    let elemFirstName = document.getElementById("firstname1");
    let elemLastName = document.getElementById("lastname1");
    let elemAge = document.getElementById("age1");
    let elemEmail = document.getElementById("email1");
    let elemPassword = document.getElementById("password1");
    let roles = "";
    for (var option of document.getElementById("role1").options)
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
}