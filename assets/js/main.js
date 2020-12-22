window.onload = () => {
  const owl = {
    init: function () {
      this.slider('.overview-carousel');
      this.slider('.partner-carousel');
      this.slider('.match-carousel');
      this.slider('.team-section-carousel');
      this.slider('.calendar-carousel');
      this.slider('.player-carousel')
      this.slider('.player-member-carousel')
    },
    slider: function (target) {
      const mainWrap = $(target)
      let options = {}
      switch (target) {
        case '.overview-carousel':
          options = {
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayHoverPause: true,
            dots: true,
            responsive: {
              0: {
                items: 1
              },
            }
          }
          break;
        case '.partner-carousel':
          options = {
            loop: true,
            margin: 0,
            autoplay: true,
            nav: true,
            navElement: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve"><path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"/></svg>',
            navText: '',
            responsive: {
              0: {
                items: 1
              },
              375: {
                items: 2
              },
              1080: {
                items: 3
              },
            }
          }
          break;
        case '.match-carousel':
          options = {
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
              0: {
                items: 1,
              },
              575: {
                items: 2,
              },
              768: {
                items: 3,
              },
              1024: {
                items: 4,
              },
            }
          }
          break;
        case '.team-section-carousel':
          options = {
            loop: true,
            margin: 0,
            autoplay: false,
            dots: false,
            nav: true,
            navElement: '<div class="overlay"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve"><path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"/></svg></div>',
            navText: '',
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            responsive: {
              0: {
                items: 1
              },
            }
          }
          break;
        case '.calendar-carousel':
          options = {
            loop: false,
            margin: 0,
            autoplay: false,
            dots: false,
            nav: true,
            navElement: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve"><path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"/></svg>',
            navText: '',
            responsive: {
              0: {
                items: 3
              },
              375: {
                items: 5
              },
              575: {
                items: 9
              },
            }
          }
          break;

        case '.player-carousel':
          options = {
            loop: false,
            margin: 0,
            autoplay: false,
            autoHeight: true,
            dotsContainer: '.player-dots-carousel',
            responsive: {
              0: {
                items: 1
              },
            }
          }
          break;

        case '.player-member-carousel':
          options = {
            loop: false,
            margin: 0,
            autoplay: false,
            nav: false,
            dots: false,
            dotsContainer: '.player-member-dots',
            responsive: {
              0: {
                items: 1
              },
            }
          }
          break;
        
        default:
          return true
      }
      if (mainWrap) {
        const owl = $(mainWrap).owlCarousel(options)
        switch (target) {
          case '.player-carousel':
            const playerDots = $('.player-dots-carousel .dots-item')
            owl.on('changed.owl.carousel', function (event) {
              playerDots.removeClass('active')
              playerDots[event.item.index].classList.add('active')
            })
            playerDots.click(function (item) {
              playerDots.removeClass('active')
              item.currentTarget.classList.add('active')
              owl.trigger('to.owl.carousel', [$(this).index(), 200]);
            });
          break;
          
          case '.player-member-carousel':
            const memberDots = $('.player-member-dots .dots-item')
            owl.on('changed.owl.carousel', function (event) {
              memberDots.removeClass('active')
              memberDots[event.item.index].classList.add('active')
            })
            memberDots.click(function (item) {
              memberDots.removeClass('active')
              item.currentTarget.classList.add('active')
              owl.trigger('to.owl.carousel', [$(this).index(), 200]);
            });
          break;

          default:
            return false
        }
      }
    },
  }
  owl.init();

  const customCusror = {
    init: function () {
      this.setMouse();
    },
    setMouse: function () {
      const options = {
        "cursorOuter": "circle-basic",
        "hoverEffect": "circle-move",
        "hoverItemMove": false,
        "defaultCursor": false,
        "outerWidth": 30,
        "outerHeight": 30
      }
      magicMouse(options);
    }
  }
  customCusror.init();

  const nDropdown = {
    init: function () {
      this.openDropdown('.n-dropdown')
      this.clickOut()
    },
    openDropdown: function (className) {
      const buttons = document.querySelectorAll(className)
      if (buttons.length !== 0) {
        buttons.forEach((item) => item.addEventListener('click', () => {
          const wrap = item.querySelector('.n-dropdown-content')
          wrap.classList.toggle('active')
        }))
      }
    },
    clickOut: function () {
      window.onclick = function (event) {
        if (!event.target.matches('.n-dropdown-btn')) {
          const dropdowns = document.querySelectorAll('.n-dropdown-content')
          dropdowns.forEach((item) => {
            if (item.classList.contains('active')) {
              item.classList.remove('active')
            }
          })
        }
      }
    },
  }
  nDropdown.init()

  const loading = {
    init: function () {
      this.loading()
    },
    loading: function () {
      const loading = document.querySelector('#loading')
      const body = document.querySelector('body')
      setTimeout(() => {
        loading.classList.add('active')
        body.classList.add('loaded')
      }, 1000)
    },
  }
  loading.init()

  const nav = {
    init: function() {
      this.eventNav()
      this.eventNavLinkMobile()
    },
    eventNav: function() {
      const navMobile = document.querySelector('nav.nav-mobile')
      const nav = document.querySelector('nav.nav')
      if (nav && navMobile) {
        const navBtn = nav.querySelector('.nav-open-menu')
        navBtn.addEventListener('click', () => {
          nav.classList.toggle('active')
          navMobile.classList.toggle('active')
          navBtn.classList.toggle('active')
        })
      }
    },
    eventNavLinkMobile: function() {
      const navMobile = document.querySelector('nav.nav-mobile')
      if (navMobile) {
        const navFirstLevel = navMobile.querySelectorAll('.nav-level-1 a')
        const navBack = navMobile.querySelectorAll('.nav-list.back')

        navFirstLevel.forEach((item, index) => item.addEventListener('click', (e) => {
          if (item.href.includes('#')) {
            e.preventDefault()
            navFirstLevel.forEach(nav => nav.parentNode.classList.add('active'))
            const navLv2 = item.parentNode.querySelector('.nav-list-child')
            if (navLv2) {
              navLv2.classList.add('active')
            }
          }        
        }))

        navBack.forEach((item, index) => item.addEventListener('click', (e) => {
          e.preventDefault()
          navFirstLevel.forEach(nav => nav.parentNode.classList.remove('active'))
          item.parentNode.classList.remove('active')
        }))
      }
    },
  }
  nav.init()

  const scrollWheel = {
    init: function() {
      this.setScroll('#scroll-main')
    },
    setScroll: function(target) {
      const main = document.querySelector(target)
      if (main) {
        main.addEventListener('wheel', (evt) => {
          main.scrollLeft += (evt.deltaY / 2);
          main.scrollTop += (evt.deltaY / 2);
          evt.preventDefault();
        })
      }
    },
  }
  scrollWheel.init()
}