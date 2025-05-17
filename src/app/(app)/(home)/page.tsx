import configPromise from "@payload-config";
import { getPayload } from "payload";

/**
 * Fetches and displays top-level categories from the "categories" collection.
 *
 * Retrieves categories that do not have a parent, including their immediate nested data, and renders the result as formatted JSON within a React component.
 */
export default async function Home() {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    depth: 1,
    where: {
      parent: {
        exists: false,
      },
    },
  });

  console.log(data);

  return <div className="p-4">{JSON.stringify(data, null, 2)}</div>;
}
