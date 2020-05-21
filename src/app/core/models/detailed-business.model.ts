export class DetailedBusinessModel {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_claimed: boolean;
  is_closed: boolean;
  review_count: number;
  rating: number;
  location = new Location();
}

export class Location {
  city: string;
  address1: string;
}