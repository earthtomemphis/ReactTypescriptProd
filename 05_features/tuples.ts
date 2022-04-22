const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
};

// type alias
type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ['brown', true, 40];
const rootBeer: Drink = ['brown', true, 40];
// pepsi[0]=40;
const sprit: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [4000, 3354];

const carStats = {
	horsepower: 400,
	weight: 3354,
};
