interface DetailCardProps {
  title: string;
  value: number | undefined;
  unit: string;
  imgUrl: string;
}

export default function DetailCard({
  title,
  value,
  unit,
  imgUrl,
}: DetailCardProps) {
  return (
    <>
      <div className="flex bg-gray-200 p-6 gap-4 max-md:p-3 ">
        {/* Icon */}
        <img src={imgUrl} alt="wind" width={28} />

        {/* Detail */}
        <div className="flex flex-col">
          <h4 className="text-gray-600 text-sm">{title}</h4>
          <h3 className="text-blue-950 text-2xl font-bold">
            {value} {unit}
          </h3>
        </div>
      </div>
    </>
  );
}
