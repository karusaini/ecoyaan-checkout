# 🌿 Ecoyaan Checkout Flow

A simplified multi-step Checkout Flow built using **Next.js (App Router)**, **React**, **Tailwind CSS**, and **shadcn/ui**.

This project demonstrates Server-Side Rendering (SSR), state management, responsive UI design, and form validation as part of a frontend engineering assignment.

---

## Live Demo

https://ecoyaan-checkout-eta.vercel.app

---

## GitHub Repository

https://github.com/karusaini/ecoyaan-checkout

---

## Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **React Hook Form**
- **Context API (State Management)**

---

## Features Implemented

### Cart / Order Summary (SSR)

- Server-Side Rendering using async Server Components
- Displays cart items (image, name, price, quantity)
- Calculates subtotal, shipping fee, and total
- "Proceed to Checkout" navigation

### Shipping Address

- Form with:
  - Full Name
  - Email
  - Phone Number
  - PIN Code
  - City
  - State

- Basic validation:
  - Valid email format
  - 10-digit phone number
  - Required field validation

- Address persisted using Context API

### Payment & Confirmation

- Displays order summary (SSR)
- Displays entered shipping address
- Simulated "Pay Securely" button
- Success confirmation screen

### Success Page

- Responsive layout
- Clean confirmation UI
- CTA buttons

---

## Architectural Decisions

### 1. Server-Side Rendering

Cart data is fetched inside async Server Components to demonstrate SSR capabilities of Next.js App Router.

### 2. State Management

Context API is used to persist shipping address data across steps.

### 3. Modular Component Structure

Reusable components:

- CartItem
- OrderSummary
- AddressForm
- PaymentClient

### 4. Responsive UI

- Tailwind CSS for layout
- Mobile-first responsive design
- Clean container-based structure

---

## How to Run Locally

```bash
git clone <repo-url>
cd ecoyaan-checkout
npm install
npm run dev
```

Visit:
http://localhost:3000

---

## Folder Structure

```
app/
  page.tsx (Cart - SSR)
  checkout/
  payment/
  success/

components/
context/
lib/
```

---

## 👨‍💻 Author

Built as part of a Frontend Engineering assignment.
