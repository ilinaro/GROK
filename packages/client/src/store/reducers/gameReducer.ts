import { GAME_BONUS, GAME_LIFE, GAME_TOTAL_COUNT } from '@store/constants/game';

import { GameActionsTypes } from '@store/types/gameTypes';

interface IGameState {
  life: number | undefined;
  bonus: number | undefined;
  totalCount: number | undefined;
}

const initialState = {
  life: undefined,
  bonus: undefined,
  totalCount: undefined,
};

const gameReducer = (state: IGameState = initialState, action: GameActionsTypes): IGameState => {
  switch (action.type) {
    case GAME_LIFE:
      return { ...state, life: action.life };

    case GAME_BONUS:
      return { ...state, bonus: action.bonus };

    case GAME_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    default:
      return state;
  }
};

export default gameReducer;
