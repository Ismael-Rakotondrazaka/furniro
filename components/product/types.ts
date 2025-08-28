export interface Product {
  additionalInfo: Record<string, ProductInfo>;
  description: string[];
  gallery: ProductImage[];
  id: string;
  name: string;
  reviews: ProductReview[];
}

export interface ProductImage {
  alt: string;
  src: string;
}

export interface ProductInfo {
  label: string;
  value: string;
}

export interface ProductReview {
  author: string;
  id: number;
  rating: number;
  text: string;
}

export interface TabItem {
  key: string;
  label: string;
}
