import React from "react";

const LoadMore = ({ _LoadMore }) => {
  return (
    <div className="load">
      <button className="loadMore" onClick={_LoadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMore;
