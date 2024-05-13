import sql from "better-sqlite3";
interface Keyboard {
  id: number;
  title: string;
  slug: string;
  image: string;
  summary: string;
  specs: string;
  brand: string;
  dimensions: string;
  material: string;
}

const db = sql("keyboards.db");

export function getKeyboards(): Keyboard[] {
  return db.prepare("SELECT * FROM keyboards").all() as Keyboard[];
}
