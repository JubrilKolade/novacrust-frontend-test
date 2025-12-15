'use client'
import { ArrowLeftIcon, Info } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export interface PaymentConfirmationProps {
  onBack: () => void;
  onConfirm: () => void;
  currency: string;
  currencyLabel: string;
  amount: string;
  address: string;
  network: string;
  wallet: string;
  currencyIcon?: string;
}

export const PaymentConfirmation: React.FC<PaymentConfirmationProps> = ({
  onBack,
  onConfirm,
  currency,
  currencyLabel,
  amount,
  address,
  network,
  wallet,
  currencyIcon,
}) => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedAmount, setCopiedAmount] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    } catch (err) {
      console.error('Failed to copy address:', err);
    }
  };

  const handleCopyAmount = async () => {
    try {
      await navigator.clipboard.writeText(`${amount} ${currencyLabel}`);
      setCopiedAmount(true);
      setTimeout(() => setCopiedAmount(false), 2000);
    } catch (err) {
      console.error('Failed to copy amount:', err);
    }
  };

  return (
    <div className="bg-[#ffffff] border border-solid border-[#ccf6e5] w-full max-w-[640px] max-h-[90vh] flex flex-col rounded-[30px] overflow-hidden">
      <div className="flex items-center gap-4 px-8 py-6">
        <button
          onClick={onBack}
          className="p-2 hover:bg-[#f7f7f7] rounded-full transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5 text-black" />
        </button>
        <h2 className="flex-1 text-center font-semibold text-black text-lg pr-10">
          Send {currencyLabel} to the address below
        </h2>
      </div>

      <div className="flex flex-col px-8 gap-6 flex-1 overflow-y-auto">
        {/* Address Field */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between h-[60px] px-4 w-full bg-[#e6fbf2] rounded-xl border border-solid border-[#ccf6e5]">
            <span className="font-medium text-base text-black break-all flex-1 pr-2">
              {address}
            </span>
            <button
              onClick={handleCopyAddress}
              className="p-2 hover:opacity-80 transition-opacity flex-shrink-0"
              title="Copy address"
            >
              <Image 
                src="/Copy.svg" 
                alt="Copy" 
                width={20} 
                height={20} 
                className={`w-5 h-5 ${copiedAddress ? 'opacity-100' : 'opacity-60'}`}
              />
            </button>
          </div>
        </div>

        {/* Transaction Details */}
        <div className="flex flex-col gap-4 p-4 bg-white rounded-xl">
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#828282] text-sm">
              Amount to send:
            </span>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-base text-[#4a4a4a]">
                {amount} {currencyLabel}
              </span>
              <button
                onClick={handleCopyAmount}
                className="p-1 hover:opacity-80 transition-opacity"
                title="Copy amount"
              >
                <Image 
                  src="/Copy.svg" 
                  alt="Copy" 
                  width={16} 
                  height={16} 
                  className={`w-4 h-4 ${copiedAmount ? 'opacity-100' : 'opacity-60'}`}
                />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-[#828282] text-sm">
              Network:
            </span>
            <span className="font-semibold text-base text-[#4a4a4a]">
              {network}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-[#828282] text-sm">
              Wallet:
            </span>
            <span className="font-semibold text-base text-[#4a4a4a]">
              {wallet}
            </span>
          </div>
        </div>

        {/* Warning Message */}
        <div className="flex items-start gap-3 p-4 bg-[#fff4e6] rounded-xl border border-[#ffe0b2]">
          <Info className="w-5 h-5 text-[#f57c00] flex-shrink-0 mt-0.5" />
          <p className="font-normal text-sm text-[#e65100]">
            Only send ({currencyLabel}) to this address. Ensure the sender is on the ({network}) network otherwise you might lose your deposit.
          </p>
        </div>
      </div>

      <div className="px-8 py-8">
        <Button 
          onClick={onConfirm}
          className="flex w-full h-[60px] items-center justify-center gap-2 px-10 py-5 bg-green rounded-[30px] hover:bg-green/90"
        >
          <span className="font-bold text-[#e6fbf2] text-base">
            I have sent it
          </span>
        </Button>
      </div>
    </div>
  );
};

