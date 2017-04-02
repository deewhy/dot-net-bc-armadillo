import { DotNetBcArmadilloPage } from './app.po';

describe('dot-net-bc-armadillo App', function() {
  let page: DotNetBcArmadilloPage;

  beforeEach(() => {
    page = new DotNetBcArmadilloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
