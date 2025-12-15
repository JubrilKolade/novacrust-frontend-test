'use client'
import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";

export interface CountryCode {
  code: string;
  dialCode: string;
  flag: string;
}

const countryCodes: CountryCode[] = [
  { code: "NG", dialCode: "+234", flag: "/ng.png" },
  { code: "US", dialCode: "+1", flag: "🇺🇸" },
  { code: "GB", dialCode: "+44", flag: "🇬🇧" },
  { code: "CA", dialCode: "+1", flag: "🇨🇦" },
  { code: "ZA", dialCode: "+27", flag: "🇿🇦" },
];

export interface CountryCodeSelectorProps {
  selectedCode: CountryCode;
  onCodeChange: (code: CountryCode) => void;
}

export const CountryCodeSelector: React.FC<CountryCodeSelectorProps> = ({
  selectedCode,
  onCodeChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-2 px-3 h-full bg-transparent border-r border-[#e0e0e0] hover:bg-[#f7f7f7] transition-colors">
          <span className="text-sm font-medium text-black">{selectedCode.dialCode}</span>
          {selectedCode.flag.startsWith('/') ? (
            <Image src={selectedCode.flag} alt={selectedCode.code} width={16} height={16} className="w-4 h-4 object-contain" />
          ) : (
            <span className="text-base">{selectedCode.flag}</span>
          )}
          <ChevronDownIcon className="w-4 h-4 text-[#828282]" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-0 bg-white rounded-xl shadow-lg border border-[#e0e0e0]" align="start" sideOffset={4}>
        <div className="max-h-64 overflow-y-auto">
          {countryCodes.map((country) => (
            <button
              key={country.code}
              onClick={() => {
                onCodeChange(country);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-[#f7f7f7] transition-colors border-b border-[#f0f0f0] last:border-b-0 ${
                selectedCode.code === country.code ? "bg-green text-white hover:bg-green" : ""
              }`}
            >
              {country.flag.startsWith('/') ? (
                <Image src={country.flag} alt={country.code} width={20} height={20} className="w-5 h-5 object-contain" />
              ) : (
                <span className="text-lg">{country.flag}</span>
              )}
              <span className="font-medium text-sm">
                {country.dialCode} {country.code}
              </span>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

