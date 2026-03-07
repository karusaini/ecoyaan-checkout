"use client";

interface Props {
  step: number;
}

export default function CheckoutSteps({ step }: Props) {
  const steps = ["Address", "Payment", "Confirmation"];

  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      {steps.map((label, index) => {
        const active = index + 1 <= step;

        return (
          <div key={label} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
              ${active ? "bg-black text-white" : "bg-gray-200 text-gray-600"}`}
            >
              {index + 1}
            </div>

            <span
              className={`text-sm ${active ? "font-medium" : "text-gray-500"}`}
            >
              {label}
            </span>

            {index < steps.length - 1 && (
              <div className="w-6 h-px bg-gray-300" />
            )}
          </div>
        );
      })}
    </div>
  );
}
