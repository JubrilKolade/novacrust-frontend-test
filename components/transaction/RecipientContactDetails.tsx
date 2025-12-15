'use client'

import { ArrowLeftIcon } from "lucide-react";
import { Button } from "../ui/button";
import { CountryCodeSelector, type CountryCode } from "./CountryCodeSelector";
import { FC } from "react";

export interface RecipientContactDetailsProps {
  onBack: () => void;
  onNext: () => void;
  email: string;
  onEmailChange: (email: string) => void;
  phoneNumber: string;
  onPhoneNumberChange: (phone: string) => void;
  countryCode: CountryCode;
  onCountryCodeChange: (code: CountryCode) => void;
  errors?: {
    email?: string;
    phoneNumber?: string;
  };
}

export const RecipientContactDetails: FC<RecipientContactDetailsProps> = ({
  onBack,
  onNext,
  email,
  onEmailChange,
  phoneNumber,
  onPhoneNumberChange,
  countryCode,
  onCountryCodeChange,
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

      <div className="flex flex-col px-8 gap-6 flex-1 mb-[150px]">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between w-full">
            <label className="font-medium text-green text-sm">
              Recipient email
            </label>
            {errors?.email && <span className="text-xs text-red-500 font-medium">{errors.email}</span>}
          </div>
          <input
            type="email"
            placeholder="Enter recipient email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            className={`h-[50px] px-4 w-full bg-[#ffffff] rounded-[30px] border border-solid font-normal text-base text-black placeholder:text-[#828282] outline-none focus:border-green transition-colors ${errors?.email ? "border-red-500" : "border-[#e0e0e0]"
              }`}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between w-full">
            <label className="font-medium text-green text-sm">
              Recipient phone number
            </label>
            {errors?.phoneNumber && <span className="text-xs text-red-500 font-medium">{errors.phoneNumber}</span>}
          </div>
          <div className={`flex h-[50px] w-full bg-[#ffffff] rounded-[30px] border border-solid overflow-hidden focus-within:border-green transition-colors ${errors?.phoneNumber ? "border-red-500" : "border-[#e0e0e0]"
            }`}>
            <CountryCodeSelector
              selectedCode={countryCode}
              onCodeChange={onCountryCodeChange}
            />
            <input
              type="tel"
              placeholder="000 - 000 - 00000"
              value={phoneNumber}
              onChange={(e) => {
                const val = e.target.value;
                // Allow only digits and dashes
                if (/^[\d-\s]*$/.test(val)) {
                  onPhoneNumberChange(val);
                }
              }}
              className="flex-1 px-4 bg-transparent font-normal text-base text-black placeholder:text-[#828282] outline-none"
            />
          </div>
        </div>

        {/* Invisible spacer to match RecipientDetails height (3 fields vs 2 fields) */}
        <div className="flex flex-col gap-2 opacity-0 pointer-events-none" aria-hidden="true">
          <label className="font-medium text-sm">Spacer</label>
          <div className="h-[50px] w-full" />
        </div>
      </div>

      <div className="px-8 py-8 mt-auto">
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

