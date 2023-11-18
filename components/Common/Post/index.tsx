import React, { useCallback, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { MdOutlineMoreHoriz } from "react-icons/md";
import {
  PostWrapper,
  PostImage,
  PostDetails,
  ProfileWrapper,
  PostProp,
  CommentWrapper,
  PostCommentWrapper,
} from "./styles";
import useMyInfoQuery from "@/hooks/queries/useMyInfoQuery";
import Popover from "./Popover";
import { FcLike } from "react-icons/fc";
const Post = ({ post }: any) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const { data: user, error } = useMyInfoQuery();
  const [liked, setLiked] = useState(false);
  const popoverHandler = (e: any) => {
    console.log("open");
    setPopoverOpen(!popoverOpen);
  };

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
    console.log("clicked like");
  }, []);

  return (
    <PostWrapper>
      <PostImage onDoubleClick={onToggleLike}>
        <img src={post.images[0]} alt="post" />
      </PostImage>
      <PostDetails>
        <PostProp>
          <ProfileWrapper>
            <img src="https://picsum.photos/201" alt="profile" />
            <div>
              <b>iDevBrandon</b>
            </div>
          </ProfileWrapper>
          <div className="right" style={{ display: "flex" }}>
            <div>472 likes</div>
            <div style={{ margin: "0 0.5rem" }}>
              {liked ? (
                <FcLike onClick={onToggleLike} />
              ) : (
                <HiOutlineHeart onClick={onToggleLike} />
              )}{" "}
            </div>
            <div onClick={popoverHandler}>
              <MdOutlineMoreHoriz />
              {popoverOpen && <Popover open={popoverOpen} />}
            </div>
          </div>
        </PostProp>
        <div className="PostDesc">This is the first post</div>

        <PostCommentWrapper>
          <CommentWrapper>
            <div>
              <span>
                <strong>devlife</strong>Comment 1
              </span>
            </div>
            <div>
              <span>
                <strong>devlife</strong>Comment 1
              </span>
            </div>
            <div>
              <span>
                <strong>devlife</strong>Comment 1
              </span>
            </div>
          </CommentWrapper>
          <div>Comment form</div>
        </PostCommentWrapper>
      </PostDetails>
    </PostWrapper>
  );
};

export default Post;
