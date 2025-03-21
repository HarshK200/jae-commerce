import SellerDashboardCard from "@/components/(Seller)/SellerDashBoardCard";
import { prisma as db } from "@/db";
import { formatNumber, formatCurrency } from "@/lib/formatters";

async function getSales(sellerId: string) {
  const data = await db.order.aggregate({
    where: {
      seller_id: sellerId,
    },
    _sum: { total_price_paid: true },
    _count: true,
  });

  return {
    amount: data._sum.total_price_paid?.toNumber() || 0,
    numberOfOrders: data._count,
  };
}

export default async function SellerDashboardPage() {
  const salesData = await getSales("2");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <SellerDashboardCard
        title="Sales"
        subtitle={`${formatNumber(salesData.numberOfOrders)} Orders`}
        body={formatCurrency(salesData.amount)}
      />
    </div>
  );
}
