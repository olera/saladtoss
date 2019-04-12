function mySalad() {
	
	var myGreen = ['arugula &', 'spinach &' , 'kale &' , 'romaine &', 'romaine, cabbage blend &' ];
	var top = [ 'beet' , 'carrot' , 'celery' , 'cucumber' , 'grape tomato' , 'jalapeño' , 'onion' , 'broccoli' , 'sliced radish' , 'snap pea' , 'brussel sprouts' , 'sweet potato' , 'rice' , 'corn' ];
	var myProtein = ['tofu' , 'lentils' , 'quinoa ' , 'black beans' , 'chickpeas' , 'edamame', 'chicken' , 'avocado' , 'shrimp' , 'falafel' ];
	var myDressing= ['buttermilk ranch dressing' , 'blue cheese dressing' , 'russian dressing' , 'caesar dressing', 'balsamic vinaigrette', 'olive oil' , 'red wine vinegar' , 'balsamic vinegar' , 'tahini' , 'lemon' , 'spicy seasame vinaigrette' , 'chipotle vinaigrette ' , 'white balsamic vinaigrette ' ]; 


	var leaf = myGreen[Math.round(Math.random()*(myGreen.length-1))];
	var veg = top[Math.round(Math.random()*(top.length-1))];
	var protein = myProtein[Math.round(Math.random()*(myProtein.length-1))];
	var dressing = myDressing[Math.round(Math.random()*(myDressing.length-1))];
	
	document.getElementById('salads').innerHTML = '<div>' + leaf + ' ' + veg + ' salad with ' + protein + '<br>' + dressing + ' on the side </div>'
	
}
