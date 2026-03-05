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
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="flex flex-col md:flex-row gap-6 p-6">
        <div className="relative w-32 h-32">
          <Image
            src={product.image}
            alt={product.product_name}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="flex-1 space-y-2">
          <h2 className="text-lg font-semibold">{product.product_name}</h2>

          <p className="text-muted-foreground">
            ₹{product.product_price} × {product.quantity}
          </p>

          <p className="font-medium">
            ₹{product.product_price * product.quantity}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
