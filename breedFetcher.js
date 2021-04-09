const request = require('request');
const search = process.argv[2];


const url = `https://api.thecatapi.com/v1/breeds/search?q=${search}`;

request(url, function(error, response, body) {
  if (error) {
    console.error('error:', error); // Print the error if one occurred
    return;
  }
  
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log(typeof body);
  const data = JSON.parse(body);
  // console.log(data);
  if (data.length < 1) {
    console.log("Searched breed not found.");
    return;
  }
  
  const cat = data[0];
  // console.log(typeof data);
  console.log(cat.description);
});

// request(url, function(error, response, body) {
//   if (error) throw error;
//   fs.writeFile(filename, body, (err) => {
//     if (err) {
//       console.log("There was an err", err);
//     } else {
//       console.log(`Downloaded and saved ${body.length} bytes to ${filename}`);
//     }
//   });
// });