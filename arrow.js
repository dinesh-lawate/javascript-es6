function oldPerson() {
    var age = 0;

    setInterval(function () {
        age++;
        console.log(age);
    }, 1000);

    // let self = this;
    // setInterval(function () {
    //     self.age++;
    //     console.log(self.age);
    // }, 1000);
}

function newPerson() {
    this.age = 0;

    setInterval(() => {
        this.age++; // |this| properly refers to the Person object
        console.log(this.age);
    }, 1000);
}

oldPerson();
// newPerson();