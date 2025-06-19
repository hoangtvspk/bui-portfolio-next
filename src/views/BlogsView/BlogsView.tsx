'use client'

import {FC} from 'react'
import {motion} from 'framer-motion'
import BlogCard from './Components/BlogCard'
import flutterCiCdImage from '@/assets/images/blogs/flutter-cicd.png'

const blogs = [
	{
		title: 'Flutter CI/CD with GitLab CI and Fastlane: A Complete Guide',
		description:
			'Learn how to set up a robust CI/CD pipeline for your Flutter app using GitLab CI and Fastlane. This comprehensive guide covers automated testing, building, and deployment to both App Store and Google Play.',
		date: 'Mar 20, 2024',
		readTime: '15',
		image: flutterCiCdImage,
		slug: 'flutter-cicd-gitlab-fastlane',
		tags: ['Flutter', 'CI/CD', 'GitLab', 'Fastlane', 'DevOps'],
	},
]

const BlogsView: FC = () => {
	return (
		<main className='min-h-screen bg-[#1a1d24] text-white py-20 px-4'>
			<div className='container mx-auto'>
				<motion.h1
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.5}}
					className='text-4xl font-bold mb-8 text-center'
				>
					My Blogs
				</motion.h1>

				<motion.div
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.5, delay: 0.2}}
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
				>
					{blogs.map((blog) => (
						<BlogCard key={blog.slug} {...blog} />
					))}
				</motion.div>
			</div>
		</main>
	)
}

export default BlogsView
