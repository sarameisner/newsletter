"use client";

export default function Newsletter() {
  return (
    <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Enter your name" />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Enter your email" />
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Subscribe
      </button>
    </form>
  );
}
