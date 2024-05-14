import { getKeyboard } from "@/lib/keyboards";
interface Params {
  slug: string;
}

export default function KeyboardPostPage({ params }: { params: Params }) {
  const keyboard = getKeyboard(params.slug);
  return (
    <main>
      <h1>{keyboard.title}</h1>
    </main>
  );
}
