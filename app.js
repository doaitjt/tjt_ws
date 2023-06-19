const API_ENDPOINT = `https://tjtech.mienphi.org`;

/** constants  */
const $ = document.querySelector.bind(document);
/** @type{HTMLElement}  */
const $$ = document.querySelectorAll.bind(document);

$(
  '.g-normal.text-center.copy-right'
).innerText = `All rights reserved by TJTech. Copyright © ${new Date().getFullYear()}`;

$$('.rounded-content').forEach((ele) => {
  const parent = ele.parentElement;
  const imgElement = parent.children[1];
  ele.addEventListener('mouseenter', () => {
    imgElement.src = 'assets/images/ic_rounded_ticked.svg';
  });
  ele.addEventListener('mouseleave', () => {
    imgElement.src = 'assets/images/ic_rounded_tick.svg';
  });
});

/** func */

function setSubmenuPosition() {
  const navControls = $('#nav-controls').getBoundingClientRect();
  const navitem = $$('.nav-control .sub-control-list')[1];
  const prevTarget = $('.nav-control').getBoundingClientRect();
  navitem.style.left = -prevTarget.width - 24 + 'px';
  $$('.many-item').forEach((element) => {
    element.style.width = navControls.width + 'px';
  });
}
setSubmenuPosition();

window.onresize = () => {
  setSubmenuPosition();
};


const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false;
try {
  window.addEventListener(
    'test',
    null,
    Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) { }

const wheelOpt = supportsPassive ? { passive: false } : false;
const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

let showLang = false;
let clickedToLang = false;

$('#change-lang').addEventListener('click', () => {
  showLang = true;
  //
  const rect = $('#change-lang').getBoundingClientRect();
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  const option = document.createElement('div');
  option.className = 'lang-options';
  option.style.left = rect.x + 'px';
  option.style.top = rect.height + rect.y + 'px';
  option.innerHTML = `
    <div class="lang-items" onclick="changeLang()">English</div>
    <div class="lang-items" onclick="changeLang()">Vietnamese</div>
  `;

  overlay.appendChild(option);
  if (showLang) {
    document.body.appendChild(overlay);
    disableScroll();
  }
  overlay.addEventListener('click', () => {
    document.body.removeChild(overlay);
    enableScroll();
    showLang = false;
  });
  // $('#change-lang .lang-options').style.display = showLang ? 'block' : 'none';
});

function changeLang() {}

const container = document.getElementById('rounded-container');
const squares = document.getElementsByClassName('around-item');

// Calculate the angle between each square
const angle = (2 * Math.PI) / squares.length;

// Set the positions of each square
for (let i = 0; i < squares.length; i++) {
  const square = squares[i];

  // Calculate the position of the square along the circle
  const x = Math.cos(i * angle) * 300; // Adjust the radius as desired
  const y = Math.sin(i * angle) * 300; // Adjust the radius as desired

  // Set the position of the square
  square.style.left = `${x + 270}px`; // Adjust the horizontal center position as per the container width
  square.style.top = `${y + 270}px`; // Adjust the vertical center position as per the container height
}

$$('button').forEach((el) => {
  Ribble.attachEvent(el, {
    // duration in milliseconds
    duration: 400,
    // z-index
    zIndex: '9999',
    // background color
    bgColor: '#fff',
    // max opacity level
    maxOpacity: '0.4',
    // easing function
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  });
});

window.onscroll = (e) => {
  if (window.scrollY > 68) {
    $('.nav-foot').classList.add('filter-drop');
  } else {
    if ($('.nav-foot').classList.contains('filter-drop')) {
      $('.nav-foot').classList.remove('filter-drop');
    }
  }
};

// loading
/* window.addEventListener('load', () => {
  const loading = $('#pre-loaded');
  document.body.classList.remove('hidden-scrollbar');
  loading.classList.add('prl-hidden');
  setTimeout(() => {
    if (loading) {
      document.body.removeChild(loading)
    }
  }, 2000)
  console.log(`loaded`);
})
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('hidden-scrollbar');
  console.log(`on loading`);
})
 */

$$('.faq-panel').forEach(e => {
  let expand = false;
  const [header, body] = e.children;
  const expandBtn = header.children[0];
  expandBtn.addEventListener('click', () => {
    body.classList.toggle('expand');
    expandBtn.classList.toggle('expand');
    if (body.clientHeight) {
      body.style.height = 0;
    } else {
      body.style.height = body.children[0].clientHeight + 'px'
    }
  })
});




$('#open-mb-menu').addEventListener('click', () => {
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
  $('.mb-menu-drawer').classList.add('menu-expanded');
});

$('#close-mb-menu').addEventListener('click', () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  $('.mb-menu-drawer').classList.remove('menu-expanded');
});

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

const p1 = '';
const p2 = '/';
function setLoadingBeforPageLoaded(delay) {

  window.onload = () => {
    if (location.pathname === p1 || location.pathname === p2) {
      disableScroll();
      document.body.classList.add('hidden-scrollbar');
      const loading = $('#pre-loaded');
      setTimeout(() => {
        loading && loading.classList.add('prl-hidden');
        document.body.classList.remove('hidden-scrollbar');
        enableScroll();
        if (loading) {
          document.body.removeChild(loading);
        }
      }, delay);
      $('#mb-logo').src = `assets/images/root-mb-logo.svg`;
    }

  };
}
setLoadingBeforPageLoaded(3800);

