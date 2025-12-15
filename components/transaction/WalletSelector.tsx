'use client'
import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { walletOptions } from "./constants";

export interface WalletSelectorProps {
  label: string;
  selectedWallet: string;
  onWalletChange: (wallet: string) => void;
}

export const WalletSelector: React.FC<WalletSelectorProps> = ({
  label,
  selectedWallet,
  onWalletChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selected = walletOptions.find((w) => w.value === selectedWallet);

  return (
    <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
      <div className="relative self-stretch -mt-px font-medium text-green text-base tracking-[0] leading-[normal]">
        {label}
      </div>

      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button className="flex h-[60px] items-center justify-between px-6 relative self-stretch w-full bg-[#ffffff] rounded-[30px] border border-solid border-[#e0e0e0] hover:bg-[#fafafa] transition-colors">
            <div className="flex items-center gap-3">
              {selected ? (
                <>
                  {selected.icon && selected.icon.startsWith('/') ? (
                    <Image src={selected.icon} alt={selected.label} width={24} height={24} className="w-6 h-6 object-contain" />
                  ) : (
                    <span className="text-xl">{selected.icon}</span>
                  )}
                  <span className="font-normal text-green text-base">
                    {selected.label}
                  </span>
                </>
              ) : (
                <span className="font-normal text-[#828282] text-base">
                  Select an option
                </span>
              )}
            </div>
            <ChevronDownIcon className="w-5 h-5 text-[#828282]" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-(--radix-popover-trigger-width) p-2 bg-white rounded-2xl shadow-lg border border-[#e0e0e0]" align="start" sideOffset={8}>
          <div className="max-h-64 overflow-y-auto flex flex-col gap-2">
            {walletOptions.map((wallet) => (
              <button
                key={wallet.value}
                onClick={() => {
                  onWalletChange(wallet.value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-[#f9fafb] transition-colors text-left rounded-xl ${
                  selectedWallet === wallet.value ? "bg-[#f0fdf4]" : ""
                }`}
              >
                {wallet.icon && wallet.icon.startsWith('/') ? (
                  <Image src={wallet.icon} alt={wallet.label} width={28} height={28} className="w-7 h-7 object-contain" />
                ) : (
                  <span className="text-2xl">{wallet.icon}</span>
                )}
                <span className="font-medium text-sm text-[#111827]">
                  {wallet.label}
                </span>
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};