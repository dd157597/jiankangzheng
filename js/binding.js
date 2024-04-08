$(function(){
	//立即绑定
	$('#buttonBinging').click(function(e) {
		var cardID=$("input[name=cardID]").val();
		var name=$("input[name=name]").val();
		var fh=validationIdcard(cardID);
		if($("#idType").val()=='0'){
			if(fh!='验证通过!'){
				alert(fh);
				return false;
			}
		}
		if(!/^[\u4E00-\u9FA5]{1,80}$/.test(name)){
			alert("姓名不能为空或格式不正确！");
			return false;
		}
		//获取参数
		ajaxSubmit('/occ/m/binding/save', 'POST', {cardID:cardID,name:name,jspToken:$("input[name=jspToken]").val()}, function(d) {
			if(d.code==200){
				if(institutionsid=='67'){
					location.href="/occ/m/electronicHealthCertificate/getList?cardNo="+cardID;
				}else{
					location.href="/occ/m/binding/index";
				}
			}else{
				layer.alert(d.msg,{icon:2});
			}
		},function(e) { },'json')
	});
})

