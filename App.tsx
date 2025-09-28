import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView className="flex-1 bg-gray-50">
          <ScrollView
            className="flex-1"
            contentContainerStyle={{ padding: 16 }}
          >
            <View className="flex-1 items-center justify-center">
              <Text className="text-red-600 font-bold text-2xl">
  NativeWind is now working!
</Text>
            </View>
          </ScrollView>
          <StatusBar style="auto" />
        </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
