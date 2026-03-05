import { getCartData } from "@/lib/mockData";
import AddressForm from "@/components/AddressForm";
import OrderSummary from "@/components/OrderSummary";

export default async function CheckoutPage() {
  const data = await getCartData();

  const subtotal = data.cartItems.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0,
  );

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Shipping Details</h1>
        <p className="text-muted-foreground mt-2">
          Enter your delivery information to continue.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <AddressForm />

        <OrderSummary
          subtotal={subtotal}
          shipping={data.shipping_fee}
          discount={data.discount_applied}
        />
      </div>
    </div>
  );
}
