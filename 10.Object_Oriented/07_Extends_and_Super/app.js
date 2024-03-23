// deleted and followed

class Pet {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	eat(){ 
		return `${this.name} is eating`;
	}
}

 class Cat extends Pet{
	constructor(name, age, livesleft = 9){
		super(name, age);
		this.livesleft = livesleft;
	}
	meow() { 
		return 'meow';
	}
 }

class Dog extends Pet{ 
	bark () { 
		return 'woof';
	}
	eat() { 
		return `${this.name} scarfs his food`;
	}
}



 const monty = new Cat('monty', 9);
 const charlie = new Dog('charlie', 3);
