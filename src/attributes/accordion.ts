const itemsArr = [...document.querySelectorAll('[bw-accordion=item]')];
const triggerArr = [...document.querySelectorAll('[bw-accordion=trigger]')];
const contentArr = [...document.querySelectorAll('[bw-accordion=content]')];

// Init function that hides content
const init = function () {
  // eslint-disable-next-line no-return-assign
  contentArr.forEach((content) => {
    content.style.padding = '0px';
    content.style.height = '0px';
  });
};

// Call init function on page load
init();

// Shows the content div
const openAcc = function () {
  contentArr.forEach((content) => {
    content.style.padding = '';
    content.style.height = 'auto';
  });
};
