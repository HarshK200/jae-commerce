import SellerDashboardCard from "@/components/(Seller)/SellerDashBoardCard";

export default function SellerDashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <SellerDashboardCard title="Sales" subtitle="Test" body="$ 20" />
    </div>
  );
}
