export default function ProductCard({ name, price, description }) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h2 className="text-lg font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">قیمت: {price} تومان</p>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </div>
  );
}