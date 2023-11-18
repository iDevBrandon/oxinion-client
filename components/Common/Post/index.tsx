import React, { useCallback, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { MdComment, MdOutlineMoreHoriz } from "react-icons/md";
import {
  PostWrapper,
  PostImage,
  PostDetails,
  ProfileWrapper,
  PostProp,
  LikeButton,
} from "./styles";
import useMyInfoQuery from "@/hooks/queries/useMyInfoQuery";
import Popover from "./Popover";
import { FcLike } from "react-icons/fc";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import Comments from "./comments/Comments";

const Post = ({ post }: any) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [commentFormOpen, setCommentFormOpen] = useState(false);
  const { data: user, error } = useMyInfoQuery();
  const [liked, setLiked] = useState(false);
  const popoverHandler = (e: any) => {
    setPopoverOpen(!popoverOpen);
  };

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
    console.log("clicked like");
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpen(!commentFormOpen);
  }, []);

  return (
    <Card>
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
        <CardActions disableSpacing style={{ display: "flex" }}>
          <div style={{ margin: "0 0.5rem" }}>
            {liked ? (
              <LikeButton>
              <FcLike onClick={onToggleLike} />
              <small>1</small>
            </LikeButton>
            ) : (
              <LikeButton>
                <HiOutlineHeart onClick={onToggleLike} />
                <small>0</small>
              </LikeButton>
            )}
          </div>
          <div onClick={onToggleComment} style={{ margin: "0 0.5rem" }}>
            <MdComment />
          </div>
          <div onClick={popoverHandler}>
            <MdOutlineMoreHoriz />
            {popoverOpen && <Popover open={popoverOpen} />}
          </div>
        </CardActions>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        {commentFormOpen && <Comments post={post} />}
      </PostDetails>
    </Card>
  );
};

export default Post;
