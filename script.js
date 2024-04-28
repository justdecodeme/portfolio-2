/* *********** */
/* current year */
/* *********** */
const yearEl = document.getElementById('year');
yearEl.innerHTML = new Date().getFullYear();

/* *********** */
/* filters */
/* *********** */
const filterEls = document.querySelectorAll('#filters li');

for (let i = 0; i < filterEls.length; i++) {
	filterEls[i].addEventListener('click', function (e) {
		document.querySelector('#filters li.active').classList.remove('active');
		filterEls[i].classList.add('active');
		let tag = e.target.id;
		renderProjects(tag);
	});
}

/* *********** */
/* projects */
/* *********** */
const projectsEl = document.getElementById('projects');
const projects = [
	{
		name: 'Logos List',
		img: 'logos-list.png',
		liveUrl:
			'https://www.figma.com/file/pOFEWDLytXOZACPUTEr4Vi/logos?type=design&node-id=4%3A37&mode=design&t=joWy6BrjKBHSPznU-1',
		tags: ['logo'],
	},
];

function renderProjects(tag) {
	let output = '';
	// <img src="img/project/${projects[i].img}" alt="Calculator Project Image">

	for (let i = 0; i < projects.length; i++) {
		if (tag == 'all' || projects[i].tags.includes(tag)) {
			output += `<div class="project">
				<div class="project-img" style="
					background-image: url('img/project/${projects[i].img}');
				">
				</div>
				<a class="content flex" href="${projects[i].liveUrl}" target="_blank">
					<p>${projects[i].name}</p>
					<p class="flex">
						<img class="figma_icon" src="img/icon/figma.svg" alt="Figma Icon">
						<img class="external_icon" src="img/icon/arrow-up-right-from-square-solid.svg" alt="External link">
					</p>
				</a>
			</div> `;
		}
	}

	projectsEl.innerHTML = output;
}

renderProjects('all');

/* *********** */
/* social links */
/* *********** */
const socialLinksEl = document.getElementById('socialLinks');
const socialLinks = [
	{
		name: GitH,
	},
];

function rendersocialLinks(tag) {
	let output = '';
	// <img src="img/project/${socialLinks[i].img}" alt="Calculator Project Image">

	for (let i = 0; i < socialLinks.length; i++) {
		if (tag == 'all' || projects[i].tags.includes(tag)) {
			output += `<div class="project">
				s
			</div> `;
		}
	}

	projectsEl.innerHTML = output;
}

rendersocialLinks('all');
