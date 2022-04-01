export interface ICategory {
  id: string;
  description: string;
  marketplaceId: string;
  name: string;
  parentId: string;
  sortOrder: number;
  translate: any;
}

export interface ICategoryResp {
  categories: ICategory[];
}

export interface IMenuCategory {
  id: string;
  description: string;
  name: string;
  sortOrder: number;
  products: IProduct[];
  image: string;
  subCategories: ISubCategories[];
}

export interface ISubCategories {
  id: string;
  name: string;
  description: string;
  sortOrder: number;
  subCategories?: string;
  products: IProduct[];
}

export interface IProduct {
  id: string;
  description: string;
  name: string;
  sortOrder: number;
  productStore?: {
    price: number | string;
    storeId: string;
  };
  image: string;
  tags: any[];
  variants: any[];
  price?: number;
  marketplaceId: string;
}
export interface IMenuCategoryResp {
  categories: IMenuCategory;
}
