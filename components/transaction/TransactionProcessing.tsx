'use client'
import { Check } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

export interface TransactionProcessingProps {
  transactionId: string;
  onGoHome: () => void;
}

export const TransactionProcessing: React.FC<TransactionProcessingProps> = ({
  transactionId,
  onGoHome,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyTransactionId = async () => {
    try {
      await navigator.clipboard.writeText(transactionId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy transaction ID:', err);
    }
  };

  return (
    <div className="bg-[#ffffff] border border-solid border-[#ccf6e5] w-full max-w-[640px] max-h-[90vh] flex flex-col rounded-[30px] overflow-hidden">
      {/* Logo Section */}
      <div className="flex justify-center items-center pt-8 pb-4">
        <div className="flex items-center gap-2">
          <Image 
            src="/Novacrust logo.png" 
            alt="Novacrust" 
            width={24} 
            height={24} 
            className="w-6 h-6 object-contain"
          />
          <span className="font-bold text-green text-xl">
            NOVACRUST
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-8 py-8 flex-1 gap-6">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green rounded-full flex items-center justify-center">
          <Check className="w-10 h-10 text-white" strokeWidth={3} />
        </div>

        {/* Messages */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-bold text-[#4a4a4a] text-xl text-center">
            Your transaction is processing.
          </h2>
          <p className="font-normal text-[#828282] text-base text-center">
            The recipient will receive it shortly.
          </p>
        </div>

        {/* Transaction ID Field */}
        <div className="w-full max-w-md">
          <div className="flex items-center justify-between h-[50px] px-4 w-full bg-[#f7f7f7] rounded-xl">
            <span className="font-medium text-[#828282] text-sm">
              Transaction ID
            </span>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-green text-sm">
                {transactionId}
              </span>
              <button
                onClick={handleCopyTransactionId}
                className="p-1 hover:opacity-80 transition-opacity"
                title="Copy transaction ID"
              >
                <Image 
                  src="/Copy.svg" 
                  alt="Copy" 
                  width={16} 
                  height={16} 
                  className={`w-4 h-4 ${copied ? 'opacity-100' : 'opacity-60'}`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Go Back to Home Button */}
      <div className="px-8 pb-8">
        <button
          onClick={onGoHome}
          className="w-full font-medium text-green text-base hover:opacity-80 transition-opacity"
        >
          Go back to home
        </button>
      </div>
    </div>
  );
};

