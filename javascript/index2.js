



var dDate = new Date();
var dCurMonth = dDate.getMonth();
var dCurDayOfMonth = dDate.getDate();
var dCurYear = dDate.getFullYear();
var objPrevElement = new Object();
var modal = document.getElementById('myModal');
var dCurDate = new Date();
var modal1 = document.getElementById('modal-wrapper');
var modal2 = document.getElementById('modal-wrapperShowEvent');
 var modal = document.getElementById('modal-wrapper');

        function fToggleColor(myElement) {

                    var toggleColor = "	#800080";
                    if (myElement.id == "calDateText") {
                    if (myElement.color == toggleColor && myElement.bgColor != "#FFA500" ) {
                    myElement.color = "";
                    } 
                    else {
                    myElement.color = toggleColor;
                       }
                    } 
                    else if (myElement.id == "calCell") {
                    for (var i in myElement.children) {
                    if (myElement.children[i].id == "calDateText") {
                    if (myElement.children[i].color == toggleColor&& myElement.bgColor != "#FFA500#FFA500" ) {
                    myElement.children[i].color = "";
                    } else {
                    myElement.children[i].color = toggleColor;
                    
                    
                      }
                   }
                }
             }
          }

		function fAddEvent(myElement){

		                   
		                   
		                    //if event eklenirse
		                        
		                   myElement.bgColor = "#FFA500";
		                      
		                  //  modal.style.display = "block";
		                 
		                 modal.style.display='block'
		             
		}
		function fRepeatTime(repeatValue){

             var repeat= repeatValue;
		}
		
      function fReminder(reminderValue){

             var reminder= reminderValue;
		}
		function fSetSelectedDay(myElement){
						if (myElement.id == "calCell") {
						if (!isNaN(parseInt(myElement.children["calDateText"].innerText))) {
						//myElement.bgColor = "#c0c0c0";
						fAddEvent(myElement);
						objPrevElement.bgColor = "";

						document.all.calSelectedDate.value = parseInt(myElement.children["calDateText"].innerText);
						objPrevElement = myElement;

						      }
						   }
						}
						function fGetDaysInMonth(iMonth, iYear) {
						var dPrevDate = new Date(iYear, iMonth, 0);
						return dPrevDate.getDate();
						}
						function fBuildCal(iYear, iMonth, iDayStyle) {
						var aMonth = new Array();
						aMonth[0] = new Array(7);
						aMonth[1] = new Array(7);
						aMonth[2] = new Array(7);
						aMonth[3] = new Array(7);
						aMonth[4] = new Array(7);
						aMonth[5] = new Array(7);
						aMonth[6] = new Array(7);
						var dCalDate = new Date(iYear, iMonth-1, 1);
						var iDayOfFirst = dCalDate.getDay();
						var iDaysInMonth = fGetDaysInMonth(iMonth, iYear);
						var iVarDate = 1;
						var i, d, w;
						if (iDayStyle == 2) {

						aMonth[0][0] = "Sunday";
						aMonth[0][1] = "Monday";
						aMonth[0][2] = "Tuesday";
						aMonth[0][3] = "Wednesday";
						aMonth[0][4] = "Thursday";
						aMonth[0][5] = "Friday";
						aMonth[0][6] = "Saturday";
						} else if (iDayStyle == 1) {
						aMonth[0][0] = "Sun";
						aMonth[0][1] = "Mon";
						aMonth[0][2] = "Tue";
						aMonth[0][3] = "Wed";
						aMonth[0][4] = "Thu";
						aMonth[0][5] = "Fri";
						aMonth[0][6] = "Sat";
						} else {
						aMonth[0][0] = "Su";
						aMonth[0][1] = "Mo";
						aMonth[0][2] = "Tu";
						aMonth[0][3] = "We";
						aMonth[0][4] = "Th";
						aMonth[0][5] = "Fr";
						aMonth[0][6] = "Sa";
						}
						for (d = iDayOfFirst; d < 7; d++) {
						aMonth[1][d] = iVarDate;
						iVarDate++;
						}
						for (w = 2; w < 7; w++) {
						for (d = 0; d < 7; d++) {
						if (iVarDate <= iDaysInMonth) {
						aMonth[w][d] = iVarDate;
						iVarDate++;
						      }
						   }
						}
						return aMonth;
		}
		
		
		function fDrawCal(iYear, iMonth, iCellWidth, iCellHeight, sDateTextSize, sDateTextWeight, iDayStyle) {
						var myMonth;
						myMonth = fBuildCal(iYear, iMonth, iDayStyle);

						document.write("<tr align='center'   > ");

						document.write("<tr> ");
						document.write("<tr> ");

						document.write("<tr> ");
						document.write("<tr> ");

						document.write("<tr> ");
						document.write("<tr> ");

						document.write("<tr> ");
						document.write("<tr> ");

						document.write("<tr> ");
						document.write("<tr> ");
						document.write("<tr> ");
						document.write("<tr> ");
						document.write("<tr> ");
						document.write("<tr> ");
						document.write("<td align='center' style='FONT-FAMILY:Arial;FONT-SIZE:20px;FONT-WEIGHT: bold'>" + myMonth[0][0] + "</td>");
						document.write("<td align='center' style='FONT-FAMILY:Arial;FONT-SIZE:20px;FONT-WEIGHT: bold'>" + myMonth[0][1] + "</td>");
						document.write("<td align='center' style='FONT-FAMILY:Arial;FONT-SIZE:20px;FONT-WEIGHT: bold'>" + myMonth[0][2] + "</td>");
						document.write("<td align='center' style='FONT-FAMILY:Arial;FONT-SIZE:20px;FONT-WEIGHT: bold'>" + myMonth[0][3] + "</td>");
						document.write("<td align='center' style='FONT-FAMILY:Arial;FONT-SIZE:20px;FONT-WEIGHT: bold'>" + myMonth[0][4] + "</td>");
						document.write("<td align='center' style='FONT-FAMILY:Arial;FONT-SIZE:20px;FONT-WEIGHT: bold'>" + myMonth[0][5] + "</td>");
						document.write("<td align='center' style='FONT-FAMILY:Arial;FONT-SIZE:20px;FONT-WEIGHT: bold'>" + myMonth[0][6] + "</td>");
						document.write("</tr>");
						for (w = 1; w < 7; w++) {
						document.write("<tr>")
						for (d = 0; d < 7; d++) {
						document.write("<td align='left' valign='top' width='" + iCellWidth + "' height='" + iCellHeight + "' id=calCell style='CURSOR:Hand' onMouseOver='fToggleColor(this)' onMouseOut='fToggleColor(this)' onclick=fSetSelectedDay(this)>");
						if (!isNaN(myMonth[w][d])) {
						document.write("<font id=calDateText onMouseOver='fToggleColor(this)' style='CURSOR:Hand;FONT-FAMILY:Arial;FONT-SIZE:" + sDateTextSize + ";FONT-WEIGHT:" + sDateTextWeight + "' onMouseOut='fToggleColor(this)' onclick=fSetSelectedDay(this)>" + myMonth[w][d] + "</font>");
						} else {
						document.write("<font id=calDateText onMouseOver='fToggleColor(this)' style='CURSOR:Hand;FONT-FAMILY:Arial;FONT-SIZE:" + sDateTextSize + ";FONT-WEIGHT:" + sDateTextWeight + "' onMouseOut='fToggleColor(this)' onclick=fSetSelectedDay(this)> </font>");
						}
						document.write("</td>")
						}
						document.write("</tr>");
						}

		}
		function fUpdateCal(iYear, iMonth) {
					myMonth = fBuildCal(iYear, iMonth);
					objPrevElement.bgColor = "";
					document.all.calSelectedDate.value = "";
					for (w = 1; w < 7; w++) {
					for (d = 0; d < 7; d++) {
					if (!isNaN(myMonth[w][d])) {
					calDateText[((7*w)+d)-7].innerText = myMonth[w][d];
					} else {
					calDateText[((7*w)+d)-7].innerText = " ";
					         }
					      }
					   }
		}
		
		frmCalendarSample.tbSelMonth.options[dCurDate.getMonth()].selected = true;
		for (i = 0; i < frmCalendarSample.tbSelYear.length; i++)
		if (frmCalendarSample.tbSelYear.options[i].value == dCurDate.getFullYear())
		frmCalendarSample.tbSelYear.options[i].selected = true;
		
	
	
		
		var modalSearch = document.getElementById('modal-wrapperShowEvent');
  window.onclick = function(event) {
    if (event.target == modalSearch) {
        modalSearch.style.display = "none";
    }
}
// End -->
//pop-up
 var modalSave = document.getElementById('modal-wrapperSaveEvent');
 window.onclick = function(event) {
     if (event.target == modalSave) {
           modal.style.display="none";
     }
 }



// If user ce of the modal, Modal will close



