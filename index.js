import Parser from "rss-parser";

const parser = new Parser();

/*
 With this function main, the  complexity is big (6 s) and 
 if we have a lot of url, it will go up again 
const main = async () => {
  const urls = [
    "https://www.bonappetit.com/feed/recipes-rss-feed/rss",
    "https://www.budgetbytes.com/category/recipes/feed/",
    "https://www.reddit.com/r/recipes/.rss",
  ];

  // clear the console for each update
  console.clear();

  // Loop through RSS feeds

  for (let url of urls) {
    try {
      // parse the RSS feed for the current url
      const { title, items } = await parser.parseURL(url);

      // Display the feed title
      console.log("Feed:", title);

      // Extract only the title and link of each item for easier readability
      const result = items.map(({ title, link }) => ({ title, link }));
      console.table(result);
    } catch (error) {
      console.log("Error fetching feed: ", url, error.message);
    }
  }

  // Displays the date and time of the last update
  console.log("Last updated:", new Date().toUTCString());
};

//Restarts main() every 2 seconds (2000 ms)
//setInterval(main, 2000);

*/

/* Here we write a good main function with a complexity = 2s*/

const urls = [
  "https://www.bonappetit.com/feed/recipes-rss-feed/rss",
  "https://www.budgetbytes.com/category/recipes/feed/",
  "https://www.reddit.com/r/recipes/.rss",
];
const main = async () => {
  // Define a feedItems array to store RSS feed items.
  const feedItems = [];

  /*
  Run parser.parseURL on each URL, which returns a Promise object to eventu‐
    ally return a response from the external RSS endpoint
   */
  const awaitableRequests = urls.map((url) => parser.parseURL(url));

  // Collect responses by awaiting all Promises to complete their requests.
  const responses = await Promise.all(awaitableRequests);

  //Pass the responses and feedItems array to a custom aggregate function to combine the RSS feed results
  aggregate(responses, feedItems);

  // Display feedItemps
  print(feedItems);
};
main();
