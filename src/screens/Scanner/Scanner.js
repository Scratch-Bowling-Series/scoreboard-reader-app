import DeviceInfo from 'react-native-device-info';
import { ActivityIndicator, Text, View, StyleSheet } from 'react-native';
import { useTheme } from '@/theme';
import { SafeScreen } from '@/components/template';
import {
	Camera,
	useCameraDevice,
	useCameraPermission,
} from 'react-native-vision-camera';
import { useEffect, useState } from 'react';

function Scanner({ navigation }) {
	const { layout, gutters, fonts } = useTheme();
	const device = useCameraDevice('back');
	const { hasPermission } = useCameraPermission();

	const [isEmulator, setIsEmulator] = useState(true);

	useEffect(() => {
		DeviceInfo.isEmulator().then(setIsEmulator);
	}, []);



	return (
		<SafeScreen>
			<View
				style={[
					layout.flex_1,
					layout.col,
					layout.itemsCenter,
					layout.justifyCenter,
				]}
			>
				<Text>Scanner</Text>
				{!!hasPermission && !isEmulator && (
					<Camera style={StyleSheet.absoluteFill} device={device} isActive />
				)}
			</View>
		</SafeScreen>
	);
}
export default Scanner;
