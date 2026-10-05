import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";
import { basePath } from "@/lib/site";

export function Logo({ locale, inverse = false }: { locale: Locale; inverse?: boolean }) {
  return (
    <Link
      aria-label="AvocadoAI home"
      className={`inline-flex shrink-0 items-center ${inverse ? "rounded-2xl bg-warm-white px-2 py-1 shadow-sm" : ""}`}
      href={`/${locale}`}
    >
      <span aria-hidden="true" className="relative block h-14 w-[138px] overflow-hidden">
        <Image
          alt=""
          className="absolute h-auto max-w-none select-none"
          draggable={false}
          height={681}
          src={`${basePath}/brand/avocadoai-logo.png`}
          style={{ left: "-8.8px", top: "-21.4px", width: "158px" }}
          unoptimized
          width={1024}
        />
      </span>
    </Link>
  );
}
