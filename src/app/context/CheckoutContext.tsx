"use client";

import { createContext, useContext, useState } from "react";

const CheckoutContext = createContext<any>(null);

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [address, setAddress] = useState(null);

  return (
    <CheckoutContext.Provider value={{ address, setAddress }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  return useContext(CheckoutContext);
}
