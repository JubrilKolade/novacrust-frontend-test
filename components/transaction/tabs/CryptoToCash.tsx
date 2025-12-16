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

export const CryptoToCash = ({ onFlowChange }: { onFlowChange?: (isFlowActive: boolean) => void }) => {
    const [step, setStep] = useState<"convert" | "recipient-bank" | "recipient-contact" | "payment-confirmation" | "processing">("convert");

    React.useEffect(() => {
        onFlowChange?.(step !== "convert");
    }, [step, onFlowChange]);
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
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isConverting, setIsConverting] = useState(false);

    const handleAccountNumberChange = (number: string) => {
        setAccountNumber(number);
        if (number.length === 10) {
            setAccountName("ODUTUGA GBEKE");
        } else {
            setAccountName("");
        }
    };

    const validateStep1 = () => {
        const newErrors: Record<string, string> = {};
        if (!payAmount || parseFloat(payAmount) <= 0) newErrors.payAmount = "Invalid amount";
        if (!receiveAmount || parseFloat(receiveAmount) <= 0) newErrors.receiveAmount = "Invalid amount";
        if (!payFrom) newErrors.payFrom = "Required";
        if (!payTo) newErrors.payTo = "Required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    if (step === "recipient-bank") {
        return (
            <RecipientDetails
                onBack={() => setStep("convert")}
                onNext={() => {
                    const newErrors: Record<string, string> = {};
                    if (!selectedBank) newErrors.bank = "Required";
                    if (!accountNumber || accountNumber.length < 10) newErrors.accountNumber = "Invalid account number";

                    setErrors(newErrors);
                    if (Object.keys(newErrors).length === 0) {
                        setStep("recipient-contact");
                    }
                }}
                selectedBank={selectedBank}
                onBankChange={(val) => {
                    setSelectedBank(val);
                    if (errors.bank) setErrors({ ...errors, bank: "" });
                }}
                accountNumber={accountNumber}
                onAccountNumberChange={(val) => {
                    handleAccountNumberChange(val);
                    if (errors.accountNumber) setErrors({ ...errors, accountNumber: "" });
                }}
                accountName={accountName}
                errors={errors}
            />
        );
    }

    if (step === "recipient-contact") {
        return (
            <RecipientContactDetails
                onBack={() => setStep("recipient-bank")}
                onNext={() => {
                    const newErrors: Record<string, string> = {};
                    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email";
                    if (!phoneNumber || phoneNumber.length < 7) newErrors.phoneNumber = "Invalid phone";

                    setErrors(newErrors);
                    if (Object.keys(newErrors).length === 0) {
                        setStep("payment-confirmation");
                    }
                }}
                email={email}
                onEmailChange={(val) => {
                    setEmail(val);
                    if (errors.email) setErrors({ ...errors, email: "" });
                }}
                phoneNumber={phoneNumber}
                onPhoneNumberChange={(val) => {
                    setPhoneNumber(val);
                    if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: "" });
                }}
                countryCode={countryCode}
                onCountryCodeChange={setCountryCode}
                errors={errors}
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
                    setErrors({});
                }}
            />
        );
    }

    return (
        <>
            <div className="flex flex-col w-full max-w-[512px] mx-auto gap-6 overflow-y-auto flex-1 px-4 md:px-0 [font-family:var(--font-outfit)]">
                <CurrencySelector
                    label="You pay"
                    amount={payAmount}
                    selectedCurrency={payCurrency}
                    currencies={cryptoCurrencies}
                    onCurrencyChange={setPayCurrency}
                    onAmountChange={(val) => {
                        setPayAmount(val);
                        if (errors.payAmount) setErrors({ ...errors, payAmount: "" });
                    }}
                    error={errors.payAmount}
                />

                <CurrencySelector
                    label="You receive"
                    amount={receiveAmount}
                    selectedCurrency={receiveCurrency}
                    currencies={fiatCurrencies}
                    onCurrencyChange={setReceiveCurrency}
                    onAmountChange={(val) => {
                        setReceiveAmount(val);
                        if (errors.receiveAmount) setErrors({ ...errors, receiveAmount: "" });
                    }}
                    error={errors.receiveAmount}
                />

                <WalletSelector
                    label="Pay from"
                    selectedWallet={payFrom}
                    onWalletChange={(val) => {
                        setPayFrom(val);
                        if (errors.payFrom) setErrors({ ...errors, payFrom: "" });
                    }}
                    error={errors.payFrom}
                />

                <WalletSelector
                    label="Pay to"
                    selectedWallet={payTo}
                    onWalletChange={(val) => {
                        setPayTo(val);
                        if (errors.payTo) setErrors({ ...errors, payTo: "" });
                    }}
                    error={errors.payTo}
                />
            </div>

            <div className="flex w-full max-w-[512px] mx-auto mb-10 px-4 md:px-0">
                <Button
                    onClick={() => {
                        if (validateStep1()) {
                            setIsConverting(true);
                            setTimeout(() => {
                                setIsConverting(false);
                                setStep("recipient-bank");
                            }, 1500);
                        }
                    }}
                    disabled={isConverting}
                    className="flex w-full h-[60px] items-center justify-center gap-2 px-10 py-5 bg-green rounded-[30px] hover:bg-green/90 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    <span className="relative w-fit -mt-px font-bold text-[#e6fbf2] text-base tracking-[0] leading-[normal]">
                        {isConverting ? "Converting..." : "Convert now"}
                    </span>
                </Button>
            </div>
        </>
    );
};
