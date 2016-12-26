export const addItem = ({ type, order, name }) => {
  return {
    type: 'ADD_ITEM',
    payload: { type, order, name }
  };
};
