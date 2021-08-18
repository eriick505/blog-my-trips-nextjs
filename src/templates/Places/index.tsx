import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'

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
		description?: {
			html: string
		}
		gallery: ImageProps[]
	}
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
	const router = useRouter()

	if (router.isFallback) return null

	return (
		<>
			<LinkWrapper href="/">
				<CloseOutline size={32} aria-label="Go back to map" />
			</LinkWrapper>

			<S.Wrapper>
				<S.Container>
					<S.Heading>{place.name}</S.Heading>

					<S.Body
						dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
					/>

					<S.Gallery>
						{place.gallery.map((img, index) => (
							<Image
								key={`photo-${index}`}
								src={img.url}
								alt={img.fileName}
								width={500}
								height={400}
								quality={75}
							/>
						))}
					</S.Gallery>
				</S.Container>
			</S.Wrapper>
		</>
	)
}
