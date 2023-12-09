import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const PostCardContent = ({ postData }: any) => {
  // console.log(postData);
  return (
    <CardContent>
      <Typography variant="body2">
        {postData?.split(/(#[^\s#]+)/g).map((v: any, i: any) => {
          if (v.match(/(#[^\s#]+)/)) {
            // hashtag
            return (
              <Link href={`/tags/${v.slice(1)}`} key={i}>
                <div style={{ color: "darkblue" }}>{v}</div>
              </Link>
            );
          }
          return v;
        })}
      </Typography>
    </CardContent>
  );
};

export default PostCardContent;
