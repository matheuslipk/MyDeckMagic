import actionsType from '../actionsType';

export function addCards(cards) {
  return {
    type: actionsType.cards.add,
    payload: {
      cards,
    },
  };
}
