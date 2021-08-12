import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

function AboutTemplate() {
	return (
		<S.Content>
			<LinkWrapper href="/">
				<CloseOutline size={32} />
			</LinkWrapper>

			<S.Heading>My Trips</S.Heading>

			<S.Body>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
					minima vero alias. Maiores illo corrupti nulla culpa sit a laboriosam
					delectus repudiandae porro, repellendus pariatur. Similique enim
					expedita repudiandae! Blanditiis.
				</p>
			</S.Body>
		</S.Content>
	)
}

export default AboutTemplate
