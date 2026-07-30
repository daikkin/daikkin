document.addEventListener("DOMContentLoaded", function() {
	let dom;
	let tempVar,
		tempVar_1,
		tempVar_2,
		tempVar_3,
		tempVar_4,
		tempVar_5,
		tempVar_6;

	
	Object.keys(loadContents).forEach(function(lcV, lcInd) {
		tempVar = document.querySelector(`[section_for="${lcV}"]`);

		if(!(tempVar in checkNUB) && !(tempVar in checkNUB)) {
			tempVar_1 = tempVar.getAttribute("id");
			tempVar_3 = document.querySelector(`#${tempVar_1}-entry`);

			// if no entry template, use `composed-list`
			if(tempVar_3 in checkNUB) {
				tempVar_3 = document.querySelector(`#composed-list`);
				
			}

			if(loadContents[lcV].length > 0) {
				loadContents[lcV].forEach(function(lcIV, lcIInd) {
					dom = cloner(tempVar_3, tempVar);

					if(!(dom in checkNUB)) {
						switch(lcV) {
							case "projects":
								tempVar_5 = lcIV["academic_project"] ?? false;
								if(tempVar_5) {
									dom.querySelector(`.description-list`).innerHTML = "";
									dom.querySelector(`.entry-head .title`).textContent = lcIV["project_title"];
									dom.querySelector(`.entry-head .date`).textContent = lcIV["project_date"];
									if(Array.isArray(lcIV["additional_description"]) && lcIV["additional_description"].length > 0) {
										lcIV["additional_description"].forEach(function(lcADV, lcADInd) {
											dom.querySelector(`.description-list`).innerHTML += `<li>${lcADV}</li>`;
										});
									}
									if(Array.isArray(lcIV["technologies_used"]) && lcIV["technologies_used"].length > 0) {
										dom.querySelector(`.description-list`).innerHTML += `<li>Technologies used are: <strong>${lcIV["technologies_used"].join(", ")}</strong></li>`;
									}
								} else {
									removeElement(dom);
								}
							break;

							case "experience":
								dom.querySelector(`.description-list`).innerHTML = "";
								dom.querySelector(`.entry-head .title .role`).textContent = lcIV["role"];
								dom.querySelector(`.entry-head .title .company`).textContent = lcIV["company"];
								dom.querySelector(`.entry-head .date`).textContent = lcIV["year"];
								if(Array.isArray(lcIV["additional_description"]) && lcIV["additional_description"].length > 0) {
									lcIV["additional_description"].forEach(function(lcADV, lcADInd) {
										dom.querySelector(`.description-list`).innerHTML += `<li>${lcADV}</li>`;
									});
								}
								if(Array.isArray(lcIV["technologies_used"]) && lcIV["technologies_used"].length > 0) {
									dom.querySelector(`.description-list`).innerHTML += `<li>Technologies used are: <strong>${lcIV["technologies_used"].join(", ")}</strong></li>`;
								}
							break;

							case "education":
								dom.querySelector(`.entry-head .title .degree`).textContent = lcIV["background_long"];
								dom.querySelector(`.entry-head .title .school`).textContent = lcIV["university"];
								dom.querySelector(`.entry-head .date`).textContent = lcIV["year"];
							break;

							case "desktops":
							case "backends":
							case "frontends":
							case "tools":
							case "apis":
							case "methodologies":
								dom.textContent = lcIV["name"] ?? lcIV;
							break;
						}
					}
				});
			}
		}
	});
});