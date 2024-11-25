import Newsletter from "./components/Newsletter";
import { getSubs } from "@/lib/api";

export default async function Page() {
  const subs = await getSubs();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Newsletter-komponent */}
      <div className="max-w-lg mx-auto bg-white shadow-md rounded p-6 mb-8">
        <h1 className="text-2xl font-bold mb-4 text-center">Subscribe to our Newsletter</h1>
        <Newsletter />
      </div>

      {/* Liste over abonnenter */}
      <div className="max-w-lg mx-auto bg-white shadow-md rounded p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">List of Subscribers</h2>
        <ul className="divide-y divide-gray-200">
          {subs.map((sub) => (
            <li key={sub.id} className="py-2">
              <span>{sub.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
