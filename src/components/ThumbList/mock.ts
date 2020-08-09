import { IItem } from './interfaces';

const page: IItem = {
  id: 'string',
  thumbnail: 'string',
  text: 'Millenium',
  statistics: 'string',
};

export default [
  { ...page, id: 'string_1' },
  { ...page, id: 'string_2' },
  { ...page, id: 'string_3' },
  { ...page, id: 'string_4' },
  { ...page, id: 'string_5' },
  { ...page, id: 'string_6' },
  { ...page, id: 'string_7' },
];
