function submitForm() {
	var trackingType, tagManager, gaID, aaID, GAType, ecommerce, notes, efforts, callTracking, importantTC, TnOplatform, VOCplatform, loadTime, status301, status302, status404, status500, accountSetup, goalDescription, goalRecs, filterDescription, filterRecs, eventDescription, eventRecs, websiteURL, accountRecs;
	

	if ($("[name^=trackingType]:checked").val() == "other") {
		trackingType = $("[name^=otherTrackingType]:input").val();
	}
	else {
		trackingType = $("[name^=trackingType]:checked").val();
	};


	if ($("[name^=tagManager]:checked").val() == "other") {
		tagManager = $("[name^=otherTagManager]:input").val();
	}
	else {
		tagManager = $("[name^=tagManager]:checked").val();
	};

				
	websiteURL = $("[id^=websiteURL]:input").val();
	gaID = $("#gaID:input").val();
	aaID = $("#aaID:input").val();
	GAType = $("[name^=GAType]:checked").val();
	ecommerce = $("[name^=ecommerce]:checked").val();
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
				
				
	var results = [trackingType, tagManager, gaID, aaID, GAType, notes, efforts, callTracking, importantTC, TnOplatform, VOCplatform, loadTime, status301, status302, status404, status500, accountSetup, goalDescription, goalRecs, filterDescription, filterRecs, eventDescription, eventRecs, accountRecs, output, hasGAaccess, websiteURL];

	document.getElementById("output").innerHTML = "<br>";	
	$(results).each( function( index ) {
		console.log(results[index]);
	});

	

	//******************************//
	//*********** OUTPUT ***********//
	//******************************//
	var output = [];
	
	output.push("<h4 class='websiteURL'>Web report for: </h4><a href='" + websiteURL + "' target='_blank'>" + websiteURL + "</a>");
	// GA ACCOUNT STRUCTURE
	if (trackingType == "Google Analytics" | trackingType == "Google Analytics and Adobe Analytics") {
		output.push("<h4>Current GA account structure setup</h4>", "The GA property " + gaID + " is the primary property.");
		
		if (notes.length > 0) {
			notes = notes.split("\n");

			output.push("<ul>");
			$(notes).each( function( index ) {
				output.push("<li>" + notes[index] + "</li>");
			});
			output.push("</ul>");
		};
		if (accountRecs.length > 0) {
			accountRecs = accountRecs.split("\n");

			output.push("<p>Recommendations:</p>", "<ul>");
			$(accountRecs).each( function( index ) {
				output.push("<li>" + accountRecs[index] + "</li>");
			});
			output.push("</ul>");
		};
	};


	// GOOGLE ANALYTICS TYPE
	if (GAType == "classic") {
		output.push("<h4>Universal Analytics</h4><ul><li>The website is running on classic ga.js and should be upgraded to analytics.js</li><li>Upgrading to UA has unique benefits like seamless offline integration, cross device tracking, session timeout handling and using custom dimensions to track relevant data.</li><li>Google is also in the process of deprecating classic ga.js at the end of this year.</li></ul>");

		if (ecommerce == "true") {
			output.push("<h4>Enhanced Ecommerce</h4><ul><li>One of the main benefits for an ecommerce website upgrading to Universal Analytics is Enhanced Ecommerce.</li><li>Enhanced Ecommerce allows you to see when customers added items to their shopping cards, started the checkout process, and completed a purchase. You can also use Enhanced Ecommerce to identify segments of customers who are falling out of the shopping funnel.</li></ul>");
		};
	};

	if (tagManager == 'no tag manager' && (trackingType == 'Google Analytics' | trackingType == 'Google Analytics and Adobe Analytics')) {
		output.push("<h4>Google Tag Manager</h4><p>The website does not show existence of any tag management system. There is an opportunity to implement Universal Analytics through Google Tag Manager.</p><p>There are several benefits of using Google Tag Manager we can take advantage of:</p><ul><li>Allows you to quickly and easily add, delete and update a wide range of analytics, remarketing and 3rd party tags</li><li>Data is dependable since error checking is easy and accurate</li><li>Compatible with mobile apps</li><li>Allows multi-account support and user permissions</li></ul>");
	};

	// TESTING AND OPTIMIZATION
	if (efforts == "VOC" | efforts == "none") {
		output.push("<h4>Testing and Optimization</h4><p>The website does not have any Conversion Rate Optimization tools. CRO has several benefits:</p>");
		output.push("<ul><li>Understanding the client's site visitors' behavior quantitatively and qualitatively in order to develop hypotheses for the website experience and test these experiences prior to investing the development time and resources in hardcoding.</li><li>Optimize any webpage against the client's KPIs (engagement ecommerce, lead generation).</li><li>It is crucial to optimize existing traffic to the site. Oftentimes, clients focus their budgets on paid media to push more traffic to the site, but conversion rate remains stagnant. Optimizing the site for existing traffic followed by optimizing traffic from new media efforts is necessary to achieve optimal conversion rates.</li></ul>");
	};
	
	// CALLTRACKING
	if (callTracking == "yes") {
		output.push("<h4>Call Tracking</h4><p>There is an opportunity to provide a call tracking system to evaluate and track calls coming to your call center with metrics including the types of campaigns, ad group, keywords. This will provide insight on the types of calls the call center will be receiving based on campaigns that are running and lead to optimizing performance.</p>");
	};

	// PAGE LOAD TIME
	output.push("<h4>Page Load Time</h4><p>The average page load time is " + loadTime + " seconds.</p>");
	if (loadTime > 3) {
		output.push("<p>This is not ideal for good visitor experience. The website should be optimized for decreasing average page load time to 3 seconds or less.</p>");
	}
	
	$('#output').append(output.join(''));


	// document.getElementById("output").innerHTML += "<h3>GA Account Structure</h3><blockquote class='block'></blockquote>";
	var block = [];
	block.push("<h3>GA Account Structure</h3><blockquote>");
	
	if (hasGAaccess == "yes") {	

		// GOALS
		block.push("<h4>Existing Goals</h4>");
		if (goalDescription.length > 0) {
			goalDescription = goalDescription.split("\n");

			block.push("<ul>");
			$(goalDescription).each( function( index ) {
				block.push("<li>" + goalDescription[index] + "</li>");
			});
			block.push("</ul>");
		}
		else {
			block.push("<p>No events are set up.</p>");
		};

		if (goalRecs.length > 0) {
			goalRecs = goalRecs.split("\n");

			block.push("<h4>Recommended Goals</h4>", "<ul>");
			$(goalRecs).each( function( index ) {
				block.push("<li>" + goalRecs[index] + "</li>");
			});
			block.push("</ul>");
		};
		block.push("<hr>");

		// FILTERS
		block.push("<h4>Existing Filters</h4>");
			if (filterDescription.length > 0) {
				filterDescription = filterDescription.split("\n");

				block.push("<ul>");
				$(filterDescription).each( function( index ) {
					block.push("<li>" + filterDescription[index] + "</li>");
				});
				block.push("</ul>");
			}
			else {
				block.push("<p>No filters are set up.</p>");
			};
		if (filterRecs.length > 0) {
			filterRecs = filterRecs.split("\n");
			var list = [];

			block.push("<h4>Recommended Filters</h4>", "<ul>");
			$(filterRecs).each( function( index ) {
				block.push("<li>" + filterRecs[index] + "</li>");
			});
			block.push("</ul>");
		};
		block.push("<hr>");

		// EVENTS
		block.push("<h4>Existing Events</h4>");
		if (eventDescription.length > 0) {
			eventDescription = eventDescription.split("\n");

			block.push("<ul>");
			$(eventDescription).each( function( index ) {
				block.push("<li>" + eventDescription[index] + "</li>");
			});
			block.push("</ul>");
		}
		else {
			block.push("<p>No events are set up.</p>");
		};
		if (eventRecs.length > 0) {
			eventRecs = eventRecs.split("\n");

			block.push("<h4>Recommended Events</h4>", "<ul>")
			$(eventRecs).each( function( index ) {
				block.push("<li>" + eventRecs[index] + "</li>");
			});
			block.push("</ul>");
		};	
	}

	else {
		block.push("<p>We don't have access to the Google Analytics account. We need to have access in order to be able to analyze its structure.</p>");
	};
	block.push("</blockquote>");

	// STATUS CODES
	var statuses = []
	if (status301>0 | status302>0 | status404>0 | status500>0) {
		statuses.push("<h4>Status Codes</h4><ul>");
	
		if (status301>0) {
			if (status301 == 1) {
				statuses.push("<li>1 page had 301 as its status code. This means that there is 1 page that has been </li>");
			}
			else {
				statuses.push("<li>" + status301 + " pages had 301 as its status code. This means that there are " + status301 + " pages that has been moved to a new permanent URI.</li>");
			};
		};
		if (status302>0) {
			if (status302 == 1) {
				statuses.push("<li>1 page had 302 as its status code. This means that there is 1 page with a temporary page redirect. This slashes the tracking code, which means that Google Analytics loses session tracking.</li>");
			}
			else{
				statuses.push("<li>" + status302 + " pages had 302 as its status code. This means that there are " + status302 + " pages with temporary page redirects. This slashes the tracking code, which means that Google Analytics loses session tracking.</li>");
			};
		};
		if (status404>0) {
			if (status404 == 1) {
				statuses.push("<li>1 page had 404 as its status code. This means that there is 1 page that was not found. This slashes the tracking code. Plus, it is not good to have nonexistent pages in terms of provided good visitor experience.</li>");
			}
			else {
				statuses.push("<li>" + status404 + " pages had 404 as its status code. This means that there are " + status404 + "  pages that were not found. This slashes the tracking code. Plus, it is not good to have nonexistent pages in terms of provided good visitor experience.</li>");
			};
		};
		if (status500>0) {
			if (status500 == 1) {
				statuses.push("<li>1 page had 500 as its status code. This means that there is 1 page that caused an internal server error.</li>");
			}
			else {
				statuses.push("<li>" + status500 + " pages had 500 as its status code. This means that there are " + status500 + " pages that caused internal server errors.</li>");
			};
		};
		
		statuses.push("</ul>")
	};
	
	
	$('#output').append(block.join(''), statuses.join(''));
};