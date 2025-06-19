import {flutterCiCdBlog} from './flutter-cicd'

export const allBlogs = {
	'flutter-cicd-gitlab-fastlane': flutterCiCdBlog,
}

export type BlogSlug = keyof typeof allBlogs

export function getBlogBySlug(slug: string) {
	return allBlogs[slug as BlogSlug]
}

export function getAllBlogSlugs(): BlogSlug[] {
	return Object.keys(allBlogs) as BlogSlug[]
}

export function getAllBlogs() {
	return Object.values(allBlogs)
}
