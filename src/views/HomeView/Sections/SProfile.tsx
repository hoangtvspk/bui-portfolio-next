'use client'

import {FC, useEffect, useState} from 'react'
import {
	FaGithub,
	FaLinkedin,
	FaEnvelope,
	FaPhoneAlt,
	FaMapMarkerAlt,
	FaReact,
} from 'react-icons/fa'
import {
	SiFlutter,
	SiTypescript,
	SiRedux,
	SiTailwindcss,
	SiNextdotjs,
	SiJavascript,
} from 'react-icons/si'
import avatar from '@/assets/images/avatar.png'
import scshot1 from '@/assets/images/scshot_1.png'
import scshot2 from '@/assets/images/scshot_2.png'
import scshot3 from '@/assets/images/scshot_3.png'
import scshotCoding from '@/assets/images/scshot_coding.png'
import panda from '@/assets/images/profile_panda.png'
import {motion} from 'framer-motion'
import Image from 'next/image'

const skills = [
	{label: 'Flutter', icon: <SiFlutter className='text-blue-400' />},
	{label: 'ReactJS', icon: <FaReact className='text-cyan-400' />},
	{label: 'NextJS', icon: <SiNextdotjs className='text-white' />},
	{label: 'TypeScript', icon: <SiTypescript className='text-blue-500' />},
	{label: 'Redux', icon: <SiRedux className='text-purple-400' />},
	{label: 'TailwindCSS', icon: <SiTailwindcss className='text-cyan-300' />},
	{label: 'JavaScript', icon: <SiJavascript className='text-yellow-300' />},
]

const navItems = [
	{id: 'profile', label: 'Profile'},
	{id: 'experience', label: 'Experience'},
	{id: 'projects', label: 'Projects'},
	{id: 'cv', label: 'CV'},
]

const SProfile: FC = () => {
	const [active, setActive] = useState('profile')

	useEffect(() => {
		const handleScroll = () => {
			const sectionIds = navItems.map((item) => item.id)
			let current = 'profile'
			for (let i = 0; i < sectionIds.length; i++) {
				const el = document.getElementById(sectionIds[i])
				if (el) {
					const rect = el.getBoundingClientRect()
					if (rect.top <= 120) {
						current = sectionIds[i]
					}
				}
			}
			setActive(current)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<>
			{/* Navigation Bar */}
			<div
				className='fixed top-6 right-10 z-50 flex gap-1 bg-[#23272f]/90 px-3 py-1 rounded-full shadow-lg border border-blue-900 backdrop-blur-md'
				style={{boxShadow: '0 4px 16px 0 rgba(31,38,135,0.12)'}}
			>
				{navItems.map((item) => (
					<button
						key={item.id}
						onClick={() => {
							document
								.getElementById(item.id)
								?.scrollIntoView({behavior: 'smooth'})
						}}
						className={`text-base font-semibold px-3 py-1 rounded-full transition-all duration-200
							${active === item.id ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md scale-100' : 'text-gray-200 hover:bg-blue-900/60 hover:text-blue-300'}
						`}
						style={{fontFamily: 'inherit', letterSpacing: 1}}
					>
						{item.label}
					</button>
				))}
			</div>
			<section
				id='profile'
				className='w-full min-h-screen flex items-center justify-center py-8'
			>
				<div className='container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4'>
					{/* Left: Info */}
					<div className='flex-1 flex flex-col items-start gap-6 max-w-xl'>
						<span className='text-base text-orange-400 font-semibold'>
							Do you need a developer?
						</span>
						<h1 className='text-4xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow-lg'>
							Tran Van Hoang
						</h1>
						<h2 className='text-2xl font-bold text-blue-400 mb-2'>
							Mobile & Front-end Developer
						</h2>
						<p className='text-gray-300 text-lg mb-2'>
							Frontend and Mobile Developer with over 2.5 years of experience in
							both Flutter and ReactJS. Passionate about building high-quality
							products and seamless user experiences.
						</p>
						{/* Contact info */}
						<div className='flex flex-wrap gap-4 items-center text-gray-300 text-base'>
							<a
								href='tel:+84935970861'
								className='flex items-center gap-2 hover:text-blue-400 transition-colors'
							>
								<FaPhoneAlt /> 093-597-0861
							</a>
							<a
								href='mailto:hoangtv.spk@gmail.com'
								className='flex items-center gap-2 hover:text-blue-400 transition-colors'
							>
								<FaEnvelope /> hoangtv.spk@gmail.com
							</a>
							<span className='flex items-center gap-2'>
								<FaMapMarkerAlt /> Thu Duc City, Ho Chi Minh City
							</span>
						</div>
						{/* Social */}
						<div className='flex gap-3 mt-2'>
							<a
								href='https://github.com/hoangtvspk'
								target='_blank'
								rel='noopener noreferrer'
								className='text-gray-300 hover:text-blue-400 text-2xl transition-colors'
								aria-label='GitHub'
							>
								<FaGithub />
							</a>
							<a
								href='https://www.linkedin.com/in/hoangtran-1b1016293/'
								target='_blank'
								rel='noopener noreferrer'
								className='text-gray-300 hover:text-blue-400 text-2xl transition-colors'
								aria-label='LinkedIn'
							>
								<FaLinkedin />
							</a>
						</div>
						{/* Skills */}
						<div className='flex flex-wrap gap-3 mt-4'>
							{skills.map((s) => (
								<span
									key={s.label}
									className='flex items-center gap-2 px-4 py-2 bg-[#23272f] border border-gray-700 rounded-full text-sm text-gray-200 font-semibold shadow hover:border-blue-400 transition-all'
								>
									{s.icon} {s.label}
								</span>
							))}
						</div>
					</div>
					{/* Right: Avatar with screenshots below */}
					<div className='flex-1 flex flex-col items-center justify-center relative min-w-[320px]'>
						<div className='relative flex flex-col items-center'>
							<div className='absolute top-4 left-4  h-30  md:h-40 md:w-50 object-cover bg-transparent'>
								<Image
									src={panda}
									alt='Tran Van Hoang Avatar'
									className='h-full w-full object-contain  rotate-[-40deg] '
								/>
							</div>
							<div className='absolute top-0 left-1/3  h-50 w-28 md:h-70 md:w-50 border-4 border-blue-500 shadow-2xl object-cover bg-gray-800'>
								<Image
									src={scshotCoding}
									alt='Tran Van Hoang Avatar'
									className='h-full w-full object-cover  '
								/>
							</div>
							<Image
								src={avatar}
								alt='Tran Van Hoang Avatar'
								className='h-56 md:h-72 w-auto  z-10'
							/>
							{/* Screenshots dưới avatar */}
							<motion.div className='relative w-full flex justify-center mt-[-32px] md:mt-[-48px] z-11'>
								<motion.div
									animate={{y: [-12, 12, -12]}}
									transition={{
										duration: 2,
										repeat: Infinity,
										ease: 'easeInOut',
									}}
								>
									<Image
										src={scshot1}
										alt='screenshot 1'
										width={128}
										height={128}
										className='w-24 md:w-32 rounded-xl shadow-2xl border-2 border-gray-800 rotate-[-10deg] -translate-x-9 z-20 bg-[#23272f]'
									/>
								</motion.div>
								<motion.div
									animate={{y: [14, -14, 14]}}
									transition={{
										duration: 3,
										repeat: Infinity,
										ease: 'easeInOut',
									}}
								>
									<Image
										src={scshot2}
										alt='screenshot 2'
										width={128}
										height={128}
										className='w-24 md:w-32 rounded-xl shadow-2xl border-2 border-gray-800 rotate-[8deg] z-20 bg-[#23272f] mx-2 translate-y-2'
									/>
								</motion.div>
								<motion.div
									animate={{y: [-10, 10, -10]}}
									transition={{
										duration: 2.5,
										repeat: Infinity,
										ease: 'easeInOut',
									}}
								>
									<Image
										src={scshot3}
										alt='screenshot 3'
										width={128}
										height={128}
										className='w-24 md:w-32 rounded-xl shadow-2xl border-2 border-gray-800 rotate-[14deg] translate-x-8 z-0 bg-[#23272f]'
									/>
								</motion.div>
							</motion.div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default SProfile
