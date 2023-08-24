import { GAME_BONUS, GAME_LIFE, GAME_SCORE, GAME_TOTAL_COUNT } from '@store/constants/game';

export type BonusGameACType = {
  type: typeof GAME_BONUS;
  bonus: number | undefined;
};

export type TotalCountGameACType = {
  type: typeof GAME_TOTAL_COUNT;
  totalCount: number | undefined;
};

export type LifeGameACType = {
  type: typeof GAME_LIFE;
  life: number | undefined;
};

export type ScoreGameACType = {
  type: typeof GAME_SCORE;
  score: number | undefined;
};

// Union type
export type GameActionsTypes = LifeGameACType | BonusGameACType | TotalCountGameACType | ScoreGameACType;
