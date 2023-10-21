import React from "react";
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

const Post = ({ post }: any) => {
  return (
    <PostWrapper>
      <PostImage>
        <img src="https://picsum.photos/199" alt="post" />
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
              <HiOutlineHeart />
            </div>
            <div>
              <MdOutlineMoreHoriz />
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
