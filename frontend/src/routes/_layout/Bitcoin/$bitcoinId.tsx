import { createFileRoute } from "@tanstack/react-router";
import { ItemsService } from "@/client"
import { useSuspenseQuery } from "@tanstack/react-query"
export const Route = createFileRoute("/_layout/Bitcoin/$bitcoinId")({
  // loader: async ({ params }) => {
  //   const res = await fetch(
  //     `http://localhost:8000/api/v1/items/${params.bitcoinId}`
  //   );

  //   if (!res.ok) {
  //     throw new Error("Failed to load items");
  //   }

  //   return res.json();
  // },
 
  component: BitcoinDetail,
});
function getItemsQueryOptions() {
  return {
    queryFn: () => ItemsService.readItems({ }),
    queryKey: ["items"],
  }
}
function BitcoinDetail() {
  const { bitcoinId } = Route.useParams();
  const { data } = useSuspenseQuery(getItemsQueryOptions()) 
  const items = data.data;
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12">
        <div className="rounded-full bg-muted p-4 mb-4">
        </div>
        <h3 className="text-lg font-semibold">You don't have any items yet</h3>
        <p className="text-muted-foreground">Add a new item to get started</p>
      </div>
    )
  }
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">
        Bitcoin ID: {bitcoinId}
      </h1>

      <h2 className="text-lg font-semibold mb-2">Items</h2>

      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="border rounded-lg p-4 shadow-sm"
          >
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-muted-foreground">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
