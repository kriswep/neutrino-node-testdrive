const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default async (req, res) => {
  await delay(500);
  console.log('Request!');
  res.end('hi there.dd!!');
}