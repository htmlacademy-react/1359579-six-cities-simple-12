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
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: {
    id: number;
    name: string;
    isPro: boolean;
    avatarUrl: string;
  };
  id: number;
  images: string[];
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type Offers = Offer[];
