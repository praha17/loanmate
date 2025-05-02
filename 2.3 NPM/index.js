import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

const sillyName = uniqueNamesGenerator({
  dictionaries: [adjectives, colors, animals],
  separator: '-',
  length: 3,
});

console.log(`My name is ${sillyName}.`);
