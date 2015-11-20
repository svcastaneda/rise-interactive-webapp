$(document).ready(function() {

	$(".gaStuff,#gaAccountInfo,#adobeAccountInfo,#question3,#question4,#enhancedEcommerce, #benefits,#hasTnO,#hasVOC, #isVOCpossible, #callTrackingBenefits,#hasAccess,[name^=hasGoals],[name^=hasFilters],[name^=hasEvents]").hide();


	// questions 1-4
	$("[name^=trackingType]").change(function() {
		if (this.id != "noTrackingTypes") {
			$(".gaStuff, #question4, [name^=tagManager]").fadeIn("slow");

			if (this.id == "GoogleAnalytics") {
				$(".gaStuff").fadeIn("slow");
				$("#adobeAccountInfo").hide("slow");
			}
			else if (this.id == "AdobeAnalytics") {
				$("#adobeAccountInfo").fadeIn("slow");
				$(".gaStuff").hide("slow");
			}
			else if (this.id == "bothTrackingTypes") {
				$(".gaStuff, #adobeAccountInfo").fadeIn("slow");
			};
		}
		else {
			$(".gaStuff, #adobeAccountInfo").fadeOut("slow");
		};
	});
	
	$("#otherTrackingTypeInput").focus(function() {
		$("[name^=trackingType]:focus").val("other");
		$("#otherTrackingType").attr('checked',true);
	});


	$("[name^=ecommerce]").change(function() {
		if (this.value == "true") {
			$("#enhancedEcommerce").fadeIn("slow");
		}
		else {
			$("#enhancedEcommerce").fadeOut("slow");
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
			$("#isVOCpossible").fadeIn("slow");
		}
		else if (this.value == "VOC") {
			$("#hasVOC").fadeIn("slow");
			$("#hasTnO").hide("slow");
			$("#isVOCpossible").hide("slow");
		}
		else if (this.value == "both") {
			$("#hasTnO, #hasVOC").fadeIn("slow");
			$("#isVOCpossible").hide("slow");
		}
		else {
			$("#hasTnO, #hasVOC, #isVOCpossible").fadeOut("slow");
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
		};
	});

	$("[name^=goals]").change(function() {
		if (this.value == "yes") {
			$("[name^=hasGoals]").fadeIn("slow");
		}
		else {
			$("[name^=hasGoals]").fadeOut("slow");
		};
	});

	$("[name^=filters]").change(function() {
		if (this.value == "yes") {
			$("[name^=hasFilters]").fadeIn("slow");
		}
		else {
			$("[name^=hasFilters]").fadeOut("slow");
		};
	});

	$("[name^=events]").change(function() {
		if (this.value == "yes") {
			$("[name^=hasEvents]").fadeIn("slow");
		}
		else {
			$("[name^=hasEvents]").fadeOut("slow");
		};
	});

});