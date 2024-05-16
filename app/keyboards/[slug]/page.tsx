// import { getKeyboard } from "@/lib/keyboards";
import { getKeyboards } from "@/lib/keyboards";
import KeyboardPage from "@/components/keyboardPage";
import Image from "next/image";
interface Params {
  slug: string;
}

export default function KeyboardPostPage({ params }: { params: Params }) {
  // const keyboard = getKeyboard(params.slug);
  const keyboards = getKeyboards();
  const filteredKeyboards = keyboards.filter(
    (keyboard) => keyboard.slug === params.slug
  );
  const keyboardFiltered = filteredKeyboards[0];

  keyboardFiltered.specs = keyboardFiltered.specs.replace(/\n/g, "<br />");
  keyboardFiltered.dimensions = keyboardFiltered.dimensions.replace(
    /\n/g,
    "<br />"
  );
  keyboardFiltered.material = keyboardFiltered.material.replace(
    /\n/g,
    "<br />"
  );
  return (
    <main>
      <KeyboardPage keyboard={keyboardFiltered} />
    </main>
  );
}
