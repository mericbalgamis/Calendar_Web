 //  console.log(startDate[0]);
							if(startDate[0]==31){
			               console.log("bu startdate 31 çekiyor");

					        // bir sonraki ay 30sa
					         var a = parseInt(startDate[1])+1;
						     startDate[1] =a.toString();
								     //ocaksa
									if(startDate[1]==2){
										//şubat için
										var a = parseInt(startDate[1])+1;
								      	startDate[1] =a.toString();
										var b = parseInt(startDate[0])%28;
								      	startDate[0] =a.toString();
										subat=1;
									}
									
									else{
										//31 den 30 a düşersen
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
										
										if(kacCekiyorStart=30)
										{
									    //var a = parseInt(startDate[1])+1;
								      //	startDate[1] =a.toString();
										var b = parseInt(startDate[0])%30;
								      	startDate[0] =b.toString();
										}
									
									}
									 sd = startDate[0]+"-"+startDate[1]+"-"+startDate[2];
									
							}
							else if(   startDate[0]==30   ){
							var a = parseInt(startDate[1])+1;
						     startDate[1] =a.toString();
								     //ocaksa
									if(startDate[1]==2){
										//şubat için
									
										var b = parseInt(startDate[0])%28;
								      	startDate[0] =a.toString();
										subat=1;
									}
									
										 sd = startDate[0]+"-"+startDate[1]+"-"+startDate[2];
							}
						    else{
								    var a = parseInt(startDate[1])+1;
								    startDate[1] =a.toString();
								    sd = startDate[0]+"-"+startDate[1]+"-"+startDate[2];
						//		   console.log("startdate ay 31 çekmiyor");
							   
							}
							//*****************************END DATE İÇİN*****************************   
							  // ["2018", "08", "28"]  end
						
							if(endDate[2]==31){
					        // bir sonraki ay 30sa
					         var a = parseInt(endDate[1])+1;
						     endDate[1] =a.toString();
								     //ocaksa
									if(endDate[1]==2){
										//şubat için
										var a = parseInt(endDate[1])+1;
								      	endDate[1] =a.toString();
										var b = parseInt(endDate[2])%28;
								      	endDate[2] =b.toString();
										subat=1;
									}
									
									else{
										//31 den 30 a düşersen
										 var kacCekiyorStart=0;
										  if (endDate[1]<=7 )
										  {
											  if(endDate[1] % 2 ==0)
												  kacCekiyorStart=30;
											  else{
												  kacCekiyorStart=31;
											  }
										  }
										 if (endDate[1]>7  )
										  {
											  if(endDate[1] % 2 ==0)
												  kacCekiyorStart=31;
											  else{
												  kacCekiyorStart=30;
											  }
										  }
										
										if(kacCekiyorStart==30)
										{
									   // var a = parseInt(endDate[1])+1;
								      //	endDate[1] =a.toString();
										var b = parseInt(endDate[2])%30;
								      	endDate[2] =a.toString();
										}
									
									}
									 ed= endDate[2]+"-"+endDate[1]+"-"+endDate[0];   
									
							}
							else if (endDate[2]==30){
								        var a = parseInt(endDate[1])+1;
								      	endDate[1] =a.toString();
										
										if(endDate[1]==2){
										var b = parseInt(endDate[2])%28;
								      	endDate[2] =b.toString();
										subat=1;
										}
									
										 ed= endDate[2]+"-"+endDate[1]+"-"+endDate[0];   
							}
						    else{
								    var a = parseInt(endDate[1])+1;
								    endDate[1] =a.toString();
								     ed= endDate[2]+"-"+endDate[1]+"-"+endDate[0];   
								   
							   
							}  