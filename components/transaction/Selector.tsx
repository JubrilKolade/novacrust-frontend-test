'use client'

import { ChevronDownIcon, SearchIcon } from "lucide-react";
import { FC, useState } from "react";
import Image from "next/image";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";

export interface SelectorOption {
    value: string;
    label: string;
    icon?: string;
}

interface SelectorProps {
    label?: string;
    options: SelectorOption[];
    selectedValue: string;
    onSelect: (value: string) => void;
    placeholder?: string;
    searchable?: boolean;
    align?: "start" | "center" | "end";
    children?: React.ReactNode;
    error?: boolean;
}

export const Selector: FC<SelectorProps> = ({
    options,
    selectedValue,
    onSelect,
    placeholder = "Select an option",
    searchable = false,
    align = "start",
    error = false,
    children
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const selected = options.find((opt) => opt.value === selectedValue);

    const filteredOptions = options.filter((opt) =>
        opt.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                {children || (
                    <button className={`flex h-[60px] items-center justify-between px-6 relative self-stretch w-full bg-[#ffffff] rounded-[30px] border border-solid transition-colors ${error ? "border-red-500 hover:bg-red-50" : "border-[#e0e0e0] hover:bg-[#fafafa]"
                        }`}>
                        <div className="flex items-center gap-3">
                            {selected ? (
                                <>
                                    {selected.icon && selected.icon.startsWith('/') ? (
                                        <Image src={selected.icon} alt={selected.label} width={24} height={24} className="w-6 h-6 object-contain" />
                                    ) : (
                                        <span className="text-xl">{selected?.icon}</span>
                                    )}
                                    <span className="font-normal text-green text-base clashed">
                                        {selected?.label}
                                    </span>
                                </>
                            ) : (
                                <span className={`font-normal text-base ${error ? "text-red-500" : "text-[#828282]"}`}>
                                    {placeholder}
                                </span>
                            )}
                        </div>
                        <ChevronDownIcon className={`w-5 h-5 ${error ? "text-red-500" : "text-[#828282]"}`} />
                    </button>
                )}
            </PopoverTrigger>
            <PopoverContent className="w-(--radix-popover-trigger-width) min-w-[200px] p-4 bg-white rounded-2xl shadow-lg border border-[#e0e0e0]" align={align}>
                {searchable && (
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
                )}
                <div className="max-h-64 overflow-y-auto flex flex-col gap-2">
                    {filteredOptions.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => {
                                onSelect(option.value);
                                setIsOpen(false);
                                setSearchQuery("");
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-[#f9fafb] transition-colors text-left rounded-xl ${selectedValue === option.value ? "bg-[#f0fdf4]" : ""
                                }`}
                        >
                            {option.icon && option.icon.startsWith('/') ? (
                                <Image src={option.icon} alt={option.label} width={28} height={28} className="w-7 h-7 object-contain rounded-full" />
                            ) : (
                                <span className="text-2xl">{option.icon}</span>
                            )}
                            <span className="font-medium text-sm text-[#111827] clashed">
                                {option.label}
                            </span>
                        </button>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
};
