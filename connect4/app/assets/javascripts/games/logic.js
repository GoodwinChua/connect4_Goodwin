$( function(){
	
	var hello = new Tray(6,7);
	
	hello.initialize();
	
	var player_turn = 1;
	var isStart = false;
		
	var restartGame = function(){
		$("#start").show();
		$("#start").text("Restart Game");
		location.reload();
	}
	var displayWinner = function(){
		var playerNum = hello.getWinner();
		$('#sound_effect')[0].currentTime = 0;
		$('#sound_effect')[0].play();
		$('h1').text("Player " + player_turn + "'s turn!");
		if ( playerNum != 0 && playerNum != null){
			$('h1').text("Player " + playerNum + " won!");
			restartGame();
		}
		else if ( playerNum == -1) {//Draw
			$('h1').text("Draw!");
			restartGame();
		}
	}

	$("#start").click(function(){
		isStart = !isStart;
		if ( isStart){
			$("#start").hide();
		}
		else {
			$("#start").show();
		}
		
		$("#col0").click(function(){
		row = hello.dropCoin(player_turn, 0);
		if ( row != null ){
			var newid = "cell_" + row + "0" + player_turn;
			var newdiv = "<div id = '" + newid + "' >";
			$('#coin_parent').append(newdiv).find(newid).hide();
			player_turn = (player_turn % 2) + 1;
			var howleft = $('#col0').position().left + 380;
			var howtop = ($('#col0').position().top + (62 * row) + 107);
			var findWhat = "#" + newid;
			$(findWhat).css({left: howleft, position:'absolute'});
			$(findWhat).show().animate({top: howtop, left: howleft}, 
													500, 
													function(){
														displayWinner();
													});
		}
		});
		
		$("#col1").click(function(){
			row = hello.dropCoin(player_turn, 1);
			if ( row != null ){
				var newid = "cell_" + row + "1" + player_turn;
				var newdiv = "<div id = '" + newid + "' >";
				$('#coin_parent').append(newdiv).find(newid).hide();
				player_turn = (player_turn % 2) + 1;
				var howleft = $('#col1').position().left + 439 + 25;
				var howtop = ($('#col1').position().top + (62 * row) + 107);
				var findWhat = "#" + newid;
				$(findWhat).css({left: howleft, position:'absolute'});
				$(findWhat).show().animate({top: howtop, left: howleft}, 
														500, 
														function(){
															displayWinner();
														});
			}
		});
		
		$("#col2").click(function(){
			row = hello.dropCoin(player_turn, 2);
			if ( row != null ){
				var newid = "cell_" + row + "2" + player_turn;
				var newdiv = "<div id = '" + newid + "' >";
				$('#coin_parent').append(newdiv).find(newid).hide();
				player_turn = (player_turn % 2) + 1;
				var howleft = $('#col2').position().left + 522 + 25;
				var howtop = ($('#col2').position().top + (62 * row) + 107);
				var findWhat = "#" + newid;
				$(findWhat).css({left: howleft, position:'absolute'});
				$(findWhat).show().animate({top: howtop, left: howleft}, 
														500, 
														function(){
															displayWinner();
														});
			}
		});
		$("#col3").click(function(){
			row = hello.dropCoin(player_turn, 3);
			if ( row != null ){
				var newid = "cell_" + row + "3" + player_turn;
				var newdiv = "<div id = '" + newid + "' >";
				$('#coin_parent').append(newdiv).find(newid).hide();
				player_turn = (player_turn % 2) + 1;
				var howleft = $('#col3').position().left + 610 + 25;
				var howtop = ($('#col3').position().top + (62 * row) + 107);
				var findWhat = "#" + newid;
				$(findWhat).css({left: howleft, position:'absolute'});
				$(findWhat).show().animate({top: howtop, left: howleft}, 
														500, 
														function(){
															displayWinner();
														});
			}
		});
		$("#col4").click(function(){
			row = hello.dropCoin(player_turn, 4);
			if ( row != null ){
				var newid = "cell_" + row + "4" + player_turn;
				var newdiv = "<div id = '" + newid + "' >";
				$('#coin_parent').append(newdiv).find(newid).hide();
				player_turn = (player_turn % 2) + 1;
				var howleft = $('#col4').position().left + 693 + 25;
				var howtop = ($('#col4').position().top + (62 * row) + 107);
				var findWhat = "#" + newid;
				$(findWhat).css({left: howleft, position:'absolute'});
				$(findWhat).show().animate({top: howtop, left: howleft}, 
														500, 
														function(){
															displayWinner();
														});
			}
		});
		$("#col5").click(function(){
			row = hello.dropCoin(player_turn, 5);
			if ( row != null ){
				var newid = "cell_" + row + "5" + player_turn;
				var newdiv = "<div id = '" + newid + "' >";
				$('#coin_parent').append(newdiv).find(newid).hide();
				player_turn = (player_turn % 2) + 1;
				var howleft = $('#col5').position().left + 776 + 25;
				var howtop = ($('#col5').position().top + (62 * row) + 107);
				var findWhat = "#" + newid;
				$(findWhat).css({left: howleft, position:'absolute'});
				$(findWhat).show().animate({top: howtop, left: howleft}, 
														500, 
														function(){
															displayWinner();
														});
			}
		});
		$("#col6").click(function(){
			row = hello.dropCoin(player_turn, 6);
				if ( row != null ){
				var newid = "cell_" + row + "6" + player_turn;
				var newdiv = "<div id = '" + newid + "' >";
				$('#coin_parent').append(newdiv).find(newid).hide();
				player_turn = (player_turn % 2) + 1;
				var howleft = $('#col6').position().left + 862 + 25;
				var howtop = ($('#col6').position().top + (62 * row) + 107);
				var findWhat = "#" + newid;
				$(findWhat).css({left: howleft, position:'absolute'});
				$(findWhat).show().animate({top: howtop, left: howleft}, 
														500, 
														function(){
															displayWinner();
														});
			}
		});
		
	});
	
	
} )
