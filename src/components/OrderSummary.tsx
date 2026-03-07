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
    <Card className="rounded-2xl border shadow-sm">
      <CardContent className="p-6 space-y-6">
        {/* Title */}
        <h2 className="text-xl font-semibold tracking-tight">Order Summary</h2>

        {/* Price Breakdown */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between text-muted-foreground">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between text-muted-foreground">
            <span>Shipping</span>
            <span>₹{shipping}</span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between text-green-600 font-medium">
              <span>Discount</span>
              <span>-₹{discount}</span>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="border-t pt-4 flex justify-between items-center text-lg font-semibold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        {/* Checkout Button */}
        {showButton && (
          <Link href={redirectTo} className="block">
            <Button className="w-full h-11 text-base">{buttonText}</Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
