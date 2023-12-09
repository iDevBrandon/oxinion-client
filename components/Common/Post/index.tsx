import React, { useCallback, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { MdComment, MdOutlineMoreHoriz } from "react-icons/md";
import {
  PostWrapper,
  PostDetails,
  ProfileWrapper,
  PostProp,
  LikeButton,
  PostImageWrapper,
  CardActionWrapper,
  PostImage,
} from "./styles";
import useMyInfoQuery from "@/hooks/queries/useMyInfoQuery";
import Popover from "./Popover";
import { FcLike } from "react-icons/fc";
import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import Comments from "./comments/Comments";
import Image from "next/image";
import PostImages from "./PostImages";
import PostCardContent from "./PostCardContent";

const Post = ({ post }: any) => {
  const { data: me } = useMyInfoQuery();
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
    setCommentFormOpen((prev) => !prev);
  }, []);

  return (
    <PostWrapper>
      <Card>
        <PostImageWrapper onDoubleClick={onToggleLike}>
          <PostImages images={post.images} />
        </PostImageWrapper>

        <PostDetails>
          <PostProp>
            <ProfileWrapper>
              <img src="https://picsum.photos/201" alt="profile" />
              <div>
                <b>{post?.author?.username}</b>
              </div>
            </ProfileWrapper>

            <CardActionWrapper>
              <CardActions
                disableSpacing
                style={{ display: "flex", alignItems: "flex-start" }}
              >
                <div style={{ display: "flex" }}>
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
                  {popoverOpen && <Popover open={popoverOpen} post={post} />}
                </div>
              </CardActions>
            </CardActionWrapper>
          </PostProp>
          <PostCardContent postData={post.description} />
          {/* <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.description}
            </Typography>
          </CardContent> */}
          <Divider />
          {commentFormOpen && <Comments post={post} />}
        </PostDetails>
      </Card>
    </PostWrapper>
  );
};

export default Post;
