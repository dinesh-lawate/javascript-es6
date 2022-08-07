function profile(first = "Dinesh", last = "Lawate", id = "1") {
    var name = 'Your name is ' + first + ' ' + last + '.';
    var url = 'http://localhost:3000/api/messages/' + id;
    console.log("Name = " + name + ", Url = " + url);
}

function profileNew(first = "John", last = "Doe", id = "2") {
    var nameNew = `Your name is ${first} ${last}.`;
    var urlNew = `http://localhost:3000/api/messages/${id}`;

    console.log("nameNew = " + nameNew + ", urlNew = " + urlNew);
}

profile();
profileNew();
