import clsx from "clsx";
import Image from "next/image";
import React from "react";
interface StatCardProps {
  count: number;
  type: "appointments" | "pending" | "cancelled";
  label: string;
  icon: string;
}
const StatCard = ({ count = 0, type, label, icon }: StatCardProps) => {
  return (
    <div
      className={clsx("stat-card", {
        "bg-appointments": type === "appointments",
        "bg-pending": type === "pending",
        "bg-cancelled": type === "cancelled",
      })}
    >
      <div className="flex items-center gap-4">
        <Image
          src={icon}
          alt={label}
          className="size-8 w-fit"
          width={32}
          height={32}
        />
        <h2 className="text-32-bold text-white">{count}</h2>
      </div>
      <p className="text-14-regular">{label}</p>
    </div>
  );
};

export default StatCard;
