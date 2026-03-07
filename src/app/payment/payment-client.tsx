"use client";

import { useRouter } from "next/navigation";
import { useCheckout } from "@/app/context/CheckoutContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PaymentClient() {
  const { addresses } = useCheckout();
  const router = useRouter();

  const address = addresses?.[addresses.length - 1];

  if (!address) {
    return (
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6">
          <p className="text-red-500">
            No shipping address found. Please go back and fill the form.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">Shipping Details</h2>

        <div className="space-y-1 text-muted-foreground">
          <p>
            <strong>Name:</strong> {address.fullName}
          </p>
          <p>
            <strong>Email:</strong> {address.email}
          </p>
          <p>
            <strong>Phone:</strong> {address.phone}
          </p>
          <p>
            <strong>Address:</strong> {address.city}, {address.state} -{" "}
            {address.pinCode}
          </p>
        </div>

        <Button className="w-full mt-4" onClick={() => router.push("/success")}>
          Pay Securely
        </Button>
      </CardContent>
    </Card>
  );
}
