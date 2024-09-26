interface IBeer {
  image_url: string;
  _id: string;
  name: string;
  tagline: string;
  firstBrewed: string;
  description: string;
  attenuationLevel: number;
  brewersTips: string;
  contributed_by: string;
  expireAt: Date;
  v: number;
}

export default IBeer;
