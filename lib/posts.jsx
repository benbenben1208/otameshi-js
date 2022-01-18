import axios from "axios";
import { exit } from "process";

export const getAllArticlesData = async () => {
  const articles = await axios
    .get("http://localhost/api/user/article")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return articles;
};
export const getAllArticlesIds = async () => {
  const articles = await axios
    .get("http://localhost/api/user/article")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return articles.map((article) => {
    return {
      params: {
        id: String(article.id),
      },
    };
  });
};
export const getArticleData = async (id) => {
  const article = await axios
    .get(`http://localhost/api/user/article/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
      article
  };
};
