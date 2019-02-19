export interface ProductData {
  id: string;
  name: string;
  description: string;
  price: string;
  varietal: string
  vendor: {} | {
    [key: string]: any
  } | null
}

export interface ListProps {
  readonly products: ProductData[]
}
