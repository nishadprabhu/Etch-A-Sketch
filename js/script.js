var numBoxes = 51;
$(document).ready(function() {
	while(numBoxes > 50) {
		numBoxes = prompt('How many boxes do you want per row? Must be less than or equal to 50');
		if(numBoxes > 50) alert('Must be less than or equal to 50');
	}
	if(numBoxes > 50) {
		alert('Oops! You did not select a good size. Reload the page');
	}
	else {
		createSketch(numBoxes);
	startSketching();
	}
	
});

var createSketch = function(numberOfBoxes) {
	var divDim = (700.0 - numberOfBoxes* 2) / numberOfBoxes;
	for(var i = 0; i < numberOfBoxes; i++) {
		jQuery('<div/>', {
		    class: 'row',
		    id: 'row' + i
		}).appendTo('#container');
		
		for(var j = 0; j < numberOfBoxes; j++) {
			jQuery('<div/>', {
		    class: 'cell',
			}).appendTo('#row'+i);
			
		}
	}
	$('.row').height(700.0 / numberOfBoxes);
		$('.row').width(700);
		$('.cell').height(divDim);
			$('.cell').width(divDim);
	$('#container').fadeIn(300);
	$('.cell').fadeIn(300);
	$('#clear').fadeIn(300);
	$('#clear').css('display','block');
}

var startSketching = function() {
	var down = false;
	$(document).mousedown(function() {
	    down = true;
	}).mouseup(function() {
	    down = false;  
	});
	$('.cell').mouseenter(function() {
		if(down){
			$(this).css('background-color', 'red');
		}
	});
	$('.cell').mousedown(function() {
		$(this).css('background-color', 'red');
	});

	

}

var clearBoard = function() {
	$('.cell').css('background-color', 'white');
}
