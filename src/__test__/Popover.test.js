import Popover from '../js/Popover';

test('check show popover window', () => {
  document.body.innerHTML = '<button class="popover-button" data-title="Popover title" data-content="And heres some amazing content. Its very engaging. Right?">Click to toggle popover</button>';

  const popoverButton = document.querySelector('.popover-button');
  const popover = new Popover();

  popoverButton.addEventListener('click', (e) => {
    popover.createPopover(e, popoverButton);
  });

  popoverButton.click();
  expect(popoverButton.classList.contains('show')).toBeTruthy();
});
