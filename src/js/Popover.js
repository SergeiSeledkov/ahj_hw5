export default class Popover {
  constuctor() { }

  createPopover(e, button) {
    const popoverWindow = document.createElement('div');
    const popoverArrow = document.createElement('div');
    const popoverHeader = document.createElement('h3');
    const popoverBody = document.createElement('div');
    popoverWindow.classList.add('popover-window');
    popoverHeader.classList.add('popover-header');
    popoverBody.classList.add('popover-body');
    popoverArrow.classList.add('popover-arrow');
    popoverHeader.textContent = button.dataset.title;
    popoverBody.textContent = button.dataset.content;

    document.body.appendChild(popoverWindow);
    popoverWindow.appendChild(popoverHeader);
    popoverWindow.appendChild(popoverBody);
    popoverWindow.appendChild(popoverArrow);

    const { top, left } = e.target.getBoundingClientRect();

    popoverWindow.style.top = `${window.scrollY + top - popoverWindow.offsetHeight}px`;
    popoverWindow.style.left = `${window.scrollX + left + button.offsetWidth / 2 - popoverWindow.offsetWidth / 2}px`;
    button.classList.add('show');
  }

  deletePopover(button) {
    const popoverWindow = document.querySelector('.popover-window');

    button.classList.remove('show');
    popoverWindow.remove();
  }
}
