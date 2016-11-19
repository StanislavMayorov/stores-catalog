import { Injectable } from '@angular/core';
import { Shop, Time } from "./shop";
import { Product } from "./product";

@Injectable()
export class ShopService {
  private shops: Array<Shop>;

  constructor() {
    this.shops = [];
    this.setMock();
    this.setMock();
    this.setMock();
    this.setMock();
    this.setMock();
  }

  getShops() {
    return this.shops.slice();
  }

  getShopBySerialNumber(serialNumber: number) {
    for (let shop of this.shops) {
      if (shop.serialNumber === serialNumber)
        return shop
    }
  }

  updateSerialsNumber(newShops: Array<Shop>) {
    for (let i = 0; i < newShops.length; i++) {
      newShops[i].serialNumber = i + 1;
    }
    this.shops = newShops.slice();
  }

  updateShop(index: number, changedShop: Shop) {
    this.shops[index].name = changedShop.name;
    this.shops[index].address = changedShop.address;
    this.shops[index].startOpeningHours = changedShop.startOpeningHours;
    this.shops[index].finishOpeningHours = changedShop.finishOpeningHours;
  }

  setShop(newShop: Shop) {
    newShop.serialNumber = this.shops.length + 1;
    this.shops.push(newShop);
  }

  private setMock() {
    let startOpeningHoursKST = new Time(8, 0);
    let finishOpeningHoursKST = new Time(20, 0);
    let shopKST = new Shop('KST', startOpeningHoursKST,
      finishOpeningHoursKST, 'Dekabristov 5, Minsk, Belarus');
    let product1 = new Product('Termopasta', 'Eheu, amor!Olla moris, tanquam flavum byssus.' +
      ' Heu, secundus habena!Cum visus experimentum, omnes elogiumes examinare velox, germanus lamiaes.');
    let product2 = new Product('HDD Toshiba', 'Devatio undas, tanquam teres gemna.');
    shopKST.addProduct(product1);
    shopKST.addProduct(product2);
    this.setShop(shopKST);

    let startOpeningHoursBatareiki = new Time(9, 0);
    let finishOpeningHoursBatareiki = new Time(18, 0);
    let shopBatareiki = new Shop('batareiki.by', startOpeningHoursBatareiki,
      finishOpeningHoursBatareiki, 'Cullman 15, Minsk, Belarus');
    product1 = new Product('DURACELL AA 2500', 'Cur ignigena potus?Cursus de castus brodium, examinare epos!');
    product2 = new Product('PANASONIC AAA ENELOOP', 'Cum cotta trabem, omnes spatiies resuscitabo raptus, brevis zetaes.');
    shopBatareiki.addProduct(product1);
    shopBatareiki.addProduct(product2);
    this.setShop(shopBatareiki);
  }


}
