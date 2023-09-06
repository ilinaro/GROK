import { forumAxiosInstance } from '@api/axiosInstance';
import { forum } from '@config/apiRoutes.config';
import {
  CreateTopicRequest,
  DeleteTopicRequest,
  DeleteTopicResponse,
  IForumApi,
  RenameTopicRequest,
  Topic,
  GetListTopicRequest,
  CreateCommentRequest,
  Comment,
  EditCommentRequest,
  DeleteCommentRequest,
  DeleteCommentResponse,
  GetCommentsListRequest,
  FullComment,
  GetForumsListRequest,
  Forum,
} from './types';

class ForumApi implements IForumApi {
  async getForumsList(forumsListData: GetForumsListRequest) {
    const { data } = await forumAxiosInstance.post<Forum[]>(forum.path, forumsListData);
    return data;
  }

  async createTopic(createTopicData: CreateTopicRequest) {
    const { data } = await forumAxiosInstance.post<Topic>(forum.path, createTopicData);
    return data;
  }

  async renameTopic(renameTopicData: RenameTopicRequest) {
    const { data } = await forumAxiosInstance.post<Topic>(forum.path, renameTopicData);
    return data;
  }

  async deleteTopic(deleteTopicData: DeleteTopicRequest) {
    const { data } = await forumAxiosInstance.post<DeleteTopicResponse>(forum.path, deleteTopicData);
    return data;
  }

  async getListTopic(listTopicData: GetListTopicRequest) {
    const { data } = await forumAxiosInstance.post<Topic[]>(forum.path, listTopicData);
    return data;
  }

  async addComment(createCommentData: CreateCommentRequest) {
    const { data } = await forumAxiosInstance.post<Comment>(forum.path, createCommentData);
    return data;
  }

  async editComment(editCommentData: EditCommentRequest) {
    const { data } = await forumAxiosInstance.post<Comment>(forum.path, editCommentData);
    return data;
  }

  async deleteComment(deleteCommentData: DeleteCommentRequest) {
    const { data } = await forumAxiosInstance.post<DeleteCommentResponse>(forum.path, deleteCommentData);
    return data;
  }

  async getCommentsList(commentsListData: GetCommentsListRequest) {
    const { data } = await forumAxiosInstance.post<FullComment[]>(forum.path, commentsListData);
    return data;
  }
}

export const forumApi = new ForumApi();
