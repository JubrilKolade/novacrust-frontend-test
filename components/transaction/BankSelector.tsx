'use client'
import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { bankOptions } from "./constants";

export interface BankSelectorProps {
  selectedBank: string;
  onBankChange: (bank: string) => void;
  label?: string;
}

export const BankSelector: React.FC<BankSelectorProps> = ({
  selectedBank,
  onBankChange,
  label = "Bank",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selected = bankOptions.find((b) => b.value === selectedBank);

  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-green text-sm">
        {label}
      </label>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button className="flex h-[50px] items-center justify-between px-4 w-full bg-[#ffffff] rounded-xl border border-solid border-[#e0e0e0] hover:bg-[#fafafa] transition-colors">
            <span className={`font-normal text-base ${selected ? "text-black" : "text-[#828282]"}`}>
              {selected ? selected.label : "Select an option"}
            </span>
            <ChevronDownIcon className="w-5 h-5 text-[#828282]" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[calc(100vw-4rem)] max-w-[576px] p-0 bg-white rounded-xl shadow-lg border border-[#e0e0e0]" align="start" sideOffset={4}>
          <div className="max-h-64 overflow-y-auto">
            {bankOptions.map((bank) => (
              <button
                key={bank.value}
                onClick={() => {
                  onBankChange(bank.value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-[#f7f7f7] transition-colors border-b border-[#f0f0f0] last:border-b-0 ${
                  selectedBank === bank.value ? "bg-green text-white hover:bg-green" : ""
                }`}
              >
                <span className="font-medium text-sm">
                  {bank.label}
                </span>
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

