export default function Button({ text }) {
  return (
    <button className="bg-red-700 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-red-800 hover:shadow-lg transition duration-300">
      {text}
    </button>
  );
}
