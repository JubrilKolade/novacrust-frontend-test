import { TransactionModal } from "@/components/transaction/TransactionModal";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black/10 backdrop-blur-sm p-4">
      <TransactionModal />
    </div>
  );
}
