import type { TableProps } from 'antd';

export type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

export interface GalleryItems {
      galleryId: string;
      title: string;
      description: string;
      url: string;
}

export interface SkuItem {
    skuId: string;
    skuName: string;
    skuUrl: string;
    skuImage: string;
    stock: number;
    isSoldOut: boolean;
}

export interface SpuItem {
    spuId: string;
    spuName: string;
    spuUrl: string;
    spuImage: string;
    isSoldOut: boolean;
}

export interface navigation{
    itemName: string;
    itemUrl: string;
}

export interface cartItem {
    title: string;
    imgUrl: string;
    tag:Array<string>;
    key: string;
    price: number;
}

export interface res {
    data: object;
    status: number;
}

export interface category {
    categoryId: number;
    categoryName: string;
    children: Array<category> | null;
}
