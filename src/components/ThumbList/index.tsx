import React, { useCallback } from 'react';
import { FlatList, SafeAreaView } from './styles';

import { Item } from './components';
import { IProps } from './interfaces';

const ThumbList: React.FC<IProps> = ({ data }) => {
  const renderItem = useCallback(
    ({ item, index }) => (
      <Item
        thumbnail={item.thumbnail}
        text={item.text}
        statistics={item.statistics}
        index={index}
      />
    ),
    [],
  );

  const keyExtractor = useCallback(item => item.id, []);

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
    </SafeAreaView>
  );
};

export default ThumbList;
