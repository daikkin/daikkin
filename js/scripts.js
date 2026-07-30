var blankTemplate = document.querySelector("#blank_template")
var imageViewerModal,
	imageViewer;

var contactMe = function() {
	window.open('mailto:reancyvillacarlos@gmail.com');
}
var downloadResume = function() {
	try {
		let htmlResume = document.querySelector(`iframe#resumeInHtml`);

		// html2pdf(htmlResume);
		// print it instead
		htmlResume.contentWindow.print();
	} catch(error) {
		let dom = document.querySelector("#fileDownloader");

		dom.setAttribute("href", "assets/Reancy_Villacarlos.pdf");
		dom.click();
	}

	setCookie("download_done", "yes");
};
var readTextFile = function(file, callback) {
	let rawFile;

	if(typeof callback === "function") {
		rawFile = new XMLHttpRequest();
		rawFile.overrideMimeType("application/json");
		rawFile.open("GET", file, true);
		rawFile.onreadystatechange = function() {
			if (rawFile.readyState === 4 && rawFile.status == "200") {
				callback(rawFile.responseText);
			}
		};

		rawFile.send(null);
	}
};
var carouselCloner = function(_parent) {
	let _dom = cloner(document.querySelector(`#carouselExampleCaptions`), _parent),
		_newFlip = "cleanCarouselFlip";

	if(_dom) {
		_dom.setAttribute("id", _newFlip);

		Array.from(document.querySelectorAll(`[data-bs-target="#carouselExampleCaptions"]`)).find(function(_el) {
			_el.setAttribute("data-bs-target", `#${_newFlip}`)
		});
	}

	return _dom;
};
var showOtherImges = function(_this, contentType = "projects", indexFind = 0) {
	let _isFound = false,
		_imagesArray = [],
		_dom_2,
		_dom_1,
		_dom;

	let cleanCarouselItem_1 = document.querySelector(`#cleanCarouselItem_1`),
		cleanCarouselItem_2 = document.querySelector(`#cleanCarouselItem_2`);

	imageViewerModal.querySelector(`.modal-body`).innerHTML = "";

	if(!(loadContents[contentType] in checkNUB)) {
		if(!(loadContents[contentType][indexFind] in checkNUB)) {
			imageViewerModal.querySelector(`#imageViewModalLabel`).innerHTML = loadContents[contentType][indexFind]["project_title"] ?? "Image Viewer";

			if(!(loadContents[contentType][indexFind]["project_main_image"] in checkNUB)) {
				_isFound = true;
				// _imagesArray = loadContents[contentType][indexFind]["project_images"];
				_imagesArray = [loadContents[contentType][indexFind]["project_main_image"]].concat(loadContents[contentType][indexFind]["project_images"]);
			}
		}
	}

	if(!_isFound) {
		_isFound = true;
		_imagesArray = [_this.querySelector(`img.project_image`).getAttribute("src")];
	}

	if(_isFound && _imagesArray.length > 0) {
		_dom = carouselCloner(imageViewerModal.querySelector(`.modal-body`));

		if(_dom) {
			_imagesArray.forEach(function(iaV, iaInd) {
				let _indApp = iaInd+1,
					_imgSelector = _dom.querySelector(`.image_block_show_2`);

				if(iaInd === 0) {
					_imgSelector.setAttribute("src", iaV);
					_imgSelector.setAttribute("alt", `Slide ${_indApp}`);
					_dom.querySelector(`.image_block_show_1`).setAttribute("aria-label", `Slide ${_indApp}`);
				} else {
					_dom_1 = cloner(cleanCarouselItem_1, _dom.querySelector(`.carousel-inner`));
					_dom_2 = cloner(cleanCarouselItem_2, _dom.querySelector(`.carousel-indicators`));

					if(_dom_2) {
						_dom_2.setAttribute("data-bs-slide-to", iaInd);
						_dom_2.setAttribute("aria-label", `Slide ${_indApp}`);
						
					}
					if(_dom_1) {
						_imgSelector = _dom_1.querySelector(`.image_block_show_2`);

						_imgSelector.setAttribute("src", iaV);
						_imgSelector.setAttribute("alt", `Slide ${_indApp}`);
					}
				}

				// console.log([_imgSelector.naturalWidth, _imgSelector.naturalHeight]);
			});

			/*project images viewer*/
			imageViewer.show();
		}
	}
};
var viewMore = function(contentType = "projects") {
	if(!(loadContents[contentType] in checkNUB)) {
		switch(contentType) {
			case "projects":
				document.querySelectorAll(`.projects_template.d-none`).forEach(function(_el) { _el.classList.remove("d-none"); });
				document.querySelectorAll(`.projects_viewmore`).forEach(function(_el) { _el.parentNode.removeChild(_el); });
			break;
		}
	}
}

document.addEventListener("DOMContentLoaded", function() {
	let dom;
	let tempVar,
		tempVar_1,
		tempVar_2,
		tempVar_3,
		tempVar_4,
		tempVar_5,
		tempVar_6;

	let bodyWidth = document.body.clientWidth,
		contentLimiter = {};

	imageViewerModal = document.querySelector("#imageViewModal");
	imageViewer = bootstrap.Modal.getOrCreateInstance(imageViewerModal);

	// for fixing the right height allowed
	// imageViewerModal.addEventListener('shown.bs.modal', event => {
	// 	this.querySelector(`.modal-body`).clientHeight
	// });

	if(!(getCookie("download_done") in checkNUB)) {
		document.querySelector("#downloadResume").innerHTML = `<div class="d-inline-block bi bi-arrow-clockwise me-2"></div>Download Resume again`;
	}

	// set age here
	document.querySelector(`#my_age`).innerHTML = myAge;

	// let everything load up first
	setTimeout(function() {
		Object.keys(loadContents).forEach(function(lcV, lcInd) {
			tempVar = document.querySelector(`[section_for="${lcV}"]`);
			tempVar_3 = document.querySelector(`#${lcV}_template`);

			if(!(tempVar in checkNUB) && !(tempVar in checkNUB)) {
				tempVar_1 = tempVar.getAttribute("id");
				tempVar_2 = document.querySelector(`[load_content="${tempVar_1}"]`);

				if(loadContents[lcV].length > 0) {
					contentLimiter[lcV] = 0;

					loadContents[lcV].forEach(function(lcIV, lcIInd) {
						dom = cloner(tempVar_3, tempVar);
						contentLimiter[lcV]++;

						if(!(dom in checkNUB)) {
							switch(lcV) {
								case "projects":
									/*need to know if it's required to hide because purpose of portfolio is to show all projects(???)*/
									/*if(contentLimiter[lcV] > 5) {
										dom.classList.add("d-none");
										cloner(`${lcV}_viewmore`, tempVar, true, `.${lcV}_viewmore`);
									}*/

									tempVar_5 = dom.querySelector(`.project_image`).getAttribute("src");
									if(Array.isArray(lcIV["technologies_used"]) && lcIV["technologies_used"].length > 0) {
										tempVar_4 = Array.from(lcIV["technologies_used"]).map(function(tuV) { return `<strong>${tuV}</strong>`; });
										dom.querySelector(`.project_technology_used`).innerHTML = tempVar_4.join(", ");
									} else {
										dom.querySelector(`.project_technology_used`).parentNode.setAttribute("hidden", true);
									}

									dom.querySelector(`.project_company_name`).innerHTML = "";
									dom.querySelector(`.project_title`).innerHTML = lcIV["project_title"];
									dom.querySelector(`.project_description`).innerHTML = lcIV["project_description"];
									dom.querySelector(`.project_image`).parentNode.setAttribute("onclick", `showOtherImges(this, '${lcV}', ${lcIInd});`);
									
									if(!(lcIV["project_url"] in checkNUB)) {
										dom.querySelector(`.project_title`).classList.remove("text-dark");
										dom.querySelector(`.project_title`).setAttribute("target", "__blank");
										dom.querySelector(`.project_title`).setAttribute("href", lcIV["project_url"]);
									}
									if(!(lcIV["client_name"] in checkNUB)) {
										dom.querySelector(`.project_client_name`).innerHTML = `<small>Client: <strong><i>${lcIV["client_name"]}</i></strong></small>`;
									}
									if(!(lcIV["company_name"] in checkNUB)) {
										dom.querySelector(`.project_company_name`).innerHTML += `<p class="m-0"><small>${lcIV["company_name"]}</small></p>`;
									}
									if(!(lcIV["project_date"] in checkNUB)) {
										dom.querySelector(`.project_company_name`).innerHTML += `<p class="m-0"><small>${lcIV["project_date"]}</small></p>`;
									}

									// if(lcIV["project_images"].length > 0) {}
									if(!(lcIV["project_main_image"] in checkNUB)) {
										dom.querySelector(`.project_image`).setAttribute("src", `${lcIV["project_main_image"]}`);
									} else {
										dom.querySelector(`.project_image`).setAttribute("src", `${tempVar_5}&text=${encodeURI(lcIV["project_title"])}`);
									}

									tempVar_6 = (bodyWidth > 767)?
										dom.querySelector(`.project_details`).clientHeight:
										// make it same with how much the width is
										dom.querySelector(`.project_details`).clientWidth;
									// set height of project image based on how much the height of the project details
									dom.querySelector(`.project_image`).style.height = `${tempVar_6}px`;
								break;

								case "experience":
									dom.querySelector(`.experience_year`).innerHTML = lcIV["year"];
									dom.querySelector(`.experience_role`).innerHTML = lcIV["role"];
									dom.querySelector(`.experience_location_1`).innerHTML = lcIV["company"];
									dom.querySelector(`.experience_location_2`).innerHTML = lcIV["location_2"];
									dom.querySelector(`.experience_description`).innerHTML = lcIV["description"];
								break;

								case "education":
									dom.querySelector(`.education_year`).innerHTML = lcIV["year"];
									dom.querySelector(`.education_uni`).innerHTML = lcIV["university"];
									dom.querySelector(`.education_location`).innerHTML = lcIV["location"];
									dom.querySelector(`.education_degree`).innerHTML = lcIV["degree"]??"";
									dom.querySelector(`.education_background`).innerHTML = lcIV["background"];
									dom.querySelector(`.education_description`).innerHTML = lcIV["description"];
								break;

								case "skills":
								case "languages":
									dom.querySelector(`.sl_line`).innerHTML = lcIV;
								break;

								case "urls":
									dom.setAttribute("href", lcIV["url"]);
									if(lcIV["icon_1"] in checkNUB) {
										dom.textContent = lcIV["name"];
									} else if(lcIV["icon_1"].length > 0) {
										tempVar_6 = lcIV["icon_1"].split(" ");
										dom.querySelector(`i.url-icon`).classList.add(...tempVar_6);
									}
								break;
							}
						}
					});

					try {
						tempVar_2.parentNode.removeChild(tempVar_2);
					} catch(e) { }
				} else {
					cloner(blankTemplate, tempVar, true, `.${lcV}_template`);
				}
			}
		});
	}, 500);
});