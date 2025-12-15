'use client'
import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { BankSelector } from "./BankSelector";

export interface RecipientDetailsProps {
  onBack: () => void;
  onNext: () => void;
  selectedBank: string;
  onBankChange: (bank: string) => void;
  accountNumber: string;
  onAccountNumberChange: (number: string) => void;
  accountName: string;
}

export const RecipientDetails: React.FC<RecipientDetailsProps> = ({
  onBack,
  onNext,
  selectedBank,
  onBankChange,
  accountNumber,
  onAccountNumberChange,
  accountName,
}) => {
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
          Recipient details
        </h2>
      </div>

      <div className="flex flex-col px-8 gap-6 flex-1">
        <BankSelector
          selectedBank={selectedBank}
          onBankChange={onBankChange}
        />

        <div className="flex flex-col gap-2">
          <label className="font-medium text-green text-sm">
            Account number
          </label>
          <input
            type="text"
            placeholder="Enter your account number"
            value={accountNumber}
            onChange={(e) => onAccountNumberChange(e.target.value)}
            className="h-[50px] px-4 w-full bg-[#ffffff] rounded-xl border border-solid border-[#e0e0e0] font-normal text-base text-black placeholder:text-[#828282] outline-none focus:border-green transition-colors"
          />
        </div>

        {accountName && (
          <div className="flex flex-col gap-2">
            <label className="font-medium text-green text-sm">
              Account name
            </label>
            <div className="h-[50px] px-4 w-full bg-[#f7f7f7] rounded-xl flex items-center">
              <span className="font-medium text-base text-black">
                {accountName}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="px-8 py-8">
        <Button 
          onClick={onNext}
          className="flex w-full h-[60px] items-center justify-center gap-2 px-10 py-5 bg-green rounded-[30px] hover:bg-green/90"
        >
          <span className="font-bold text-[#e6fbf2] text-base">
            Next
          </span>
        </Button>
      </div>
    </div>
  );
};

