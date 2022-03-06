type CommentsList = Comment[]

type User = {
  id: number,
  name: string,
  isPro: boolean,
  avatarUrl: string,
}

type Comment = {
  id: number,
  user: User,
  rating: number,
  comment: string,
  date: string,
}

export default CommentsList;
