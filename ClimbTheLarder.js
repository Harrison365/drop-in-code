//If the kitchen item is a string, make it lower case.
// e.g. {
//     hasFridge: true,
//     favouriteAppliance: "KeTtlE",
//     food: "eGgS",
//     shelvesInCupboards: 3,
//     shelvesNotInCupboards: 2,
//     petName: "RhuBarB",
//     hoover: "DysOn",
//   }
//   should return
//   {hasFridge: true,
//     favouriteAppliance: "kettle",
//     food: "eggs",
//     shelvesInCupboards: 3,
//     shelvesNotInCupboards: 2,
//     petName: "rhubarb",
//     hoover: "dyson",
//   }

function sortThekitchen(kitchen) {}

console.log(
  sortThekitchen({
    hasFridge: true,
    favouriteAppliance: "KeTtlE",
    food: "eGgS",
    shelvesInCupboards: 3,
    shelvesNotInCupboards: 2,
    petName: "RhuBarB",
    hoover: "DysOn",
  })
);
