$(document).ready(function() {
    $('.title-content').hide();
    $('.title-header').click(function() {
        var content = $(this).next('.title-content');
		
		var button = this.id;
		var span = $(this).find('h3');
		


        if (content.is(':visible')) {
            content.slideUp();
			if(button == "studentbutton")
			{
				span.text("See more questions for students");
				
			}
			if(button == "tutorbutton")
			{
				span.text("See more questions for tutors");
				
			}
        } else {
            content.slideDown();
			if(button == "studentbutton")
			{
				span.text("Hide");
				$(this).attr('style','display: none');
			} 
			if(button == "tutorbutton")
			{
				span.text("Hide");
				$(this).attr('style','display: none');
			}
        }

		
		
    });
});
