import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Loading from "../components/loading";
import FeedItems from "../components/feed";

function generateID(title) {
  return title.toLowerCase().replace(/ /g, "-");
}

export default function Feeds() {
  var [feeds, setFeeds] = useState(null);

  var [loading, setLoading] = useState(true);

  function getData(url) {
    let Parser = require("rss-parser");
    let parser = new Parser();

    return (async () => {
      let feed = await parser.parseURL(
        "https://uwu-corsy-worsy.herokuapp.com/" + url
      );
      console.log(feed.title);

      return feed;
    })();
  }

  async function getAllData() {
    const rssFeeds = [
      "https://solarpunk-gnome.tumblr.com/rss",
      "https://pluralistic.net/feed/",
      "https://solarpunkcitizen.tumblr.com/rss",
    ];

    var feedsData = [];
    for (let i = 0; i < rssFeeds.length; i++) {
      let newData = await getData(rssFeeds[i]);
      feedsData.push(newData);
    }

    console.log(feedsData);

    setFeeds(feedsData);

    setLoading(false);
  }

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="main">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="row">
            <div ID="topUwUnotme" className="block fixed p">
              <h2>Feeds:</h2>
              <ul>
                {feeds.map((feed, index) => {
                  return (
                    <li key={generateID(feed.title)}>
                      <a href={"#" + generateID(feed.title)}>{feed.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {feeds.map((feed, indoix) => {
              console.log(feed);
              //console.log(feed.items.map((item, index) => {return(item.title)}))
              return (
                <div
                  key={indoix}
                  className="column"
                  ID={generateID(feed.title)}
                >
                  <h3>
                    {feed.title} - <a href="#topUwUnotme">Back to top</a>
                  </h3>
                  {feed.items.map((item, index) => (
                    <div key={index} className="uwu">
                      <FeedItems item={item} />
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
