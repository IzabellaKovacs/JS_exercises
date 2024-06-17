/**
 *
 * COLLECTIONS Functions - Array & Objects
 */

let arr = ["a", "b", "c", 1, 2, 3];
let numbers = [
  [1, 2, 0],
  [9, 11, 4],
  [6, 5],
];
const moreNumbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
let students = {
  1: {
    name: "Maria",
    age: 20,
    profile: "CTI",
    skills: {
      programming: 2,
      communication: 5,
    },
  },
  2: {
    name: "Alex",
    age: 23,
    profile: "IS",
    skills: {
      math: 5,
      communication: 3,
    },
  },
  3: {
    name: "Ioan",
    age: 21,
    profile: "CTI",
    skills: {
      programming: 1,
      communication: 5,
    },
  },
};
const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 1090,
    keywords: ["socks", "sports", "apparel"],
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
    keywords: ["sports", "basketballs"],
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56,
    },
    priceCents: 799,
    keywords: ["tshirts", "apparel", "mens"],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png",
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    rating: {
      stars: 5,
      count: 2197,
    },
    priceCents: 1899,
    keywords: ["toaster", "kitchen", "appliances"],
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate Set",
    rating: {
      stars: 4,
      count: 37,
    },
    priceCents: 2067,
    keywords: ["plates", "kitchen", "dining"],
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    rating: {
      stars: 4.5,
      count: 175,
    },
    priceCents: 3499,
    keywords: ["kitchen", "cookware"],
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 317,
    },
    priceCents: 2400,
    keywords: ["hoodies", "sweaters", "apparel"],
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/luxury-tower-set-6-piece.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    rating: {
      stars: 4.5,
      count: 144,
    },
    priceCents: 3599,
    keywords: ["bathroom", "washroom", "restroom", "towels", "bath towels"],
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/liquid-laundry-detergent-plain.jpg",
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    rating: {
      stars: 4.5,
      count: 305,
    },
    priceCents: 2899,
    keywords: ["bathroom", "cleaning"],
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/knit-athletic-sneakers-gray.jpg",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    rating: {
      stars: 4,
      count: 89,
    },
    priceCents: 3390,
    keywords: ["shoes", "running shoes", "footwear"],
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/products/women-chiffon-beachwear-coverup-black.jpg",
    name: "Women's Chiffon Beachwear Cover Up - Black",
    rating: {
      stars: 4.5,
      count: 235,
    },
    priceCents: 2070,
    keywords: ["robe", "swimsuit", "swimming", "bathing", "apparel"],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png",
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/round-sunglasses-black.jpg",
    name: "Round Sunglasses",
    rating: {
      stars: 4.5,
      count: 30,
    },
    priceCents: 1560,
    keywords: ["accessories", "shades"],
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/women-beach-sandals.jpg",
    name: "Women's Two Strap Buckle Sandals - Tan",
    rating: {
      stars: 4.5,
      count: 562,
    },
    priceCents: 2499,
    keywords: ["footwear", "sandals", "womens", "beach", "summer"],
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/products/blackout-curtain-set-beige.webp",
    name: "Blackout Curtains Set 4-Pack - Beige",
    rating: {
      stars: 4.5,
      count: 232,
    },
    priceCents: 4599,
    keywords: ["bedroom", "curtains", "home"],
  },
];

const productsObj = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 1090,
    keywords: ["socks", "sports", "apparel"],
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
    keywords: ["sports", "basketballs"],
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56,
    },
    priceCents: 799,
    keywords: ["tshirts", "apparel", "mens"],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png",
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    rating: {
      stars: 5,
      count: 2197,
    },
    priceCents: 1899,
    keywords: ["toaster", "kitchen", "appliances"],
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate Set",
    rating: {
      stars: 4,
      count: 37,
    },
    priceCents: 2067,
    keywords: ["plates", "kitchen", "dining"],
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    rating: {
      stars: 4.5,
      count: 175,
    },
    priceCents: 3499,
    keywords: ["kitchen", "cookware"],
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 317,
    },
    priceCents: 2400,
    keywords: ["hoodies", "sweaters", "apparel"],
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/luxury-tower-set-6-piece.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    rating: {
      stars: 4.5,
      count: 144,
    },
    priceCents: 3599,
    keywords: ["bathroom", "washroom", "restroom", "towels", "bath towels"],
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/liquid-laundry-detergent-plain.jpg",
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    rating: {
      stars: 4.5,
      count: 305,
    },
    priceCents: 2899,
    keywords: ["bathroom", "cleaning"],
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/knit-athletic-sneakers-gray.jpg",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    rating: {
      stars: 4,
      count: 89,
    },
    priceCents: 3390,
    keywords: ["shoes", "running shoes", "footwear"],
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/products/women-chiffon-beachwear-coverup-black.jpg",
    name: "Women's Chiffon Beachwear Cover Up - Black",
    rating: {
      stars: 4.5,
      count: 235,
    },
    priceCents: 2070,
    keywords: ["robe", "swimsuit", "swimming", "bathing", "apparel"],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png",
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/round-sunglasses-black.jpg",
    name: "Round Sunglasses",
    rating: {
      stars: 4.5,
      count: 30,
    },
    priceCents: 1560,
    keywords: ["accessories", "shades"],
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/women-beach-sandals.jpg",
    name: "Women's Two Strap Buckle Sandals - Tan",
    rating: {
      stars: 4.5,
      count: 562,
    },
    priceCents: 2499,
    keywords: ["footwear", "sandals", "womens", "beach", "summer"],
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/products/blackout-curtain-set-beige.webp",
    name: "Blackout Curtains Set 4-Pack - Beige",
    rating: {
      stars: 4.5,
      count: 232,
    },
    priceCents: 4599,
    keywords: ["bedroom", "curtains", "home"],
  },
];

// forEach  - just for Arrays !!!
console.log("--- forEach ---");

let products_total = 0;

arr.forEach((item) => typeof item === "string" && console.log("Hello " + item));
products.forEach((product) => {
  products_total += product.priceCents;
});
console.log(products_total);

// map - just for Arrays !!!
console.log("--- map ---");

const newArr = arr
  .filter((item) => typeof item === "number")
  .map((item) => item * 3);
console.log(newArr);
const remappedProducts = products.map((item) => ({
  [item.name]: item.priceCents,
  ...item,
}));
console.log(remappedProducts);
const product_ids = products.map((product) => product.id);
console.log(product_ids);

// reduce
console.log("--- reduce ---");

const total_price = products.reduce(
  (acc, currentValue) => acc + currentValue.priceCents,
  0
);
console.log(total_price);
// - grupare dupa o proprietate (nu e cea mai OK solutie cu `reduce`) => `Object.groupBy`
const products_by_group = products.reduce((acc, obj) => {
  const currentGroup = acc[obj.id] ?? [];
  return { ...acc, [obj.id]: [...currentGroup, obj] };
}, {});
console.log(products_by_group);

// find
console.log("--- find ---");

const product_high_review = products.find(({ rating }) => rating.stars > 4.5);
console.log(product_high_review);
const firstNumberLessNeighbour = moreNumbers
  .filter((num) => num > 0)
  .find((num, index, arr) => {
    if (index > 0 && num >= arr[index - 1]) return false;
    if (index < arr.length - 1 && num >= arr[index + 1]) return false;
    return true;
  });
console.log(firstNumberLessNeighbour);

// 'findWhere'
console.log(
  "--- Looks through the list and returns the first value that matches all of the key-value pairs listed in properties ---"
);

// Will not work if I will have an array property
function findWhere_1(arr, properties) {
  let result;
  arr.forEach((item) => {
    let match = true;
    for (var property in properties) {
      if (item[property] !== properties[property]) {
        match = false;
        break;
      }
    }
    if (match) {
      result = item;
    }
  });

  return result;
}
const firstElementByType = findWhere_1(products, { type: "clothing" });
console.log("\nFirst element by type: ", firstElementByType);

// Output: The first object whose keywords array contains "bedroom"
function findWhere_2(array, property, value) {
  return array.find((item) => item[property] && item[property].includes(value));
}
let firstBedroom = findWhere_2(products, "keywords", "bedroom");
console.log("First element by keyword - bedroom: ", firstBedroom);
let firstByType = findWhere_2(products, "type", "clothing");
console.log("\nFirst element by type - clothing: ", firstElementByType);

// 'where'
console.log(
  "--- Looks through each value in the list, returning an array of all the values that matches the key-value pairs listed in properties. ---"
);

// Works well for array/object
function where_1(list, properties) {
  let allElements = [];
  list.forEach((item) => {
    for (property in properties) {
      if (item[property] === properties[property]) {
        allElements.push(item);
      }
    }
  });
  return allElements;
}
function where_2(list, properties) {
  return list.filter((item) => {
    return Object.keys(properties).every((key) => {
      if (Array.isArray(item[key])) {
        return item[key].includes(properties[key]);
      }
      return item[key] === properties[key];
    });
  });
}

let allElements = where_2(productsObj, {
  type: "clothing",
  keywords: "apparel",
}); // where_1
console.log("Array/Object containing objects: ", allElements);

// 'reject'
console.log(
  "--- Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter ---"
);

function reject(arr, predicate) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

function reject_reduce(arr, func) {
  arr.reduce((acc, currentValue) => {
    if (!func(currentValue)) {
      return [...acc, currentValue];
    }

    return acc;
  }, []);
}

const evenNumbers = (n) => n % 2 === 0;
const notEvenNumbers = reject(moreNumbers, evenNumbers);
console.log("All the numbers that not pass the function: ", notEvenNumbers);
const notEvenNumbers_reduce = reject_reduce(moreNumbers, evenNumbers);
console.log(
  "All the numbers that not pass the function-reduce: ",
  notEvenNumbers
);

// every
console.log(
  "--- Returns true if all of the values in the list pass the predicate truth test. Stops traversing the list if a false element is found ---"
);

const checkPredicate = moreNumbers.every(evenNumbers);
console.log("All the numbers check the condition? ", checkPredicate);

// some
console.log(
  "--- Returns true if any of the values in the list pass the predicate truth test. Stops traversing the list if a true element is found ---"
);
console.log("--- some ---");

const check_some_Predicate = moreNumbers.some(evenNumbers);
console.log("Some numbers check the condition? ", check_some_Predicate);

// -- check if a given key exists in nested object
function containsKeyDeep(obj, key) {
  if (key in obj) return true;
  for (let prop in obj) {
    if (typeof obj[prop] === "object" && containsKeyDeep(obj[prop], key)) {
      return true;
    }
  }
  return false;
}

function containsKey(arr, key) {
  return arr.some((student) => containsKeyDeep(student, key));
}
const arr_students = Object.values(students);
console.log("Contains the key?", containsKey(arr_students, "skills"));

// 'contains' - includes
console.log(
  "--- Returns true if the value is present in the list. Uses indexOf internally, if list is an Array. ---"
);
console.log("--- includes ---");

function contains(arr, value) {
  const foundElement = arr.find((e) => e === value);
  if (foundElement) {
    return true;
  }
  return false;
}
console.log("Value contains: ", contains(moreNumbers, 0));

const valueContain = Array.prototype.includes.call(students, "Maria");
console.log("Contains the id? ", valueContain);

// 'invoke'
console.log(
  "--- Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation. ---"
);

function invoke(list, func, ...args) {
  return Object.values(list).map((element) => {
    if (element !== null && typeof element[func] === "function") {
      return element[func](...args);
    }
  });
}

Object.values(students).forEach((student) => {
  student.totalSkills = () => {
    // let total = 0;
    // for (skill in student.skills) {
    //   console.log(skill);
    //   total += student.skills[skill];
    // }
    // return total;
    return Object.values(student.skills).reduce(
      (acc, initialValue) => acc + initialValue,
      0
    );
  };
});
const students_totalSkills = invoke(students, "totalSkills");
console.log(students_totalSkills);

// max/min
console.log("--- max ---");

function max_1_obj(list, key) {
  return list.reduce((maxObj, currentObj) => {
    if (maxObj === null || currentObj[key] > maxObj[key]) {
      return currentObj;
    }
    return maxObj;
  }, null);
}

function max_2_obj(list, key) {
  const values = list.map((element) => element[key]);
  const maximum = Math.max(...values);
  return list.filter((element) => element[key] === maximum);
}

function max_3(list, key) {
  return list.reduce((a, b) => Math.max(a, b[key]), null);
}

console.log(max_1_obj(products, "priceCents"));
console.log(max_2_obj(products, "priceCents"));

// 'sortBy' - sort() refera catre acelasi array pe care l-a sortat
console.log("--- sort ---");

function sortBy(list, value) {
  if (typeof value === "number") {
    return list.sort((a, b) => a[value] - b[value]);
  }
  if (typeof value === "string") {
    return list.sort((a, b) => {
      const nameA = a[value];
      const nameB = b[value];
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }
}
console.log(sortBy(products, "name"));
// daca ne dorim array imutabil atunci cand sortam => folosim toSorted() / 'spread syntax' / Array.from()



// groupBy
console.log("--- groupBy ---");

function groupBy(list, value) {
  return list.reduce((acc, obj) => {
    const currentGroup = acc[obj[value]] ?? [];
    return { ...acc, [obj[value]]: [...currentGroup, obj] };
  }, {});
}

// const products_group_by_value = Object.groupBy(products, ({ type }) => type);
console.log(groupBy(products, "id"));



// 'countBy'
console.log("--- countBy ---");
console.log(
  "Sorts a list into groups and returns a count for the number of objects in each group."
);

function countBy(list, key) {
  const grouped = groupBy(list, key);
  const counts = [];
  for (const group_key in grouped) {
    counts[group_key] = grouped[group_key].length;
  }
  return counts;
}

console.log(countBy(products, 'id'))



// 'sample'
console.log('--- sample ---');
console.log('Produce a random sample from the list.');

function sample(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

console.log(sample(products))



// 'partition'
console.log('--- partition ---');
console.log('Split list into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate');

function partition(list, func) {
  return list.reduce(([pass, fail], currentValue) => {
    if(func(currentValue)) {
      return [[...pass, currentValue], fail];
    }
    return[pass, [...fail, currentValue]];
  },[[], []])
}

function profileCheck(student) {
  return student.profile === "CTI";
}

console.log(partition(Object.values(students), profileCheck))