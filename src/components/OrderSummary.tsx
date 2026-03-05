import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  discount: number;
  showButton?: boolean;
  buttonText?: string;
  redirectTo?: string;
}

export default function OrderSummary({
  subtotal,
  shipping,
  discount,
  showButton = false,
  buttonText = "Continue",
  redirectTo = "/",
}: OrderSummaryProps) {
  const total = subtotal + shipping - discount;

  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">Order Summary</h2>

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>₹{shipping}</span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>-₹{discount}</span>
          </div>
        )}

        <div className="flex justify-between font-bold text-lg border-t pt-4">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        {showButton && (
          <Link href={redirectTo}>
            <Button className="w-full mt-4">{buttonText}</Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
