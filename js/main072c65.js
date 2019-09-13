



startList = function() {
if (document.all&&document.getElementById) {
navRoot = document.getElementById("menublock");
for (i=0; i<navRoot.childNodes.length; i++) {
node = navRoot.childNodes[i];
if (node.nodeName=="DIV") {
node.onmouseover=function() {
this.className+=" over";
  }
  node.onmouseout=function() {
  this.className=this.className.replace(" over", "");
   }
   }
  }
 }
}

function deselect(e) {
  $('.pop').fadeToggle(function() {
    e.removeClass('selected');
  });    
}

function getCookie2(cname) 
{
var name = cname + "=";
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(';');
for(var i = 0; i <ca.length; i++) 
{
	var c = ca[i];
	while (c.charAt(0) == ' ')
	{
      c = c.substring(1);
	}
	if (c.indexOf(name) == 0)
	{
		return c.substring(name.length, c.length);
	}
}
return "";
}



function closeprofileratedialog()
{
  $( "#profileratedialog" ).fadeOut(400, function() {
  document.cookie = "profileratedialog=inactive; secure;"; 
});
}

$(function() {
  $('#toplogin').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('.pop').fadeToggle();
    }
    return false;
  });

  $('.close').on('click', function() {
    deselect($('#toplogin'));
    return false;
  });
});

$.fn.slideFadeToggle = function(easing, callback) {
  return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};

window.onload=startList;


            $(function() {
                $('#navigation > div').hover(
                function () {
                    var $this = $(this);
					//$this.find('.images').fadeIn();

					$this.find('a.menu').removeClass('menu').addClass('hovered');

                    $this.find('.images').stop().animate({
                        'width'     :'204px',
                        'height'    :'65px',
                        'opacity'   :'1.0'
                    },400,'easeOutBack',function(){

                        $(this).parent().find('div').fadeIn(300);
                    });
                },
                function () {
                    var $this = $(this);

                    $this.find('div').fadeOut(100);
					//$this.find('.images').hide();
                   $this.find('a.hovered').removeClass('hovered').addClass('menu');

				    $this.find('.images').stop().animate({
                        'width'     :'100px',
                        'height'    :'0px',
                        'top'       :'0px',
                        'left'      :'0px',
                        'opacity'   :'0.9'
                    },600,'easeOutBack');
              }
            );
            });

			
$(function () {
	var x = getCookie('eu');

	if (x == null)
	{
		setCookie('eu','test',31);
    $('body').cookiefy({
        displayedHtml: 'We use cookies to improve your experience on Tutor Hunt. If you continue, you accept our use of cookies and revised <a href="//privacy-policy.asp" style="font-weight: bold; color:#fff;">Privacy Policy</a>. ',
        backgroundColor: '#7aa3e6',
        color:'#fff',
        fontFamily: 'Trebuchet MS',
        fontSize: '13px',
        devMode: true
    });
	
	}
	
});

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; secure; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";

    var ca = document.cookie.split(';');

    for(var i=0;i < ca.length;i++) {
	   
        var c = ca[i];
		
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0)  
		{
		
		return c.substring(nameEQ.length,c.length);
	
		}
    }
return null;
}

function selectcountry()
{
   if (document.getElementById('countryselect').value  == "uk")
   {
 	 window.location.href= ("/");
   }
}

function mess() // Scramble email address
{
  var a,b,c,d,e

  a='<a hr'
  a+='ef=\"mai'
  b='su'
  b+='p'
  b+='p'
  b+='ort'
  c='\">'
  a+='lto:'
  b+='@'
  e='</' + 'a>'
  d='sup'
  d+='port@tuto'
  d+='rhunt.c'
  d+='om'
  b+='tutorhunt.com'

  document.write(a+b+c+d+e)
}

function mess2() // Scramble email address
{
  var a,b,c,d,e

  a='<a hr'
  a+='ef=\"mai'
  b='m'
  b+='e'
  b+='d'
  b+='ia'
  c='\">'
  a+='lto:'
  b+='@'
  e='</' + 'a>'
  d='med'
  d+='ia@tuto'
  d+='rhunt.c'
  d+='om'
  b+='tutorhunt.com'

  document.write(a+b+c+d+e)
}

function addto()
{
  if ((navigator.appVersion.indexOf("MSIE") > 0) && (parseInt(navigator.appVersion) >= 4))
    window.external.AddFavorite("https://www.tutorhunt.com/","Tutor Hunt");
  else
  {
    var msg = "Sorry we could not bookmark Tutor Hunt automatically. ";
    if(navigator.appName == "Netscape") msg += " [Please press  CTRL+D]";
    javascript:alert(msg);
  }
}


function validatesearch(signupform)
{
   var error_list = false
   var errors = ""
   if (signupform.subject.value == "none")
   {
     error_list = true
     errors = errors + "-> Please select a subject <br>"
   }

   if (signupform.type.value == "none")
   {
     error_list = true
     errors = errors + "-> Please select a student or tutor <br>"
   }

   if (signupform.level.value == "none")
   {
     error_list = true
     errors = errors + "-> Please select a level <br>"
   }

      if (signupform.tuitiontype.value != "online" )
	{
	   if (signupform.postcode.value == "" || signupform.postcode.value == "Postcode")
	   {
		 error_list = true
		 errors = errors + "-> Please select a postcode <br>"
	   }
	}

   if (error_list == false)
     signupform.submit();
   else
     showmsg("Please check form","Sorry there was a problem with the form data, the following error(s) occured;<br><br>" + errors,"Close ","",null)
}



function IsNumeric(strString)
//  check for valid numeric strings
{
          var strValidChars = "\u00A30123456789. ";
          var strChar;
          var blnResult = true;

          if (strString.length == 0) return false;

            for (i = 0; i < strString.length && blnResult == true; i++)
            {
              strChar = strString.charAt(i);
              if (strValidChars.indexOf(strChar) == -1)
              {
                blnResult = false;
              }
            }
            return blnResult;
}

function IsNumericStudent(strString)
//  check for valid numeric strings
{
          var strValidChars = "£0123456789. ";
          var strChar;
          var blnResult = true;

            for (i = 0; i < strString.length && blnResult == true; i++)
            {
              strChar = strString.charAt(i);
              if (strValidChars.indexOf(strChar) == -1)
              {
                blnResult = false;
              }
            }
            return blnResult;
}

function openprofilepic(userpic)
{
  popupWin = window.open(userpic, 'open_window', 'toolbar,scrollbars,resizable,dependent,width=560,height=415,left=0,top=0')
}

function toggletextdisplay(myItem, myButton)
{
  olditem = myItem
  var myItem = document.getElementById(myItem);

  var el = document.getElementById(myButton)
  if (myItem.style.display != "none")
  {
    myItem.style.display = "none";
    el.innerHTML = "<img src=\"/images/plus.gif\" alt =\"+\" style=\"position: relative; top: 2px;\"  />"
  }
  else
  {
    el.innerHTML = "<img src=\"/images/minus.png\" alt =\"-\" style=\"position: relative; top: 2px;\" />"
    myItem.style.display = "block";
  }
}


function settuitiontype()
{
		if ( document.getElementById("tuitiontype").value == "online")
		{
			document.getElementById("postcode").style.display = "none";
			document.getElementById("onetoonetab").className = "searchheaderitem";
			document.getElementById("onlinetab").className = "searchheaderitem searchheaderitemselected";
		}
		else
		{
			document.getElementById("postcode").style.display = "inline";
			document.getElementById("onetoonetab").className = "searchheaderitem searchheaderitemselected";
			document.getElementById("onlinetab").className = "searchheaderitem";
		}
}



function searchboxshow(pagetype , showbox)
{


if (pagetype == "quicksearchloc")
	{
		var accounttype = document.getElementById("type").value;
			
		if ( showbox == "online")
		{
			document.getElementById("tuitiontype").value= "online";
			document.getElementById("postcode").style.display = "none";
			
			document.getElementById("onetoonetab").className = "panelsearchheaderitem panelsearchheaderitemsel";
			document.getElementById("onlinetab").className = "panelsearchheaderitem";
			
			document.getElementById("thmessage").style.display = "none";
		}
		else
		{
			document.getElementById("tuitiontype").value= "onetoone";
			document.getElementById("postcode").style.display = "inline";
			document.getElementById("onetoonetab").className = "panelsearchheaderitem";
			document.getElementById("onlinetab").className = "panelsearchheaderitem panelsearchheaderitemsel";
			
			
			document.getElementById("thmessage").style.display = "block";
			
			if (accounttype == "student")
			{
				document.getElementById("type").value= "student";
			}
		}
	
		
	}
	

	if (pagetype == "quicksearch")
	{
		var accounttype = document.getElementById("type").value;
		
		numberOfOptions = document.getElementById("type").options.length;
			for (i=0; i<numberOfOptions; i++)
			{
				//Note: Always remove(0) and NOT remove(i)
				//currentgrade.remove(0);
				document.getElementById("type").remove(0);
			}
		
		
			
			
		if ( showbox == "online")
		{
			document.getElementById("tuitiontype").value= "online";
			//document.getElementById("searchlocatedinid").style.display = "none";
			document.getElementById("postcode").style.display = "none";
			
			document.getElementById("onetoonetab").className = "panelsearchheaderitem panelsearchheaderitemsel";
			document.getElementById("onlinetab").className = "panelsearchheaderitem";
			
			document.getElementById("thmessage").style.display = "none";
			
			addOption(document.getElementById("type"),'Tutor', 'tutor');
		}
		else
		{
			document.getElementById("tuitiontype").value= "onetoone";
			//document.getElementById("searchlocatedinid").style.display = "inline";
			document.getElementById("postcode").style.display = "inline";
			document.getElementById("onetoonetab").className = "panelsearchheaderitem";
			document.getElementById("onlinetab").className = "panelsearchheaderitem panelsearchheaderitemsel";
			
			document.getElementById("thmessage").style.display = "block";
			
			addOption(document.getElementById("type"),'Tutor', 'tutor');
			addOption(document.getElementById("type"),'Tutoring Job', 'student');

			
			if (accounttype == "student")
			{
				document.getElementById("type").value= "student";
			}
		}
	
	
	
		
	}
	
	if (pagetype == "searchhome")
	{
		if ( showbox == "online")
		{
			document.getElementById("tuitiontype").value= "online";
			document.getElementById("postcode").style.visibility = "hidden";
			
			document.getElementById("onetoonetab").className = "panelsearchheaderitem panelsearchheaderitemsel";
			document.getElementById("onlinetab").className = "panelsearchheaderitem";
		}
		else
		{
			document.getElementById("tuitiontype").value= "onetoone";
			document.getElementById("postcode").style.visibility = "visible";
			document.getElementById("onetoonetab").className = "panelsearchheaderitem";
			document.getElementById("onlinetab").className = "panelsearchheaderitem panelsearchheaderitemsel";
		}
	
		
	}

	if (pagetype == "homepage")
	{	
		if ( showbox == "online")
		{
			document.getElementById("postcode").style.display = "none";
			document.getElementById("tuitiontype").value= "online";
			document.getElementById("onetoonetab").className = "searchheaderitem";
			document.getElementById("onlinetab").className = "searchheaderitem searchheaderitemselected";
		}
		else
		{
			document.getElementById("tuitiontype").value= "onetoone";
			document.getElementById("postcode").style.display = "inline";
			
			document.getElementById("onetoonetab").className = "searchheaderitem searchheaderitemselected";
			document.getElementById("onlinetab").className = "searchheaderitem";
		}
		
		
		
		if (document.getElementById("postcode").value == "")
			{
				document.getElementById("postcode").value = "Postcode";
			}
			
	}
	
	
  
	if (pagetype == "subjecttab")
	{
		if ( showbox == "onetoone")
		{   
			document.getElementById("subjecttabonetoone").className = "subjecttabitem subjecttabitemselected";
			if ( document.getElementById("subjecttabonline") !=null)
			{
				document.getElementById("subjecttabonline").className = "subjecttabitem";
			}
			if ( document.getElementById("subjecttablesson") !=null)
			{
			document.getElementById("subjecttablesson").className = "subjecttabitem";
			}
			document.getElementById("subjectdefault").style.display = "block";
			document.getElementById("subjectonline").style.display = "none";
			document.getElementById("subjectlessons").style.display = "none";
		}
		if ( showbox == "online")
		{
			document.getElementById("subjecttabonetoone").className = "subjecttabitem";
			if ( document.getElementById("subjecttabonline") !=null)
			{
				document.getElementById("subjecttabonline").className = "subjecttabitem subjecttabitemselected";
			}
			if ( document.getElementById("subjecttablesson") !=null)
			{
			document.getElementById("subjecttablesson").className = "subjecttabitem";
			}
			document.getElementById("subjectdefault").style.display = "none";
			document.getElementById("subjectonline").style.display = "block";
			document.getElementById("subjectlessons").style.display = "none";
		}
		if ( showbox == "lessons")
		{
			document.getElementById("subjecttabonetoone").className = "subjecttabitem";
			if ( document.getElementById("subjecttabonline") !=null)
			{
				document.getElementById("subjecttabonline").className = "subjecttabitem";
			}
			if ( document.getElementById("subjecttablesson") !=null)
			{
			document.getElementById("subjecttablesson").className = "subjecttabitem subjecttabitemselected";
			}
			document.getElementById("subjectdefault").style.display = "none";
			document.getElementById("subjectonline").style.display = "none";
			document.getElementById("subjectlessons").style.display = "block";
		}
		
	}
	
	
}











	  function numberOfDays(year, month) {
		var d = new Date(year, month, 0);
		return d.getDate();
	}
	
	
	

  function populatedaysinmonth(dayddlst, month , year)
	  {
	    var currentDay = dayddlst.value;		  
	    var currentMonth = month;
	    var currentYear = year;

		if( IsNumeric(currentYear) == false )
		{
			currentYear = "2018";
		}
	
		var daysinmonth = numberOfDays(currentYear , currentMonth);
		var x = dayddlst;
		var numberOfOptions = x.options.length;
		
		
		 for (i=0; i<numberOfOptions; i++)
		 {
			x.remove(0)
		 }

		 addOption(dayddlst,"day ", "none");
		 
		for (var i=1; i<= daysinmonth; i++)
		{
					if (i < 10)
					{
					mytext = "0" + i.toString();
					}
					else
					{
					mytext = i;
					}
					addOption(dayddlst,mytext, mytext);
		}
		

		dayddlst.value = currentDay;
		
		
	  }

	  
  function populatedaysinmonth2(daytext, dayddlst, month , year)
	  {
	    var currentDay = dayddlst.value;		  
	    var currentMonth = month;
	    var currentYear = year;

		if( IsNumeric(currentYear) == false )
		{
			currentYear = "2018";
		}
	
		var daysinmonth = numberOfDays(currentYear , currentMonth);
		var x = dayddlst;
		var numberOfOptions = x.options.length;
		
		
		 for (i=0; i<numberOfOptions; i++)
		 {
			x.remove(0)
		 }

		 addOption(dayddlst,daytext, "none");
		 
		for (var i=1; i<= daysinmonth; i++)
		{
					if (i < 10)
					{
					mytext = "0" + i.toString();
					}
					else
					{
					mytext = i;
					}
					addOption(dayddlst,mytext, mytext);
		}
		

		dayddlst.value = currentDay;
		
		
	  }

	  
	  	  
	  

function ShowTutorFilter()
{
	
	var sortby =  document.getElementById('sortby');
	var searchtype =  document.getElementById('type').value;
	

	if (typeof(sortby) != 'undefined' && sortby != null)
	{

		var numberOfOptions = sortby.options.length;
                                                                
		for (i=0; i<numberOfOptions; i++)
		{
			sortby.remove(0);
		}
																																		 
		addOption(sortby,'Tutor Hunt Rank ', 'rank');
		addOption(sortby,'Distance ', 'distance');

		if(searchtype == "tutor")
		{
			//addOption(sortby,'Price - low first', 'pricelow');
			//addOption(sortby,'Price - high first', 'pricehigh');
			
			document.getElementById('tutorfilters').style.display = "inline";
		}
		else
		{
			addOption(sortby,'Last Login Date ', 'lastlogin');
			addOption(sortby,'Registered Date ', 'registereddate');
			
			document.getElementById('tutorfilters').style.display = "none";
		}
	}

}
	  

	  
	  function modalwindowopen()
	{
		
		$('#modalmain').modal(
			{
					 backdrop: 'static',
					 keyboard: false	 
					});			
	}
	
	
	function displayalertwindow(displaytext)
	{
	  document.getElementById("updatewindow").innerHTML = displaytext;
	  $("#updatewindow").fadeIn('slow').delay(5000).fadeOut();;
	}

	
	

