import { StoresCatalogPage } from './app.po';

describe('stores-catalog App', function() {
  let page: StoresCatalogPage;

  beforeEach(() => {
    page = new StoresCatalogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
