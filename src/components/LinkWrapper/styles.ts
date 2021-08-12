import styled from 'styled-components'

export const Wrapper = styled.div`
	position: fixed;
	top: var(--medium);
	right: var(--medium);

	z-index: 1100; // bigger than Leaflet

	cursor: pointer;

	color: var(--white);

	svg {
		transition: color 0.3s ease-in-out;
	}

	&:hover {
		svg {
			color: var(--highlight);
		}
	}
`
