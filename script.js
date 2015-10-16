$(document).ready(function() {

	$("#question2,#question3,#question4,#gaID,#aaID,#UABenefits,#benefits,#hasTnO,#hasVOC,#callTrackingBenefits,#hasAccess,[name^=hasGoals],[name^=hasFilters],[name^=hasEvents]").hide();


	// questions 1-4
	$("[name^=trackingType]").change(function() {
		if (this.id == "GoogleAnalytics") {
			$("#question2, #question3, #question4, #gaID").fadeIn("slow");
			$("#aaID").hide("slow");

			var x = document.getElementById("aaID");
			$(x).val("");
		}
		else if (this.id == "AdobeAnalytics") {
			$("#question2, #question4, #aaID").fadeIn("slow");
			$("#question3, #gaID").hide("slow");
			
			var x = document.getElementById("gaID");
			$(x).val("");
		}
		else if (this.id == "bothTrackingTypes") {
			$("#question2, #question3, #question4, #gaID, #aaID]").fadeIn("slow");
		}
		else {
			$("#question2, #question3, #question4, #gaID, #aaID").fadeOut("slow");

			var x = document.getElementById("gaID");
			$(x).val("");
			var y = document.getElementById("aaID");
			$(y).val("");
			var z = document.getElementById("notes");
			$(z).val("");
		};
	});
	
	$("#otherTrackingTypeInput").focus(function() {
		// $("[name^=trackingType]:focus").val("other");
		$("#otherTrackingType").attr('checked',true);
	});


	$("[name^=GAType]").change(function() {
		if (this.value == "classic") {
			$("#UABenefit").fadeIn("slow");
		}
		else {
			$("#UABenefits").fadeOut("slow");
		};
	});

	// question 5
	$("[name^=tagManager]").change(function() {
		if (this.value == "none") {
			$("#benefits").fadeIn("slow");
		}
		else {
			$("#benefits").fadeOut("slow");
		};
	});
	
	$("#otherTagManagerInput").focus(function() {
		$("#otherTagManager").attr('checked', 'checked');
	});

	// question 6
	$("[name^=efforts]").change(function() {
		if (this.value == "TnO") {
			$("#hasTnO").fadeIn("slow");
			$("#hasVOC").hide("slow");

			var x = document.getElementById("VOCplatform");
			$(x).val("");
		}
		else if (this.value == "VOC") {
			$("#hasVOC").fadeIn("slow");
			$("#hasTnO").hide("slow");

			var x = document.getElementById("TnOplatform");
			$(x).val("");
		}
		else if (this.value == "both") {
			$("#hasTnO, #hasVOC").fadeIn("slow");
		}
		else {
			$("#hasTnO, #hasVOC").fadeOut("slow");

			var x = document.getElementById("TnOplatform");
			$(x).val("");
			var y = document.getElementById("VOCplatform");
			$(y).val("");
		};
	});

	// question 8
	$("[name^=callTracking]").change(function() {
		if (this.value == "yes") {
			$("#callTrackingBenefits").fadeIn("slow");
		}
		else {
			$("#callTrackingBenefits").fadeOut("slow");
		};
	});

	$("[name^=access]").change(function() {
		if (this.value == "yes") {
			$("#hasAccess").fadeIn("slow");
		}
		else {
			$("#hasAccess").fadeOut("slow");
			// document.getElementById("hasAccess").getElementsByTagName($("textarea")).val("");

			var x = document.getElementById("hasAccess").getElementsByTagName("textarea");
			$(x).each(function(index){$(x[index]).val("");});
		};
	});

	$("[name^=goals]").change(function() {
		if (this.value == "yes") {
			$("[name^=hasGoals]").fadeIn("slow");
		}
		else {
			$("[name^=hasGoals]").fadeOut("slow");
			$("#goalDescription").val("");
		};
	});

	$("[name^=filters]").change(function() {
		if (this.value == "yes") {
			$("[name^=hasFilters]").fadeIn("slow");
		}
		else {
			$("[name^=hasFilters]").fadeOut("slow");
			$("#filterDescription").val("");
		};
	});

	$("[name^=events]").change(function() {
		if (this.value == "yes") {
			$("[name^=hasEvents]").fadeIn("slow");
		}
		else {
			$("[name^=hasEvents]").fadeOut("slow");
			$("#eventDescription").val("");
		};
	});

	$("#submitBtn").click(function(){
    		$("p").html("[name^=trackingType]".value);
	});

});