import { Text, View } from "react-native";

export const EditScreenInfo = ({ path }) => {
  const title = "Open up the code for this screen:";
  const description =
    "hii";

  return (
    <View className="flex-1 justify-center">
      <View className="items-center mx-12">
        <Text className="text-lg leading-6 text-center">
          {title}
        </Text>

        <View className="my-2 rounded-md px-2 bg-gray-200">
          <Text className="font-mono text-sm">
            {path}
          </Text>
        </View>

        <Text className="text-lg leading-6 text-center mt-2">
          {description}
        </Text>
      </View>
    </View>
  );
};
