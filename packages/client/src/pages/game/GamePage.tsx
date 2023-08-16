// import { Game } from '../../fuature/game';
import { GameLayout } from '@layouts/GameLayout';

type GamePageT = {};

export const GamePage: React.FC<GamePageT> = () => (
  <GameLayout>{/* {typeof window !== 'undefined' && <Game />} */}</GameLayout>
);
