'use client'
import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Selector } from "./Selector";
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
  const selected = bankOptions.find((b) => b.value === selectedBank);

  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-black text-sm">
        {label}
      </label>
      <Selector
        options={bankOptions}
        selectedValue={selectedBank}
        onSelect={onBankChange}
        placeholder="Select an option"
        align="start"
      >
        <button className="flex h-[50px] items-center justify-between px-4 w-full bg-[#ffffff] rounded-[30px] border border-solid border-[#e0e0e0] hover:bg-[#fafafa] transition-colors">
          <span className={`font-normal text-base ${selected ? "text-black" : "text-[#828282]"}`}>
            {selected ? selected.label : "Select an option"}
          </span>
          <ChevronDownIcon className="w-5 h-5 text-[#828282]" />
        </button>
      </Selector>
    </div>
  );
};