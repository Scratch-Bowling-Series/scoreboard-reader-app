import { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/theme';
import { Brand } from '@/components/molecules';
import { SafeScreen } from '@/components/template';
import { useCameraPermission } from 'react-native-vision-camera';

function Startup({ navigation }) {
	const { layout, gutters, fonts } = useTheme();
	const { t } = useTranslation(['startup']);
	const { hasPermission, requestPermission } = useCameraPermission();

	const { isSuccess, isFetching, isError } = useQuery({
		queryKey: ['startup'],
		queryFn: async () => {
			if (!hasPermission) {
				await requestPermission();
				if (hasPermission) {
					return Promise.resolve(true);
				}else {
					return Promise.resolve(false);
				}
			} else {
				return Promise.resolve(true);
			}
		},
	});
	useEffect(() => {
		if (isSuccess) {
			navigation.reset({
				index: 0,
				routes: [{ name: 'TabNav' }],
			});
		}
	}, [isSuccess]);
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
				<Brand />
				{isFetching && (
					<ActivityIndicator size="large" style={[gutters.marginVertical_24]} />
				)}
				{isError && (
					<Text style={[fonts.size_16, fonts.red500]}>
						{t('startup:error')}
					</Text>
				)}
			</View>
		</SafeScreen>
	);
}
export default Startup;
