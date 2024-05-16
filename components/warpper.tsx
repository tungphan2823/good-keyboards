"use client";
import { Suspense } from "react";
import KeyboardFullItems from "./keyboardFullItems";
type keyboardType = {
  id: number;
  title: string;
  slug: string;
  price: number;
  link: string;
  image: string;
  summary: string;
  specs: string;
  brand: string;
  dimensions: string;
  material: string;
};
export default function Warpper({ keyboard }: { keyboard: keyboardType[] }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <KeyboardFullItems keyboard={keyboard} />
    </Suspense>
  );
}
