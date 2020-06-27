import {createSelector} from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectShopCollectionsForCollectionOverview = createSelector(
    [selectShopCollections],
    (collections) => Object.keys(collections).map((keysOfShopData) => collections[keysOfShopData])
    //.map will return the new array
    //.map will iterate through all objects(5 objects like hats,mens,womens,..) of shop data,
    //and return the array of this five objects,so that collection overview component can loop through over this array
);

export const selectCollectionFromUrl = (collectionUrl) => createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrl]
);



