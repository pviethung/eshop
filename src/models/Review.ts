export interface Review {
  id: string;
  rate: number;
  content: string;
  user: {
    id: string;
    displayName: string;
    createdAt: string;
  };
}
