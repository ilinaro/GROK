import { GAME_BONUS, GAME_LIFE } from '@store/constants/game';

export interface GameState {
  life: number;
  bonus: number;
}

export type BonusGameACType = {
  type: typeof GAME_BONUS;
  bonus: number;
};

export type LifeGameACType = {
  type: typeof GAME_LIFE;
  life: number;
};

// Union type
export type GameActionsTypes = LifeGameACType | BonusGameACType;
