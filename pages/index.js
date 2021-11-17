
import Feeds from "./feeds";

// export async function getServerSideProps() {
//   let Parser = require("rss-parser");
//   let parser = new Parser();

//   let feed = await parser.parseURL("https://pluralistic.net/feed/");
//   console.log(feed.title);

//   feed.items.forEach((item) => {
//     //console.log(item);
//   });

//   return {
//     props: {
//       feed,
//     },
//   };
// }

export default function Home() {
  return (
    <Feeds />
  )
}
