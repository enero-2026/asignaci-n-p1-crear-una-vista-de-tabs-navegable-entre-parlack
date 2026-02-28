import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import FloatingTabBar from '../src/components/navigation/FloatingTabBar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Tabs
        screenOptions={{
          headerShown: false,
          sceneStyle: { backgroundColor: '#EFF6FF' },
        }}
        tabBar={(props) => <FloatingTabBar {...props} />}
      >
        <Tabs.Screen name="index" options={{ title: 'Inicio' }} />
        <Tabs.Screen name="buscar" options={{ title: 'Buscar' }} />
        <Tabs.Screen name="perfil" options={{ title: 'Perfil' }} />
      </Tabs>
    </>
  );
}
