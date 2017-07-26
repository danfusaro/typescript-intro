import { TypescriptIntroPage } from './app.po';

describe('typescript-intro App', function () {
  let page: TypescriptIntroPage;

  beforeEach(() => {
    page = new TypescriptIntroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
