import React from 'react';

import { Button } from './styled';

export default function MainButton({
	children,
	setHandle,
	setType,
	min__width,
}) {
	return (
		<Button
			min__width={'66rem'}
			type={setType || 'button'}
			onClick={setHandle}
		>
			{children}
		</Button>
	);
}
