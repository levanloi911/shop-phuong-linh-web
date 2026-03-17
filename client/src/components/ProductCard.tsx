import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  onSelect: (product: { id: number; name: string; price: number }) => void;
}

export default function ProductCard({
  id,
  name,
  image,
  price,
  description,
  onSelect,
}: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Image Container with Hover Effect */}
      <div className="relative overflow-hidden bg-white mb-6">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle Shadow on Hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground line-clamp-2">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-semibold text-primary">
            {price.toLocaleString("vi-VN")}₫
          </span>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={() => onSelect({ id, name, price })}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm h-11 mt-4 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-4 h-4" />
          Chọn Sản Phẩm
        </Button>
      </div>
    </div>
  );
}
