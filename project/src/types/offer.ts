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
  host: {
    id: number;
    name: string;
    isPro: boolean;
    avatarUrl: string;
  };
  id: number;
  images: string[];
  previewImage: string;
  location: Location;
};

export type Offers = Offer[];

