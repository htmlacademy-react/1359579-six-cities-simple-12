export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Location;
}

export type Offer = {
  type: string;
  city: City;
  title: string;
  description: string;
  isPremium: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  owner: {
    id: number;
    avatarUrl: string;
    name: string;
    isPro: boolean;
  };
  id: number;
  images: string[];
  previewImage: string;
  location: Location;
};

export type Offers = Offer[];

