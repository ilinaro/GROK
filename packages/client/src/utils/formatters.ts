interface ILeaderBoardUser {
  data: {
    avatar: string;
    username: string;
    GROKpoints: number;
  };
}

export const formatLeaderBoard = (data: ILeaderBoardUser[]) => {
  if (!Array.isArray(data)) return [];

  return data.map((user) => ({
    avatar: user.data.avatar,
    username: user.data.username,
    points: user.data.GROKpoints,
  }));
};
