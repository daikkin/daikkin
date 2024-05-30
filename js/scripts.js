window.theme={primary:"#3B7DDD",secondary:"#6c757d",success:"#1cbb8c",info:"#17a2b8",warning:"#fcb92c",danger:"#dc3545",white:"#fff","gray-100":"#f8f9fa","gray-200":"#e9ecef","gray-300":"#dee2e6","gray-400":"#ced4da","gray-500":"#adb5bd","gray-600":"#6c757d","gray-700":"#495057","gray-800":"#343a40","gray-900":"#212529",black:"#000"};
window.acceptablecolors={primary:"#3B7DDD",secondary:"#6c757d",success:"#1cbb8c",info:"#17a2b8",warning:"#fcb92c",danger:"#dc3545",black:"#000","gray-100":"#f8f9fa","gray-200":"#e9ecef","gray-300":"#dee2e6","gray-400":"#ced4da","gray-500":"#adb5bd","gray-600":"#6c757d","gray-700":"#495057","gray-800":"#343a40","gray-900":"#212529"};

/*global variables*/
var checkNUB = {undefined: undefined,null:null},
	blankTemplate = document.querySelector("#blank_template");

var imageViewerModal,
	imageViewer;

var contactMe = function() {
	window.open('mailto:reancyvillacarlos@gmail.com');
}
var downloadResume = function() {
	// add resume link
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
var cloner = function(_from, _to, _checkChildIfHave = false, _classCheck = "", _removeIfExists = true, _prepend = false) {
	let _fDom = document.getElementById(_from),
		_tDom = document.getElementById(_to),
		_checkChilds, _checkChilds1, _cCheck;

	if(typeof _from === "object") { _fDom = _from; }
	if(typeof _to === "object") { _tDom = _to; }
	if(_fDom != undefined && _tDom != undefined) {
		if(_classCheck != "" && _removeIfExists) {
			_checkChilds1 = _tDom.querySelectorAll(_classCheck);
			Array.from(_checkChilds1).find(function(_element) {
				_element.parentNode.removeChild(_element);
			});
		}
		if(_checkChildIfHave) {
			// check if this element already exists
			_checkChilds = _tDom.querySelectorAll("." + _fDom.id);
			Array.from(_checkChilds).find(function(_element) {
				_element.parentNode.removeChild(_element);
			});
		}

		_fDom = _fDom.cloneNode(true);
		_fDom.classList.add(_fDom.id);
		_fDom.removeAttribute("id");

		if(_prepend && _tDom.children.length > 0) {
			_tDom.insertBefore(_fDom, _tDom.children[0]);
		} else {
			_tDom.appendChild(_fDom);
		}
	}

	return _fDom || null;
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
				let _indApp = iaInd+1;

				if(iaInd === 0) {
					_dom.querySelector(`.image_block_show_1`).setAttribute("aria-label", `Slide ${_indApp}`);
					_dom.querySelector(`.image_block_show_2`).setAttribute("src", iaV);
					_dom.querySelector(`.image_block_show_2`).setAttribute("alt", `Slide ${_indApp}`);
				} else {
					_dom_1 = cloner(cleanCarouselItem_1, _dom.querySelector(`.carousel-inner`));
					_dom_2 = cloner(cleanCarouselItem_2, _dom.querySelector(`.carousel-indicators`));

					if(_dom_2) {
						_dom_2.setAttribute("data-bs-slide-to", iaInd);
						_dom_2.setAttribute("aria-label", `Slide ${_indApp}`);
						
					}
					if(_dom_1) {
						_dom_1.querySelector(`.image_block_show_2`).setAttribute("src", iaV);
						_dom_1.querySelector(`.image_block_show_2`).setAttribute("alt", `Slide ${_indApp}`);
					}
				}
			});

			/*project images viewer*/
			imageViewer.show();
		}
	}
};

document.addEventListener("DOMContentLoaded", function() {
	let dom;
	let tempVar,
		tempVar_1,
		tempVar_2,
		tempVar_3,
		tempVar_4,
		tempVar_5;

	imageViewerModal = document.querySelector("#imageViewModal");
	imageViewer = bootstrap.Modal.getOrCreateInstance(imageViewerModal);

	Object.keys(loadContents).forEach(function(lcV, lcInd) {
		tempVar = document.querySelector(`[section_for="${lcV}"]`);
		tempVar_3 = document.querySelector(`#${lcV}_template`);

		if(!(tempVar in checkNUB) && !(tempVar in checkNUB)) {
			tempVar_1 = tempVar.getAttribute("id");
			tempVar_2 = document.querySelector(`[load_content="${tempVar_1}"]`);

			if(loadContents[lcV].length > 0) {
				loadContents[lcV].forEach(function(lcIV, lcIInd) {
					dom = cloner(tempVar_3, tempVar);

					if(!(dom in checkNUB)) {
						switch(lcV) {
							case "projects":
								tempVar_5 = dom.querySelector(`.project_image`).getAttribute("src");
								tempVar_4 = Array.from(lcIV["technologies_used"]).map(function(tuV) { return `<strong>${tuV}</strong>`; });

								dom.querySelector(`.project_company_name`).innerHTML = "";
								dom.querySelector(`.project_title`).innerHTML = lcIV["project_title"];
								dom.querySelector(`.project_description`).innerHTML = lcIV["project_description"];
								dom.querySelector(`.project_technology_used`).innerHTML = tempVar_4.join(", ");
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
								dom.querySelector(`.education_degree`).innerHTML = lcIV["degree"];
								dom.querySelector(`.education_background`).innerHTML = lcIV["background"];
								dom.querySelector(`.education_description`).innerHTML = lcIV["description"];
							break;

							case "skills":
							case "languages":
								dom.querySelector(`.sl_line`).innerHTML = lcIV;
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
});