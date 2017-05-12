import { QuizappPage } from './app.po';

describe('quizapp App', () => {
  let page: QuizappPage;

  beforeEach(() => {
    page = new QuizappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
