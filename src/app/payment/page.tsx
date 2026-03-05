import { getCartData } from "@/lib/mockData";
import OrderSummary from "@/components/OrderSummary";
import PaymentClient from "@/app/payment/payment-client";

export default async function PaymentPage() {
  const data = await getCartData();

  const subtotal = data.cartItems.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0,
  );

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Payment & Confirmation
        </h1>
        <p className="text-muted-foreground mt-2">
          Review your order and confirm payment.
        </p>
      </div>

      <OrderSummary
        subtotal={subtotal}
        shipping={data.shipping_fee}
        discount={data.discount_applied}
      />

      <PaymentClient />
    </div>
  );
}
