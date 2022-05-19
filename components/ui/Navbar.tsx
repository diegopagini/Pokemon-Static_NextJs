/** @format */
import { Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';

export const Navbar = () => {
	const { theme } = useTheme();

	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'start',
				padding: '0 1.25rem',
				backgroundColor: theme?.colors.gray100.value,
			}}
		>
			{/* Image es un componente propio de Next. */}
			<Image
				src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
				alt='icono de la app'
				width={70}
				height={70}
			/>
			{/* Text y Spacer son componentes de NextUi. */}
			<Text color='white' h2>
				P
			</Text>
			<Text color='white' h3>
				okémon
			</Text>

			<Spacer
				css={{
					flex: '1',
				}}
			/>
			<Text color='white'>Favoritos</Text>
		</div>
	);
};
