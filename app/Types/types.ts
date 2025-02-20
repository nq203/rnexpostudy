export type RootStackParamList = {
  Tabs: undefined;
  Login: { itemId: number; otherParam?: string };
  Register: {itemId: number, otherParam?: string};
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
  Forum: undefined;
};
export interface CoffeeShop {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  opening_hours: string;
  closing_hours: string;
  images: string[];
  amenities: string[];
  reviews: Review[];
  created_at: string;
  updated_at: string;
};
export interface Review {
  id: number;
  user: User;
  coffee_shop: CoffeeShop;
  rating_space: number;
  rating_service: number;
  rating_drinks: number;
  rating_price: number;
  comment: string;
  images: string[];
  created_at: string;
};
export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  favorites: string[];
  favorite_cafes: CoffeeShop[];
  created_at: string;
  updated_at: string;
};

export interface ForumPost {
  id: number;
  content: string;
  comments: Comment[];
  images: string[];
  created_at: string;
}
export interface Comment {
  id: number;
  user: User;
  content: string;
  created_at: string;
}
export interface FavoriteCofe {
};