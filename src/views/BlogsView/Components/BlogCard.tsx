'use client'

import {FC} from 'react'
import Image, {StaticImageData} from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link'

interface BlogCardProps {
	title: string
	description: string
	date: string
	readTime: string
	image: StaticImageData
	slug: string
	tags: string[]
}

const BlogCard: FC<BlogCardProps> = ({
	title,
	description,
	date,
	readTime,
	image,
	slug,
	tags,
}) => {
	return (
		<Link href={`/blogs/${slug}`}>
			<motion.div
				whileHover={{y: -5}}
				className='bg-[#23272f] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full'
			>
				<div className='relative h-48'>
					<Image
						src={image}
						alt={title}
						fill
						className='object-cover'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					/>
				</div>
				<div className='p-6'>
					<div className='flex flex-wrap gap-2 mb-3'>
						{tags.map((tag) => (
							<span
								key={tag}
								className='px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full'
							>
								{tag}
							</span>
						))}
					</div>
					<h2 className='text-xl font-semibold mb-2 text-blue-400 line-clamp-2'>
						{title}
					</h2>
					<p className='text-gray-400 mb-4 line-clamp-3'>{description}</p>
					<div className='flex items-center justify-between text-sm text-gray-500'>
						<span>{date}</span>
						<span>{readTime} min read</span>
					</div>
				</div>
			</motion.div>
		</Link>
	)
}

export default BlogCard
