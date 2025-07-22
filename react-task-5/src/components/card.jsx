export default function Card({ emoji, title, description, color }) {
  return (
    <div className={`bg-white shadow-lg rounded-xl border-t-4 ${color} p-8 hover:shadow-2xl transition`}>
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-semibold mb-3 text-slate-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
