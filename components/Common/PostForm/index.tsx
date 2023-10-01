// POST FORM
// 1. add location (lat/lng)
// 2. add images
// 3. add details

import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

const PostForm = () => {
  const onSubmit = useCallback((e: any) => {
    e.preventDefault();

    console.log("submitted post");
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <input type="file" multiple hidden />
      <input type="text" placeholder="desc" />
      <button type="submit">Upload</button>
    </form>
  );
};

export default PostForm;
