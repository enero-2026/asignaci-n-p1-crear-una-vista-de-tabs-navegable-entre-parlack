import Ionicons from '@expo/vector-icons/Ionicons';

export type IconName = 'inicio' | 'buscar' | 'perfil';

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
};

const iconMap: Record<IconName, keyof typeof Ionicons.glyphMap> = {
  inicio: 'home-outline',
  buscar: 'search-outline',
  perfil: 'person-outline',
};

export default function Icon({ name, size = 22, color = '#8FA3B0' }: IconProps) {
  return <Ionicons name={iconMap[name]} size={size} color={color} />;
}
