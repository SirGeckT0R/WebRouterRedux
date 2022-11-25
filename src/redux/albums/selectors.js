export const selectAlbums = (store) => store.albums.data;

export const selectLoadingAlbums = (store) => store.albums.loading;

export const selectErrorAlbums = (store) => store.albums.error;
