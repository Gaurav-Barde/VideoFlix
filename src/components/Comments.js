import React from "react";

const Comments = ({ data, snippet }) => {
  const { authorDisplayName, textOriginal, authorProfileImageUrl } = snippet;

  return (
    <div className="bg-gray-50 p-2">
      <div className="flex items-center">
        <img
          alt="author-image"
          src={authorProfileImageUrl}
          className="h-12 rounded-full object-contain"
        />
        <div className="ml-4">
          <h3 className="font-bold text-sm">{authorDisplayName}</h3>
          <p className="text-sm">{textOriginal}</p>
        </div>
      </div>
      {data?.replies && (
        <div className="ml-8 mt-6 border-t flex flex-col bg-slate-100">
          {data?.replies?.comments?.reverse().map((comment, index) => (
            <Comments key={index} snippet={comment.snippet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
