export function MainNavigationMenu() {
  return null;
}

// import { Box, TouchableArea, Text, useTheme, useEnv, useRouter } from '../../index';
// import routing from '../../screens/routing.json';

// const menuItems = new Set(['/', '/settings']);
// const routeEntries = Object.entries(routing).filter(([key]) => menuItems.has(key));

// export function MainNavigationMenu() {
//   const theme = useTheme();
//   const router = useRouter();
//   const env = useEnv();
//   const insets = env.useSafeAreaInsets();

//   return (
//     <Box
//       styleSheet={{
//         maxWidth: {
//           md: theme.space?.x16,
//         },
//         backgroundColor: theme.colors?.neutral.x500,
//         padding: theme.space?.x4,
//         borderRadius: theme.borderRadius?.default,
//         flexDirection: {
//           xs: 'row',
//           md: 'column',
//         },
//         justifyContent: {
//           xs: 'space-around',
//           md: 'flex-start',
//         },
//         position: 'absolute',
//         top: {
//           md: theme.space?.x2,
//         },
//         right: theme.space?.x2,
//         left: {
//           xs: theme.space?.x2,
//           md: theme.space?.initial,
//         },
//         bottom: {
//           xs: env.themeCalc('+', insets.bottom, theme.space?.x2),
//           md: env.themeCalc('+', insets.bottom, theme.space?.x2),
//         },
//       }}
//     >
//       {routeEntries.map(([key, value]) => (
//         <TouchableArea
//           key={key}
//           onPress={() => {
//             router.push(key);
//           }}
//         >
//           <Text tag="span"
//             styleSheet={{
//               padding: theme.space?.x2,
//               color: theme.colors?.neutral.x000
//             }}
//           >
//             {value.name['pt-BR']}
//           </Text>
//         </TouchableArea>
//       ))}
//     </Box>
//   )
// }
