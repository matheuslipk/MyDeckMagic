import actionsType from '../actionsType';

export function createDeck(deck) {
  return {
    type: actionsType.deck.create,
    payload: {
      deck,
    },
  };
}
