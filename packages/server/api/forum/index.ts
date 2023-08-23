import type { Request, Response } from 'express';
import { dbConnect } from 'server/api/sequelize';
import { isValidPostData } from 'server/api/postDataValidator';

// Апи Форума
export const forumApi = async (req: Request, res: Response): Promise<void> => {
  const postData = req.body;
  const isValid = isValidPostData(postData);
  if (!isValid) {
    res.status(400).json({reason: 'Неправильный запрос'});
  }
    await dbConnect();
    // апи будет тут, ниже пример с поиском юзеров
    res.json([]);
};
