/** @format */
import { Card } from '@nextui-org/react';
import React, { FC } from 'react';

import { environment } from '../../environment/environment';


interface Props {
	id: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ id }) => {
	return (
		<Card
			hoverable
			clickable
			css={{
				padding: 10,
			}}
		>
			<Card.Image
				src={`${environment.baseImg}${id}.svg`}
				width={'100%'}
				height={140}
			/>
		</Card>
	);
};
