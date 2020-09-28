import React, { useCallback, useContext } from 'react';
import { FlatList, SafeAreaView } from './styles';

import { Item } from './components';
import { RaffleContext } from '../../context/RaffleContext';

type Post = {
  id: string;
  message: string;
  created_time: Date;
};

type ItemData = {
  thumbnail: string;
  text: string;
  statistics?: string;
};

type Props = {
  data: ItemData[];
  navigation?: any;
};

type HandlePressData = {
  to: string;
  posts: Post[];
  pageId: string;
};

const ThumbList: React.FC<Props> = ({ data, navigation }) => {
  const raffle = useContext(RaffleContext);

  const handlePressItem = useCallback(
    ({ pageId, to, posts }: HandlePressData) => {
      raffle.changePageId(pageId);

      navigation?.navigate(to, { posts }); // eslint-disable-line
    },
    [],
  );

  const renderItem = useCallback(
    ({ item, index }) => (
      <Item
        thumbnail={item.thumbnail}
        text={item.text}
        likesCount={item.likesCount}
        index={index}
        onPress={() =>
          handlePressItem({
            to: 'Posts',
            posts: item.posts,
            pageId: item.id,
          })
        } // eslint-disable-line
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
