import { AngularRolloverPage } from './app.po';

describe('angular-rollover App', () => {
  let page: AngularRolloverPage;

  beforeEach(() => {
    page = new AngularRolloverPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
