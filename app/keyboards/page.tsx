import { KeyboardItems } from "@/components/keyboardItems";
import { useSearchParams } from "next/navigation";
export default function KeyboardsPage() {
  return (
    <div>
      <KeyboardItems fetchType="full" />
    </div>
  );
}
