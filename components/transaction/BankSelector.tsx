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
      <label className="font-medium text-black text-sm">
        {label}
      </label>
      <Popover open={isOpen} onOpenChange={setIsOpen} modal={true}>
        <PopoverTrigger asChild>
          <button className="flex h-[50px] items-center justify-between px-4 w-full bg-[#ffffff] rounded-[30px] border border-solid border-[#e0e0e0] hover:bg-[#fafafa] transition-colors">
            <span className={`font-normal text-base ${selected ? "text-black" : "text-[#828282]"}`}>
              {selected ? selected.label : "Select an option"}
            </span>
            <ChevronDownIcon className="w-5 h-5 text-[#828282]" />
          </button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-(--radix-popover-trigger-width) p-4 bg-white rounded-2xl shadow-lg border border-[#e0e0e0]" 
          align="start" 
          sideOffset={8}
          alignOffset={0}
          avoidCollisions={true}
          collisionPadding={16}
        >
          <div className="max-h-64 overflow-y-auto flex flex-col gap-2">
            {bankOptions.map((bank) => (
              <button
                key={bank.value}
                onClick={() => {
                  onBankChange(bank.value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-[#f9fafb] transition-colors text-left rounded-xl ${
                  selectedBank === bank.value ? "bg-[#f0fdf4]" : ""
                }`}
              >
                <span className="font-medium text-sm text-[#111827]">
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