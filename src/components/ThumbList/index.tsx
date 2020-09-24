import React, { useCallback } from 'react';
import { FlatList, SafeAreaView } from './styles';

import { Item } from './components';
import { IProps } from './interfaces';

const ThumbList: React.FC<IProps> = ({ data, navigation }) => {
  const handleNavigation = (to: string) => navigation?.navigate(to);

  const renderItem = useCallback(
    ({ item, index }) => (
      <Item
        thumbnail={item.thumbnail}
        text={item.text}
        likesCount={item.likesCount}
        index={index}
        onPress={() => handleNavigation('Posts')}
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
      />
    </SafeAreaView>
  );
};

export default ThumbList;
