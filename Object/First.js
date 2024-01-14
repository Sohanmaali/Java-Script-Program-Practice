let person = {
     firstName: 'John',
     lastName: 'Doe'
};

function greet() {
     console.log('Hello, World!');
}

person.greet = greet;

person.greet();
