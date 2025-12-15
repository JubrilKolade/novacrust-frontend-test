'use client'
import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { CountryCodeSelector, type CountryCode } from "./CountryCodeSelector";

export interface RecipientContactDetailsProps {
  onBack: () => void;
  onNext: () => void;
  email: string;
  onEmailChange: (email: string) => void;
  phoneNumber: string;
  onPhoneNumberChange: (phone: string) => void;
  countryCode: CountryCode;
  onCountryCodeChange: (code: CountryCode) => void;
}

export const RecipientContactDetails: React.FC<RecipientContactDetailsProps> = ({
  onBack,
  onNext,
  email,
  onEmailChange,
  phoneNumber,
  onPhoneNumberChange,
  countryCode,
  onCountryCodeChange,
}) => {
  return (
    <div className="bg-[#ffffff] border border-solid border-[#ccf6e5] w-full max-w-[640px] max-h-[90vh] flex flex-col rounded-[30px] overflow-hidden [font-family:var(--font-outfit)]">
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

      <div className="flex flex-col px-8 gap-6 flex-1">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-green text-sm">
            Recipient email
          </label>
          <input
            type="email"
            placeholder="Enter recipient email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            className="h-[50px] px-4 w-full bg-[#ffffff] rounded-[30px] border border-solid border-[#e0e0e0] font-normal text-base text-black placeholder:text-[#828282] outline-none focus:border-green transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-green text-sm">
            Recipient phone number
          </label>
          <div className="flex h-[50px] w-full bg-[#ffffff] rounded-[30px] border border-solid border-[#e0e0e0] overflow-hidden focus-within:border-green transition-colors">
            <CountryCodeSelector
              selectedCode={countryCode}
              onCodeChange={onCountryCodeChange}
            />
            <input
              type="tel"
              placeholder="000 - 000 - 00000"
              value={phoneNumber}
              onChange={(e) => onPhoneNumberChange(e.target.value)}
              className="flex-1 px-4 bg-transparent font-normal text-base text-black placeholder:text-[#828282] outline-none"
            />
          </div>
        </div>
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

