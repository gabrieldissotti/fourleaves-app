import React, { useCallback, useContext } from 'react';
import { FlatList, SafeAreaView } from './styles';

import { Item } from './components';
import { IProps } from './interfaces';
import { RaffleContext } from '../../context/RaffleContext';

const PostList: React.FC<IProps> = ({ data, navigation }) => {
  const raffle = useContext(RaffleContext);

  const handleSelectPost = useCallback(
    (postId: string) => {
      raffle.changePostId(postId);

      navigation?.navigate('Requirements'); // eslint-disable-line
    },
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
        onPress={() => handleSelectPost(item.id)}
      />
    ),
    [handleSelectPost],
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
