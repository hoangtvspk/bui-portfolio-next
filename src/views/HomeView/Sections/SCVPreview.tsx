'use client'

import React from 'react'
import {motion} from 'framer-motion'
import {FiDownload} from 'react-icons/fi'
import cvPage1 from '@/assets/images/cv_page1.png'
import cvPage2 from '@/assets/images/cv_page2.png'

const SCVPreview: React.FC = () => {
	const cvUrl = '/assets/pdfs/cv.pdf'
	const fileName = 'CV_Tran Van Hoang_Mobile Developer.pdf'
	const images = [cvPage1, cvPage2]

	return (
		<section id='cv' className='w-full min-h-dvh p-2'>
			<h2 className='text-4xl font-extrabold mb-4 text-center w-full py-5 tracking-wide drop-shadow-lg flex flex-col items-center'>
				<span className='flex items-center gap-3'>
					<span className='text-5xl'>📄</span>
					<span className='bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient'>
						Discover My CV
					</span>
					<span className='text-5xl'>✨</span>
				</span>
				<span className='text-lg text-gray-300 mt-2 font-medium tracking-wide'>
					All my skills & projects in one place!
				</span>
			</h2>
			<motion.div
				initial={{opacity: 0, y: 40}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.7, type: 'spring'}}
				viewport={{once: true}}
				className='max-w-[50%] [@media(min-width:1800px)]:max-w-[50%] bg-[#23272f]/90 backdrop-blur-md mx-auto p-8 shadow-2xl rounded-2xl items-start border border-gray-800'
			>
				<div className='flex flex-row justify-center items-start gap-8 mb-8'>
					{images.map((src, idx) => (
						<motion.div
							key={idx}
							whileHover={{
								scale: 1.3,
								boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
							}}
							transition={{type: 'spring', stiffness: 300}}
							className='flex-1 cursor-pointer'
						>
							<img
								src={src.src}
								alt={`CV page ${idx + 1}`}
								className='w-full rounded-xl shadow-2xl border-2 border-transparent hover:border-blue-500 transition-all duration-300 bg-black object-contain'
							/>
						</motion.div>
					))}
				</div>
				<a
					href={cvUrl}
					download={fileName}
					className='inline-flex items-center gap-2 px-7 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors font-semibold shadow-lg text-lg'
				>
					<FiDownload className='text-2xl' />
					Download CV
				</a>
			</motion.div>
		</section>
	)
}

export default SCVPreview
