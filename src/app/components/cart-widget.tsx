'use client'

import { useCart } from "@/contexts/card-context";
import { Search, ShoppingBag } from "lucide-react";

export function CartWidget() {
    const { items } = useCart()

    return (
        <div className="flex items-center gap-2">
        <ShoppingBag className="w-5 h-5 text-zinc-500" />
        <span className="text-sm">Cart ({items.length})</span>
      </div>

    )
}