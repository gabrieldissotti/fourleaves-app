import React, { useCallback } from 'react';
import { FlatList, SafeAreaView } from './styles';

import { Item } from './components';
import { Props } from './interfaces';

const CheckList: React.FC<Props> = ({ data }) => {
  const renderItem = useCallback(
    ({ item, index }) => (
      <Item text={item.text} value={item.value} index={index} />
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
      />
    </SafeAreaView>
  );
};

export default CheckList;
