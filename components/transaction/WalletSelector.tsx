'use client'
import React from "react";
import { Selector } from "./Selector";
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
  return (
    <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
      <div className="relative self-stretch -mt-px font-medium text-green text-base tracking-[0] leading-[normal]">
        {label}
      </div>

      <Selector
        options={walletOptions}
        selectedValue={selectedWallet}
        onSelect={onWalletChange}
        placeholder="Select an option"
        align="start"
      />
    </div>
  );
};