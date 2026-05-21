import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { CartWidget } from "./cart-widget";
import { SearchForm } from "./search-form";

function SearchFormFallback() {
  return (
    <div className="flex h-[46px] w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700" />
  );
}

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <Suspense fallback={<SearchFormFallback />}>
          <SearchForm />
        </Suspense>
      </div>

      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/diogo1006br.png"
            className="w-6 h-6 rounded-full"
            width={24}
            height={24}
            alt="User"
          />
        </Link>
      </div>
    </div>
  );
}
