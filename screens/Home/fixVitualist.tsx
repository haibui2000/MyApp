import * as React from 'react';
import { FlatList, FlatListProps } from 'react-native';

const VirtualizedScrollView = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<FlatList<any>> & Readonly<FlatListProps<any>>) => {
  return (
    <FlatList
      {...props}
      data={[]}
      keyExtractor={(e, i) => 'dom' + i.toString()}
      ListEmptyComponent={null}
      renderItem={null}
      ListHeaderComponent={() => (
        <>{props.children}</>
      )}
    />
  );
};

export default VirtualizedScrollView;