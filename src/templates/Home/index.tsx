import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import { NextSeo } from 'next-seo'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
	return (
		<>
			<NextSeo
				title="Blog My Trips"
				description="A simple blog to show in a map the places that I went and show more informations and photos when clicked."
				canonical="https://blog-my-trips-nextjs.vercel.app/"
				openGraph={{
					url: 'https://blog-my-trips-nextjs.vercel.app/',
					title: 'Blog My Trips',
					description:
						'A simple blog to show in a map the places that I went and show more informations and photos when clicked.',
					images: [
						{
							url: 'https://blog-my-trips-nextjs.vercel.app/img/cover.png',
							width: 1280,
							height: 720,
							alt: 'My Trips'
						}
					],
					site_name: 'Blog My Trips'
				}}
			/>
			<LinkWrapper href="/about">
				<InfoOutline size={32} aria-label="About" />
			</LinkWrapper>
			<Map places={places} />
		</>
	)
}
