# FoundReady Backend Setup Guide

I have integrated **Supabase** into your purchase and consultation forms. This allows you to securely capture all client leads and order details in a database.

## 1. Supabase Setup

To make the forms work, you need to create a project on [Supabase](https://supabase.com/) and set up two tables.

### Table: `orders`
This will store all package purchases (Essentials & Pro Packs).
- `id`: uuid (primary key)
- `fullName`: text
- `phone`: text
- `email`: text
- `companyName1`: text
- `sector`: text
- `tier`: int4
- `submitted_at`: timestamp with time zone

### Table: `inquiries`
This will store all consultation bookings.
- `id`: uuid (primary key)
- `fullName`: text
- `phone`: text
- `email`: text
- `businessName`: text
- `duration`: text
- `price`: text
- `submitted_at`: timestamp with time zone

### Environment Variables
Create a `.env` file in your root directory (or add to your Vercel project settings) with these keys:
```env
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

---

## 2. Payment Integration (Next Steps)

Currently, the "Proceed to Payment" buttons show the success screen. To actually collect money, you have two options:

### Option A: Paystack (Recommended for Nigeria)
1. Install Paystack: `npm install react-paystack`
2. I can help you replace the `submitData` function in the modals with a Paystack popup.
3. This will allow users to pay with Card, Bank Transfer, or USSD immediately.

### Option B: Stripe (Already in your dependencies)
1. You have `@stripe/stripe-js` installed.
2. This is great for international clients but can be tricky for some Nigerian cards.
3. To use this, you'll need to set up a **Vercel Function** (backend endpoint) to create a "Payment Intent."

---

## 3. Email Notifications

To get an email every time someone fills a form, you can:
1. **Supabase Edge Functions**: Write a small script in Supabase that triggers on a new row and sends an email via **Resend**.
2. **Zapier/Make.com**: Connect your Supabase database to Gmail/Outlook so you get an alert instantly.

**Which would you like to tackle next?**
- [ ] Setting up the Paystack/Stripe payment popup?
- [ ] Configuring automated email alerts?
