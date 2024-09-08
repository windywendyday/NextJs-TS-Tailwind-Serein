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
