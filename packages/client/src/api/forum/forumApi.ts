import { forumAxiosInstance } from '@api/axiosInstance';
import { forum, topic } from '@config/apiRoutes.config';
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
    const { data } = await forumAxiosInstance.post<Topic>(topic.path, createTopicData);
    return data;
  }

  async renameTopic(renameTopicData: RenameTopicRequest) {
    const { data } = await forumAxiosInstance.post<Topic>(topic.path, renameTopicData);
    return data;
  }

  async deleteTopic(deleteTopicData: DeleteTopicRequest) {
    const { data } = await forumAxiosInstance.post<DeleteTopicResponse>(topic.path, deleteTopicData);
    return data;
  }

  async getListTopic(listTopicData: GetListTopicRequest) {
    const { data } = await forumAxiosInstance.post<Topic[]>(topic.path, listTopicData);
    return data;
  }

  async addComment(createCommentData: CreateCommentRequest) {
    const { data } = await forumAxiosInstance.post<Comment>(topic.path, createCommentData);
    return data;
  }

  async editComment(editCommentData: EditCommentRequest) {
    const { data } = await forumAxiosInstance.post<Comment>(topic.path, editCommentData);
    return data;
  }

  async deleteComment(deleteCommentData: DeleteCommentRequest) {
    const { data } = await forumAxiosInstance.post<DeleteCommentResponse>(topic.path, deleteCommentData);
    return data;
  }

  async getCommentsList(commentsListData: GetCommentsListRequest) {
    const { data } = await forumAxiosInstance.post<FullComment[]>(topic.path, commentsListData);
    return data;
  }
}

export const forumApi = new ForumApi();
