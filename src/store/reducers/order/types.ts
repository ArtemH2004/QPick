export interface OrderCard {
  number: string;
  date: string;
  cvv: string;
}

export interface OrderAddress {
  type: string;
  address: string;
  apartment?: string;
  entrance?: string;
  floor?: string;
  intercom?: string;
  comment?: string;
}

export interface OrderRecipient {
  name: string;
  surname: string;
  phone: string;
}
