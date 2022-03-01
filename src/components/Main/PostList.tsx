import styled from "@emotion/styled";
import React, { FunctionComponent, useMemo } from "react";
import PostItem from "./PostItem";
import { PostListItemType } from "types/PostItem.types";
import useInfiniteScroll from "hooks/useInfiniteScroll";

const POST_ITEM_DATA = {
  title: "Post Item Title",
  date: "2022.02.23",
  categories: ["Web", "Frontend", "Testing"],
  summary:
    "안녕하세요. 최정은입니다. 아 진짜 귀찮다 로또 당첨됐으면 좋겠다. 그럼 이만.",
  thumbnail:
    "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/4yPtuRXtR0-jusOMCCXb4MeN6zU.jpg",
  link: "www.naver.com",
};

type PostListProps = {
  selectedCategory: string;
  posts: PostListItemType[];
};

const PostList: FunctionComponent<PostListProps> = ({
  selectedCategory,
  posts,
}) => {
  const { containerRef, postList } = useInfiniteScroll(selectedCategory, posts);

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        )
      )}
    </PostListWrapper>
  );
};

export default PostList;

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;
