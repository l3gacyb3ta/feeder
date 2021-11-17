function isHTML(text) {
  return /<\/?[a-z][\s\S]*>/i.test(text);
}

export default function FeedItems({ item }) {
  // console.log(item)

  var innerHTML = { __html: item.content };

  if (isHTML(item["content:encoded"])) {
    innerHTML = { __html: item["content:encoded"] };
  }

  return (
    <div className={"block fixed feedItem"}>
      <h2>{item.title}</h2>
      <p>
        <date>{item.pubDate}</date>
        <br />
        <a href={item.link}>Visit item</a>
      </p>
      <div id="postContent">
        <div className="content" dangerouslySetInnerHTML={innerHTML} />
      </div>
    </div>
  );
}
