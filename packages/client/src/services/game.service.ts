import { game } from 'config/apiRoutes.config';
import httpService from './http.service';

interface ISendToLeaderBoardRequest {
  data: Record<string, unknown>;
  ratingFieldName: string;
  teamName: string;
}

interface IGetLeaderBoardRequest {
  ratingFieldName: 'GROKpoints';
  cursor: number;
  limit: number;
}

export const sendStatistics = async (data: ISendToLeaderBoardRequest) => {
  try {
    const response = await httpService.post(game.sendStatistics, data);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

export const getStatistics = async (data: IGetLeaderBoardRequest) => {
  try {
    const response = await httpService.post(game.getStatistict, data);

    return response.data;
  } catch (e) {
    console.log(e);
  }
};
