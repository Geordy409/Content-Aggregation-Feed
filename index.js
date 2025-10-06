import Parser from "rss-parser";

const parser = new Parser();
const main = async () => {
  const urls = [
    "https://www.bonappetit.com/feed/recipes-rss-feed/rss",
    "https://www.budgetbytes.com/category/recipes/feed/",
    "https://www.reddit.com/r/recipes/.rss",
  ];

  // clear the console for each update
  console.clear();
  const response = await fetch(url);
  //console.log(await response.text()); // printing response

  const { title, items } = await parser.parseURL(url);
  console.log(title);

  // with => ({ title, link }) we return an Object
  const result = items.map(({ title, link }) => ({ title, link }));
  /*
    ({ title, link }) => { return {title, link}; }  
    ceci et équivalent à 
    ({ title, link }) => ({title, link})
    */
  console.table(result);

  // Displays the date and time of the last update
  console.log("Last updated:", new Date().toUTCString());
};

//Restarts main() every 2 seconds (2000 ms)
//setInterval(main, 2000);

main();
