import generateRandomColor from './generate-random-color';

describe('generateRandomColor()', () => {
  const result = generateRandomColor();

  test('returns a string of length 6', () => {
    expect(typeof result).toBe('string');
    expect(result.length).toBe(6);
  });

  test('returns a different string value', () => {
    const secondResult = generateRandomColor();
    const thirdResult = generateRandomColor();

    expect(result).not.toBe(secondResult);
    expect(result).not.toBe(thirdResult);
  });
});