'use client'

import { FC } from "react";
import { Selector } from "./Selector";
import { walletOptions } from "./constants";

export interface WalletSelectorProps {
  label: string;
  selectedWallet: string;
  onWalletChange: (wallet: string) => void;
  error?: string;
}

export const WalletSelector: FC<WalletSelectorProps> = ({
  label,
  selectedWallet,
  onWalletChange,
  error,
}) => {
  return (
    <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex justify-between w-full">
        <div className="relative self-stretch -mt-px font-medium text-green text-base tracking-[0] leading-[normal]">
          {label}
        </div>
        {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
      </div>

      <Selector
        options={walletOptions}
        selectedValue={selectedWallet}
        onSelect={onWalletChange}
        placeholder="Select an option"
        align="start"
        error={!!error}
      />
    </div>
  );
};