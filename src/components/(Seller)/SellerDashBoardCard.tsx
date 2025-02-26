type SellerDashboardCardProps = {
  title: String;
  subtitle: String;
  body: String;
};

export default async function SellerDashboardCard({
  title,
  subtitle,
  body,
}: SellerDashboardCardProps) {
  return (
    <div className="flex flex-col w-min-full border-[1px] m-4 p-4 rounded-md">
      <div className="pb-6">
        <h1 className="font-medium text-xl">{title}</h1>
        <h2 className="font-light text-sm">{subtitle}</h2>
      </div>
      <p>{body}</p>
    </div>
  );
}
