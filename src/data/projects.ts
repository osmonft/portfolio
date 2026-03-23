export type ProjectStatus = 'live' | 'in-progress' | 'concept'

export type Project = {
  id: string
  title: string
  description: string
  image: string | null        // path in /public/images/, or null if no image available
  imageStyle?: 'cover' | 'contain'  // defaults to 'cover'; use 'contain' for logos/icons
  status: ProjectStatus
  link?: string               // if published — opens in new tab
  docFile?: string            // filename in /private/docs/ if unpublished
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'chainsight',
    title: 'ChainSight',
    description:
      'A crypto analytics Chrome extension that surfaces on-chain data and market signals directly in the browser for faster trading decisions.',
    image: '/images/chainsight.png',
    status: 'live',
    link: 'https://chromewebstore.google.com/detail/tweet-ca-helper-chainsigh/eadccpcdekfcoalobnmkgmblfomlimim',
    tags: ['Chrome Extension', 'JavaScript', 'Crypto', 'Analytics'],
  },
  {
    id: 'connected',
    title: 'ConnectED',
    description:
      'A Chrome extension that automates personalized LinkedIn outreach using AI to generate tailored connection messages based on a prospect\'s profile.',
    image: '/images/connected.png',
    imageStyle: 'contain',
    status: 'in-progress',
    tags: ['Chrome Extension', 'JavaScript', 'AI', 'LinkedIn'],
  },
  {
    id: 'coach-caton',
    title: 'Coach Caton',
    description:
      'A coaching assistant web app built for a sports coach to handle client Q&A and reduce email overload. Replaced a manual email workflow with an AI-powered ask-a-coach interface.',
    image: '/images/coach-caton.png',
    imageStyle: 'contain',
    status: 'live',
    link: 'https://hurdlepro.lovable.app/ask-coach',
    tags: ['AI', 'Web App', 'Coaching', 'Automation'],
  },
]
