import { Shop } from "./shop";
export class Marker {
  constructor(public shop: Shop, public latitude: number, public longitude: number) {
  }
}
