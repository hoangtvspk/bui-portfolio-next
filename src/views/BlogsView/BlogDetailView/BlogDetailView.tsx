'use client'

import {FC, lazy, Suspense} from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import {getAllBlogs} from '../../../app/blogs/data'

type Blog = ReturnType<typeof getAllBlogs>[0]

interface BlogDetailViewProps {
	blog: Blog
}

const BlogDetailView: FC<BlogDetailViewProps> = ({blog}) => {
	// Convert slug to PascalCase for component name
	const componentName = blog.slug
		.split('-')
		.map((s) => s.charAt(0).toUpperCase() + s.slice(1))
		.join('')

	// Dynamically import the content component
	const ContentComponent = lazy(
		() => import(`./components/${componentName}Content`)
	)

	return (
		<main className='min-h-screen bg-[#1a1d24] text-white py-20 px-4'>
			<article className='container mx-auto max-w-4xl'>
				<motion.div
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.5}}
				>
					<div className='relative h-[400px] mb-8 rounded-xl overflow-hidden'>
						<Image
							src={blog.image}
							alt={blog.title}
							fill
							className='object-cover'
						/>
					</div>

					<div className='flex flex-wrap gap-2 mb-6'>
						{blog.tags.map((tag) => (
							<span
								key={tag}
								className='px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full'
							>
								{tag}
							</span>
						))}
					</div>

					<h1 className='text-4xl font-bold mb-4'>{blog.title}</h1>

					<div className='flex items-center gap-4 text-gray-400 mb-8'>
						<span>{blog.date}</span>
						<span>•</span>
						<span>{blog.readTime} min read</span>
					</div>

					<Suspense
						fallback={
							<div className='flex items-center justify-center py-10'>
								<div className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-400'></div>
							</div>
						}
					>
						<ContentComponent />
					</Suspense>
				</motion.div>
			</article>
		</main>
	)
}

export default BlogDetailView
