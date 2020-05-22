interface IUser {
  id: string;
  images: IImage[];
  display_name: string;
  country: string;
  product: string;
  followers: IFollowers;
}

interface IFollowers {
  total: number;
}
