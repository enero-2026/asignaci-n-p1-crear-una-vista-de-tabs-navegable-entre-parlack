import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon, { IconName } from '../Icon';

type RouteName = 'index' | 'buscar' | 'perfil';

const tabConfig: Record<RouteName, { label: string; icon: IconName }> = {
  index: { label: 'Inicio', icon: 'inicio' },
  buscar: { label: 'Buscar', icon: 'buscar' },
  perfil: { label: 'Perfil', icon: 'perfil' },
};

export default function FloatingTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const bottomSpacing = (Platform.OS === 'android' ? Math.max(insets.bottom, 12) : insets.bottom) + 8;

  return (
    <View pointerEvents="box-none" style={styles.wrapper}>
      <View style={[styles.floating, { bottom: bottomSpacing }]}>
        <View style={styles.container}>
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;
            const routeName = route.name as RouteName;
            const config = tabConfig[routeName];

            const label =
              descriptors[route.key].options.title !== undefined
                ? (descriptors[route.key].options.title as string)
                : config?.label ?? route.name;

            const color = isFocused ? stylesVars.active : stylesVars.inactive;
            const iconName = config?.icon ?? 'inicio';

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };

            return (
              <TouchableOpacity
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                onPress={onPress}
                style={styles.tabButton}
                activeOpacity={0.8}
              >
                <View style={[styles.iconBadge, isFocused && styles.iconBadgeActive]}>
                  <Icon name={iconName} color={color} size={22} />
                </View>
                <Text style={[styles.label, { color }]}>{label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const stylesVars = {
  background: '#FFFFFF',
  border: '#BFDBFE',
  pill: 'rgba(29, 78, 216, 0.16)',
  active: '#1D4ED8',
  inactive: '#64748B',
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  floating: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 18,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: stylesVars.background,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: stylesVars.border,
    paddingHorizontal: 12,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '88%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 10,
    overflow: 'hidden',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    borderRadius: 18,
    paddingVertical: 2,
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
  },
  iconBadge: {
    height: 34,
    width: 34,
    borderRadius: 999,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 1,
    overflow: 'hidden',
  },
  iconBadgeActive: {
    backgroundColor: stylesVars.pill,
  },
});
