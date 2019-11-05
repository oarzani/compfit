import { studios } from "./api/studio";

// Ein Versuch, aus Around-Spaces adaptiert src/api/restaurants.js
export function getStudioByFilters(filters) {
  // const selectedfilters = Object.keys(filters); // filters === ['flexx', 'six', 'twelve']

  return studios.filter(studio => {
    console.log(filters, studio);
    if (filters.price) {
      const minPrice = Math.min(...studio.price);
      if (filters.price < minPrice) {
        return false;
      }
    }
    if (filters.flexx && !studio.options.flexx) {
      return false;
    }
    if (filters.six && !studio.options.six) {
      return false;
    }
    if (filters.twelve && !studio.options.twelve) {
      return false;
    }
    if (filters.twentyfour && !studio.options.twentyfour) {
      return false;
    }
    if (filters.ladyarea && !studio.options.ladyarea) {
      return false;
    }

    if (filters.cardio && !studio.options.cardio) {
      return false;
    }
    if (filters.courses && !studio.options.courses) {
      return false;
    }
    if (filters.wellnes && !studio.options.wellnes) {
      return false;
    }
    if (filters.personaltraining && !studio.options.personaltraining) {
      return false;
    }
    if (filters.strength && !studio.options.strength) {
      return false;
    }

    return true;
  });
}

// // Ein Versuch, aus Around-Spaces adaptiert src/api/restaurants.js
// export function getStudioByFilters(filter) {
//   const selectedFilters = Object.keys(); // filters === ['flexx', 'six', 'twelve']

//   return studios.filter(studio => {
//     const fulfilledFilters = filters.every(filter => studio.options[filter]);
//     return fulfilledFilters;
//   });
// }
