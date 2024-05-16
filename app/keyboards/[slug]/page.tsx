import { getKeyboard } from "@/lib/keyboards";
import KeyboardPage from "@/components/keyboardPage";
import Image from "next/image";
interface Params {
  slug: string;
}

export default function KeyboardPostPage({ params }: { params: Params }) {
  const keyboard = getKeyboard(params.slug);
  keyboard.specs = keyboard.specs.replace(/\n/g, "<br />");
  keyboard.dimensions = keyboard.dimensions.replace(/\n/g, "<br />");
  keyboard.material = keyboard.material.replace(/\n/g, "<br />");
  return (
    <main>
      <KeyboardPage keyboard={keyboard} />
    </main>
  );
}
