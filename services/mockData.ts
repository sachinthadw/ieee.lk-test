import { Post, ContentType } from '../types';

export const INITIAL_POSTS: Post[] = [
  {
    id: '1',
    title: 'IEEE Sri Lanka Section Congress 2024',
    excerpt: 'The premier gathering of engineering students and professionals across the nation.',
    content: 'The IEEE Sri Lanka Section Congress is the flagship event that brings together undergraduates, graduates, and professionals. Experience a day of innovation, networking, and futuristic technology showcases.',
    image: 'https://picsum.photos/800/600?random=1',
    date: '2024-12-15',
    type: ContentType.EVENT,
    tags: ['Congress', 'Networking']
  },
  {
    id: '2',
    title: 'Techno Meetup: AI in 2025',
    excerpt: 'Exploring the boundaries of Generative AI and its impact on local industries.',
    content: 'Join us for an in-depth discussion on Large Language Models, Gemini, and the future of automation in Sri Lanka.',
    image: 'https://picsum.photos/800/600?random=2',
    date: '2024-11-20',
    type: ContentType.EVENT,
    tags: ['AI', 'Workshop']
  },
  {
    id: '3',
    title: 'WIE: Women in Engineering Summit',
    excerpt: 'Empowering the next generation of women leaders in technology.',
    content: 'A dedicated session for Women in Engineering, featuring keynotes from industry leaders.',
    image: 'https://picsum.photos/800/600?random=3',
    date: '2024-10-05',
    type: ContentType.NEWS,
    tags: ['WIE', 'Empowerment']
  },
  {
    id: '4',
    title: 'About IEEE Sri Lanka',
    excerpt: 'History and Mission',
    content: 'The IEEE Sri Lanka Section is the top-level organizational unit of the IEEE in Sri Lanka. Established in 2003, it has grown to be one of the most active sections in Region 10.',
    image: 'https://picsum.photos/800/600?random=4',
    date: '2024-01-01',
    type: ContentType.PAGE,
    tags: ['About']
  }
];