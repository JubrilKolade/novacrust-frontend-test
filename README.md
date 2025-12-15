# Novacrust Frontend Assessment

Novacrust is a modern web application designed solely for seamless crypto-to-cash transactions. Built with the latest web technologies, it provides a fast, secure, and user-friendly interface for managing digital asset conversions.

## Features

-   **Crypto to Cash Conversion**: A streamlined multi-step flow for converting cryptocurrency to fiat currency.
    -   Currency & Wallet Selection
    -   Recipient Bank Details
    -   Contact Information
    -   Secure Payment Confirmation
    -   Real-time Transaction Processing Status
-   **Future Features (Coming Soon)**:
    -   **Cash to Crypto**: Purchase digital assets using fiat.
    -   **Crypto to Fiat Loan**: Leverage crypto assets for fiat loans.

## Tech Stack

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
-   **Core Library**: [React 19](https://react.dev/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **UI Components**:
    -   [Radix UI](https://www.radix-ui.com/) (Primitives for Tabs, Popovers, Slots)
    -   [Lucide React](https://lucide.dev/) (Icons)
    -   [Sonner](https://sonner.emilkowal.ski/) (Toast notifications)
-   **Fonts**:
    -   [Outfit](https://fonts.google.com/specimen/Outfit) (Primary)
    -   [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) (Secondary/Buttons)
    -   [Clash Display] (https://befonts.com/clash-display-font.html) (tertiary wordings and crypto)

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/JubrilKolade/novacrust-assessment.git
    cd novacrust
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
novacrust/
├── app/                  # Next.js App Router pages and layouts
│   ├── layout.tsx        # Root layout with fonts and global providers
│   ├── page.tsx          # Home page displaying the TransactionModal
│   └── globals.css       # Global styles and Tailwind configuration
├── components/           # Reusable UI components
│   ├── transaction/      # Transaction-specific components
│   │   ├── tabs/         # Feature tabs (CryptoToCash, etc.)
│   │   └── ...           # Selectors and step components
│   └── ui/               # Generic UI primitives (Buttons, Cards, etc.)
├── public/               # Static assets (images, icons)
└── ...config files       # Next.js, Tailwind, TypeScript configs
```

## Assessment Submission

This is a submission entry for the novacrust test for frontend

## License

[MIT](LICENSE)
