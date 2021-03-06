angular.module('starter.services', [])
.service('cartServices', function() {
  var cart = [];
  var cartNames = [];
  var potentialCart = [];
  var potentialCartNames = [];
  var searchList = [];
  var farms = [
  {
    "Name": "Alton Farms Estate Winery",
    "Name (shortform)": "Alton Winery",
    "Address": "5547 Aberarder Line",
    "Town": "Plympton-Wyoming",
    "Distance (km)": "42.7km",
    "Phone": "519-899-2479",
    "Image": "img/Farm/farm01.jpg",
    "Monday": "Closed",
    "Tuesday": "Closed",
    "Wednesday": "12:00-18:00",
    "Thursday": "12:00-18:00",
    "Friday": "12:00-18:00",
    "Saturday": "12:00-18:00",
    "Sunday": "12:00-18:00",
    "Apples": "",
    "Apricots": "",
    "Blueberries": "",
    "Fruit Juices": "",
    "Gooseberries": "",
    "Muskmelon": "",
    "Nectarines": "",
    "Peaches": "",
    "Pears": "",
    "Plums": "",
    "Raspberries": "",
    "Strawberries": "",
    "Watermelon": "",
    "Beans": "",
    "Beets": "",
    "Carrots": "",
    "Corn": "",
    "Cucumber": "",
    "Eggplant": "",
    "Garlic": "",
    "Kale": "",
    "Onions (green)": "",
    "Onions (red)": "",
    "Peas (green)": "",
    "Peas (snow)": "",
    "Peppers": "",
    "Potatoes": "",
    "Pumpkin": "",
    "Squash": "",
    "Tomatoes": "",
    "Zucchini": "",
    "Beer": "",
    "Cider": "",
    "Wine": "Y",
    "Apple Cider": "",
    "Cheese": "",
    "Eggs": "",
    "Honey": "",
    "Jams": "",
    "Maple Syrup": "",
    "Spelt": "",
    "Beef": "",
    "Chicken": "",
    "Fish": "",
    "Lamb": "",
    "Pork": "",
    "Sausage": "",
    "Turkey": "",
    "FARM TOTALS": 1
  },
  {
    "Name": "Bayfield Berry Farm",
    "Name (shortform)": "Bayfield Berry",
    "Address": "77697 Orchard Line",
    "Town": "Bayfield",
    "Distance (km)": "35.4km",
    "Phone": "519-482-1666",
    "Image": "img/Farm/farm02.jpg",
    "Monday": "8:00-16:00",
    "Tuesday": "8:00-16:00",
    "Wednesday": "8:00-16:00",
    "Thursday": "8:00-20:00",
    "Friday": "8:00-20:00",
    "Saturday": "8:00-18:00",
    "Sunday": "8:00-17:00",
    "Apples": "",
    "Apricots": "Y",
    "Blueberries": "Y",
    "Fruit Juices": "Y",
    "Gooseberries": "Y",
    "Muskmelon": "",
    "Nectarines": "",
    "Peaches": "Y",
    "Pears": "",
    "Plums": "Y",
    "Raspberries": "Y",
    "Strawberries": "",
    "Watermelon": "",
    "Beans": "",
    "Beets": "",
    "Carrots": "",
    "Corn": "",
    "Cucumber": "",
    "Eggplant": "",
    "Garlic": "Y",
    "Kale": "",
    "Onions (green)": "Y",
    "Onions (red)": "",
    "Peas (green)": "",
    "Peas (snow)": "",
    "Peppers": "Y",
    "Potatoes": "Y",
    "Pumpkin": "",
    "Squash": "Y",
    "Tomatoes": "Y",
    "Zucchini": "",
    "Beer": "",
    "Cider": "",
    "Wine": "",
    "Apple Cider": "Y",
    "Cheese": "",
    "Eggs": "",
    "Honey": "",
    "Jams": "Y",
    "Maple Syrup": "Y",
    "Spelt": "",
    "Beef": "",
    "Chicken": "",
    "Fish": "",
    "Lamb": "",
    "Pork": "",
    "Sausage": "",
    "Turkey": "",
    "FARM TOTALS": 17
  },
  {
    "Name": "Blyth Farm Cheese",
    "Name (shortform)": "Blyth Cheese",
    "Address": "82521 Allboro Line",
    "Town": "Blyth",
    "Distance (km)": "62.2km",
    "Phone": "519-523-4753",
    "Image": "img/Farm/farm03.jpg",
    "Monday": "9:00-16:00",
    "Tuesday": "9:00-16:00",
    "Wednesday": "9:00-16:00",
    "Thursday": "9:00-16:00",
    "Friday": "9:00-16:00",
    "Saturday": "9:00-16:00",
    "Sunday": "Closed",
    "Apples": "",
    "Apricots": "",
    "Blueberries": "",
    "Fruit Juices": "",
    "Gooseberries": "",
    "Muskmelon": "",
    "Nectarines": "",
    "Peaches": "",
    "Pears": "",
    "Plums": "",
    "Raspberries": "",
    "Strawberries": "",
    "Watermelon": "",
    "Beans": "",
    "Beets": "",
    "Carrots": "",
    "Corn": "",
    "Cucumber": "",
    "Eggplant": "",
    "Garlic": "",
    "Kale": "",
    "Onions (green)": "",
    "Onions (red)": "",
    "Peas (green)": "",
    "Peas (snow)": "",
    "Peppers": "",
    "Potatoes": "",
    "Pumpkin": "",
    "Squash": "",
    "Tomatoes": "",
    "Zucchini": "",
    "Beer": "",
    "Cider": "",
    "Wine": "",
    "Apple Cider": "",
    "Cheese": "Y",
    "Eggs": "",
    "Honey": "",
    "Jams": "",
    "Maple Syrup": "",
    "Spelt": "",
    "Beef": "",
    "Chicken": "",
    "Fish": "",
    "Lamb": "",
    "Pork": "",
    "Sausage": "",
    "Turkey": "",
    "FARM TOTALS": 1
  },
  {
    "Name": "Cedar Villa Angus Farms",
    "Name (shortform)": "Cedar Villa",
    "Address": "37550 Zurich-Hensall Rd",
    "Town": "Zurich",
    "Distance (km)": "16.4km",
    "Phone": "519-236-9969",
    "Image": "img/Farm/farm04.jpg",
    "Monday": "Call Ahead",
    "Tuesday": "Call Ahead",
    "Wednesday": "Call Ahead",
    "Thursday": "Call Ahead",
    "Friday": "Call Ahead",
    "Saturday": "Call Ahead",
    "Sunday": "Call Ahead",
    "Apples": "",
    "Apricots": "",
    "Blueberries": "",
    "Fruit Juices": "",
    "Gooseberries": "",
    "Muskmelon": "",
    "Nectarines": "",
    "Peaches": "",
    "Pears": "",
    "Plums": "",
    "Raspberries": "",
    "Strawberries": "",
    "Watermelon": "",
    "Beans": "",
    "Beets": "",
    "Carrots": "",
    "Corn": "",
    "Cucumber": "",
    "Eggplant": "",
    "Garlic": "",
    "Kale": "",
    "Onions (green)": "",
    "Onions (red)": "",
    "Peas (green)": "",
    "Peas (snow)": "",
    "Peppers": "",
    "Potatoes": "",
    "Pumpkin": "",
    "Squash": "",
    "Tomatoes": "",
    "Zucchini": "",
    "Beer": "",
    "Cider": "",
    "Wine": "",
    "Apple Cider": "",
    "Cheese": "",
    "Eggs": "",
    "Honey": "",
    "Jams": "",
    "Maple Syrup": "",
    "Spelt": "",
    "Beef": "Y",
    "Chicken": "Y",
    "Fish": "",
    "Lamb": "",
    "Pork": "",
    "Sausage": "",
    "Turkey": "",
    "FARM TOTALS": 3
  },
  {
    "Name": "Eagleson Farms",
    "Name (shortform)": "Eagleson",
    "Address": "69436 Mollard Line",
    "Town": "Parkhill",
    "Distance (km)": "12.5km",
    "Phone": "519-870-8213",
    "Image": "img/Farm/farm05.jpg",
    "Monday": "Call Ahead",
    "Tuesday": "Call Ahead",
    "Wednesday": "Call Ahead",
    "Thursday": "Call Ahead",
    "Friday": "Call Ahead",
    "Saturday": "Call Ahead",
    "Sunday": "Call Ahead",
    "Apples": "",
    "Apricots": "",
    "Blueberries": "",
    "Fruit Juices": "",
    "Gooseberries": "",
    "Muskmelon": "",
    "Nectarines": "",
    "Peaches": "",
    "Pears": "",
    "Plums": "",
    "Raspberries": "",
    "Strawberries": "",
    "Watermelon": "",
    "Beans": "",
    "Beets": "",
    "Carrots": "",
    "Corn": "",
    "Cucumber": "",
    "Eggplant": "",
    "Garlic": "",
    "Kale": "",
    "Onions (green)": "",
    "Onions (red)": "",
    "Peas (green)": "",
    "Peas (snow)": "",
    "Peppers": "",
    "Potatoes": "",
    "Pumpkin": "",
    "Squash": "",
    "Tomatoes": "",
    "Zucchini": "",
    "Beer": "",
    "Cider": "",
    "Wine": "",
    "Apple Cider": "",
    "Cheese": "",
    "Eggs": "Y",
    "Honey": "",
    "Jams": "Y",
    "Maple Syrup": "Y",
    "Spelt": "Y",
    "Beef": "Y",
    "Chicken": "",
    "Fish": "",
    "Lamb": "Y",
    "Pork": "Y",
    "Sausage": "",
    "Turkey": "",
    "FARM TOTALS": 7
  },
  {
    "Name": "Ferguson Apiaries",
    "Name (shortform)": "Ferguson Apiaries",
    "Address": "39006 Zurich-Hensall Rd",
    "Town": "Hensall",
    "Distance (km)": "24.1km",
    "Phone": "519-236-4979",
    "Image": "img/Farm/farm06.jpg",
    "Monday": "Closed",
    "Tuesday": "Closed",
    "Wednesday": "Closed",
    "Thursday": "9:00-17:00",
    "Friday": "9:00-17:00",
    "Saturday": "10:00-15:00",
    "Sunday": "10:00-15:00",
    "Apples": "",
    "Apricots": "",
    "Blueberries": "",
    "Fruit Juices": "",
    "Gooseberries": "",
    "Muskmelon": "",
    "Nectarines": "",
    "Peaches": "",
    "Pears": "",
    "Plums": "",
    "Raspberries": "",
    "Strawberries": "",
    "Watermelon": "",
    "Beans": "",
    "Beets": "",
    "Carrots": "",
    "Corn": "",
    "Cucumber": "",
    "Eggplant": "",
    "Garlic": "",
    "Kale": "",
    "Onions (green)": "",
    "Onions (red)": "",
    "Peas (green)": "",
    "Peas (snow)": "",
    "Peppers": "",
    "Potatoes": "",
    "Pumpkin": "",
    "Squash": "",
    "Tomatoes": "",
    "Zucchini": "",
    "Beer": "",
    "Cider": "",
    "Wine": "",
    "Apple Cider": "",
    "Cheese": "",
    "Eggs": "",
    "Honey": "Y",
    "Jams": "",
    "Maple Syrup": "",
    "Spelt": "",
    "Beef": "",
    "Chicken": "",
    "Fish": "",
    "Lamb": "",
    "Pork": "",
    "Sausage": "",
    "Turkey": "",
    "FARM TOTALS": 1
  },
  {
    "Name": "Grand Bend Produce",
    "Name (shortform)": "GB Produce",
    "Address": "10026 Walker Road",
    "Town": "Grand Bend",
    "Distance (km)": "12.2km",
    "Phone": "519-243-2435",
    "Image": "img/Farm/farm07.jpg",
    "Monday": "N/A",
    "Tuesday": "N/A",
    "Wednesday": "N/A",
    "Thursday": "N/A",
    "Friday": "N/A",
    "Saturday": "N/A",
    "Sunday": "N/A",
    "Apples": "",
    "Apricots": "",
    "Blueberries": "",
    "Fruit Juices": "",
    "Gooseberries": "",
    "Muskmelon": "",
    "Nectarines": "",
    "Peaches": "",
    "Pears": "",
    "Plums": "",
    "Raspberries": "",
    "Strawberries": "",
    "Watermelon": "",
    "Beans": "",
    "Beets": "",
    "Carrots": "",
    "Corn": "",
    "Cucumber": "",
    "Eggplant": "",
    "Garlic": "",
    "Kale": "",
    "Onions (green)": "",
    "Onions (red)": "",
    "Peas (green)": "",
    "Peas (snow)": "",
    "Peppers": "",
    "Potatoes": "Y",
    "Pumpkin": "",
    "Squash": "",
    "Tomatoes": "",
    "Zucchini": "",
    "Beer": "",
    "Cider": "",
    "Wine": "",
    "Apple Cider": "",
    "Cheese": "",
    "Eggs": "",
    "Honey": "",
    "Jams": "",
    "Maple Syrup": "",
    "Spelt": "",
    "Beef": "",
    "Chicken": "",
    "Fish": "",
    "Lamb": "",
    "Pork": "",
    "Sausage": "",
    "Turkey": "",
    "FARM TOTALS": 1
  },
  {
    "Name": "Gwen's Garden Produce",
    "Name (shortform)": "Gwen's",
    "Address": "7679 Lakeshore Rd",
    "Town": "Lambton Shores",
    "Distance (km)": "21.6km",
    "Phone": "519-617-4208",
    "Image": "img/Farm/farm08.jpg",
    "Monday": "N/A",
    "Tuesday": "N/A",
    "Wednesday": "N/A",
    "Thursday": "N/A",
    "Friday": "N/A",
    "Saturday": "N/A",
    "Sunday": "N/A",
    "Apples": "",
    "Apricots": "",
    "Blueberries": "",
    "Fruit Juices": "",
    "Gooseberries": "",
    "Muskmelon": "",
    "Nectarines": "",
    "Peaches": "",
    "Pears": "",
    "Plums": "",
    "Raspberries": "",
    "Strawberries": "",
    "Watermelon": "",
    "Beans": "",
    "Beets": "",
    "Carrots": "",
    "Corn": "",
    "Cucumber": "",
    "Eggplant": "",
    "Garlic": "",
    "Kale": "",
    "Onions (green)": "",
    "Onions (red)": "",
    "Peas (green)": "",
    "Peas (snow)": "",
    "Peppers": "",
    "Potatoes": "",
    "Pumpkin": "",
    "Squash": "",
    "Tomatoes": "",
    "Zucchini": "",
    "Beer": "",
    "Cider": "",
    "Wine": "",
    "Apple Cider": "",
    "Cheese": "",
    "Eggs": "",
    "Honey": "",
    "Jams": "",
    "Maple Syrup": "",
    "Spelt": "",
    "Beef": "",
    "Chicken": "",
    "Fish": "",
    "Lamb": "",
    "Pork": "",
    "Sausage": "",
    "Turkey": "",
    "FARM TOTALS": 0
  },
  {
    "Name": "Hayter's Turkey Farm",
    "Name (shortform)": "Hayter's",
    "Address": "37451 Dashwood Rd",
    "Town": "Dashwood",
    "Distance (km)": "10.6km",
    "Phone": "519-237-3561",
    "Image": "img/Farm/farm09.jpg",
    "Monday": "9:00-18:00",
    "Tuesday": "9:00-18:00",
    "Wednesday": "9:00-18:00",
    "Thursday": "9:00-18:00",
    "Friday": "9:00-18:00",
    "Saturday": "9:00-18:00",
    "Sunday": "11:00-17:00",
    "Apples": "",
    "Apricots": "",
    "Blueberries": "",
    "Fruit Juices": "",
    "Gooseberries": "",
    "Muskmelon": "",
    "Nectarines": "",
    "Peaches": "",
    "Pears": "",
    "Plums": "",
    "Raspberries": "",
    "Strawberries": "",
    "Watermelon": "",
    "Beans": "",
    "Beets": "",
    "Carrots": "",
    "Corn": "",
    "Cucumber": "",
    "Eggplant": "",
    "Garlic": "",
    "Kale": "",
    "Onions (green)": "",
    "Onions (red)": "",
    "Peas (green)": "",
    "Peas (snow)": "",
    "Peppers": "",
    "Potatoes": "",
    "Pumpkin": "",
    "Squash": "",
    "Tomatoes": "",
    "Zucchini": "",
    "Beer": "",
    "Cider": "",
    "Wine": "",
    "Apple Cider": "",
    "Cheese": "",
    "Eggs": "",
    "Honey": "",
    "Jams": "",
    "Maple Syrup": "",
    "Spelt": "",
    "Beef": "",
    "Chicken": "",
    "Fish": "",
    "Lamb": "",
    "Pork": "",
    "Sausage": "",
    "Turkey": "Y",
    "FARM TOTALS": 1
  },
  {
    "Name": "Juicy-Fruit Orchards",
    "Name (shortform)": "Juicy-Fruit",
    "Address": "9205 Ipperwash Rd",
    "Town": "Lambton Shores",
    "Distance (km)": "23.1km",
    "Phone": "519-296-5678",
    "Image": "img/Farm/farm10.jpg",
    "Monday": "10:00-18:00",
    "Tuesday": "10:00-18:00",
    "Wednesday": "10:00-18:00",
    "Thursday": "10:00-18:00",
    "Friday": "10:00-18:00",
    "Saturday": "10:00-18:00",
    "Sunday": "10:00-18:00",
    "Apples": "Y",
    "Apricots": "",
    "Blueberries": "",
    "Fruit Juices": "",
    "Gooseberries": "",
    "Muskmelon": "Y",
    "Nectarines": "Y",
    "Peaches": "Y",
    "Pears": "Y",
    "Plums": "Y",
    "Raspberries": "",
    "Strawberries": "",
    "Watermelon": "Y",
    "Beans": "Y",
    "Beets": "Y",
    "Carrots": "",
    "Corn": "Y",
    "Cucumber": "Y",
    "Eggplant": "Y",
    "Garlic": "Y",
    "Kale": "",
    "Onions (green)": "Y",
    "Onions (red)": "Y",
    "Peas (green)": "Y",
    "Peas (snow)": "Y",
    "Peppers": "Y",
    "Potatoes": "Y",
    "Pumpkin": "",
    "Squash": "Y",
    "Tomatoes": "Y",
    "Zucchini": "Y",
    "Beer": "",
    "Cider": "",
    "Wine": "",
    "Apple Cider": "",
    "Cheese": "",
    "Eggs": "",
    "Honey": "",
    "Jams": "",
    "Maple Syrup": "",
    "Spelt": "",
    "Beef": "",
    "Chicken": "",
    "Fish": "",
    "Lamb": "",
    "Pork": "",
    "Sausage": "",
    "Turkey": "",
    "FARM TOTALS": 22
  },
  {
    "Name": "Masse Fruit and Vegetable Farm",
    "Name (shortform)": "Massey",
    "Address": "35291 Zurich Hensall Rd",
    "Town": "Zurich",
    "Distance (km)": "12.6km",
    "Phone": "519-236-7907",
    "Image": "img/Farm/farm01.jpg",
    "Monday": "10:00-18:00",
    "Tuesday": "10:00-18:00",
    "Wednesday": "10:00-18:00",
    "Thursday": "10:00-18:00",
    "Friday": "10:00-18:00",
    "Saturday": "10:00-18:00",
    "Sunday": "10:00-18:00",
    "Apples": "Y",
    "Apricots": "",
    "Blueberries": "",
    "Fruit Juices": "",
    "Gooseberries": "",
    "Muskmelon": "",
    "Nectarines": "",
    "Peaches": "Y",
    "Pears": "",
    "Plums": "",
    "Raspberries": "",
    "Strawberries": "Y",
    "Watermelon": "",
    "Beans": "Y",
    "Beets": "Y",
    "Carrots": "",
    "Corn": "Y",
    "Cucumber": "",
    "Eggplant": "",
    "Garlic": "",
    "Kale": "",
    "Onions (green)": "",
    "Onions (red)": "",
    "Peas (green)": "",
    "Peas (snow)": "",
    "Peppers": "",
    "Potatoes": "",
    "Pumpkin": "Y",
    "Squash": "Y",
    "Tomatoes": "Y",
    "Zucchini": "",
    "Beer": "",
    "Cider": "",
    "Wine": "",
    "Apple Cider": "",
    "Cheese": "",
    "Eggs": "",
    "Honey": "",
    "Jams": "",
    "Maple Syrup": "",
    "Spelt": "",
    "Beef": "",
    "Chicken": "",
    "Fish": "",
    "Lamb": "",
    "Pork": "",
    "Sausage": "",
    "Turkey": "",
    "FARM TOTALS": 9
  },
  {
    "Name": "Purdy's Fish Market",
    "Name (shortform)": "Purdy's Fish",
    "Address": "59 River Rd",
    "Town": "Grand Bend",
    "Distance (km)": "0.75km",
    "Phone": "519-238-8044",
    "Image": "img/Farm/farm02.jpg",
    "Monday": "N/A",
    "Tuesday": "N/A",
    "Wednesday": "N/A",
    "Thursday": "N/A",
    "Friday": "N/A",
    "Saturday": "N/A",
    "Sunday": "N/A",
    "Apples": "",
    "Apricots": "",
    "Blueberries": "",
    "Fruit Juices": "",
    "Gooseberries": "",
    "Muskmelon": "",
    "Nectarines": "",
    "Peaches": "",
    "Pears": "",
    "Plums": "",
    "Raspberries": "",
    "Strawberries": "",
    "Watermelon": "",
    "Beans": "",
    "Beets": "",
    "Carrots": "",
    "Corn": "",
    "Cucumber": "",
    "Eggplant": "",
    "Garlic": "",
    "Kale": "",
    "Onions (green)": "",
    "Onions (red)": "",
    "Peas (green)": "",
    "Peas (snow)": "",
    "Peppers": "",
    "Potatoes": "",
    "Pumpkin": "",
    "Squash": "",
    "Tomatoes": "",
    "Zucchini": "",
    "Beer": "",
    "Cider": "",
    "Wine": "",
    "Apple Cider": "",
    "Cheese": "",
    "Eggs": "",
    "Honey": "",
    "Jams": "",
    "Maple Syrup": "",
    "Spelt": "",
    "Beef": "",
    "Chicken": "",
    "Fish": "Y",
    "Lamb": "",
    "Pork": "",
    "Sausage": "",
    "Turkey": "",
    "FARM TOTALS": 1
  },
  {
    "Name": "Ryan's Sweet Maple",
    "Name (shortform)": "Ryan's Maple",
    "Address": "8354 Rawlings Rd",
    "Town": "Lambton Shores",
    "Distance (km)": "29.9km",
    "Phone": "519-786-4729",
    "Image": "img/Farm/farm03.jpg",
    "Monday": "N/A",
    "Tuesday": "N/A",
    "Wednesday": "N/A",
    "Thursday": "N/A",
    "Friday": "N/A",
    "Saturday": "N/A",
    "Sunday": "N/A",
    "Apples": "",
    "Apricots": "",
    "Blueberries": "",
    "Fruit Juices": "",
    "Gooseberries": "",
    "Muskmelon": "",
    "Nectarines": "",
    "Peaches": "",
    "Pears": "",
    "Plums": "",
    "Raspberries": "",
    "Strawberries": "",
    "Watermelon": "",
    "Beans": "",
    "Beets": "",
    "Carrots": "",
    "Corn": "",
    "Cucumber": "",
    "Eggplant": "",
    "Garlic": "",
    "Kale": "",
    "Onions (green)": "",
    "Onions (red)": "",
    "Peas (green)": "",
    "Peas (snow)": "",
    "Peppers": "",
    "Potatoes": "",
    "Pumpkin": "",
    "Squash": "",
    "Tomatoes": "",
    "Zucchini": "",
    "Beer": "",
    "Cider": "",
    "Wine": "",
    "Apple Cider": "",
    "Cheese": "",
    "Eggs": "",
    "Honey": "",
    "Jams": "",
    "Maple Syrup": "Y",
    "Spelt": "",
    "Beef": "",
    "Chicken": "",
    "Fish": "",
    "Lamb": "",
    "Pork": "",
    "Sausage": "",
    "Turkey": "",
    "FARM TOTALS": 1
  },
  {
    "Name": "Stone House Brewing Company",
    "Name (shortform)": "Stone House Brewing",
    "Address": "76050 Parr Line",
    "Town": "Varna",
    "Distance (km)": "36.8km",
    "Phone": "519-281-1167",
    "Image": "img/Farm/farm04.jpg",
    "Monday": "11:00-18:00",
    "Tuesday": "11:00-18:00",
    "Wednesday": "11:00-18:00",
    "Thursday": "11:00-18:00",
    "Friday": "10:00-20:00",
    "Saturday": "10:00-20:00",
    "Sunday": "10:00-20:00",
    "Apples": "",
    "Apricots": "",
    "Blueberries": "",
    "Fruit Juices": "",
    "Gooseberries": "",
    "Muskmelon": "",
    "Nectarines": "",
    "Peaches": "",
    "Pears": "",
    "Plums": "",
    "Raspberries": "",
    "Strawberries": "",
    "Watermelon": "",
    "Beans": "",
    "Beets": "",
    "Carrots": "",
    "Corn": "",
    "Cucumber": "",
    "Eggplant": "",
    "Garlic": "",
    "Kale": "",
    "Onions (green)": "",
    "Onions (red)": "",
    "Peas (green)": "",
    "Peas (snow)": "",
    "Peppers": "",
    "Potatoes": "",
    "Pumpkin": "",
    "Squash": "",
    "Tomatoes": "",
    "Zucchini": "",
    "Beer": "Y",
    "Cider": "",
    "Wine": "",
    "Apple Cider": "",
    "Cheese": "",
    "Eggs": "",
    "Honey": "",
    "Jams": "",
    "Maple Syrup": "",
    "Spelt": "",
    "Beef": "",
    "Chicken": "",
    "Fish": "",
    "Lamb": "",
    "Pork": "",
    "Sausage": "",
    "Turkey": "",
    "FARM TOTALS": 1
  },
  {
    "Name": "The Whole Pig",
    "Name (shortform)": "The Whole Pig",
    "Address": "37871 Dashwood Rd",
    "Town": "Dashwood",
    "Distance (km)": "12.7km",
    "Phone": "519-851-3327",
    "Image": "img/Farm/farm05.jpg",
    "Monday": "9:00-17:00",
    "Tuesday": "9:00-17:00",
    "Wednesday": "9:00-17:00",
    "Thursday": "9:00-17:00",
    "Friday": "9:00-17:00",
    "Saturday": "Call on Weekend",
    "Sunday": "Call on Weekend",
    "Apples": "",
    "Apricots": "",
    "Blueberries": "",
    "Fruit Juices": "",
    "Gooseberries": "",
    "Muskmelon": "",
    "Nectarines": "",
    "Peaches": "",
    "Pears": "",
    "Plums": "",
    "Raspberries": "",
    "Strawberries": "",
    "Watermelon": "",
    "Beans": "",
    "Beets": "",
    "Carrots": "",
    "Corn": "",
    "Cucumber": "",
    "Eggplant": "",
    "Garlic": "Y",
    "Kale": "",
    "Onions (green)": "",
    "Onions (red)": "",
    "Peas (green)": "",
    "Peas (snow)": "",
    "Peppers": "",
    "Potatoes": "",
    "Pumpkin": "",
    "Squash": "",
    "Tomatoes": "",
    "Zucchini": "",
    "Beer": "",
    "Cider": "",
    "Wine": "",
    "Apple Cider": "",
    "Cheese": "Y",
    "Eggs": "",
    "Honey": "",
    "Jams": "",
    "Maple Syrup": "",
    "Spelt": "",
    "Beef": "",
    "Chicken": "",
    "Fish": "",
    "Lamb": "",
    "Pork": "Y",
    "Sausage": "",
    "Turkey": "",
    "FARM TOTALS": 3
  },
  {
    "Name": "Twin Pines Orchards & Cidar House",
    "Name (shortform)": "Twin Pines",
    "Address": "8169 Kennedy Line",
    "Town": "Thedford",
    "Distance (km)": "20.2km",
    "Phone": "519-296-5558",
    "Image": "img/Farm/farm06.jpg",
    "Monday": "10:00-17:00",
    "Tuesday": "10:00-17:00",
    "Wednesday": "10:00-17:00",
    "Thursday": "10:00-17:00",
    "Friday": "10:00-17:00",
    "Saturday": "9:00-17:00",
    "Sunday": "13:00-17:00",
    "Apples": "Y",
    "Apricots": "",
    "Blueberries": "",
    "Fruit Juices": "",
    "Gooseberries": "",
    "Muskmelon": "",
    "Nectarines": "",
    "Peaches": "",
    "Pears": "",
    "Plums": "",
    "Raspberries": "",
    "Strawberries": "",
    "Watermelon": "",
    "Beans": "",
    "Beets": "",
    "Carrots": "",
    "Corn": "",
    "Cucumber": "",
    "Eggplant": "",
    "Garlic": "",
    "Kale": "",
    "Onions (green)": "",
    "Onions (red)": "",
    "Peas (green)": "",
    "Peas (snow)": "",
    "Peppers": "",
    "Potatoes": "",
    "Pumpkin": "Y",
    "Squash": "",
    "Tomatoes": "",
    "Zucchini": "",
    "Beer": "",
    "Cider": "Y",
    "Wine": "",
    "Apple Cider": "",
    "Cheese": "",
    "Eggs": "",
    "Honey": "",
    "Jams": "Y",
    "Maple Syrup": "",
    "Spelt": "",
    "Beef": "",
    "Chicken": "",
    "Fish": "",
    "Lamb": "",
    "Pork": "",
    "Sausage": "",
    "Turkey": "",
    "FARM TOTALS": 4
  },
  {
    "Name": "Williamson Farms",
    "Name (shortform)": "Williamson",
    "Address": "7679 Lakeshore Rd",
    "Town": "Lambton Shores",
    "Distance (km)": "21.6km",
    "Phone": "519-243-2960",
    "Image": "img/Farm/farm07.jpg",
    "Monday": "10:00-17:00",
    "Tuesday": "10:00-17:00",
    "Wednesday": "10:00-17:00",
    "Thursday": "10:00-17:00",
    "Friday": "10:00-17:00",
    "Saturday": "10:00-17:00",
    "Sunday": "10:00-17:00",
    "Apples": "",
    "Apricots": "",
    "Blueberries": "",
    "Fruit Juices": "",
    "Gooseberries": "",
    "Muskmelon": "",
    "Nectarines": "",
    "Peaches": "",
    "Pears": "",
    "Plums": "",
    "Raspberries": "",
    "Strawberries": "",
    "Watermelon": "",
    "Beans": "",
    "Beets": "",
    "Carrots": "",
    "Corn": "",
    "Cucumber": "",
    "Eggplant": "",
    "Garlic": "",
    "Kale": "",
    "Onions (green)": "",
    "Onions (red)": "",
    "Peas (green)": "",
    "Peas (snow)": "",
    "Peppers": "",
    "Potatoes": "",
    "Pumpkin": "",
    "Squash": "",
    "Tomatoes": "",
    "Zucchini": "",
    "Beer": "",
    "Cider": "",
    "Wine": "",
    "Apple Cider": "",
    "Cheese": "",
    "Eggs": "",
    "Honey": "",
    "Jams": "",
    "Maple Syrup": "Y",
    "Spelt": "",
    "Beef": "Y",
    "Chicken": "",
    "Fish": "",
    "Lamb": "",
    "Pork": "Y",
    "Sausage": "Y",
    "Turkey": "",
    "FARM TOTALS": 4
  }
]
  var products = {
    "Fruits": {
      "headerImg":"img/fruit-md/strawberry_header.jpg",
      "list": [
        {
          "name":"Apples",
          "img":"img/fruit/apples.jpg",
          "img_lrg":"img/fruit-md/apples.jpg",
          "selected":false
        },{
          "name":"Apricots",
          "img":"img/fruit/apricots.jpg",
          "img_lrg":"img/fruit-md/apricots.jpg",
          "selected":false
        },{
          "name":"Blueberries",
          "img":"img/fruit/blueberries.jpg",
          "img_lrg":"img/fruit-md/blueberries.jpg",
          "selected":false
        },{
          "name":"Fruit Juices",
          "img":"img/fruit/fruit_juice.jpg",
          "img_lrg":"img/fruit-md/fruit_juice.jpg",
          "selected":false
        },{
          "name":"Nectarines",
          "img":"img/fruit/nectarines.jpg",
          "img_lrg":"img/fruit-md/nectarines.jpg",
          "selected":false
        },{
          "name":"Peaches",
          "img":"img/fruit/peaches.jpg",
          "img_lrg":"img/fruit-md/peaches.jpg",
          "selected":false
        },{
          "name":"Pears",
          "img":"img/fruit/pears.jpg",
          "img_lrg":"img/fruit-md/pears.jpg",
          "selected":false
        },{
          "name":"Plums",
          "img":"img/fruit/plums.jpg",
          "img_lrg":"img/fruit-md/plums.jpg",
          "selected":false
        },{
          "name":"Raspberries",
          "img":"img/fruit/raspberries.jpg",
          "img_lrg":"img/fruit-md/raspberries.jpg",
          "selected":false
        },{
          "name":"Strawberries",
          "img":"img/fruit/strawberries.jpg",
          "img_lrg":"img/fruit-md/strawberries.jpg",
          "selected":false
        },{
          "name":"Watermelon",
          "img":"img/fruit/watermelon.jpg",
          "img_lrg":"img/fruit-md/watermelon.jpg",
          "selected":false
        }
      ]
    },
    "Vegetables": {
      "headerImg":"img/vegetables-md/peppers_header.jpg",
      "list": [
          {
            "name":"Beans",
            "img":"img/vegetables/beans.jpg",
            "img_lrg":"img/vegetables-md/beans.jpg",
            "selected":false
          },{
            "name":"Beets",
            "img":"img/vegetables/beets.jpg",
            "img_lrg":"img/vegetables-md/beets.jpg",
            "selected":false
          },
          // {
          //   "name":"Carrots",
          //   "img":"img/vegetables/carrots.jpg",
          //   "img_lrg":"img/vegetables-md/carrots.jpg",
          //   "selected":false
          // },
          {
            "name":"Corn",
            "img":"img/vegetables/corns.jpg",
            "img_lrg":"img/vegetables-md/corns.jpg",
            "selected":false
          },{
            "name":"Cucumber",
            "img":"img/vegetables/cucumbers.jpg",
            "img_lrg":"img/vegetables-md/cucumbers.jpg",
            "selected":false
          },{
            "name":"Eggplant",
            "img":"img/vegetables/eggplants.jpg",
            "img_lrg":"img/vegetables-md/eggplants.jpg",
            "selected":false
          },{
            "name":"Garlic",
            "img":"img/vegetables/garlic.jpg",
            "img_lrg":"img/vegetables-md/garlic.jpg",
            "selected":false
          },
          // {
          //   "name":"Kale",
          //   "img":"img/vegetables/kale.jpg",
          //   "img_lrg":"img/vegetables-md/kale.jpg",
          //   "selected":false
          // },
          {
            "name":"Onions (green)",
            "img":"img/vegetables/onions_green.jpg",
            "img_lrg":"img/vegetables-md/onions_green.jpg",
            "selected":false
          },{
            "name":"Onions (red)",
            "img":"img/vegetables/onion_red.jpg",
            "img_lrg":"img/vegetables-md/onion_red.jpg",
            "selected":false
          },{
            "name":"Peas (green)",
            "img":"img/vegetables/peas.jpg",
            "img_lrg":"img/vegetables-md/peas.jpg",
            "selected":false
          },{
            "name":"Peas (snow)",
            "img":"img/vegetables/snow_peas.jpg",
            "img_lrg":"img/vegetables-md/snow_peas.jpg",
            "selected":false
          },{
            "name":"Peppers",
            "img":"img/vegetables/red_pepper.jpg",
            "img_lrg":"img/vegetables-md/red_pepper.jpg",
            "selected":false
          },{
            "name":"Potatoes",
            "img":"img/vegetables/potatoes.jpg",
            "img_lrg":"img/vegetables-md/potatoes.jpg",
            "selected":false
          },{
            "name":"Pumpkin",
            "img":"img/vegetables/pumpkins.jpg",
            "img_lrg":"img/vegetables-md/pumpkins.jpg",
            "selected":false
          },{
            "name":"Squash",
            "img":"img/vegetables/squash.jpg",
            "img_lrg":"img/vegetables-md/squash.jpg",
            "selected":false
          },{
            "name":"Tomatoes",
            "img":"img/vegetables/tomatoes.jpg",
            "img_lrg":"img/vegetables-md/tomatoes.jpg",
            "selected":false
          },{
            "name":"Zucchini",
            "img":"img/vegetables/zucchini.jpg",
            "img_lrg":"img/vegetables-md/zucchini.jpg",
            "selected":false
          }
        ]
      },
      "Other": {
      "headerImg":"img/others-md/honey3.jpg",
      "list": [
          {
            "name":"Apple Cider",
            "img":"img/others/apple_cider.jpg",
            "img_lrg":"img/others-md/apple_cider.jpg",
            "selected":false
          },{
            "name":"Cheese",
            "img":"img/others/cheese.jpg",
            "img_lrg":"img/others-md/cheese.jpg",
            "selected":false
          },{
            "name":"Eggs",
            "img":"img/others/eggs.jpg",
            "img_lrg":"img/others-md/eggs2.jpg",
            "selected":false
          },{
            "name":"Honey",
            "img":"img/others/honey.jpg",
            "img_lrg":"img/others-md/honey4.jpg",
            "selected":false
          },{
            "name":"Jams",
            "img":"img/others/jams.jpg",
            "img_lrg":"img/others-md/jams.jpg",
            "selected":false
          },{
            "name":"Maple Syrup",
            "img":"img/others/maple.jpg",
            "img_lrg":"img/others-md/maple.jpg",
            "selected":false
          }
        ]
      },
      "Meats": {
      "headerImg":"img/meat-md/beef-2.jpg",
      "list": [
        {
          "name":"Beef",
          "img":"img/meat/beef-2.jpg",
          "img_lrg":"img/meat-md/beef-3.jpg",
          "selected":false
        },{
          "name":"Chicken",
          "img":"img/meat/chicken.jpg",
          "img_lrg":"img/meat-md/chicken.jpg",
          "selected":false
        },{
          "name":"Fish",
          "img":"img/meat/fish.jpg",
          "img_lrg":"img/meat-md/fish.jpg",
          "selected":false
        },{
          "name":"Lamb",
          "img":"img/meat/lamb.jpg",
          "img_lrg":"img/meat-md/lamb.jpg",
          "selected":false
        },{
          "name":"Pork",
          "img":"img/meat-md/pork.jpg",
          "img_lrg":"img/meat-md/pork.jpg",
          "selected":false
        },{
          "name":"Sausage",
          "img":"img/meat/sausages.jpg",
          "img_lrg":"img/meat-md/sausages.jpg",
          "selected":false
        },{
          "name":"Turkey",
          "img":"img/meat/turkey.jpg",
          "img_lrg":"img/meat-md/turkey.jpg",
          "selected":false
        }
      ]
    },
      "Alcohol": {
      "headerImg":"img/alcohol-md/alcohol.jpg",
      "list": [
        {
            "name":"Beer",
            "img":"img/alcohol/beer.jpg",
            "img_lrg":"img/alcohol-md/beer.jpg",
            "selected":false
        },{
            "name":"Cider",
            "img":"img/alcohol/cider.jpg",
            "img_lrg":"img/alcohol-md/cider.jpg",
            "selected":false
        },{
            "name":"Wine",
            "img":"img/alcohol/wine.jpg",
            "img_lrg":"img/alcohol-md/wine.jpg",
            "selected":false
        }
      ]
    }
  };
  //Setters
  var setProduct = function(type,index,state){
    if (type=="Fruits"){
      products.Fruits.list[index].selected = state;
      if (state==true){
        searchList.push(products.Fruits.list[index].name);
      }else{
        searchList.splice(searchList.indexOf(products.Fruits.list[index].name), 1);
      }
      // localStorage["productsInfo"] = JSON.stringify(products);
      return JSON.stringify(products.Fruits);
    }else if(type=="Vegetables"){
      products.Vegetables.list[index].selected = state;
      if (state==true){
        searchList.push(products.Vegetables.list[index].name);
      }else{
        searchList.splice(searchList.indexOf(products.Vegetables.list[index].name), 1);
      }
      // localStorage["productsInfo"] = JSON.stringify(products);
      return JSON.stringify(products.Vegetables);
    }else if(type=="Meats"){
      products.Vegetables.list[index].selected = state;
      if (state==true){
        searchList.push(products.Meats.list[index].name);
      }else{
        searchList.splice(searchList.indexOf(products.Meats.list[index].name), 1);
      }
      // localStorage["productsInfo"] = JSON.stringify(products);
      return JSON.stringify(products.Meats);
    }else if(type=="Other"){
      products.Vegetables.list[index].selected = state;
      if (state==true){
        searchList.push(products.Other.list[index].name);
      }else{
        searchList.splice(searchList.indexOf(products.Other.list[index].name), 1);
      }
      // localStorage["productsInfo"] = JSON.stringify(products);
      return JSON.stringify(products.Other);
    }else if(type=="Alcohol"){
      products.Alcohol.list[index].selected = state;
      if (state==true){
        searchList.push(products.Alcohol.list[index].name);
      }else{
        searchList.splice(searchList.indexOf(products.Alcohol.list[index].name), 1);
      }
      // localStorage["productsInfo"] = JSON.stringify(products);
      return JSON.stringify(products.Alcohol);
    }
  };
  var addToCartNames = function(farmName){
    cartNames.push(farmName);
    return cartNames;
  }
  var addToCart = function(farm){
    cart.push(JSON.parse(farm));
    return JSON.stringify(cart);
  }
  var removeCartName = function(farmName){
    var index = cartNames.indexOf(farmName);
    cartNames.splice(index,1);
    return cartNames;
  }
  var removeFromCart = function(farmName){
    var index;
    for(i=0;i<cart.length;i++){
      if (cart[i].Name==farmName){
        index=i;
      }
    }
    cart.splice(index,1);
    return JSON.stringify(cart);
  }
  var setAllProducts = function(savedProducts){
    products = JSON.parse(savedProducts);
  };

  // Getters
  var getProducts = function(type) {
    if (type=="Fruits"){
      return JSON.stringify(products.Fruits);
    }else if(type=="Vegetables"){
      return JSON.stringify(products.Vegetables);
    }else if(type=="Meats"){
      return JSON.stringify(products.Meats);
    }else if(type=="Other"){
      return JSON.stringify(products.Other);
    }else if(type=="Alcohol"){
      return JSON.stringify(products.Alcohol);
    }
  };
  var getFarms = function(){
    return JSON.stringify(farms);
  }
  var getPotentialCart = function(){
    return JSON.stringify(potentialCart);
  }
  var getPotentialCartNames = function(){
    return potentialCartNames;
  }
  var getCart = function(){
    return JSON.stringify(cart);
  }
  var getCartNames = function(){
    return cartNames;
  }
  var getSearchList = function(){
      return searchList;
  }
  // Methods
  var refreshCart = function(){
    potentialCart = [];
    cart = [];
    potentialCartNames = [];
    for (i = 0;i<searchList.length;i++){
      for (e=0;e<farms.length;e++){
        if(farms[e][searchList[i]] == "Y"){
          if(potentialCartNames.indexOf(farms[e].Name)==-1){
            potentialCart.push(farms[e]);
            cart.push(farms[e]);
            potentialCartNames.push(farms[e].Name);
          }
        }
      }
    }
    // for (i=0;i<cartNames.length;i++){x
    //   if (potentialCartNames.indexOf(cartNames[i])>=0){
    //     cartNames.push(cartNames[i]);
    //     cart.push(cart[i]);
    //   }
    // }
  };


  return {
    getProducts:getProducts,
    setProduct:setProduct,
    setAllProducts:setAllProducts,
    refreshCart:refreshCart,
    getPotentialCart:getPotentialCart,
    getPotentialCartNames:getPotentialCartNames,
    getFarms:getFarms,
    getCart:getCart,
    getCartNames:getCartNames,
    addToCartNames:addToCartNames,
    addToCart:addToCart,
    removeCartName:removeCartName,
    removeFromCart:removeFromCart,
    getSearchList:getSearchList
  };

});