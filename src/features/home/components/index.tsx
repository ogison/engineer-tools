import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';
import { getFeaturedTools } from '@/constants/tools';

export default function HomePage() {
  const tools = getFeaturedTools();

  return (
    <div className="text-foreground bg-main-background min-h-screen transition-colors">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold">QuickDevTools</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            開発者のためのツールコレクション
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Tools</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link key={tool.id} href={tool.href} className="group">
                <Card className="h-[420px] cursor-pointer overflow-hidden border-gray-200 bg-white transition-all duration-200 hover:scale-105 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-gray-900/25 flex flex-col">
                  <div className="h-48 w-full flex-shrink-0">{tool.icon}</div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {tool.title}
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 flex-grow">
                      {tool.description}
                    </p>
                    <div className="text-sm font-medium text-blue-600 transition-colors group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300 mt-auto">
                      Open →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
