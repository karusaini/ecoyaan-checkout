import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4">
      <Card className="w-full max-w-lg rounded-2xl shadow-lg">
        <CardContent className="p-8 text-center space-y-5">
          <div className="flex justify-center">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-3xl">✓</span>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold text-green-600">
            Order Successful
          </h1>

          <p className="text-sm text-muted-foreground">
            Your order has been placed successfully.
          </p>

          <Link href="/">
            <Button className="w-full mt-4">Back to Home</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
