import { SanitzeHtmlPipe } from './sanitze-html.pipe';

describe('SanitzeHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new SanitzeHtmlPipe();
    expect(pipe).toBeTruthy();
  });
});
