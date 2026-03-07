"use client";

import { useForm } from "react-hook-form";
import { useCheckout } from "@/app/context/CheckoutContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AddressForm() {
  const { addAddress } = useCheckout();
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    addAddress(data);

    reset();

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 2500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Success Message */}
      {success && (
        <div className="text-sm bg-green-50 text-green-700 px-3 py-2 rounded-md">
          ✓ Address added successfully
        </div>
      )}

      <div className="space-y-2">
        <Label>Full Name</Label>
        <Input {...register("fullName", { required: true })} />
      </div>

      <div className="space-y-2">
        <Label>Email</Label>
        <Input
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
        />
        {errors.email && (
          <p className="text-sm text-red-500">Enter valid email</p>
        )}
      </div>

      <div className="space-y-2">
        <Label>Phone</Label>
        <Input {...register("phone", { required: true })} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>City</Label>
          <Input {...register("city", { required: true })} />
        </div>

        <div className="space-y-2">
          <Label>State</Label>
          <Input {...register("state", { required: true })} />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Pin Code</Label>
        <Input {...register("pinCode", { required: true })} />
      </div>

      <Button className="w-full h-11">Add Address</Button>
    </form>
  );
}
