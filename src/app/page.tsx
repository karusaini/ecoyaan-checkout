import { getCartData } from "@/lib/mockData";
import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/OrderSummary";

export default async function CartPage() {
  const data = await getCartData();

  const subtotal = data.cartItems.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0,
  );

  return (
    <div className="space-y-10">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Your Cart
        </h1>
        <p className="text-muted-foreground">
          Review your items before proceeding to checkout.
        </p>
      </div>

      <div className="grid gap-6">
        {data.cartItems.map((item) => (
          <CartItem key={item.product_id} product={item} />
        ))}
      </div>

      <OrderSummary
        subtotal={subtotal}
        shipping={data.shipping_fee}
        discount={data.discount_applied}
        showButton
        buttonText="Proceed to Checkout"
        redirectTo="/checkout"
      />
    </div>
  );
}
