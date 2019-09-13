function showmsgnew(title,msg,submittitle,closetitle,anon) 
{	
	if(anon == null)
	{
			$(".modal-footer .btn-primary").click(function(){
			$('#showModal').modal('hide');	
			});
			$('#showModal').focus();
	}
	else
	{
		confirmationmsgset(title, msg ,submittitle,closetitle);
		$('#showModal').modal({
         backdrop: 'static',
         keyboard: false
		});
		$('#showModal').focus();
		
		
		$(".modal-footer .btn-primary").click(function(){
			$('#showModal').modal('hide');	
		});
		
		$(".btn-primary").click(function(){
			anon();
		});
	}


	confirmationmsgset(title, msg ,submittitle,closetitle);
		$('#showModal').modal({
         backdrop: 'static',
         keyboard: false
		});
		
		 $('#showModal').focus();
}



function showmsg(title,msg,submittitle,closetitle,anon) 
{	
	if(anon == null)
	{
			$(".modal-footer .btn-primary").click(function(){
			$('#showModal').modal('hide');	
			});
			$('#showModal').focus();
	}
	else
	{
		confirmationmsgset(title, msg ,submittitle,closetitle);
		$('#showModal').modal({
         backdrop: 'static',
         keyboard: false
		});
		$('#showModal').focus();
		anon();
	}


	confirmationmsgset(title, msg ,submittitle,closetitle);
		$('#showModal').modal({
         backdrop: 'static',
         keyboard: false
		});
		
		 $('#showModal').focus();
}

function confirmationmsgset(title, msg, confirmbutton, cancelbutton) 
{
	
		var msgdiv="<div id=\"confirmationbox\" ><div class=\"modal fade\" id=\"showModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" ><div class=\"modal-dialog\" role=\"document\" ><div class=\"modal-content\" ><div class=\"modal-header\" ><button type=\"button\" class=\"closemodal\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><h4 class=\"modal-title\" id=\"myModalLabel\"></h4></div><div class=\"modal-body\" id=\"confirmationMessage\" name=\"confirmationMessage\"></br></div><div class=\"modal-footer\"><button id=\"btncancel\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button><button id=\"btnconfirm\" type=\"button\" class=\"btn btn-primary\"></button></div></div></div></div></div>";
		
	   //check to see if confirmationbox exist
	   
	   
	   
	   var bodytag = document.getElementsByTagName('body')[0];
 
	   if(!document.getElementById('confirmationbox'))
		{
			bodytag.insertAdjacentHTML('afterbegin', msgdiv)
			
			$(".modal-footer .btn-primary").click(function(){
				$('#showModal').modal('hide');	
			});
			
		}
		

			
		document.getElementById("myModalLabel").innerHTML = title;
		
		if(confirmbutton.length > 0)
		{
			document.getElementById("btnconfirm").style.display = "inline";
			document.getElementById("btnconfirm").innerHTML = confirmbutton;
		}
		else
		{
			document.getElementById("btnconfirm").style.display = "none";
			document.getElementById("btnconfirm").innerHTML = "";
		}
		
		document.getElementById("confirmationMessage").innerHTML = msg;
		
		
		
		if(cancelbutton.length > 0)
		{
			document.getElementById("btncancel").style.display = "inline";
			document.getElementById("btncancel").innerHTML = cancelbutton;
		}
		else
		{
			document.getElementById("btncancel").style.display = "none";
			document.getElementById("btncancel").innerHTML = "";			
		}
}


