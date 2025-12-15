'use client'
import React, { JSX, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { tabOptions } from "./constants";
import { CryptoToCash } from "./tabs/CryptoToCash";
import { CashToCrypto } from "./tabs/CashToCrypto";
import { CryptoToFiatLoan } from "./tabs/CryptoToFiatLoan";

export const TransactionModal = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState("crypto-to-cash");

  return (
    <div className="bg-[#ffffff] border border-solid border-[#ccf6e5] w-full max-w-[640px] max-h-[90vh] flex flex-col gap-10 rounded-[30px] overflow-hidden">
      <div className="flex justify-center mt-10">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-[392px]">
          <TabsList className="grid w-full grid-cols-3 bg-[#f2f2f2] rounded-[30px] h-[34px] p-0">
            {tabOptions.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="rounded-[30px] data-[state=active]:bg-green data-[state=active]:text-white text-[#828282] font-medium text-sm px-4 py-2"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {selectedTab === "crypto-to-cash" && <CryptoToCash />}
      {selectedTab === "cash-to-crypto" && <CashToCrypto />}
      {selectedTab === "crypto-to-fiat-loan" && <CryptoToFiatLoan />}
    </div>
  );
};

