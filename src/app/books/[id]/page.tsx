import VerticalBook from '@/components/VerticalBook';

interface PageProps {
  params: { id: string };
}

function splitIntoPages(text: string, charsPerPage: number): string[] {
  const pages = [] as string[];
  for (let i = 0; i < text.length; i += charsPerPage) {
    pages.push(text.slice(i, i + charsPerPage));
  }
  return pages;
}

export default async function BookPage({ params }: PageProps) {
  const { id } = params;

  // Dummy data for demonstration
  const title = `Dummy Book ${id}`;
  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.`.repeat(5);

  const pages = splitIntoPages(content, 500);

  const cover = (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gray-800 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p>Tap to begin</p>
    </div>
  );

  const pageElements = pages.map((p, idx) => (
    <div key={idx} className="p-4 whitespace-pre-wrap">{p}</div>
  ));

  return <VerticalBook pages={[cover, ...pageElements]} />;
}
