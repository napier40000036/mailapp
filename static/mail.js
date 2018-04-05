$(function(){
	$('#mail-list').text("Andrew was here");
	$('#mail-body').text("He was here too!");
	$('#refresh').click(function(){
		$('#mail-list').text('Getting mail. Please wait...');
		$.getJSON('/mail',function(ml){
			$('#mail-list').empty();
			for(var i=0;i<ml.length;i++){
				var d = $('<div/>',{'class':'mail-summary'});
				var sender = $('<div/>',{text:ml[i].from,'class':'sender'});
				var subject = $('<div/>',{text:ml[i].subject,'class':'subject'});
				d.append(sender);
				d.append(subject);
				$('#mail-list').append(d);
			}
		});
	})
})