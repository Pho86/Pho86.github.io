export default function ProjectTags({ text }: { text?: string[] }) {
  return (
    <>
      {text &&
        text.map((t, i) => (
          <div
            key={i}
            className={`flex justify-center items-center text-sm px-3 py-1 rounded-lg font-medium bg-bg-light `}
          >
            {t}
          </div>
        ))}
    </>
  );
}
