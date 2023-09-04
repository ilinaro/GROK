import type { TApiData, TApiResponseData } from '../typing'

export type TApiFunction = (data: TApiData) => Promise<TApiResponseData<object>>

export interface Forum {
  id: number
  name: string
  user_id: number
  created_at: number
}

export interface GetForumsListRequest {
  action: 'forum.list'
  // eslint-disable-next-line @typescript-eslint/ban-types
  data: {}
}

export interface Topic {
  id: number
  name: string
  forum_id: number
  user_id: number
  created_at: number
}

export interface DeleteTopicResponse {
  deleted: boolean
}

export interface CreateTopicRequest {
  action: 'topic.create'
  data: {
    forum_id: number
    name: string
  }
}

export interface RenameTopicRequest {
  action: 'topic.rename'
  data: {
    id: number
    name: string
  }
}

export interface DeleteTopicRequest {
  action: 'topic.delete'
  data: {
    id: number
  }
}

export interface GetListTopicRequest {
  action: 'topic.list'
  data: {
    forum_id: number
  }
}

export interface Comment {
  id: number
  user_id: number
  text: string
  topic_id: number
  parent_message_id: number
  created_at: number
}

export type FullComment = Comment & {
  user: {
    id: number
    login: string
    display_name: string
    avatar: string
  }
  reactions: [
    {
      reaction_id: number
      count: number
    }
  ]
  user_reaction: {
    message_id: number
    user_id: number
    reaction_id: number
  }
}

export interface DeleteCommentResponse {
  deleted: boolean
}

export interface CreateCommentRequest {
  action: 'message.create'
  data: {
    topic_id: number
    parent_message_id: number
    text: string
  }
}

export interface EditCommentRequest {
  action: 'message.edit'
  data: {
    id: number
    text: string
  }
}

export interface DeleteCommentRequest {
  action: 'message.delete'
  data: {
    id: number
  }
}

export interface GetCommentsListRequest {
  action: 'message.list'
  data: {
    topic_id: number
    parent_message_id: number
  }
}

export interface IForumApi {
  getForumsList: (data: GetForumsListRequest) => Promise<Forum[]>
  createTopic: (data: CreateTopicRequest) => Promise<Topic>
  renameTopic: (data: RenameTopicRequest) => Promise<Topic>
  deleteTopic: (data: DeleteTopicRequest) => Promise<DeleteTopicResponse>
  getListTopic: (data: GetListTopicRequest) => Promise<Topic[]>
  addComment: (data: CreateCommentRequest) => Promise<Comment>
  editComment: (data: EditCommentRequest) => Promise<Comment>
  deleteComment: (data: DeleteCommentRequest) => Promise<DeleteCommentResponse>
  getCommentsList: (data: GetCommentsListRequest) => Promise<FullComment[]>
}
