import { StoneUiPage } from './app.po';

describe('stone-ui App', () => {
  let page: StoneUiPage;

  beforeEach(() => {
    page = new StoneUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
