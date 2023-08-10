import { GAME_BONUS, GAME_LIFE } from '@store/constants/game';

import { GameActionsTypes } from '@store/types/gameTypes';

interface IGameState {
  life: number;
  bonus: number;
}

const initialState = {
  life: 3,
  bonus: 0,
};

const gameReducer = (state: IGameState = initialState, action: GameActionsTypes): IGameState => {
  switch (action.type) {
    case GAME_LIFE:
      return { ...state, life: action.life };

    case GAME_BONUS:
      return { ...state, bonus: action.bonus };

    default:
      return state;
  }
};

export default gameReducer;
