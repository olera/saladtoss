function mySalad() {
	
	var myGreen = ['arugula &', 'spinach &' , 'kale &' , 'romaine &' ];
	var top = [ 'beet' , 'carrot' , 'celery' , 'cucumber' , 'grape tomato' , 'jalapeño' , 'onion' , 'broccoli' , 'sliced radish' , 'snap pea' , 'cilantro' , 'sweet potato' , 'rice' , 'corn' ];
	var myProtein = ['tofu' , 'lentils' , 'quinoa ' , 'black beans' , 'chickpeas' , 'edamame', 'chicken' , 'steak' , 'shrimp' , 'turkey' ];
	var myDressing= ['buttermilk ranch dressing' , 'poblano ranch dressing' , 'yogurt cucumber dressing' , 'caesar dressing', 'balsamic vinaigrette', 'olive oil' , 'red wine vinegar' , 'balsamic vinegar' , 'tahini' , 'lemon' , 'dijon' , 'kale pesto vinaigrette' , 'chipotle vinaigrette ' , 'miso ginger vinaigrette ' ]; 


	var leaf = myGreen[Math.round(Math.random()*(myGreen.length-1))];
	var veg = top[Math.round(Math.random()*(top.length-1))];
	var protein = myProtein[Math.round(Math.random()*(myProtein.length-1))];
	var dressing = myDressing[Math.round(Math.random()*(myDressing.length-1))];
	
	document.getElementById('salads').innerHTML = '<div>' + leaf + ' ' + veg + ' salad with ' + protein + '<br>' + dressing + ' on the side </div>'
	
}