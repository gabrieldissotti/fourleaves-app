import { IItem } from './interfaces';

const page: IItem = {
  id: 'string',
  thumbnail: 'string',
  text: 'Millenium',
  statistics: 'string',
};

export default [
  { ...page, id: 'string_1', text: 'Millenium 1' },
  { ...page, id: 'string_2' },
  { ...page, id: 'string_3' },
  { ...page, id: 'string_4' },
  { ...page, id: 'string_5' },
  { ...page, id: 'string_6' },
  { ...page, id: 'string_7' },
  { ...page, id: 'string_8' },
  { ...page, id: 'string_9' },
  { ...page, id: 'string_10' },
  { ...page, id: 'string_11' },
  { ...page, id: 'string_12', text: 'Millenium 10' },
];
