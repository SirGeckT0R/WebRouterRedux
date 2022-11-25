export default class Api {
  static #API_PATH = `https://jsonplaceholder.typicode.com`;

  static #fetch(url) {
    return fetch(this.#API_PATH + url).then((r) => r.json());
  }

  static getUser(userId) {
    const userPromise = this.#fetch(`/users/${userId}`);
    return userPromise;
  }

  static getUsers() {
    const usersPromise = this.#fetch(`/users`);
    return usersPromise;
  }

  static getAlbumsOfUser(userId) {
    const albumsPromise = this.#fetch(`/albums?userId=${userId}`);
    return albumsPromise;
  }

  static getAlbums() {
    const albums = this.#fetch(`/albums`);
    return albums;
  }

  static getAlbum(albumId) {
    const albumPromise = this.#fetch(`/albums/${albumId}`);
    return albumPromise;
  }

  static getPhotosOfAlbum(albumId) {
    const photosPromise = this.#fetch(`/photos?albumId=${albumId}`);
    return photosPromise;
  }
}
