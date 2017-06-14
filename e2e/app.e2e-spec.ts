import { AngularPulseComponentsPage } from './app.po';

describe('angular-pulse-components App', () => {
  let page: AngularPulseComponentsPage;

  beforeEach(() => {
    page = new AngularPulseComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
