var app_id = "561e2cf2";

var app_key = "f15fdebb7fd1deccbf454477774e4461";
var food = "milk";  
var requestUrl = `https://api.edamam.com/api/food-database/v2/parser?app_id=${app_id}&app_key=${app_key}&ingr=${food}&nutrition-type=cooking
`;

// store the response from the database in an array 

// put this in a for loop to get all the items in the array
fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        console.log("slay");
      }
      return response.json();
    }).then(function (data) {
      console.log(data);
    })