'use client'

import {FC} from 'react'
import {motion} from 'framer-motion'
import {FaReact} from 'react-icons/fa'
import {SiFlutter, SiNextdotjs} from 'react-icons/si'

const projectData = [
	{
		type: 'Mobile (Flutter)',
		icon: <SiFlutter className='text-blue-400 text-2xl' />,
		projects: [
			{
				title: 'Easy Sales Application',
				desc: 'A mobile app that connects sellers with salespeople to boost sales and streamline business communication.',
				links: [
					{
						label: 'iOS',
						url: 'https://apps.apple.com/us/app/easysales/id6783642810',
					},
					{
						label: 'Android',
						url: 'https://play.google.com/store/apps/details?id=app.kr.easysales',
					},
				],
			},
			{
				title: 'Borra Application',
				desc: 'From various themed horoscopes to monthly horoscopes, users can choose the horoscope which they are most curious about and check it out.',
				links: [
					{
						label: 'iOS',
						url: 'https://apps.apple.com/us/app/mbti/id1052093404',
					},
					{
						label: 'Android',
						url: 'https://play.google.com/store/apps/details?id=com.firstmecca.hellounseombc',
					},
				],
			},
			{
				title: 'Wowww Application',
				desc: 'Provides an environment where users can tackle projects more happily & conveniently. (Korean only)',
				links: [
					{
						label: 'iOS',
						url: 'https://apps.apple.com/us/app/wowww/id6471225948',
					},
					{
						label: 'Android',
						url: 'https://play.google.com/store/apps/details?id=ai.wowww',
					},
				],
			},
			{
				title: 'Goseo Application',
				desc: 'User can select an existing old book and translate a specific part of it.',
				links: [
					{
						label: 'Android',
						url: 'https://play.google.com/store/apps/details?id=kr.or.aigoseo.mobile',
					},
				],
			},
			{
				title: 'YOEDU Application',
				desc: 'Application helps the parent follow the learning process of their children who attending the YOEDU Training Center.',
				links: [
					{
						label: 'iOS',
						url: 'https://apps.apple.com/us/app/yoedu/id6450026245',
					},
					{
						label: 'Android',
						url: 'https://play.google.com/store/apps/details?id=vn.yoedu',
					},
				],
			},
			{
				title: 'YOOTWAY Application',
				desc: 'Help students find the right industry and find out the work of each industry.',
				links: [
					{
						label: 'iOS',
						url: 'https://apps.apple.com/us/app/yoot-way/id6443728443',
					},
					{
						label: 'Android',
						url: 'https://play.google.com/store/apps/details?id=vn.yootway',
					},
				],
			},
		],
	},
	{
		type: 'Web (ReactJS)',
		icon: <FaReact className='text-cyan-400 text-2xl' />,
		projects: [
			{
				title: 'Easysale',
				desc: "A seller-salesperson matching platform, help increase user's sales.",
				links: [{label: 'Website', url: 'https://app.easysales.kr/'}],
			},
			{
				title: 'Wedding Items Management',
				desc: 'Support Admin & Sales to manage and provide items that the users and guests can order and give the wedding gifts.',
				links: [
					{label: 'Website', url: 'https://registry-admin.weddingbook.com/'},
				],
			},
			{
				title: 'Chance of admission',
				desc: 'An online platform helping Vietnamese students explore university admission opportunities, check entrance benchmarks, submit applications, and assess career interests.',
				links: [{label: 'Website', url: 'https://cohotrungtuyen.vn/'}],
			},
		],
	},
	{
		type: 'Web (NextJS)',
		icon: <SiNextdotjs className='text-white text-2xl' />,
		projects: [
			{
				title: 'Ulju Adventure',
				desc: 'A mobile-responsive web platform linking to AR mini-games that promote local attractions in Ulju, Korea. Focused on seamless mobile UX, AR integration, and interactive tourism experience.',
				links: [{label: 'Website', url: 'https://www.uljuadventure.com/'}],
			},
			{
				title: 'Wedding Book - Registry',
				desc: 'Allows users to create a wedding registry and a free wedding website. It offers a wide selection of gifts, and easy for friends and family to find the registry.',
				links: [{label: 'Website', url: 'https://registry.weddingbook.com/'}],
			},
			{
				title: 'Hankyung',
				desc: 'Free fortune-telling from Korea Economic Daily, users can check out their innate fortune.',
				links: [{label: 'Website', url: 'https://fortune.hankyung.com/'}],
			},
		],
	},
]

const SProjects: FC = () => {
	return (
		<section id='projects' className='w-full min-h-dvh  p-2'>
			<h2 className='text-4xl font-extrabold mb-4 text-center w-full py-5 tracking-wide drop-shadow-lg flex flex-col items-center'>
				<span className='flex items-center gap-3'>
					<span className='text-5xl'>💼</span>
					<span className='bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-gradient'>
						Featured Projects
					</span>
					<span className='text-5xl'>🌟</span>
				</span>
				<span className='text-lg text-gray-300 mt-2 font-medium tracking-wide'>
					A showcase of my real-world products & teamwork
				</span>
			</h2>
			<div className='max-w-[60%] [@media(min-width:1800px)]:max-w-[50%] mx-auto'>
				{projectData.map((group, idx) => (
					<motion.div
						key={group.type}
						initial={{opacity: 0, y: 40}}
						whileInView={{opacity: 1, y: 0}}
						transition={{duration: 0.5 + idx * 0.2, type: 'spring'}}
						viewport={{once: true}}
						className='mb-12 bg-[#23272f]/90 backdrop-blur-md p-8 shadow-2xl rounded-2xl border border-gray-800'
					>
						<div className='flex items-center gap-3 mb-6'>
							{group.icon}
							<span className='text-2xl font-bold text-white'>
								{group.type}
							</span>
						</div>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							{group.projects.map((proj) => (
								<motion.div
									key={proj.title}
									whileHover={{
										scale: 1.04,
										boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)',
									}}
									transition={{type: 'spring', stiffness: 300}}
									className='bg-[#23272f] rounded-xl p-6 shadow-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 flex flex-col gap-3'
								>
									<div className='text-xl font-semibold text-white mb-1'>
										{proj.title}
									</div>
									<div className='text-gray-300 text-base mb-2'>
										{proj.desc}
									</div>
									<div className='flex flex-wrap gap-2 mb-2'>
										{proj.links.map((l) => (
											<a
												key={l.url}
												href={l.url}
												target='_blank'
												rel='noopener noreferrer'
												className='px-3 py-1 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-500 transition-colors font-semibold shadow'
											>
												{l.label}
											</a>
										))}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	)
}

export default SProjects
