import { formatDistanceToNow } from 'date-fns';

type Story = {
  id: number;
  title: string;
  url: string;
  score: number;
  by: string;
  time: number;
  descendants: number;
};

const stories: Story[] = [
  {
    id: 1,
    title: "Announcing Next.js 15.3",
    url: "https://nextjs.org/blog/next-15-3",
    score: 789,
    by: "johndoe",
    time: Date.now() - 3600000,
    descendants: 234
  },
  {
    id: 2,
    title: "The Future of Web Development",
    url: "https://example.com/web-dev-future",
    score: 456,
    by: "janedoe",
    time: Date.now() - 7200000,
    descendants: 123
  },
  {
    id: 3,
    title: "Understanding Modern JavaScript",
    url: "https://example.com/modern-js",
    score: 234,
    by: "developer",
    time: Date.now() - 10800000,
    descendants: 45
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f6ef]">
      <header className="bg-[#ff6600] px-2 py-2">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <span className="font-bold text-black">HN</span>
          <nav className="flex gap-4 text-sm text-black">
            <a href="#" className="hover:underline">new</a>
            <a href="#" className="hover:underline">past</a>
            <a href="#" className="hover:underline">comments</a>
            <a href="#" className="hover:underline">ask</a>
            <a href="#" className="hover:underline">show</a>
            <a href="#" className="hover:underline">jobs</a>
            <a href="#" className="hover:underline">submit</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-2 px-2">
        <ol className="list-decimal list-inside">
          {stories.map((story, index) => (
            <li key={story.id} className="py-1">
              <div className="inline-block">
                <a href={story.url} className="text-sm hover:underline visited:text-gray-600">
                  {story.title}
                </a>
                <span className="text-xs text-gray-500">
                  {' '}
                  ({new URL(story.url).hostname})
                </span>
              </div>
              <div className="text-xs text-gray-500 ml-[1.25em]">
                {story.score} points by {story.by}{' '}
                {formatDistanceToNow(story.time)} ago |{' '}
                <a href="#" className="hover:underline">
                  {story.descendants} comments
                </a>
              </div>
            </li>
          ))}
        </ol>
      </main>

      <footer className="max-w-5xl mx-auto border-t border-[#ff6600] mt-4 py-4 px-2">
        <div className="text-xs text-center text-gray-500">
          <a href="#" className="hover:underline">Guidelines</a>
          {' | '}
          <a href="#" className="hover:underline">FAQ</a>
          {' | '}
          <a href="#" className="hover:underline">Lists</a>
          {' | '}
          <a href="#" className="hover:underline">API</a>
          {' | '}
          <a href="#" className="hover:underline">Security</a>
          {' | '}
          <a href="#" className="hover:underline">Legal</a>
          {' | '}
          <a href="#" className="hover:underline">Apply to YC</a>
          {' | '}
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </footer>
    </div>
  );
}