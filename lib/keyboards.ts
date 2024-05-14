import sql from "better-sqlite3";
interface Keyboard {
  id: number;
  title: string;
  slug: string;
  price: number;
  image: string;
  summary: string;
  specs: string;
  brand: string;
  dimensions: string;
  material: string;
}

const db = sql("keyboards.db");

export function getKeyboards() {
  return db.prepare("SELECT * FROM keyboards").all() as Keyboard[];
}
export function getKeyboard(slug: string) {
  return db
    .prepare("SELECT * FROM keyboards WHERE slug = ?")
    .get(slug) as Keyboard;
}
