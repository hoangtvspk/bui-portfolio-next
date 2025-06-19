import {notFound} from 'next/navigation'
import BlogDetailView from '@/views/BlogsView/BlogDetailView/BlogDetailView'
import {getBlogBySlug, getAllBlogSlugs} from '@/app/blogs/data'

interface BlogPageProps {
	params: Promise<{
		slug: string
	}>
}

// Generate static params for all known blog slugs
export async function generateStaticParams() {
	const slugs = getAllBlogSlugs()

	return slugs.map((slug) => ({
		slug,
	}))
}

export default async function BlogPage({params}: BlogPageProps) {
	const {slug} = await params
	const blog = getBlogBySlug(slug)

	if (!blog) {
		notFound()
	}

	return <BlogDetailView blog={blog} />
}

// Generate metadata for SEO
export async function generateMetadata({params}: BlogPageProps) {
	const {slug} = await params
	const blog = getBlogBySlug(slug)

	if (!blog) {
		return {
			title: 'Blog Not Found',
		}
	}

	return {
		title: blog.title,
		description: blog.description,
		openGraph: {
			title: blog.title,
			description: blog.description,
			images: [
				{
					url: blog.image.src,
					width: 1200,
					height: 630,
					alt: blog.title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: blog.title,
			description: blog.description,
			images: [blog.image.src],
		},
	}
}
