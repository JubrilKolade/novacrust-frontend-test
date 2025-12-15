'use client'
import { ChevronDownIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Selector } from "./Selector";
import type { CurrencyOption } from "./constants";

export interface CurrencySelectorProps {
  label: string;
  amount: string;
  selectedCurrency: string;
  currencies: CurrencyOption[];
  onCurrencyChange: (currency: string) => void;
  onAmountChange: (amount: string) => void;
}

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  label,
  amount,
  selectedCurrency,
  currencies,
  onCurrencyChange,
  onAmountChange,
}) => {
  const selected = currencies.find((c) => c.value === selectedCurrency);

  return (
    <Card className="w-full bg-[#ffffff] rounded-[30px] border border-solid border-[#e0e0e0]">
      <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
        <div className="relative self-stretch -mt-px font-medium text-[#828282] text-base tracking-[0] leading-[normal]">
          {label}
        </div>

        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[30px]">
          <input
            type="text"
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)}
            className="relative w-24 font-semibold text-black text-2xl tracking-[0] leading-[normal] bg-transparent border-none outline-none"
          />

          <Selector
            options={currencies}
            selectedValue={selectedCurrency}
            onSelect={onCurrencyChange}
            searchable={true}
            align="end"
          >
            <button className="inline-flex items-center justify-center gap-1 px-3 py-2 relative flex-[0_0_auto] bg-[#f7f7f7] rounded-[20px] border border-solid border-[#e0e0e0] hover:bg-[#eeeeee] transition-colors">
              {selected?.icon && selected.icon.startsWith('/') ? (
                <Image src={selected.icon} alt={selected.label} width={20} height={20} className="w-5 h-5 object-contain" />
              ) : (
                <span className="text-lg">{selected?.icon}</span>
              )}
              <div className="relative w-fit -mt-px font-medium text-green text-sm tracking-[0] leading-5 whitespace-nowrap">
                {selected?.label.split(" - ")[0] || selectedCurrency.toUpperCase()}
              </div>
              <ChevronDownIcon className="relative w-5 h-5" />
            </button>
          </Selector>
        </div>
      </CardContent>
    </Card>
  );
};

