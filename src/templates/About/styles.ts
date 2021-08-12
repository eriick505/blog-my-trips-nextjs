import styled from 'styled-components'

export const Content = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	height: 100vh;
	max-width: var(--container);
	margin: auto;
`

export const Heading = styled.h1`
	margin-bottom: var(--large);

	font-size: var(--large);
`

export const Body = styled.div`
	p {
		font-size: var(--medium);
		line-height: var(--medium);
	}
`
