const TagList = ({ tagList }: { tagList: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-end ml-auto mb-auto">
      {tagList.length > 0 &&
        tagList.map((tag, i) => (
          <div key={i} className="px-2 py-1 bg-slate-200 rounded-2xl">
            <p>{tag}</p>
          </div>
        ))}
    </div>
  );
};

export default TagList;
