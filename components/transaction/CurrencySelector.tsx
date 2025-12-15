'use client'
import { ChevronDownIcon, SearchIcon } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredCurrencies = currencies.filter((currency) =>
    currency.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
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
            </PopoverTrigger>
            <PopoverContent className="w-72 p-4 bg-white rounded-2xl shadow-lg border border-[#e0e0e0]" align="end">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#f7f7f7] rounded-xl border border-[#e0e0e0] mb-3">
                <SearchIcon className="w-4 h-4 text-[#9ca3af]" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-[#9ca3af]"
                />
              </div>
              <div className="max-h-64 overflow-y-auto flex flex-col gap-2">
                {filteredCurrencies.map((currency) => (
                  <button
                    key={currency.value}
                    onClick={() => {
                      onCurrencyChange(currency.value);
                      setIsOpen(false);
                      setSearchQuery("");
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-[#f9fafb] transition-colors text-left rounded-xl ${
                      selectedCurrency === currency.value ? "bg-[#f0fdf4]" : ""
                    }`}
                  >
                    {currency.icon && currency.icon.startsWith('/') ? (
                      <Image src={currency.icon} alt={currency.label} width={28} height={28} className="w-7 h-7 object-contain rounded-full" />
                    ) : (
                      <span className="text-2xl">{currency.icon}</span>
                    )}
                    <span className="font-medium text-sm text-[#111827]">
                      {currency.label}
                    </span>
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
    </Card>
  );
};

