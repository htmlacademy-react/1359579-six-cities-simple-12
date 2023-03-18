export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Location;
}

export type Owner = {
  id: number;
  avatarUrl: string;
  name: string;
  isPro: boolean;
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
  comfort: string[];
  owner: Owner;
  id: number;
  images: string[];
  location: Location;
};

export type Offers = Offer[];
