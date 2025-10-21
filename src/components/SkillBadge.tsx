export function SkillBadge({ name }: { name: string }) {
  return (
    <span className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-full text-gray-200 hover:bg-gray-700 transition">
      {name}
    </span>
  );
}
