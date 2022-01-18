import { getAllArticlesData } from "../lib/posts";
import ArticlePost  from "../components/ArticlePost";
import { NextPage, GetStaticProps } from "next";
import { Article } from "../interfaces/article";

type ArticlePageProps =
  {
    allArticleData: [Article];
  }



const Article : NextPage<ArticlePageProps> =  ({ allArticleData }) =>  {
  return (
    <div className="flex flex-1  items-center w-screen flex-col mt-3">
      <div className="max-w-md w-full space-y-8">
        <div className="rounded-md shadow-sm -space-y-px">
          <ul>
            {allArticleData &&
              allArticleData.map((article) => (
                <ArticlePost key={article.id} article={article} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Article;

export const getStaticProps: GetStaticProps = async () => {
  const allArticleData = await getAllArticlesData();
  return {
    props: { allArticleData },
    revalidate: 10,
  };
};
