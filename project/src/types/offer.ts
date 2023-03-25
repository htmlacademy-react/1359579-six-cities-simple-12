export type Offer = {
  type: string;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
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
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

export type Offers = Offer[];

