class Vehicle {
	constructor(public color: string) {}

	protected honk(): void {
		console.log('beep');
	}
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
		// super('red');
	}

	private drive(): void {
		console.log('vroom');
	}

	startDrivingProcess(): void {
		this.drive();
	}
}

const car = new Car(4, 'red');
// const car = new Car('red');
car.startDrivingProcess();
/* class Vehicle {
	constructor(public color: string) {}

	protected honk(): void {
		console.log('beep');
	}
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
	private drive(): void {
		console.log('vroom');
	}

	startDrivingProcess(): void {
		this.drive();
	}
}

const car = new Car('red');
car.startDrivingProcess(); */
/* class Vehicle {
	color: string = 'red';

	constructor(color: string) {
		this.color = color;
	}

	protected honk(): void {
		console.log('beep');
	}
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
	private drive(): void {
		console.log('vroom');
	}

	startDrivingProcess(): void {
		this.drive();
	}
} */
/* class Vehicle {
	color: string = 'red';

	protected honk(): void {
		console.log('beep');
	}
}

const vehicle = new Vehicle();
console.log(vehicle.color);

class Car extends Vehicle {
	private drive(): void {
		console.log('vroom');
	}

	startDrivingProcess(): void {
		this.drive();
	}
}
 */
/* class Vehicle {
	drive(): void {
		console.log('chugga chugga');
	}

	honk(): void {
		console.log('beep');
	}
}

class Car extends Vehicle {
	drive(): void {
		console.log('vroom');
	}
}

const car = new Car();
car.drive();
car.honk(); */
/* const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk(); */
