// import sql from "better-sqlite3";
import { sql } from "@vercel/postgres";
interface Keyboard {
  id: number;
  title: string;
  slug: string;
  link: string;
  price: number;
  image: string;
  summary: string;
  specs: string;
  brand: string;
  dimensions: string;
  material: string;
}

// const db = sql("keyboards.db");

export async function getKeyboards() {
  const { rows } = await sql`SELECT * FROM keyboards`;
  return rows as Keyboard[];
}
export async function getKeyboard(slug: string) {
  const { rows } = await sql`SELECT * FROM keyboards WHERE slug = ${slug}`;
  return rows[0] as Keyboard; 
}

