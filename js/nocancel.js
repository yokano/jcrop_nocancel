/**
 * Jcrop で選択範囲をキャンセルさせないテスト
 */
$(function() {
	var api = null,  // JcropAPI
		selected = null;  // 選択された範囲
	
	$('#jcrop-img').Jcrop({
		onSelect: function(area) {
			selected = area;
		},
		onRelease: function() {
			if(selected == null) {
				return;
			}
			api.setSelect([selected.x, selected.y, selected.x2, selected.y2]);
		}
	}, function() {
		api = this;
	});
});