import React, { useCallback } from 'react';
import { FlatList } from './styles';

import { Item } from './components';
import { IProps } from './interfaces';

const ThumbList: React.FC<IProps> = ({ data }) => {
  const renderItem = useCallback(
    ({ item }) => (
      <Item
        thumbnail={item.thumbnail}
        text={item.text}
        statistics={item.statistics}
      />
    ),
    [],
  );

  const keyExtractor = useCallback(item => item.id, []);

  return (
    <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
  );
};

export default ThumbList;
