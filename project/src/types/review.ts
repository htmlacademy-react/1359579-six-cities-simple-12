export type User = {
  id: number;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Review = {
  user: User;
  comment: string;
  date: string;
  id: number;
  rating: number;
}

export type Reviews = Review[];
