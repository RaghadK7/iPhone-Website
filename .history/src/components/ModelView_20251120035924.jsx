import { View } from 'react-native';



const ModelView = ({ index, groupRef, gsapType, ControlRef, setRotationSize, size, item }) => {
  return (
    <View
      index={index}
      ide={gsapType}
      className={`
        border-2 border-red-500 w-full h-full
        ${index === 2 ? 'right-[-100%]' : ''}
      `}
    >
    </View>
  );
};

export default ModelView;
