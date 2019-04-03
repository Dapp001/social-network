jQuery(document).ready(function($) {
    /*
        chat menu show hide toggle
   */
   const chatWindow = $("#chat-window");
   const chatWindowToggle = $("#chat-window-toggle");
   // const chatList = $("#chat-list");
   // console.log(chatWindow.height());
   // intially keep chat window shinkred
   setTimeout(function () {
       chatWindow.css('bottom' , -chatWindow.height() + 60);
   }, 1000);

   function toggleChatWindow() {
       if (chatWindow.hasClass('expanded')) {
           chatWindow.css('bottom' , 0);
       } else {
           chatWindow.css('bottom' , -chatWindow.height() + 60);
       }
   }

   chatWindowToggle.click(function () {
       chatWindow.toggleClass('expanded');
       toggleChatWindow();
   });

   /*
        Mobile navigation sticky trigger
   */
   const header = $(".header");

   $(window).scroll(function () {
       let sTop = $(window).scrollTop();
       if (sTop >= 73) {
           header.addClass('sticky--active');
           $('body').addClass('fixed-header--active');
       } else {
           header.removeClass('sticky--active');
           $('body').removeClass('fixed-header--active');
       }
   });

   /*
    // lightbox
   */
    const lightbox = $("#imageLightbox");
    const lightboxOverlay = $("#lightboxOverlay");

    function imageLightbox (img) {
        lightboxOverlay.addClass('show-me');
        lightbox.addClass('show-me');
    }

    $('.uf__post__image a').click(function (e) {
        e.preventDefault();
        let imgAddress = $(this).attr('href');
        // console.log(imgAddress);
        imageLightbox(imgAddress);
    });

    lightboxOverlay.click(function () {
        lightbox.removeClass('show-me');
        lightboxOverlay.removeClass('show-me');
    });
    /*
    *   Header search suggestions trigger
    */
    const searchSuggBox = $("#header__search-suggestion");
    const searchInput = $("#ajax-search-input");

    function showHideSuggBox() {
        if (searchInput.val() === null || searchInput.val() === "") {
            searchSuggBox.removeClass('show');
        } else {
            searchSuggBox.addClass('show');
        }
    }
    searchInput.keyup(function() {
        showHideSuggBox();
    });
    searchInput.focusout(function () {
        searchSuggBox.removeClass('show');
    });
    searchInput.focusin(function () {
        showHideSuggBox();
    });

    /*
    *   Dropdown menu toggle
    */
    // const dropdownMenuTrigger = $(".nav-item--has-dropdown > .nav-item--link");
    // const megaMenu = $('.mw-megamenu');
    //
    // dropdownMenuTrigger.click(function (e) {
    //     e.preventDefault();
    //     let currentMegaMenu = $(this).siblings(megaMenu);
    //     // hide all other dropdowns
    //     megaMenu.removeClass('show');
    //     // show-toggle clicked menus dropdown
    //     currentMegaMenu.toggleClass('show');
    //     e.stopPropagation();
    // });
    //
    // megaMenu.click(function (e) {
    //     e.stopPropagation();
    // });
    //
    // $(document).click(function(){
    //     $('.mw-megamenu.show').removeClass('show');
    // });

    /*
    *   Notification dorpdowns
    */
    $("#notification-all-seen, #message-all-seen").click(function (e) {
        // e.preventDefault();
        $('.mw-megamenu__line__item').addClass('seen');
    });
    $(document).on('click', '.nav-item--has-dropdown .dropdown-menu', function (e) {
        e.stopPropagation();
    });

});