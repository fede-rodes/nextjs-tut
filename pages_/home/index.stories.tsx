import Home from './index'

export default {
  title: 'Pages/Home',
  component: Home,
}

const mockPosts = [
  {
    id: 'post_one',
    date: '2020/03/01',
    title: 'Post One',
  },
  {
    id: 'post_two',
    date: '2020/04/01',
    title: 'Post Two',
  },
  {
    id: 'post_three',
    date: '2020/05/01',
    title: 'Post Three',
  },
]

export const HomePage = () => <Home posts={mockPosts} />
