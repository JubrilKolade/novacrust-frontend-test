'use client'
import React, { useState } from "react";
import { Button } from "../../ui/button";

export const CryptoToFiatLoan = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email submitted:", email);
        // TODO: Add API call to submit email
        setEmail("");
        alert("Thanks! We'll notify you when it's live.");
    };

    return (
        <div className="flex flex-col items-center justify-center px-8 py-12 flex-1 gap-6 [font-family:var(--font-outfit)]">
            <h1 className="font-medium text-green text-3xl text-center clashed" >
                Coming Soon!
            </h1>

            <p className="font-normal text-[#828282] text-base text-center">
                Crypto to Fiat Loan is almost here.
            </p>

            <p className="font-normal text-[#828282] text-sm text-center">
                Enter your email and we'll let you know the moment it's live.
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4 mb-[150px]">
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
                        className="h-[50px] px-4 w-full bg-white rounded-[30px] border border-solid border-[#e0e0e0] font-normal text-base text-black placeholder:text-[#828282] outline-none focus:border-green transition-colors"
                    />
                </div>

                <Button
                    type="submit"
                    className="flex w-full h-[50px] items-center justify-center gap-2 px-10 py-5 bg-green rounded-[30px] hover:bg-green/90"
                >
                    <span className="font-semibold text-white text-base">
                        Update me
                    </span>
                </Button>
            </form>
        </div>
    );
};
