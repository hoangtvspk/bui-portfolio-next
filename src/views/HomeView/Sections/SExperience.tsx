'use client'

import {FC} from 'react'
import {motion} from 'framer-motion'
import {FaBuilding, FaMapMarkerAlt, FaCalendarAlt} from 'react-icons/fa'

const experiences = [
	{
		company: 'Next Chain Tech company',
		position: 'Mobile & Front-end Developer',
		location: 'Ho Chi Minh City',
		time: '10/2023 - now',
		details: [
			'Developed Mobile Application with Flutter: Built mobile interfaces, integrated REST APIs, used Provider & Bloc, applied Clean Architecture, integrated Google AdMob, used Firebase services, published apps to Google Play & App Store.',
			"Developed Website's front-end with ReactJS, NextJS: Built responsive UI, used Function Components & React Hooks, managed state with Redux & Zustand, integrated RESTful APIs, configured WebSocket, applied SEO strategies, i18n, and more.",
			'Actively participated in testing phases, worked with QA teams, and fixed bugs reported during internal testing and from live user feedback.',
		],
	},
	{
		company: 'YOOT Technology and training joint stock company',
		position: 'Mobile & Front-end Developer',
		location: 'Ho Chi Minh City',
		time: '08/2022 - 09/2023',
		details: [
			'Participated in mobile app development using Flutter, published applications to the Google Play Store and Apple App Store.',
			'Built and maintained responsive website components with ReactJS, Redux.',
			'Worked with REST APIs and applied basic state management techniques (e.g., Provider, Redux).',
		],
	},
]

const SExperience: FC = () => {
	return (
		<section id='experience' className='w-full py-16'>
			<h2 className='text-4xl font-extrabold mb-8 text-center w-full py-5 tracking-wide drop-shadow-lg flex flex-col items-center'>
				<span className='flex items-center gap-3'>
					<span className='text-5xl'>💼</span>
					<span className='bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient'>
						Experience
					</span>
					<span className='text-5xl'>🗂️</span>
				</span>
				<span className='text-lg text-gray-300 mt-2 font-medium tracking-wide'>
					My working journey & growth
				</span>
			</h2>
			<div className='max-w-3xl mx-auto flex flex-col gap-10'>
				{experiences.map((exp, idx) => (
					<motion.div
						key={exp.company}
						initial={{opacity: 0, y: 40}}
						whileInView={{opacity: 1, y: 0}}
						transition={{duration: 0.5 + idx * 0.2, type: 'spring'}}
						viewport={{once: true}}
						className='bg-[#23272f]/90 backdrop-blur-md p-8 shadow-2xl rounded-2xl border border-gray-800 flex flex-col gap-3'
					>
						<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2'>
							<div className='flex items-center gap-4 flex-[1]'>
								<FaBuilding className='text-blue-400' />
								<span className='text-xl font-bold text-white'>
									{exp.company}
								</span>
							</div>
							<div className='flex items-center gap-2 text-gray-400 text-base flex-[1]'>
								<FaMapMarkerAlt /> {exp.location}
								<FaCalendarAlt className='ml-4' /> {exp.time}
							</div>
						</div>
						<div className='text-lg font-semibold text-blue-400 mb-2'>
							{exp.position}
						</div>
						<ul className='list-disc pl-6 text-gray-300 space-y-1'>
							{exp.details.map((d, i) => (
								<li key={i}>{d}</li>
							))}
						</ul>
					</motion.div>
				))}
			</div>
		</section>
	)
}

export default SExperience
