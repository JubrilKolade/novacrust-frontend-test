'use client'

import { ArrowLeftIcon } from "lucide-react";
import { Button } from "../ui/button";
import { BankSelector } from "./BankSelector";
import { FC } from "react";

export interface RecipientDetailsProps {
  onBack: () => void;
  onNext: () => void;
  selectedBank: string;
  onBankChange: (bank: string) => void;
  accountNumber: string;
  onAccountNumberChange: (number: string) => void;
  accountName: string;
  errors?: {
    bank?: string;
    accountNumber?: string;
  };
}

export const RecipientDetails: FC<RecipientDetailsProps> = ({
  onBack,
  onNext,
  selectedBank,
  onBankChange,
  accountNumber,
  onAccountNumberChange,
  accountName,
  errors,
}) => {
  return (
    <div className="bg-[#ffffff] w-full max-w-[640px] max-h-[90vh] flex flex-col rounded-[30px] overflow-hidden [font-family:var(--font-outfit)]">
      <div className="flex items-center gap-4 px-8 py-6">
        <button
          onClick={onBack}
          className="p-2 hover:bg-[#f7f7f7] rounded-full transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5 text-black" />
        </button>
        <h2 className="flex-1 text-center font-semibold text-green text-lg pr-10">
          Recipient details
        </h2>
      </div>

      <div className="flex flex-col px-8 gap-6 flex-1 overflow-y-auto mb-[150px]">
        <BankSelector
          selectedBank={selectedBank}
          onBankChange={onBankChange}
          error={errors?.bank}
        />

        <div className="flex flex-col gap-2">
          <div className="flex justify-between w-full">
            <label className="font-medium text-black text-sm">
              Account number
            </label>
            {errors?.accountNumber && <span className="text-xs text-red-500 font-medium">{errors.accountNumber}</span>}
          </div>
          <input
            type="text"
            placeholder="Enter your account number"
            value={accountNumber}
            onChange={(e) => {
              const val = e.target.value;
              // Allow only digits
              if (/^\d*$/.test(val)) {
                onAccountNumberChange(val);
              }
            }}
            className={`h-[50px] px-4 w-full bg-[#ffffff] rounded-[30px] border border-solid font-normal text-base text-black placeholder:text-[#828282] outline-none focus:border-green transition-colors ${errors?.accountNumber ? "border-red-500" : "border-[#e0e0e0]"
              }`}
          />
        </div>

        <div className={`flex flex-col gap-2 transition-opacity duration-300 ${accountName ? "opacity-100" : "opacity-0"}`}>
          <label className="font-medium text-black text-sm">
            Account name
          </label>
          <div className="h-[50px] px-4 w-full bg-[#f7f7f7] rounded-[30px] flex items-center border border-solid border-[#e0e0e0]">
            <span className="font-normal text-base text-black uppercase">
              {accountName || "Placeholder"}
            </span>
          </div>
        </div>
      </div>

      <div className="px-8 py-8 mt-auto">
        <Button
          onClick={onNext}
          className="flex w-full h-[60px] items-center justify-center gap-2 px-10 py-5 bg-green rounded-[30px] hover:bg-green/90"
        >
          <span className="font-bold text-white text-base">
            Next
          </span>
        </Button>
      </div>
    </div>
  );
};