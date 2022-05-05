import Popover from './Popover';

const popoverButton = document.querySelector('.popover-button');
const popover = new Popover();

popoverButton.addEventListener('click', (e) => {
  if (!popoverButton.classList.contains('show')) {
    popover.createPopover(e, popoverButton);
  } else {
    popover.deletePopover(popoverButton);
  }
});
