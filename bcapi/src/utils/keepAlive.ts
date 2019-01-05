import fetch from 'node-fetch'

//arbitrary task that runs every 10 minutes on heroku scheduler to keep dyno live
(async function task() {
  const results = await fetch('https://bcgraph.herokuapp.com/bcgraph');
  return await results
})();