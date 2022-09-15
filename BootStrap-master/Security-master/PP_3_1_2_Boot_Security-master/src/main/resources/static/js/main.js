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
    var elemFirstName = document.getElementById("firstname3");
    var elemLastName = document.getElementById("lastname3");
    var elemAge = document.getElementById("age3");
    var elemEmail = document.getElementById("email3");
    var elemPassword = document.getElementById("password3");
    var elemRole = document.getElementById("role3");
    var roles = "";
    for (var option of document.getElementById("role3").options)
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
function deleteUser(a) {
    var url = "http://localhost:8080/api/admin/" + a;
    fetch(url, {method: 'DELETE'});
}
function deleteForm(a) {
    var elemId = document.getElementById("id2")
    var elemFirstName = document.getElementById("firstname2");
    var elemLastName = document.getElementById("lastname2");
    var elemAge = document.getElementById("age2");
    var elemEmail = document.getElementById("email2");
    var elemRole = document.getElementById("role2");
    var url = "http://localhost:8080/api/admin/" + a;
    fetch(url)
        .then(response => response.json())
        .then(user => {
            elemId.value = user.id;
            elemFirstName.value = user.firstname;
            elemLastName.value = user.lastname;
            elemAge.value = user.age;
            elemEmail.value = user.email;
        });
    deleteUser(a)
}
function editForm(a) {
    var elemId = document.getElementById("id1")
    var elemFirstName = document.getElementById("firstname1");
    var elemLastName = document.getElementById("lastname1");
    var elemAge = document.getElementById("age1");
    var elemEmail = document.getElementById("email1");
    var elemRole = document.getElementById("role1");
    var url = "http://localhost:8080/api/admin/" + a;
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