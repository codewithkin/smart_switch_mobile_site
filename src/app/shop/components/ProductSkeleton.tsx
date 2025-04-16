import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="flex flex-col gap-2 border rounded-lg p-4 shadow-sm">
      <Skeleton className="h-40 w-full rounded-md" /> {/* Image placeholder */}
      <Skeleton className="h-4 w-3/4" /> {/* Product name */}
      <Skeleton className="h-4 w-1/2" /> {/* Price */}
      <Skeleton className="h-8 w-full mt-2" /> {/* Button */}
    </div>
  );
}
