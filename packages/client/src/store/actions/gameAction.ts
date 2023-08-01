import { BonusGameACType, LifeGameACType, TotalCountGameACType } from '@store/types/gameTypes';
import { GAME_BONUS, GAME_LIFE, GAME_TOTAL_COUNT } from '@store/constants/game';

// Функции создатели экшенов
export const setGameBonusAC = (bonus: number | undefined): BonusGameACType => ({ type: GAME_BONUS, bonus });
export const setGameLifeAC = (life: number | undefined): LifeGameACType => ({ type: GAME_LIFE, life });
export const setGameTotalCountAC = (totalCount: number | undefined): TotalCountGameACType => ({
  type: GAME_TOTAL_COUNT,
  totalCount,
});
