import React from "react";
import { useParams } from "react-router-dom";
import articleContent from "./Article-Content";

/* Pages */
import NotFound from "./NotFound";

/* Components */
import Articles from "../components/Articles";

function Article() {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  if (!Article) return <NotFound />;
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold my-4 text-gray-900">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p
          className="mx-auto leading-relaxed text-base mb-4 text-justify"
          key={index}
        >
          {paragraph}
        </p>
      ))}
      <h1 className="sm:txt-2xl text-2xl font-bold my-4 text-gray-900">
        Other Articles
      </h1>
      <div className="flex flex-wrap -m-4">
        <Articles articles={otherArticles} />
      </div>
    </>
  );
}

export default Article;
