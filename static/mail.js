$(function(){
	$('#mail-list').text("Andrew was here");
	$('#mail-body').text("He was here too!");
	$('#refresh').click(function(){
		$('#mail-list').text('Getting mail. Please wait...');
		$.getJSON('/mail',function(ml){
			$('#mail-list').empty();
			for(var i=0;i<ml.length;i++){
				var d = $('<div/>');
				d.text(ml[i]);
				$('#mail-list').append(d);
			}
		});
	})
})