
function loadFileInto(fromFile, whereTo) {

	// 1. creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// 2. defines the GET/POST method, the source, and the async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// 3. provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {

		if ((this.readyState == 4) && (this.status == 200)) { // if .readyState is 4, the process is done; and if .status is 200, there were no HTTP errors

			document.querySelector(whereTo).innerHTML = this.responseText; // insert received output directly into the chosen DOM object

		} else if ((this.readyState == 4) && (this.status != 200)) { // if .readyState is 4, the process is done; and if .status is NOT 200, output the error into the console

			console.log("Error: " + this.responseText);

		}

	} // end ajax.onreadystatechange function

	// 4. let's go -- initiate request and process the responses
	ajax.send();

}

// new Recipe object
function Recipe(recipeName, contributorName, imageURL, ingredientsFilename, equipmentFilename, directionsFilename) {

  this.recipe = recipeName;
  this.contributor = contributorName;
  this.img = imageURL;
  this.ingredients = ingredientsFilename;
  this.equipment = equipmentFilename;
  this.directions = directionsFilename;

  this.displayRecipe = function() {

    document.querySelector("#tunnelbkgd").innerHTML = this.recipe;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#tunnelbkgd").style.backgroundImage = "url(" + this.img + ")";
    
    loadFileInto(this.ingredients, "#ingredients ul");
    loadFileInto(this.equipment, "#equipment ul");
    loadFileInto(this.directions, "#directions ol");
  }

}

CrumbledChicken = new Recipe("Crumbed Chicken Tenderloins", 
                        "Maya Toleuova", 
                        "https://images.unsplash.com/photo-1562967914-608f82629710?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1746&q=80", 
                        "ingredients0.html",
                        "equipment0.html",
                        "directions0.html");

ChocolateChipCookies = new Recipe("Best Chocolate Chip Cookies", 
                        "Fallon Lytwyn", 
                        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80", 
                        "ingredients1.html", 
                        "equipment1.html", 
                        "directions1.html");



Snickerdoodles = new Recipe("Mrs. Sigg's Snickerdoodles", 
                          "Theo McBurney", 
                          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1751192.jpg&w=596&h=596&c=sc&poi=face&q=85", 
                          "ingredients2.html", 
                          "equipment2.html", 
                          "directions2.html");


window.onload = function() {
 document.querySelector("#ingredients").onclick = function() {
    document.querySelector("#ingredients ul").classList.toggle("showMe");
  }
  
  document.querySelector("#equipment").onclick = function() {
    document.querySelector("#equipment ul").classList.toggle("showMe");
  }
  
  document.querySelector("#directions").onclick = function() {
    document.querySelector("#directions ol").classList.toggle("showMe");
  
  }
  
  
  document.querySelector("#footer").innerHTML += "<p>I haven't tried this recipe yet.</p>";
} 

document.querySelector("#r1").onclick = function() {
  CrumbledChicken.displayRecipe();
}

document.querySelector("#r2").onclick = function() {
  ChocolateChipCookies.displayRecipe();
}

document.querySelector("#r3").onclick = function() {
  Snickerdoodles.displayRecipe();
  
} // end of window.onload


