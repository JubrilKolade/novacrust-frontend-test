'use client'
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { tabOptions } from "./constants";

export interface ComingSoonProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({
  selectedTab,
  onTabChange,
}) => {
  const [email, setEmail] = useState("");

  const getSubtitle = () => {
    if (selectedTab === "cash-to-crypto") {
      return "Cash to Crypto is almost here.";
    }
    if (selectedTab === "crypto-to-fiat-loan") {
      return "Crypto to Fiat Loan is almost here.";
    }
    return "Coming soon!";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // TODO: Add API call to submit email
    setEmail("");
    alert("Thanks! We'll notify you when it's live.");
  };

  return (
    <div className="bg-[#ffffff] border border-solid border-[#ccf6e5] w-full max-w-[640px] max-h-[90vh] flex flex-col rounded-[30px] overflow-hidden">
      <div className="flex justify-center mt-10">
        <Tabs value={selectedTab} onValueChange={onTabChange} className="w-[392px]">
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

      <div className="flex flex-col items-center justify-center px-8 py-12 flex-1 gap-6">
        <h1 className="font-bold text-green text-2xl text-center">
          Coming Soon!
        </h1>

        <p className="font-normal text-[#828282] text-base text-center">
          {getSubtitle()}
        </p>

        <p className="font-normal text-[#828282] text-sm text-center">
          Enter your email and we'll let you know the moment it's live.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-medium text-green text-sm">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-[50px] px-4 w-full bg-white rounded-xl border border-solid border-[#e0e0e0] font-normal text-base text-black placeholder:text-[#828282] outline-none focus:border-green transition-colors"
            />
          </div>

          <Button
            type="submit"
            className="flex w-full h-[50px] items-center justify-center gap-2 px-10 py-5 bg-green rounded-xl hover:bg-green/90"
          >
            <span className="font-semibold text-white text-base">
              Update me
            </span>
          </Button>
        </form>
      </div>
    </div>
  );
};

