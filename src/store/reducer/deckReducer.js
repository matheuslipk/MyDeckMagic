import actionType from '../actionsType';

const initialValue = {};

export default function deck(state = initialValue, action) {
  switch (action.type) {
    case actionType.deck.create:
      return {
        ...state,
        ...action.payload.deck,
      };

    case actionType.deck.destroy:
      return initialValue;

    default:
      return initialValue;
  }
}
