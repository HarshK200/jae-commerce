import SellerDashboardCard from "@/components/(Seller)/SellerDashBoardCard";
import { prisma as db } from "@/db";
import { formatNumber, formatCurrency } from "@/lib/formatters";

async function getSales(userId: string) {
  const data = await db.order.aggregate({
    where: {
      user_id: userId,
    },
    _sum: { price_paid: true },
    _count: true,
  });

  return {
    amount: data._sum.price_paid?.toNumber() || 0,
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
