import shuffle from 'lodash.shuffle';

const hex: string[] = '0123456789ABCDEF'.split('');

const generateRandomColor = (): string => {
  let result = '';

  for (let index = 0; index < 6; index++) {
    const [element] = shuffle(hex);
    result += element;
  }

  return result;
};

export default generateRandomColor;
