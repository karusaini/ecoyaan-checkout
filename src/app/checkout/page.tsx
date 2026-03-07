"use client";

import AddressForm from "@/components/AddressForm";
import { useCheckout } from "@/app/context/CheckoutContext";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import CheckoutSteps from "@/components/CheckoutSteps";

export default function CheckoutPage() {
  const { addresses } = useCheckout();
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <CheckoutSteps step={1} />

      <div className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Shipping Address
          </h1>

          <p className="text-muted-foreground mt-2">
            Add a delivery address to continue your checkout.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border space-y-4">
            <h2 className="text-lg font-semibold">Add New Address</h2>

            <AddressForm />
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Saved Addresses</h2>

            {addresses.length === 0 && (
              <p className="text-sm text-muted-foreground">
                No addresses added yet.
              </p>
            )}

            {addresses.map((addr, i) => (
              <div
                key={i}
                className="border rounded-2xl p-4 bg-white shadow-sm hover:shadow-md transition space-y-1"
              >
                <p className="font-semibold text-gray-900">{addr.fullName}</p>

                <p className="text-sm text-gray-600">
                  {addr.city}, {addr.state} - {addr.pinCode}
                </p>

                <p className="text-sm">{addr.phone}</p>

                <p className="text-sm text-gray-500">{addr.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => router.push("/")}
            >
              Back
            </Button>

            <Button
              disabled={addresses.length === 0}
              className="w-full sm:w-auto"
              onClick={() => router.push("/payment")}
            >
              Next Step →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
