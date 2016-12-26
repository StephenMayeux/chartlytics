const INITIAL_STATE = [
  {
    type: 'Person',
    order: 1,
    name: 'Brian',
  },
  {
    type: 'Place',
    order: 2,
    name: 'Ohio',
  },
  {
    type: 'Place',
    order: 12,
    name: 'Ohio',
  },
  {
    type: 'Person',
    order: 14,
    name: 'Sarah',
  },
  {
    type: 'Person',
    order: 199,
    name: 'Sam',
  },
  {
    type: 'Person',
    order: 19,
    name: 'Eric',
  },
  {
    type: 'Place',
    order: 20,
    name: 'Home',
  }
];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [ action.payload, ...state ];
  }
  return state;
}
