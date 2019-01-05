import fetch from 'node-fetch'

//arbitrary task that runs every 10 minutes on heroku scheduler to keep dyno live
(async function task() {
  const results = await fetch('http://begincoffeesweb.herokuapp.com/');
  return await results
})();