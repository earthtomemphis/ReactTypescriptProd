interface Reportable {
	summary(): string;
}
const oldCivic = {
	name: 'civic',
	year: new Date(),
	broken: true,
	summary(): string {
		return `Name: ${this.name}`;
	},
};

const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
	summary(): string {
		return ` My drink has ${this.sugar} grams of sugar`;
	},
};
/* interface Reportable {
	summary(): string;
}
const oldCivic = {
	name: 'civic',
	year: new Date(),
	broken: true,
	summary(): string {
		return `Name: ${this.name}`;
	},
}; */
/* interface Vehicle {
	summary(): string;
}
const oldCivic = {
	name: 'civic',
	year: new Date(),
	broken: true,
	summary(): string {
		return `Name: ${this.name}`;
	},
}; */
/* interface Vehicle {
	name: string;
	year: Date;
	broken: boolean;
	summary(): string;
}
const oldCivic = {
	name: 'civic',
	year: new Date(),
	broken: true,
	summary(): string {
		return `Name: ${this.name}`;
	},
}; */
/* interface Vehicle {
	name: string;
	year: Date;
	broken: boolean;
}
const oldCivic = {
	name: 'civic',
	year: new Date(),
	broken: true,
}; */
/* interface Vehicle {
	name: string;
	year: number;
	broken: boolean;
}
const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true,
}; */
// const oldCivic2 = {
// 	name: 'civic',
// 	year: 2000,
// 	isBroken: true,
// };

const printSummery = (item: Reportable): void => {
	console.log(item.summary);
};
/* 
const printVehicleI = (vehicle: Reportable): void => {
	console.log(vehicle.summary);
}; */
/* const printVehicleI = (vehicle: Vehicle): void => {
	console.log(vehicle.summary);
}; */

/* const printVehicleI = (vehicle: Vehicle): void => {
	console.log(`Name ${vehicle.name}`);
	console.log(`Year: ${vehicle.year}`);
	console.log(`Broken? ${vehicle.broken}`);
}; */

printSummery(oldCivic);
printSummery(drink);
/* printVehicleI(oldCivic); */
/* 
const printVehicle = (vehicle: {
	name: string;
	year: number;
	broken: boolean;
}): void => {
	console.log(`Name ${vehicle.name}`);
	console.log(`Year: ${vehicle.year}`);
	console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic); */
// printVehicle(oldCivic2);
