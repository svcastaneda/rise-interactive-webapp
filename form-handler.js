function submitForm() {
	var trackingType, tagManager, gaID, aaID, GAType, notes, efforts, callTracking, importantTC, TnOplatform, VOCplatform, loadTime, status301, status302, status404, status500, accountSetup, goalDescription, goalRecs, filterDescription, filterRecs, eventDescription, eventRecs, websiteURL, accountRecs;
	
	
	
	// var results = [];

	if ($("[name^=trackingType]:checked").val() == "other") {
		// results.push({trackingType:$("[name^=otherTrackingType]:input").val()});
		trackingType = $("[name^=otherTrackingType]:input").val();
	}
	else {
		// results.push({trackingType:$("[name^=trackingType]:checked").val()});
		trackingType = $("[name^=trackingType]:checked").val();
	};


	if ($("[name^=tagManager]:checked").val() == "other") {
		// results.push({tagManager:$("[name^=otherTagManager]:input").val()});
		tagManager = $("[name^=otherTagManager]:input").val();
	}
	else {
		// results.push({tagManager:$("[name^=tagManager]:checked").val()});
		tagManager = $("[name^=tagManager]:checked").val();
	};


	// results.push({gaID:$("[id^=gaID]:input").val(),
	// 			  aaID:$("[id^=aaID]:input").val(),
	// 			  GAType:$("[name^=GAType]:checked").val(),
	// 			  notes:$("[id^=notes]:input").val(),
	// 			  efforts:$("[name^=efforts]:checked").val(),
	// 			  callTracking:$("[name^=callTracking]:checked").val(),
	// 			  importantTC:$("[id^=importantTC]:input").val(),
	// 			  TnOplatform:$("[id^=TnOplatform]:input").val(),
	// 			  VOCplatform:$("[id^=VOCplatform]:input").val(),
	// 			  loadTime:$("[id^=loadTime]:input").val(),
	// 			  status301:$("[id^=status301]:input").val(),
	// 			  status302:$("[id^=status302]:input").val(),
	// 			  status404:$("[id^=status404]:input").val(),
	// 			  status500:$("[id^=status500]:input").val(),
	// 			});
				
				
	websiteURL = $("[id^=websiteURL]:input").val();
	gaID = $("#gaID:input").val();
	aaID = $("#aaID:input").val();
	GAType = $("[name^=GAType]:checked").val();
	notes = $("#notes:input").val();
	accountRecs = $("#accountRecs:input").val();
	efforts = $("[name^=efforts]:checked").val();
	callTracking = $("[name^=callTracking]:checked").val();
	importantTC = $("#importantTC:input").val().replace(/\r\n|\r|\n/g,"<br />");
	TnOplatform = $("#TnOplatform:input").val();
	VOCplatform = $("#VOCplatform:input").val();
	loadTime = $("#loadTime:input").val();
	status301 = $("#status301:input").val();
	status302 = $("#status302:input").val();
	status404 = $("#status404:input").val();
	status500 = $("#status500:input").val();
	hasGAaccess = $("[name^=access]:checked").val();
	accountSetup = $("#accountSetup:input").val()
	goalDescription = $("#goalDescription:input").val()
	goalRecs = $("#goalRecs:input").val()
	filterDescription = $("#filterDescription:input").val()
	filterRecs = $("#filterRecs:input").val()
	eventDescription = $("#eventDescription:input").val()
	eventRecs = $("#eventRecs:input").val()

	// var textareas = [notes, importantTC, accountSetup, goalDescription, goalRecs, filterDescription, filterRecs, eventDescription, eventRecs];

	// $(textareas).each( function( index ) {
	// 	if textareas[index].length > 0 {
	// 		textareas[index] = textareas[index].split("\n");
	// 	};
	// });
				
				
	var results = [trackingType, tagManager, gaID, aaID, GAType, notes, efforts, callTracking, importantTC, TnOplatform, VOCplatform, loadTime, status301, status302, status404, status500, accountSetup, goalDescription, goalRecs, filterDescription, filterRecs, eventDescription, eventRecs, accountRecs, output, hasGAaccess, websiteURL];





	document.getElementById("output").innerHTML = "<br>";	
	$(results).each( function( index ) {
		console.log(results[index]);
	});

	

	//******************************//
	//*********** OUTPUT ***********//
	//******************************//

	document.getElementById("output").innerHTML += "<h4 class='websiteURL'>Web report for: </h4><a href='" + websiteURL + "' target='_blank'>" + websiteURL + "</a>";

	// GA ACCOUNT STRUCTURE
	if (trackingType == "Google Analytics" | trackingType == "Google Analytics and Adobe Analytics") {
		document.getElementById("output").innerHTML += "<h4>Current GA account structure setup</h4>";
		document.getElementById("output").innerHTML += "The GA property " + gaID + " is the primary property.";
		if (notes.length > 0) {
			notes = notes.split("\n");
			var list = [];

			document.getElementById("output").innerHTML += "<ul class='lists'></ul>";
			$(notes).each( function( index ) {
				list.push("<li>" + notes[index] + "</li>");
			});
			$('.lists').append(list.join(''));
		};
		if (accountRecs.length > 0) {
			accountRecs = accountRecs.split("\n");
			var list = [];

			document.getElementById("output").innerHTML += "<p>Recommendations:</p>"
			document.getElementById("output").innerHTML += "<ul class='lists'></ul>";
			$(accountRecs).each( function( index ) {
				list.push("<li>" + accountRecs[index] + "</li>");
			});
			$('.lists').append(list.join(''));
		};
	};
		document.getElementById("output").innerHTML += "</ul>";
// document.getElementById("output").innerHTML += "<p>It is recommended that each property contains 3 views:</p>";
// document.getElementById("output").innerHTML += "<ul><li><b>Testing View: </b> For testing (Only Company/ Agency IP address)</li><li><b>Main view: </b>Will have all the goals and filters configuration complete.</li><li><b>Raw View: </b>captures all data regardless where it comes from.</li></ul>";


	// GOOGLE ANALYTICS TYPE
	if (GAType == "classic") {
		document.getElementById("output").innerHTML += "<h4>Universal Analytics</h4><ul><li>The website is running on classic ga.js and should be upgraded to analytics.js</li><li>Upgradsing to UA has unique benefits like seamless offline integration, cross device tracking, session timeout handling and using custom dimensions to track relevant data.</li><li>Google is also in the process of deprecating classic ga.js at the end of this year.</li></ul>";
	};

	if (tagManager == 'no tag manager' && (trackingType == 'Google Analytics' | trackingType == 'Google Analytics and Adobe Analytics')) {
		document.getElementById("output").innerHTML += "<h4>Google Tag Manager</h4><p>The website does not show existence of any tag management system. There is an opportunity to implement Universal Analytics through Google Tag Manager.</p><p>There are several benefits of using Google Tag Manager we can take advantage of:</p><ul><li>Allows you to quickly and easily add, delete and update a wide range of analytics, remarketing and 3rd party tags</li><li>Data is dependable since error checking is easy and accurate</li><li>Compatible with mobile apps</li><li>Allows multi-account support and user permissions</li></ul>";
	};

	// TESTING AND OPTIMIZATION
	if (efforts == "VOC" | efforts == "none") {
		document.getElementById("output").innerHTML += "<h4>Testing and Optimization</h4><p>The website does not have any Conversion Rate Optimization tools. CRO has several benefits:</p>";
		document.getElementById("output").innerHTML += "<ul><li>Understanding the client's site visitors' behavior quantitatively and qualitatively in order to develop hypotheses for the website experience and test these experiences prior to investing the development time and resources in hardcoding.</li><li>Optimize any webpage against the client's KPIs (engagement ecommerce, lead generation).</li><li>It is crucial to optimize existing traffic to the site. Oftentimes, clients focus their budgets on paid media to push more traffic to the site, but conversion rate remains stagnant. Optimizing the site for existing traffic followed by optimizing traffic from new media efforts is necessary to achieve optimal conversion rates.</li></ul>";
	};
	
	// CALLTRACKING
	if (callTracking == "yes") {
		document.getElementById("output").innerHTML += "<h4>Call Tracking</h4><p>There is an opportunity to provide a call tracking system to evaluate and track calls coming to your call center with metrics including the types of campaigns, ad group, keywords. This will provide insight on the types of calls the call center will be receiving based on campaigns that are running and lead to optimizing performance.</p>";
	};

	// PAGE LOAD TIME
	document.getElementById("output").innerHTML += "<h4>Page Load Time</h4><p>The average page load time is " + loadTime + " seconds.</p>";
	if (loadTime > 3) {
		document.getElementById("output").innerHTML += "<p>This is not ideal for good visitor experience. The website should be optimized for decreasing average page load time.</p>";
	}
	

	document.getElementById("output").innerHTML += "<h3>GA Account Structure</h3>";
	if (hasGAaccess == "yes") {

		// GOALS
		document.getElementById("output").innerHTML += "<h4>Existing Goals</h4>";
		if (goalDescription.length > 0) {
			goalDescription = goalDescription.split("\n");
			var list = [];

			document.getElementById("output").innerHTML += "<ul class='lists'></ul>";

			$(goalDescription).each( function( index ) {
				list.push("<li>" + goalDescription[index] + "</li>");
			});
			$('.lists').append(list.join(''));
		}
		else {
			document.getElementById("output").innerHTML += "<p>No events are set up.</p>";
		};

		if (goalRecs.length > 0) {
			goalRecs = goalRecs.split("\n");
			var list = [];

			document.getElementById("output").innerHTML += "<h4>Recommended Goals</h4>";
			document.getElementById("output").innerHTML += "<ul class='lists'></ul>";
			$(goalRecs).each( function( index ) {
				list.push("<li>" + goalRecs[index] + "</li>");
			});
			$('.lists').append(list.join(''));
		};

		// FILTERS
		document.getElementById("output").innerHTML += "<h4>Existing Filters</h4>";
			if (filterDescription.length > 0) {
				filterDescription = filterDescription.split("\n");
				var list = [];

				document.getElementById("output").innerHTML += "<ul class='lists'></ul>";
				$(filterDescription).each( function( index ) {
					list.push("<li>" + filterDescription[index] + "</li>");
				});
				$('.lists').append(list.join(''));
			}
			else {
				document.getElementById("output").innerHTML += "<p>No filters are set up.</p>";
			};
		if (filterRecs.length > 0) {
			filterRecs = filterRecs.split("\n");
			var list = [];

			document.getElementById("output").innerHTML += "<h4>Recommended Filters</h4>";
			document.getElementById("output").innerHTML += "<ul class='lists'></ul>";
			$(filterRecs).each( function( index ) {
				list.push("<li>" + filterRecs[index] + "</li>");
			});
			$('.lists').append(list.join(''));
		};

		// EVENTS
		document.getElementById("output").innerHTML += "<h4>Existing Events</h4>";
		if (eventDescription.length > 0) {
			eventDescription = eventDescription.split("\n");

			document.getElementById("output").innerHTML += "<ul class='lists'></ul>";
			$(eventDescription).each( function( index ) {
				document.getElementById("output").innerHTML += "<li>" + eventDescription[index] + "</li>";
			});
			$('.lists').append(list.join(''));
		}
		else {
			document.getElementById("output").innerHTML += "<p>No events are set up.</p>";
		};
		if (eventRecs.length > 0) {
			eventRecs = eventRecs.split("\n");
			document.getElementById("output").innerHTML += "<h4>Recommended Events</h4>";
			document.getElementById("output").innerHTML += "<ul class='lists'></ul>";
			$(eventRecs).each( function( index ) {
				document.getElementById("output").innerHTML += "<li>" + eventRecs[index] + "</li>";
			});
			$('.lists').append(list.join(''));
		};
	}

	else {
		document.getElementById("output").innerHTML += "<p>We don't have access to the Google Analytics account. We need to have access in order to be able to analyze its structure.</p>"
	};


	// STATUS CODES
	if (status301>0 | status302>0 | status404>0 | status500>0) {
		document.getElementById("output").innerHTML += "<h4>Status Codes</h4>";
	};
	
	if (status301>0) {
		if (status301 == 1) {
			document.getElementById("output").innerHTML += "<p>1 page had 301 as its status code. This means that there is 1 page that has been </p>";
		}
		else {
			document.getElementById("output").innerHTML += "<p>" + status301 + " pages had 301 as its status code. This means that there are " + status301 + " pages that </p>";
		};
	};
	if (status302>0) {
		if (status302 == 1) {
			document.getElementById("output").innerHTML += "<p>1 page had 302 as its status code. This means that there is 1 page with a temporary page redirect. This slashes the tracking code, which means that Google Analytics loses session tracking.</p>";
		}
		else{
			document.getElementById("output").innerHTML += "<p>" + status302 + " pages had 302 as its status code. This means that there are " + status302 + " pages with temporary page redirects. This slashes the tracking code, which means that Google Analytics loses session tracking.</p>";
		};
	};
	if (status404>0) {
		if (status404 == 1) {
			document.getElementById("output").innerHTML += "<p>1 page had 404 as its status code. This means that there is 1 page that was not found. This slashes the tracking code. Plus, it is not good to have nonexistent pages in terms of provided good visitor experience.</p>";
		}
		else {
			document.getElementById("output").innerHTML += "<p>" + status404 + " pages had 404 as its status code. This means that there are " + status404 + "  pages that were not found. This slashes the tracking code. Plus, it is not good to have nonexistent pages in terms of provided good visitor experience.</p>";
		};
	};
	if (status500>0) {
		if (status500 == 1) {
			document.getElementById("output").innerHTML += "<p>1 page had 500 as its status code. This means that there is 1 page that caused an internal server error.</p>";
		}
		else {
			document.getElementById("output").innerHTML += "<p>" + status500 + " pages had 500 as its status code. This means that there are " + status500 + " pages that caused internal server errors.</p>";
		};
	};
};