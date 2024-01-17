/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let list = [];

  for(let obj of transactions)
  {
      // if same category already present in list of objects then only update the totalSpent
      flag = false;
      for(let vals of list)
      {
          if(vals['category'] == obj['category'])
          {
              flag = true;    // indicates object of same category is found
              vals['totalSpent'] = vals['totalSpent'] + obj['price'];
              break;
          }
      }

      // else push the new object category with its price
      if(!flag)
        list.push({category: obj['category'], totalSpent: obj['price']});
  }

  return list;
}

module.exports = calculateTotalSpentByCategory;