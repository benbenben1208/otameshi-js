import Link from "next/link";
import { useRouter } from "next/router";
import { exit } from "process";
import { getAllArticlesIds, getArticleData } from "../../lib/posts";

const ArticleShow = (props) => {
  const { article } = props;
  const router = useRouter();

  if (!article) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <p className="p-4">
        {"ID: "}
        {article.id}
      </p>
      <p className="p-4">{article.title}</p>
      <p className="p-4">{article.content}</p>
      <p className="p-4">{article.created_at}</p>
      <Link href="/article">
        <div className="flex cursor-pointer mt-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          ></svg>
          <span>記事一覧に戻る</span>
        </div>
      </Link>
    </div>
  );
};
export default ArticleShow;

export const getStaticPaths = async () => {
  const paths = await getAllArticlesIds();
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async ({ params }) => {

  const { article: article } = await getArticleData(params.id);

  return {
    props: {
      article,
    },
    revalidate: 10,
  };
};
