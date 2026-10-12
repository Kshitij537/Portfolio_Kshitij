
# Portfolio_Kshitij

## Interactive 3D Animated Portfolio
---


---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contact form setup

The Send button uses [EmailJS](https://www.emailjs.com/). It stays disabled until the following values are configured. No email password is needed in this project.

1. In EmailJS, create an email service connected to the inbox that should receive messages. Copy its Service ID.
2. Create an email template. Set its recipient to `kshitijkdeshmukh@gmail.com` and use `{{from_name}}`, `{{from_email}}`, and `{{message}}` in the template. Copy its Template ID.
3. Copy the Public Key from your EmailJS account settings.
4. Create `.env.local` in the project root with the values below, then restart the development server. Add the same three variables to your hosting provider and redeploy there.

```dotenv
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Do not commit `.env.local`. The EmailJS Public Key is designed for browser use; never put an email account password or private key in a `NEXT_PUBLIC_` variable. The "Email directly" link remains available separately when the form is not configured.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
b189b62 (New File)
