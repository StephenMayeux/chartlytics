// Import array of objects to modify
const resources = require('./resources');

// Sort the array by property order
const sorted = resources.sort((a, b) => a.order - b.order);

// Build the new list
const output = sorted.reduce((acc, resource, i, a) => {
  const { type, order, name } = resource;

  if (type === 'Place') {
    acc.push(resource);
  } else if (!i && type === 'Person') {
    acc.push({ type, order, people: [ name ] });
  } else if (i && type === 'Person' && acc[acc.length-1].type === 'Person') {
    acc[acc.length-1].order = order;
    acc[acc.length-1].people.push(name);
  } else {
     acc.push({ type, order, people: [ name ] });
   }

  return acc;
}, []);

console.log(output);
