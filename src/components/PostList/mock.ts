import { IItem } from './interfaces';

const post: IItem = {
  id: 'string',
  thumbnail: 'string',
  text:
    'Venha conhecer todo charme Barra Bonita neste passeio delicioso. Depois vamos se...',
  date: new Date(),
  statistics: 'string',
};

export default [
  { ...post, id: 'string_1' },
  { ...post, id: 'string_2' },
  { ...post, id: 'string_3' },
  { ...post, id: 'string_4' },
  { ...post, id: 'string_5' },
  { ...post, id: 'string_6' },
  { ...post, id: 'string_7' },
  { ...post, id: 'string_8' },
  { ...post, id: 'string_9' },
  { ...post, id: 'string_10' },
  { ...post, id: 'string_11' },
  { ...post, id: 'string_12' },
];
