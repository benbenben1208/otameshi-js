import Link from 'next/link'
// type ArticleProp
import { Article } from '../interfaces/article';
type ArticlePostProps = {
    article: Article;
}
const ArticlePost :  React.FC<ArticlePostProps> = (props) => {
    const {  article } = props;

    console.log(article);
  return (

  <div>
      <span className="text-white">{article.id}</span>
    {" : "}
    <Link href={`/articles/${article.id}`}>
        <a >
    <span className="text-white">{article.title}</span>
        </a>
    </Link>
    <span className="cursor-pointer text-white border-b border-gray-500 hover:bg-gray-600">
        {article.content}
    </span>
  </div>
  )
};
export default ArticlePost;
