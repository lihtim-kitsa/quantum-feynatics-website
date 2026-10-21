const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');

function closeMenu(restoreFocus = false) {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  if (restoreFocus) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.header')) closeMenu();
});

const mobileLayout = window.matchMedia('(max-width: 760px)');
const tabList = document.querySelector('[role="tablist"]');
const tabs = [...tabList.querySelectorAll('[role="tab"]')];

function updateTabOrientation() {
  tabList.setAttribute('aria-orientation', mobileLayout.matches ? 'horizontal' : 'vertical');
  if (!mobileLayout.matches) closeMenu();
}
updateTabOrientation();
mobileLayout.addEventListener('change', updateTabOrientation);

function selectTab(selectedTab) {
  tabs.forEach((tab) => {
    const selected = tab === selectedTab;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
  });
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', (event) => {
    const nextKey = mobileLayout.matches ? 'ArrowRight' : 'ArrowDown';
    const previousKey = mobileLayout.matches ? 'ArrowLeft' : 'ArrowUp';
    let nextIndex;
    if (event.key === nextKey) nextIndex = (index + 1) % tabs.length;
    else if (event.key === previousKey) nextIndex = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = tabs.length - 1;
    else return;
    event.preventDefault();
    selectTab(tabs[nextIndex]);
    tabs[nextIndex].focus();
  });
});
