$(document).ready(function(){
	$('a[href^="http://dc_"]').each(function(){
		$(this).click(function(event){
			event.preventDefault();
		});
		var myHref = $(this).attr('href');
		var myRE = /(\d+)_(\d+)/;
		var embedIDs = myRE.exec(myHref);
		var docID = embedIDs[1];
		var noteID = embedIDs[2];
		$(this).qtip({
			content:'<div id="DC-note-'+noteID+'" class="DC-note-container"></div>',
			position:{
				corner:{
					tooltip:'bottomMiddle',
					target:'topMiddle'
				}
			},
			show:{
				when:'click',
				solo:true
			},
			hide:'unfocus',
			style:{
				width:700,
				height:'auto',
				padding:0,
				tip:'bottomMiddle',
				name:'light'
			},
			api:{
				onRender:function(){
					dc.embed.loadNote('http://www.documentcloud.org/documents/'+docID+'/annotations/'+noteID+'.js');
				}
			}
		})
		.attr('href','javascript:;')
		.attr("target","")
		.css("font-weight","bold")
		.css('font-style','italic')
		.append("<img src='http://php.delawareonline.com/common/third-party/document-cloud/img/document-icon.png' style='margin:0 3px;'>");
	});
	// The following line adds a key with the document icon. The jQuery selector is going to be site specific, so adjust accordingly.
	// $(".ody-sub-filed").append("<br><li>Click <img src='http://php.delawareonline.com/common/third-party/document-cloud/img/document-icon.png' /> icons to preview documents in the story.</li>");
});
