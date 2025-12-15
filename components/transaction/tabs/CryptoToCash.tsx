'use client'
import React, { useState } from "react";
import { Button } from "../../ui/button";
import { CurrencySelector } from "../CurrencySelector";
import { WalletSelector } from "../WalletSelector";
import { RecipientDetails } from "../RecipientDetails";
import { RecipientContactDetails } from "../RecipientContactDetails";
import { PaymentConfirmation } from "../PaymentConfirmation";
import { TransactionProcessing } from "../TransactionProcessing";
import { cryptoCurrencies, fiatCurrencies, walletOptions } from "../constants";
import type { CountryCode } from "../CountryCodeSelector";

export const CryptoToCash = () => {
    const [step, setStep] = useState<"convert" | "recipient-bank" | "recipient-contact" | "payment-confirmation" | "processing">("convert");
    const [payAmount, setPayAmount] = useState("1.00");
    const [receiveAmount, setReceiveAmount] = useState("1.00");
    const [payCurrency, setPayCurrency] = useState("eth");
    const [receiveCurrency, setReceiveCurrency] = useState("ngn");
    const [payFrom, setPayFrom] = useState("");
    const [payTo, setPayTo] = useState("");
    const [selectedBank, setSelectedBank] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [accountName, setAccountName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState<CountryCode>({
        code: "NG",
        dialCode: "+234",
        flag: "/ng.png",
    });
    const [transactionId, setTransactionId] = useState("");

    const handleAccountNumberChange = (number: string) => {
        setAccountNumber(number);
        if (number.length === 10) {
            setAccountName("ODUTUGA GBEKE");
        } else {
            setAccountName("");
        }
    };

    if (step === "recipient-bank") {
        return (
            <RecipientDetails
                onBack={() => setStep("convert")}
                onNext={() => setStep("recipient-contact")}
                selectedBank={selectedBank}
                onBankChange={setSelectedBank}
                accountNumber={accountNumber}
                onAccountNumberChange={handleAccountNumberChange}
                accountName={accountName}
            />
        );
    }

    if (step === "recipient-contact") {
        return (
            <RecipientContactDetails
                onBack={() => setStep("recipient-bank")}
                onNext={() => setStep("payment-confirmation")}
                email={email}
                onEmailChange={setEmail}
                phoneNumber={phoneNumber}
                onPhoneNumberChange={setPhoneNumber}
                countryCode={countryCode}
                onCountryCodeChange={setCountryCode}
            />
        );
    }

    // Static placeholder address (replace with API call in production)
    const walletAddress = "4LiV4YjbxsL6739MKghUd";

    if (step === "payment-confirmation") {
        const selectedCurrency = cryptoCurrencies.find((c) => c.value === payCurrency);
        const selectedWallet = walletOptions.find((w) => w.value === payFrom);

        // Map currency to network
        const getNetwork = (currency: string) => {
            if (currency === "eth") return "ETH";
            if (currency.includes("celo")) return "CELO";
            if (currency.includes("ton")) return "TON";
            if (currency.includes("bnb")) return "BNB";
            return "ETH";
        };

        return (
            <PaymentConfirmation
                onBack={() => setStep("recipient-contact")}
                onConfirm={() => {
                    // Generate transaction ID
                    const newTransactionId = `NC${Math.random().toString(36).substring(2, 11).toUpperCase()}`;
                    setTransactionId(newTransactionId);
                    setStep("processing");

                    console.log("Payment confirmed", {
                        transactionId: newTransactionId,
                        currency: payCurrency,
                        amount: payAmount,
                        address: walletAddress,
                        network: getNetwork(payCurrency),
                        wallet: selectedWallet?.label || "Other",
                        bank: selectedBank,
                        accountNumber,
                        accountName,
                        email,
                        phoneNumber: `${countryCode.dialCode} ${phoneNumber}`,
                    });
                }}
                currency={payCurrency}
                currencyLabel={selectedCurrency?.label.split(" - ")[0] || payCurrency.toUpperCase()}
                amount={payAmount}
                address={walletAddress}
                network={getNetwork(payCurrency)}
                wallet={selectedWallet?.label || "Other"}
                currencyIcon={selectedCurrency?.icon}
            />
        );
    }

    if (step === "processing") {
        return (
            <TransactionProcessing
                transactionId={transactionId || "NC123456789"}
                onGoHome={() => {
                    // Reset all state and go back to convert screen
                    setStep("convert");
                    setPayAmount("1.00");
                    setReceiveAmount("1.00");
                    setPayCurrency("eth");
                    setReceiveCurrency("ngn");
                    setPayFrom("");
                    setPayTo("");
                    setSelectedBank("");
                    setAccountNumber("");
                    setAccountName("");
                    setEmail("");
                    setPhoneNumber("");
                    setTransactionId("");
                }}
            />
        );
    }

    return (
        <>
            <div className="flex flex-col ml-16 w-[512px] gap-6 overflow-y-auto flex-1 pr-4 [font-family:var(--font-outfit)]">
                <CurrencySelector
                    label="You pay"
                    amount={payAmount}
                    selectedCurrency={payCurrency}
                    currencies={cryptoCurrencies}
                    onCurrencyChange={setPayCurrency}
                    onAmountChange={setPayAmount}
                />

                <CurrencySelector
                    label="You receive"
                    amount={receiveAmount}
                    selectedCurrency={receiveCurrency}
                    currencies={fiatCurrencies}
                    onCurrencyChange={setReceiveCurrency}
                    onAmountChange={setReceiveAmount}
                />

                <WalletSelector
                    label="Pay from"
                    selectedWallet={payFrom}
                    onWalletChange={setPayFrom}
                />

                <WalletSelector
                    label="Pay to"
                    selectedWallet={payTo}
                    onWalletChange={setPayTo}
                />
            </div>

            <div className="flex ml-16 w-[512px] mb-10">
                <Button
                    onClick={() => setStep("recipient-bank")}
                    className="flex w-full h-[60px] items-center justify-center gap-2 px-10 py-5 bg-green rounded-[30px] hover:bg-green/90"
                >
                    <span className="relative w-fit -mt-px font-bold text-[#e6fbf2] text-base tracking-[0] leading-[normal]">
                        Convert now
                    </span>
                </Button>
            </div>
        </>
    );
};
