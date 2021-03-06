/** @format */
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface Props {
	name: string;
	img: string;
	id: number;
}

export const Pokemon: FC<Props> = ({ name, img, id }) => {
	// Router de React.
	const router = useRouter();

	const onClick = () => {
		// Función para navegar en React.
		router.push(`/name/${name}`);
	};

	return (
		<Grid xs={6} sm={3} md={2} xl={1}>
			<Card onClick={onClick} hoverable clickable>
				<Card.Body css={{ p: 1 }}>
					<Card.Image src={img} alt={name} width='100%' height={140} />
				</Card.Body>
				<Card.Footer>
					<Row justify='space-between'>
						<Text transform='capitalize'>{name}</Text>
						<Text>#{id}</Text>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	);
};
