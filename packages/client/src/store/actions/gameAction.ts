import { BonusGameACType, LifeGameACType } from '@store/types/gameTypes';
import { GAME_BONUS, GAME_LIFE } from '@store/constants/game';

// Функции создатели экшенов
export const setGameBonusAC = (bonus: number): BonusGameACType => ({ type: GAME_BONUS, bonus });
export const setGameLifeAC = (life: number): LifeGameACType => ({ type: GAME_LIFE, life });
