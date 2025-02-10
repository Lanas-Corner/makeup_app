const TagList = ({ tagList }: { tagList: string[] }) => {
  return (
    <div className="mb-auto ml-auto flex flex-wrap justify-end gap-2">
      {tagList.length > 0 &&
        tagList.map((tag, i) => (
          <div key={i} className="rounded-2xl bg-slate-200 px-2 py-1">
            <p>{tag}</p>
          </div>
        ))}
    </div>
  );
};

export default TagList;
