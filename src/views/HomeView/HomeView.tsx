import {FC} from 'react'
import SProjects from './Sections/SProjects'
import SCVPreview from './Sections/SCVPreview'
import SProfile from './Sections/SProfile'
import SExperience from './Sections/SExperience'

const HomeView: FC = ({}) => {
	return (
		<div className='min-h-dvh w-full bg-gradient-to-br from-[#23272f] via-[#393e46] to-[#23272f] text-white flex flex-col items-center justify-center'>
			<SProfile />
			<SExperience />
			<SProjects />
			<SCVPreview />
		</div>
	)
}

export default HomeView
