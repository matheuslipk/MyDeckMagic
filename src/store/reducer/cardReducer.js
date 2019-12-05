import actionType from '../actionsType';

const initialValue = [];

export default function cards(state = initialValue, action) {
  switch (action.type) {
    case actionType.cards.add:
      return action.payload.cards;

    case actionType.cards.destroy:
      return initialValue;

    default:
      return state;
  }
}
