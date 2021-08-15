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
			<h1>{place.name}</h1>

			<div dangerouslySetInnerHTML={{ __html: place.description.html }} />

			{/* {place.gallery.map((img, index) => (
				<img key={`photo-${index}`} src={img.url} alt={img.fileName} />
			))} */}
		</>
	)
}
