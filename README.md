# Novacrust Frontend Assessment

Novacrust is a modern web application designed solely for seamless crypto-to-cash transactions. Built with the latest web technologies, it provides a fast, secure, and user-friendly interface for managing digital asset conversions.

## Features

-   **Crypto to Cash Conversion**: A streamlined multi-step flow for converting cryptocurrency to fiat currency.
    -   Currency & Wallet Selection
    -   Recipient Bank Details
    -   Contact Information
    -   Secure Payment Confirmation
    -   Real-time Transaction Processing Status
-   **Robust Input Validation**:
    -   Type-safe inputs (numeric-only for amounts, etc.)
    -   Real-time error feedback (red border alerts and error messages)
    -   Step-by-step form validation ensuring partial data isn't submitted
-   **Fully Responsive Mobile Design**:
    -   Fluid layouts that adapt to any screen size
    -   Touch-optimized navigation and form controls
    -   Dynamic UI adjustments (hiding tabs in deep flows) for better mobile UX
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
    -   [Clash Display](https://befonts.com/clash-display-font.html) (Tertiary/Headings)

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/JubrilKolade/novacrust-frontend-test.git
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

This is a submission entry for the novacrust test for frontend.

## Assumptions and Trade-offs

-   **Mock Data Integration**: For the purpose of this assessment, all transaction processing, currency rates, and wallet validation are simulated with local mock data and `setTimeout` delays. No real backend endpoints are called.
-   **State Management**: I opted for local React state (`useState`) lifted to the parent components (`TransactionModal`, `CryptoToCash`) rather than a global store like Redux or Zustand. This keeps the architecture simple and sufficient for the current scope.
-   **Validation**: Custom validation logic is implemented using local state and regex patterns. While I mentioned Zod/React Hook Form as a future improvement, the current implementation provides robust error handling, type safety (preventing non-numeric input), and user feedback without external dependencies.
-   **Asset Selection**: Icons and flags are static assets in the `public` folder. In a real app, these might be served from a CDN.

## Future Improvements & Suggestions

-   **Live Data**: Integrate with a real crypto price API (e.g., CoinGecko or CoinMarketCap) to fetch real-time exchange rates.
-   **Testing**: Implement unit tests (using Vitest) for utility functions and component testing (React Testing Library) to ensure reliability.
-   **Accessibility (a11y)**: While basic keyboard navigation is supported, a full accessibility audit (ARIA attributes, screen reader testing) would be beneficial for a production-ready financial app.
-   **Form Architecture**: Scale the form handling with React Hook Form to manage touch states, errors, and validation logic more efficiently.

## License

[MIT](LICENSE)
