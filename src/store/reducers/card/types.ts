export interface ProductCard {
    id: number;
    img: string;
    title: string;
    description: string;
    price: number;
    oldPrice?: number;
    raiting: number;
    type: 'wired' | 'wireless';
  }
  