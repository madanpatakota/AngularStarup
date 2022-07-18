import { StringtrimmerPipe } from './stringtrimmer.pipe';

describe('StringtrimmerPipe', () => {
  it('create an instance', () => {
    const pipe = new StringtrimmerPipe();
    expect(pipe).toBeTruthy();
  });
});
