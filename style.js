 // let endPoint = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007"
      // const test =async() => {
      //   let response = await fetch(endPoint)
      //   let jsonResponse = await response.json()
      //   console.log(jsonResponse)
      //   console.log(jsonResponse.objectURL)
      //   // food.innerHTML = `<img src="objectURL">`
      // }
      const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a3483075edmsh385edc80c4772a7p110f6bjsnee638c5a2a2b',
            'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
    };
    
    
    let found
     const test = async() =>{
      let response = await fetch('https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple', options)
        let jsonResponse = await response.json()
        // console.log(jsonResponse)
    
      jsonResponse.hints.filter((value) =>{
        if (food.value == value.food.label){
          found = true
          // alert ("hall")
          console.log(value)
          food_image.innerHTML += `<img src="${value.food.image}"><br>`
        } else if(food.value != value.food.label && food.value != ""){
          found = false
          
        }
         
        // console.log(value.food.image)
        
      })
      if(found == false){
        alert ("not found")
      } 
     }
    
    