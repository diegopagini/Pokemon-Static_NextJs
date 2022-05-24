/** @format */
import { Link, Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';

export const Navbar = () => {
	const { theme } = useTheme();

	return (
		<div
			style={{
				alignItems: 'center',
				backgroundColor: theme?.colors.gray100.value,
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'start',
				padding: '0 1.25rem',
				width: '100%',
			}}
		>
			{/* Image es un componente propio de Next. */}
			<Image
				src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
				alt='icono de la app'
				width={70}
				height={70}
			/>
			<NextLink href='/'>
				<Link css={{ curson: 'pointer' }}>
					<Text color='white' h2>
						P
					</Text>
					<Text color='white' h3>
						okémon
					</Text>
				</Link>
			</NextLink>
			{/* Text y Spacer son componentes de NextUi. */}

			<Spacer
				css={{
					flex: '1',
				}}
			/>

			<NextLink href='/favorites'>
				<Link css={{ marginRight: '1rem', cursor: 'pointer' }}>
					<Text color='white'>Favoritos</Text>
				</Link>
			</NextLink>
		</div>
	);
};
