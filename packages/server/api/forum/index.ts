import type {Request, Response} from 'express';
import type { TUserData } from 'server/authMiddleware/typing';
import {dbConnect} from 'server/api/sequelize';
import { isValidPostData } from 'server/api/utils/postDataValidator';

// Forum API
export const forumApiHandler = async (
  req: Request,
  res: Response,
  userData: TUserData,
): Promise<void> => {
  const postData = req.body;
  const isValid = isValidPostData(postData);
  if (!isValid) res.status(400).json({error: 'Неправильный запрос'});
  await dbConnect();
  res.json([]);
};
