import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

type ImageProps = {
	url: string
	height: number
	width: number
	fileName: string
}

export type PlacesTemplateProps = {
	place: {
		slug: string
		name: string
		description: {
			html: string
		}
		gallery: ImageProps[]
	}
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
	return (
		<>
			<LinkWrapper href="/">
				<CloseOutline size={32} aria-label="Go back to map" />
			</LinkWrapper>

			<S.Wrapper>
				<S.Container>
					<S.Heading>{place.name}</S.Heading>

					<S.Body
						dangerouslySetInnerHTML={{ __html: place.description.html }}
					/>

					<S.Gallery>
						{/* {place.gallery.map((img, index) => (
				<img key={`photo-${index}`} src={img.url} alt={img.fileName} />
			))} */}
					</S.Gallery>
				</S.Container>
			</S.Wrapper>
		</>
	)
}
