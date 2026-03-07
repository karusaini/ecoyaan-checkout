import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface CartItemProps {
  product: {
    product_id: number;
    product_name: string;
    product_price: number;
    quantity: number;
    image: string;
  };
}

export default function CartItem({ product }: CartItemProps) {
  const total = product.product_price * product.quantity;

  return (
    <Card className="rounded-2xl border shadow-sm hover:shadow-md transition">
      <CardContent className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-5">
        {/* Product Image */}
        <div className="relative w-28 h-28 shrink-0 overflow-hidden rounded-xl border bg-gray-50">
          <Image
            src={product.image}
            alt={product.product_name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 text-center sm:text-left space-y-2">
          <h2 className="text-lg font-semibold leading-tight">
            {product.product_name}
          </h2>

          <p className="text-sm text-muted-foreground">
            ₹{product.product_price} each
          </p>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <span className="text-sm px-3 py-1 rounded-full bg-gray-100">
              Qty: {product.quantity}
            </span>

            <span className="text-lg font-semibold">₹{total}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
