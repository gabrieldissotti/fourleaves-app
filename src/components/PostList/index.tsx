import React, { useCallback } from 'react';
import { FlatList, SafeAreaView } from './styles';

import { Item } from './components';
import { IProps } from './interfaces';

const PostList: React.FC<IProps> = ({ data, navigation }) => {
  const handleNavigation = useCallback(
    (to: string) => navigation?.navigate(to),
    [navigation],
  );

  const renderItem = useCallback(
    ({ item, index }) => (
      <Item
        thumbnail={item.thumbnail}
        text={item.text}
        date={item.date}
        statistics={item.statistics}
        index={index}
        onPress={() => handleNavigation('Requirements')}
      />
    ),
    [handleNavigation],
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

export default PostList;
