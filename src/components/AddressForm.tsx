"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useCheckout } from "@/app/context/CheckoutContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  pinCode: string;
  city: string;
  state: string;
}

export default function AddressForm() {
  const { setAddress } = useCheckout();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setAddress(data);
    router.push("/payment");
  };

  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-8 space-y-6">
        <h2 className="text-xl font-semibold">Contact Information</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Full Name */}
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input
              {...register("fullName", { required: "Full name is required" })}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label>Email Address</Label>
            <Input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label>Phone Number</Label>
            <Input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone must be 10 digits",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* City + State Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>City</Label>
              <Input {...register("city", { required: "City is required" })} />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>State</Label>
              <Input
                {...register("state", { required: "State is required" })}
              />
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state.message}</p>
              )}
            </div>
          </div>

          {/* PIN */}
          <div className="space-y-2">
            <Label>PIN Code</Label>
            <Input
              {...register("pinCode", { required: "PIN code is required" })}
            />
            {errors.pinCode && (
              <p className="text-red-500 text-sm">{errors.pinCode.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full mt-4 h-11 text-base">
            Continue to Payment →
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
