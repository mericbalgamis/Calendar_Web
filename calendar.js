"use strict";
		var calendar = document.getElementById("calendar");
		var mainDate = new Date();
		var year = mainDate.getFullYear();
		var currentYear = mainDate.getFullYear();
		var month = mainDate.getMonth();
		var febMnth = 1;
		var months = [{name:"January", days:31}, {name:"February", days:febDays(year)}, {name:"March", days:31}, {name:"April", days:30}, {name:"May", days:31}, {name:"June", days:30}, {name:"July", days:31},{name:"August", days:31}, {name:"September", days:30}, {name:"October", days:31}, {name:"November", days:30}, {name:"December", days:31}];
		var weeks = ["Sunday", "Monday", "Tueaday", "Wednesday", "Thursday", "Friday", "Saturday"];
		var monthName = "";
		var monthDays = 0;
		var innerHTML = "";
		var monthNumbers = "";

		var dayActive = "";
		var currentDate = mainDate.getDate();
		var currentMonth = mainDate.getMonth();
		var currentYear = mainDate.getFullYear();

	

		var correctId = "";


      
		 
		//console.log(months);
		monthsPrint(year, month);
		
		function febDays(year) {
			if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
                return 29;
            } else {
                return 28;
            }
		}

		function monthsPrint(year, month) {
			var months = [{name:"January", days:31}, {name:"February", days:febDays(year)}, {name:"March", days:31}, {name:"April", days:30}, {name:"May", days:31}, {name:"June", days:30}, {name:"July", days:31},{name:"August", days:31}, {name:"September", days:30}, {name:"October", days:31}, {name:"November", days:30}, {name:"December", days:31}];
			for(var i=0; i<12; i++) {
				monthName = months[i].name;
				monthDays = months[i].days;
				if(month==i) {
					var shoWClass="showClass";
				} else {
					var shoWClass="hideClass";
				}/*"+monthDays+" "+monthNumbers+"*/
				innerHTML+="<div class='"+shoWClass+"' id='myTable'><div class='year'>"+year+"</div><div id='monthName' class='month "+shoWClass+"'><a class='btn' id='prevYear' onclick='prevYear();'> - </a> "+monthName+" <a class='btn' id='nextYear' onclick='nextYear();'> + </a></div> <div class='weeks'>";
				weekPrint();
				innerHTML+="</div>";
				daysPrint(i);
				innerHTML+="</div>";
				
			}
			calendar.innerHTML = innerHTML;
			printDateFormat(months);
			//splitTable();
		}
		
		/*function splitTable() {
			for(var i=0; i<12; i++) {
				var x=$("#myTable-"+i+" tr td");
				//console.log(x);
				x.each(function() {
					if(($(this).index())%7==0) {
					}
				});
			}
			
		}*/
		
		function weekPrint() {
			for(var k=0; k<weeks.length; k++) {
				innerHTML+="<span>"+weeks[k].substring(0,3)+"</span>";
			}
		}
		function daysPrint(i) {
			for (var j=1; j<=monthDays; j++) {
				//var day = j;
				var currentDay = new Date((i+1) +", "+j+", "+ year);
				var monthStart = new Date((i+1)+","+1+", "+year);
				var n = currentDay.getDay();
				var s =monthStart.getDay();
				var totalDays = 7-s;
				//var totalTds = (s+monthDays);
				var dayActive = "";
				var disabled = "";
				//console.log(totalTds);
				/*+new Date((i+1) +", "+j+", "+ year)+*/
				if(j==1) {
					var myClass= "first";
					for(var l=0; l<s; l++) {
						if(s!=0) {
							innerHTML+="<span></span>";
						}	
					}
					
				} /*else if(j==(8-s) || j%7==0) {
					innerHTML+="</tr><tr>";
				}*/ else {
				var myClass = "";
				var myTd = "";
				}
				/*if(j%7==0) {
					innerHTML+="</tr><tr>";
				}*/
				/*+weeks[n].substring(0,3)+*/
				if(currentYear == year) {
					if( i==currentMonth && j<currentDate) {
						dayActive = "prevDay";
						disabled = "disabled";
					} else if(i>currentMonth) {
						dayActive = "forwardDay";
						disabled = "";
					} else if(i<currentMonth) {
						dayActive = "prevDay";
						disabled = "disabled";
					} else if(j==currentDate) {
						dayActive = "dayActive";
						disabled = "";
					}
				} else if(year<currentYear) {
					dayActive = "prevDay";
				}
				innerHTML+="<span data-day='"+j+"-"+(month+1)+"-"+year+"' class='"+myClass+" "+dayActive+"'><button id='eachDay' "+disabled+">"+j+"</button></span>";
				//addCurrendDateClass(i, j);
				
				/*if(totalTds%7 == 0) {
					 {
					 	innerHTML+="</tr><tr>";
					 }
				}*/

			}
		}

		function addCurrendDateClass(i, j) {
			var dayActive = "";
			var currentDate = mainDate.getDate();
			var currentMonth = mainDate.getMonth();
			var currentYear = mainDate.getFullYear();
			if(currentMonth == i) {
				/*if(currentMonth == i) {
					if(currentDate==j) {
						dayActive = "dayActive";
					} else
						dayActive = "";
				}*/
				if( i<=currentMonth && j<currentDate) {
					dayActive = "prevDay";
				} else if(currentDate==j) {
					dayActive = "dayActive";
				} else {
					dayActive = "forwardDay";
				}
			}
		}


		function nextYear() {
			//year++;
			month++;
			if(month>11) {
				month=0;
				year++;
			}
			innerHTML="";
			monthsPrint(year, month);
			if($("#dateValue").val()!='') {
			$( "span[data-day='"+$("#dateValue").val()+"']" ).addClass("selected");
			}
		}
		function prevYear() {
			month--;
			if(month<0) {
				month=11;
				year--;
			}
			innerHTML="";
			monthsPrint(year, month);
			if($("#dateValue").val()!='') {
				$( "span[data-day='"+$("#dateValue").val()+"']" ).addClass("selected");
			}
		}
		function printDateFormat(months) {
			$("button").each(function() {
				$(this).click(function() {
					
					//if($("button").parent().className!=("eventAdded")) {
					$("button").parent().removeClass("selected");
					$(this).parent().addClass("selected");
					$("#dateValue").val($(this).html()+"-"+(month+1)+"-"+year);
				//	$(this).parent().addClass("eventAdded");
				
			//		}
				
				});
			});	
		}
		function searchEvent() {
			
			 var search = document.getElementById("titleSearch").value;
			         	var ul =document.getElementById("search_list");
						//$('#search_list').empty();
						$('#search_list').empty();
						var li ;
						var a ;
		  
		
		            if(search.includes(" "))
					{  console.log(search);
						search=search.replace(" ","%20");
					}
		        console.log(search);
			 	var baseUrl = "https://immense-coast-39524.herokuapp.com/calendars/search/"+search;
			var eventArray;
		
			$.ajax({
				type: 'GET',
				url: baseUrl,
				data: eventArray,
				beforeSend: function (xhr) {
					if (xhr && xhr.overrideMimeType) {
					xhr.overrideMimeType('application/json;charset=utf-8');
					}
				},
				dataType: 'json',
				success: function (eventArray) {
					//alert(search);
					for(var item in eventArray) {
						ul =document.getElementById("search_list");
						/*
						 li = document.createElement("li");
						 a = document.createElement("a");
						a.href = "eventInfo.html?id="+eventArray[item].id;
						//a.onclick = eventInfo(eventArray[item]);
						a.text = eventArray[item].title;
						li.appendChild(a);
						ul.appendChild(li);
						//console.log(eventArray);
						*/
						  var b = document.createElement("input");
									b.type = "button";
									b.value = eventArray[item].title;
									var li = document.createElement("li");
									b.style = "background:none;border: none;";
									b.name =eventArray[item].id;										
									li.appendChild(b);
									ul.appendChild(li);
									
									b.onclick = function(){
										eventInfoSearch(this.name);

									};
					}	
					
					}	
				
			});
			 
			 
			 
			 
			 
			 
			 document.getElementById("titleSearch").value="";
			
		}
		function getEvents() {
		//	alert("calling");
			var baseUrl = "https://immense-coast-39524.herokuapp.com/calendars/";
			var eventArray;
		
			$.ajax({
				type: 'GET',
				url: baseUrl,
				data: eventArray,
				beforeSend: function (xhr) {
					if (xhr && xhr.overrideMimeType) {
					xhr.overrideMimeType('application/json;charset=utf-8');
					}
				},
				dataType: 'json',
				success: function (eventArray) {
					var id="";
					for(var item in eventArray) {
						
									var ul = document.getElementById("event_list");
								    var b = document.createElement("input");
									b.type = "button";
									b.value = eventArray[item].title;
									var li = document.createElement("li");
									b.style = "background:none;border: none;";
									b.name =eventArray[item].id;										
									li.appendChild(b);
									ul.appendChild(li);
									
									b.onclick = function(){
										eventInfo(this.name);

									};
					}	
					
				}	
				
			});
		}
				
	      function repeatEvent(title,content,location,startDate,endDate,startTime,finishTime,repeat,reminder){
			  console.log(endDate);
	         startDate = startDate.split("-");
			  endDate = endDate.split("-");
			  console.log(endDate);
			  // ["2018", "08", "28"]
			 // ["14", "8", "2018"]
			 var kacCekiyorStart=0;
			 var kacCekiyorEnd=0;
			  if (startDate[1]==2)
			        kacCekiyorStart=28;
			  if (startDate[1]<=7 && startDate[1]!=2)
			  {
				  if(startDate[1] % 2 ==0)
					  kacCekiyorStart=30;
				  else{
					  kacCekiyorStart=31;
				  }
			  }
			 if (startDate[1]>7  )
			  {
				  if(startDate[1] % 2 ==0)
					  kacCekiyorStart=31;
				  else{
					  kacCekiyorStart=30;
				  }
			  }
			
			//  console.log( kacCekiyorStart);
			  
			  if (endDate[1]==2)
			        kacCekiyorEnd=28;
			  if (endDate[1]<=7 && endDate[1]!=2)
			  {
				  if(endDate[1] % 2 ==0)
					  kacCekiyorEnd=30;
				  else{
					  kacCekiyorEnd=31;
				  }
			  }
			 if (endDate[1]>7  )
			  {
				  if(endDate[1] % 2 ==0)
					  kacCekiyorEnd=31;
				  else{
					  kacCekiyorEnd=30;
				  }
			  }	


                


			  
			 if(repeat=='Every Day'){
				   var i = kacCekiyorStart-parseInt(startDate[0]);
				  // console.log(i)
				 // var j = kacCekiyorEnd-endDate[1];
				   var k;
				 for (k=0; k<i; k++){
					         var j = kacCekiyorEnd-parseInt(endDate[2]);
							 var baseUrl = "https://immense-coast-39524.herokuapp.com/calendars/";
							//var baseUrl = "http://localhost:3000/calendars";
							var a = parseInt(startDate[0])+1;
                           startDate[0] =a.toString();
						   
						   
						   if(j>0)
                           {
							    var b = parseInt(endDate[2])+1;
                                endDate[2] =b.toString();
						   }
					       else{
							   if(kacCekiyorEnd==31){
								   var b = (parseInt(endDate[2])+1)%31;
                                endDate[2] =b.toString();
								   
								 
                                 
							   }
							   else{
								    var b = (parseInt(endDate[2])+1)%30;
                                endDate[2] =b.toString();
							   }
								     var b = (parseInt(endDate[1])+1);
                                endDate[1] =b.toString();
							//endDate[1]=endDate[1]+1;
						   }
						   
						   console.log(startDate+"  "+ endDate);
						   
						   
						     var    sd = startDate[0]+"-"+startDate[1]+"-"+startDate[2];
						     var    ed= endDate[2]+"-"+endDate[1]+"-"+endDate[0];   
					   
							var myObject = {
								"id": 45,
								"title": title,
								"content":content,
								"location":location,
								"start_date": sd,
								"start_time":  startTime,
								"end_date": ed,
								"end_time": finishTime,
								"repeat": repeat,
								"reminder": reminder
								};
								
								
								//alert(baseUrl);

								
								 $.ajax({

								  url:baseUrl,
								  type:'POST',
								  dataType:'json',
								  data : JSON.stringify(myObject),
								  contentType: "application/json; charset=utf-8",
								  success:function(data) {
									//  $( "span[data-day='"+$("#dateValue").val()+"']" ).addClass("selected");
										$( "span[data-day='"+sd+"']" ).addClass("eventAdded");
									console.log("Every Day is added");
										
								  }
								  
							  });
									
					 
				 }
				   
				   
				   
			  }
			 
		   else  if (repeat=='Every Week'){
				  
				  
				    var i = (kacCekiyorStart-parseInt(startDate[0]))/7 ;
					i=Math.floor(i);
				   console.log(i)
				 // var j = kacCekiyorEnd-endDate[1];
				   var k;
				   					   
				 for (k=0; k<i; k++){
					         var j = kacCekiyorEnd-parseInt(endDate[2]);
							 var baseUrl = "https://immense-coast-39524.herokuapp.com/calendars/";
							//var baseUrl = "http://localhost:3000/calendars";
							var a = parseInt(startDate[0])+7;
                           startDate[0] =a.toString();
						   
						   
						   if(j>=7)
                           {
							    var b = parseInt(endDate[2])+7;
                                endDate[2] =b.toString();
						   }
					       else{
							   if(kacCekiyorEnd==31){
								   var b = (parseInt(endDate[2])+7)%31;
                                endDate[2] =b.toString();
								   
								 
                                 
							   }
							   else{
								    var b = (parseInt(endDate[2])+7)%30;
                                endDate[2] =b.toString();
							   }
								     var b = (parseInt(endDate[1])+1);
                                endDate[1] =b.toString();
							//endDate[1]=endDate[1]+1;
						   }
						   
						   console.log(startDate+"  "+ endDate);
						   
						   
						     var    sd = startDate[0]+"-"+startDate[1]+"-"+startDate[2];
						     var    ed= endDate[2]+"-"+endDate[1]+"-"+endDate[0];   
					   
							var myObject = {
								"id": 45,
								"title": title,
								"content":content,
								"location":location,
								"start_date": sd,
								"start_time":  startTime,
								"end_date": ed,
								"end_time": finishTime,
								"repeat": repeat,
								"reminder": reminder
								};
								
								
								//alert(baseUrl);

								
								 $.ajax({

								  url:baseUrl,
								  type:'POST',
								  dataType:'json',
								  data : JSON.stringify(myObject),
								  contentType: "application/json; charset=utf-8",
								  success:function(data) {
									//  $( "span[data-day='"+$("#dateValue").val()+"']" ).addClass("selected");
										$( "span[data-day='"+sd+"']" ).addClass("eventAdded");
									console.log("Every Week is added");
										
								  }
								  
							  });
									
					 
				 }
				   
			
			  }
			
				 
			  else if(repeat=='Every Month'){
				    var baseUrl = "https://immense-coast-39524.herokuapp.com/calendars/";
					var kacAy=12-startDate[1];
					console.log(kacAy+"kaçAy");
					var k =0;
					var ed;
					var sd;
				
					   // ["2018", "08", "28"]  end
			        // ["14", "8", "2018"]  start
					for (k; k<kacAy;k++) {		
			      	var subat=0;
					var günOtuzBir=0;
							// ay hesabý 
							 var ayStartDate = parseInt(startDate[1])+1;
						     startDate[1] =ayStartDate.toString();
							 var ayEndDate = parseInt(endDate[1])+1;
						     endDate[1] =ayEndDate.toString();
							 
							 
							 if(startDate[1]==2)
							 {									console.log("subat");

								 	    ayStartDate = parseInt(startDate[1])+1;
								      	startDate[1] =ayStartDate.toString();
										var gunStartDate = parseInt(startDate[0])%28;
								      	startDate[0] =gunStartDate.toString();
										subat=1;
								 
							 }
							 if(startDate[0]==31) {
								 	console.log("star 31 30 ");

								  var kacCekiyorStart=0;
										  if (startDate[1]<=7 && startDate[1]!=2)
										  {
											  if(startDate[1] % 2 ==0)
												  kacCekiyorStart=30;
											  else{
												  kacCekiyorStart=31;
											  }
										  }
										 if (startDate[1]>7  )
										  {
											  if(startDate[1] % 2 ==0)
												  kacCekiyorStart=31;
											  else{
												  kacCekiyorStart=30;
											  }
										  }
								 
								 if(kacCekiyorStart==30)
								 {   console.log(kacCekiyorStart+"kacCekiyorStart");
							 
							         var a = parseInt(startDate[1])+1;
								    startDate[1] =a.toString();
									 var b = parseInt(startDate[0])%30;
								     startDate[0] =b.toString();
									 günOtuzBir=1;
								 }
								 
							 }
							
							 
							 sd = startDate[0]+"-"+startDate[1]+"-"+startDate[2];
							 
							 
						     if(ayEndDate==2){
								 
										//þubat için
										var a = parseInt(endDate[1])+1;
								      	endDate[1] =a.toString();
										var b = parseInt(endDate[2])%28;
								      	endDate[2] =b.toString();
										subat=1;
									
								 
							 }
							if(endDate[2]==31){
					        // bir sonraki ay 30sa
							var kacCekiyorEnd=0;
							if (endDate[1]==2)
							kacCekiyorEnd=28;
								  if (endDate[1]<=7 && endDate[1]!=2)
								  {
									  if(endDate[1] % 2 ==0)
										  kacCekiyorEnd=30;
									  else{
										  kacCekiyorEnd=31;
									  }
								  }
								 if (endDate[1]>7  )
								  {
									  if(endDate[1] % 2 ==0)
										  kacCekiyorEnd=31;
									  else{
										  kacCekiyorEnd=30;
									  }
								  }	
										if(kacCekiyorEnd==30)
										{
											 console.log(kacCekiyorEnd+"kacCekiyorEnd");
									    var a = parseInt(endDate[1])+1;
								      	endDate[1] =a.toString();
										var b = parseInt(endDate[2])%30;
								      	endDate[2] =b.toString();
										günOtuzBir=1;
										}
								 
								 
							 }
							 
							 ed= endDate[2]+"-"+endDate[1]+"-"+endDate[0];  
							if(subat)
								k=k+1;
							if(günOtuzBir)
								k=k+1;
							
							console.log(sd+"  " +ed);
							console.log(k+"  KNIN DEÐERII" );
							
							
							//REGUEST AT !!!!!!!
								var myObject = {
								"id": 45,
								"title": title,
								"content":content,
								"location":location,
								"start_date": sd,
								"start_time":  startTime,
								"end_date": ed,
								"end_time": finishTime,
								"repeat": repeat,
								"reminder": reminder
								};
								
								
								//alert(baseUrl);

								
								 $.ajax({

								  url:baseUrl,
								  type:'POST',
								  dataType:'json',
								  data : JSON.stringify(myObject),
								  contentType: "application/json; charset=utf-8",
								  success:function(data) {
									//  $( "span[data-day='"+$("#dateValue").val()+"']" ).addClass("selected");
										$( "span[data-day='"+sd+"']" ).addClass("eventAdded");
									console.log("Every Month is added");
										
								  }
								  
							  });
							
							
							
							
							
							
							
							
						  } 
						  
						 
				  
			  }
				  
			  
				
			  else {
				    // ["2018", "08", "28"]  end
			        // ["14", "8", "2018"]  start
				    var baseUrl = "https://immense-coast-39524.herokuapp.com/calendars/";
				     var k;
			     	 for (k=0; k<30; k++){
						 
				    var a = parseInt(startDate[2])+1;
                    startDate[2] =a.toString();
				    var b = parseInt(endDate[0])+1;
                    endDate[0] =a.toString(); 
					//console.log(startDate+"  "+ endDate);
				  
				
						     var    sd = startDate[0]+"-"+startDate[1]+"-"+startDate[2];
						     var    ed= endDate[2]+"-"+endDate[1]+"-"+endDate[0];   
			               	var myObject = {
								"id": 45,
								"title": title,
								"content":content,
								"location":location,
								"start_date": sd,
								"start_time":  startTime,
								"end_date": ed,
								"end_time": finishTime,
								"repeat": repeat,
								"reminder": reminder
								};
								
								
								//alert(baseUrl);

								
								 $.ajax({

								  url:baseUrl,
								  type:'POST',
								  dataType:'json',
								  data : JSON.stringify(myObject),
								  contentType: "application/json; charset=utf-8",
								  success:function(data) {
									//  $( "span[data-day='"+$("#dateValue").val()+"']" ).addClass("selected");
										$( "span[data-day='"+sd+"']" ).addClass("eventAdded");
									console.log("Every Year is added");
										
								  }
								  
							  });
									
	                      }
		
			    // console.log(sd+"  "+ ed);
			  }
	        
}
		function eventInfo(id){
			correctId = id;
		//	alert("calling");
			var baseUrl = "https://immense-coast-39524.herokuapp.com/calendars/"+correctId;
			var data;
			$.ajax({
				type: 'GET',
				url: baseUrl,
				data: data,
				beforeSend: function (xhr) {
					if (xhr && xhr.overrideMimeType) {
					xhr.overrideMimeType('application/json;charset=utf-8');
					}
				},
				dataType: 'json',
				success: function (data) {
							
							document.getElementById("titleEdit").value = data.title;
							document.getElementById("contentEdit").value = data.content;
							document.getElementById("locationEdit").value = data.location;
							document.getElementById("dateValueEdit").value = data.start_date;
							document.getElementById("endDateEdit").value = data.end_date;
							document.getElementById("appt-startTimeEdit").value = data.start_time;
							document.getElementById("appt-finishTimeEdit" ).value = data.end_time;
							document.getElementById("repeatEdit").value = data.repeat;
							document.getElementById("reminderEdit" ).value = data.reminder;
					
				}	
				
			});			
			
			//document.getElementById("saveButtonEdit").onclick= editEvent(id);
		}
		function deleteEvent(id){
			
			console.log(correctId);
			var baseUrl = "https://immense-coast-39524.herokuapp.com/calendars/"+correctId;
					//var baseUrl = "http://localhost:3000/calendars";

			$.ajax({

			  url:baseUrl,
			  type:'DELETE',
			  dataType:'json',
			  data :"",
			  contentType: "application/json; charset=utf-8",
			  success:function(data) {
				console.log("data is deleted");
			  }
		  });
				
			
			document.getElementById("titleEdit").value="";
			document.getElementById("contentEdit").value="";
			document.getElementById("locationEdit").value="";
			document.getElementById("endDateEdit").value="";
			document.getElementById("appt-startTimeEdit").value="";
			document.getElementById("appt-finishTimeEdit" ).value="";
			document.getElementById("repeatEdit").value="Every Day";
			document.getElementById("reminderEdit" ).value="Never";
			
		}
		
				function editEvent(id){
			
			var title = document.getElementById("titleEdit").value;
			var content =document.getElementById("contentEdit").value;
			var location =document.getElementById("locationEdit").value;
			var startDate= document.getElementById("dateValueEdit").value;
			var endDate= document.getElementById("endDateEdit").value;
			var startTime =document.getElementById("appt-startTimeEdit").value;
			var finishTime =document.getElementById("appt-finishTimeEdit" ).value;
			var repeat =document.getElementById("repeatEdit").value;
			var reminder=document.getElementById("reminderEdit" ).value;
			
			var baseUrl = "https://immense-coast-39524.herokuapp.com/calendars/"+correctId;
					//var baseUrl = "http://localhost:3000/calendars";


					var myObject = {
						"title": title,
						"content":content,
						"location":location,
						"start_date": startDate,
						"start_time":  startTime,
						"end_date": endDate,
						"end_time": finishTime,
						"repeat": repeat,
						"reminder": reminder
						};
			
			$.ajax({

			  url:baseUrl,
			  type:'PUT',
			  dataType:'json',
			  data : JSON.stringify(myObject),
			  contentType: "application/json; charset=utf-8",
			  success:function(data) {
				console.log("data is edited");
			  }
		  });
				
			/*
			document.getElementById("title").value="";
			document.getElementById("content").value="";
			document.getElementById("location").value="";
			//$("#dateValue").val($(this).html()+"/"+(month+1)+"/"+year);
			//document.getElementById("dateValue").set="";
			document.getElementById("endDate").value="";
			document.getElementById("appt-startTime").value="";
			document.getElementById("appt-finishTime" ).value="";
			document.getElementById("repeat").value="Every Day";
			document.getElementById("reminder" ).value="Never";
			*/
		}
		function eventInfoSearch(id){
			correctId = id;
		//	alert("calling");
			var baseUrl = "https://immense-coast-39524.herokuapp.com/calendars/"+correctId;
			var data;
			$.ajax({
				type: 'GET',
				url: baseUrl,
				data: data,
				beforeSend: function (xhr) {
					if (xhr && xhr.overrideMimeType) {
					xhr.overrideMimeType('application/json;charset=utf-8');
					}
				},
				dataType: 'json',
				success: function (data) {
							
							document.getElementById("titleSearch1").value = data.title;
							document.getElementById("contentSearch").value = data.content;
							document.getElementById("locationSearch").value = data.location;
							document.getElementById("dateValueSearch").value = data.start_date;
							document.getElementById("endDateSearch").value = data.end_date;
							document.getElementById("appt-startTimeSearch").value = data.start_time;
							document.getElementById("appt-finishTimeSearch" ).value = data.end_time;
							document.getElementById("repeatSearch").value = data.repeat;
							document.getElementById("reminderSearch" ).value = data.reminder;
					
				}	
				
			});			
			
			//document.getElementById("saveButtonEdit").onclick= editEvent(id);
		}
		function saveEvent() {
			
			 var dateTrue=0;

			var title = document.getElementById("title").value;
			var content =document.getElementById("content").value;
			var location =document.getElementById("location").value;
			var startDate =document.getElementById("dateValue").value;
			startDate = startDate.replace("Add Event", "");
			var endDate= document.getElementById("endDate").value;
			var startTime =document.getElementById("appt-startTime").value;
			var finishTime =document.getElementById("appt-finishTime" ).value;
			var repeat =document.getElementById("repeat").value;
			var reminder=document.getElementById("reminder" ).value;
			//alert( startDate);
			
			
			var st =startTime.split(":");
			var et =finishTime.split(":");
			 var sd = startDate.split("-");
			 var ed  = endDate.split("-");
			  // ["2018", "08", "28"]end
			 // ["14", "8", "2018"]start
		
			 if(ed[2]-sd[0]>=0 && sd[1]-ed[1]==0 && sd[2]-ed[0]==0 ){
				 
               		if(ed[2]-sd[0]==0){
						if(et[0]-st[0]==0)
							if(et[1]-st[1]>=0)
					    		  dateTrue=1;
				            else{
								
								alert("Bitis saatini yanlis girdiniz.");
							}
							else if(et[0]-st[0]>0)
							dateTrue=1;
							else
							alert("Bitis saatini yanlis girdiniz.");
					}
					
					
					
					
			}
			 
			else{
				alert("Bitis tarihini baslangic tarihi ile ayni gün ya da sonra, ayni ay ayni yil içerisinde olmalidir. ");
			}
			
			
			
			
			
			
			if(dateTrue){
			
			
			 if(repeat!='Never')
			repeatEvent(title,content,location,startDate,endDate,startTime,finishTime,repeat,reminder);
			
			
			
			
			var baseUrl = "https://immense-coast-39524.herokuapp.com/calendars/";
					//var baseUrl = "http://localhost:3000/calendars";


					var myObject = {
						"id": 45,
						"title": title,
						"content":content,
						"location":location,
						"start_date": startDate,
						"start_time":  startTime,
						"end_date": endDate,
						"end_time": finishTime,
						"repeat": repeat,
						"reminder": reminder
						};
						
						
						//alert(baseUrl);

						
			 $.ajax({

			  url:baseUrl,
			  type:'POST',
			  dataType:'json',
			  data : JSON.stringify(myObject),
			  contentType: "application/json; charset=utf-8",
			  success:function(data) {
			 // $( "span[data-day='"+$("#endDate").val()+"']" ).addClass("eventAdded");
							//$( "span[data-day='08/08/2018']" ).addClass("eventAdded");
						//	$( "span[data-day='"+$("#dateValue").val()+"']" ).addClass("eventAdded");

				console.log("SaveEvent is added");
				    
			  }
			  
		  });
				

				
				//console.log(repeat);
				 //console.log(reminder);
   
			}
		   
			document.getElementById("title").value="";
			document.getElementById("content").value="";
			document.getElementById("location").value="";
			//$("#dateValue").val($(this).html()+"-"+(month+1)+"-"+year);
			//	$('#startDate').empty();
			document.getElementById("endDate").value="";
			document.getElementById("appt-startTime").value="";
			document.getElementById("appt-finishTime" ).value="";
			document.getElementById("repeat").value="Every Day";
			document.getElementById("reminder" ).value="Never";
			
	}
	
	function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
	getEvents();
}
 