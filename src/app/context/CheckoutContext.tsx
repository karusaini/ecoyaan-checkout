"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface Address {
  fullName: string;
  email: string;
  phone: string;
  pinCode: string;
  city: string;
  state: string;
}

interface CheckoutContextType {
  addresses: Address[];
  addAddress: (address: Address) => void;
}

const CheckoutContext = createContext<CheckoutContextType | null>(null);

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [addresses, setAddresses] = useState<Address[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("addresses");
    if (stored) {
      setAddresses(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  const addAddress = (address: Address) => {
    setAddresses((prev) => [...prev, address]);
  };

  return (
    <CheckoutContext.Provider value={{ addresses, addAddress }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) throw new Error("useCheckout must be used inside provider");
  return context;
};
