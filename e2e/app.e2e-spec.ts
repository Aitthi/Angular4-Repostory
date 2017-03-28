import { Angular4RepostoryPage } from './app.po';

describe('angular4-repostory App', () => {
  let page: Angular4RepostoryPage;

  beforeEach(() => {
    page = new Angular4RepostoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
