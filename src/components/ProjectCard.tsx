export function ProjectCard({ title, desc, details, link }: { title: string; desc: string; details: string; link?: string }) {
  return (
    <div className="border border-gray-700 rounded-2xl p-5 mb-4 hover:border-gray-500 transition">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-400 text-sm mb-2">{desc}</p>
      <p className="text-gray-300">{details}</p>
      {link && (
        <a href={link} target="_blank" className="text-blue-400 hover:underline text-sm mt-2 inline-block">
          🔗 {link}
        </a>
      )}
    </div>
  );
}
