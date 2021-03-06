import PropTypes from "prop-types";

export function getStudios() {
  const promise = fetch("http://localhost:5000/studios");
  return promise.then(response => response.json());
}
function waitTwoSeconds() {
  return new Promise(resolve => {
    setTimeout(resolve, 10);
  });
}

export async function getStudioByFilters(filters) {
  await waitTwoSeconds();
  const studios = await getStudios();
  

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

getStudioByFilters.propTypes = {
  options: PropTypes.array,
  studio: PropTypes.object,
  courses: PropTypes.bool,
  wellnes: PropTypes.bool,
  personaltraining: PropTypes.bool,
  strength: PropTypes.bool,
  cardio: PropTypes.bool,
  ladyarea: PropTypes.bool,
  flexx: PropTypes.bool,
  six: PropTypes.bool,
  twelve: PropTypes.bool,
  twentyfour: PropTypes.bool
};

// Replaces the filter-function above:
// export function getStudioByFilters(filter) {
//   const selectedFilters = Object.keys(); // filters === ['flexx', 'six', 'twelve']

//   return studios.filter(studio => {
//     const fulfilledFilters = filters.every(filter => studio.options[filter]);
//     return fulfilledFilters;
//   });
// }
