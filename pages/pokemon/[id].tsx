/** @format */
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';

import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';
import { getPokemonInfo, localFavorites } from '../../utils';

interface Props {
	pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
	/**
	 * useState para comprobar si el id de nuestro pokemon esta o no en el localStorage.
	 * para vovler a renderizar el componente es necesario llamar al setter del useState con su nuevo valor.
	 */
	const [isInFavorites, setIsInFavorites] = useState(false);

	/**
	 * useEffect para llamar a esta función la primera vez que se inicie nuestro componente.
	 */

	useEffect(() => {
		setIsInFavorites(localFavorites.existInFavorites(pokemon.id));
	}, [pokemon.id]);

	/**
	 * Función para guardar/quitar del localStorage a nuestro pokemon.
	 */
	const onToggleFavorite = () => {
		localFavorites.toggleFavorite(pokemon.id);
		setIsInFavorites(!isInFavorites);
		if (!isInFavorites) {
			// Libreria de confetti
			confetti({
				zIndex: 999,
				particleCount: 100,
				spread: 160,
				angle: -100,
				origin: {
					x: 0.9,
					y: 0,
				},
			});
		}
	};

	return (
		<Layout title={pokemon.name}>
			<Grid.Container css={{ marginTop: '5px' }} gap={2}>
				<Grid xs={12} sm={4}>
					<Card hoverable css={{ padding: '30px' }}>
						<Card.Body>
							<Card.Image
								src={
									pokemon.sprites.other?.dream_world.front_default ||
									'/no-image.png'
								}
								alt={pokemon.name}
								width='100%'
								height={200}
							/>
						</Card.Body>
					</Card>
				</Grid>
				<Grid xs={12} sm={8}>
					<Card>
						<Card.Header
							css={{ display: 'flex', justifyContent: 'space-between' }}
						>
							<Text h1 transform='capitalize'>
								{pokemon.name}
							</Text>
							<Button
								onClick={onToggleFavorite}
								color='gradient'
								ghost={!isInFavorites}
							>
								{isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}
							</Button>
						</Card.Header>
						<Card.Body>
							<Text size={30}>Sprites:</Text>
							<Container display='flex' direction='row'>
								<Image
									src={pokemon.sprites.front_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>

								<Image
									src={pokemon.sprites.back_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>

								<Image
									src={pokemon.sprites.front_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>

								<Image
									src={pokemon.sprites.back_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Layout>
	);
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
// Mis rutas son dinámicas por el [id]
export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

	return {
		paths: pokemons151.map((id: string) => ({
			params: { id },
		})),
		fallback: false, // Si el url no existiera nos envía al 404 con el fallback en false.
	};
};

/**
 * Función para obtener información dinámica de cada pokemon.
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as { id: string };

	return {
		props: {
			pokemon: await getPokemonInfo(id),
		},
	};
};

export default PokemonPage;
