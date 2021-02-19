(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./assets/js/theme/common/utils/safe-string.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/utils/safe-string.js ***!
  \*****************************************************/
/*! exports provided: safeString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeString", function() { return safeString; });
/**
 * This function parses HTML entities in strings
 * @param str: String
 * @returns String
*/
var safeString = function safeString(str) {
  var d = new DOMParser();
  return d.parseFromString(str, 'text/html').body.textContent;
};

/***/ }),

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*
 Import all product specific js
 */







var WRITE_REVIEW = _global_modal__WEBPACK_IMPORTED_MODULE_6__["modalTypes"].WRITE_REVIEW;

var Product = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Product, _PageManager);

  function Product(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    _this.reviewModal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal-review-form')[0];
    return _this;
  }

  var _proto = Product.prototype;

  _proto.onReady = function onReady() {
    var _this2 = this;

    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator; // Init collapsible

    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    Object(_product_video_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();
    this.bulkPricingHandler();
    var $reviewForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.writeReview-form');
    if ($reviewForm.length === 0) return;
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_1__["default"]($reviewForm);
    $(document).on('opened.fndtn.reveal', '#modal-review-form', function () {
      return _this2.reviewModal.setupFocusableElements(WRITE_REVIEW);
    });
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);

      _this2.ariaDescribeReviewInputs($reviewForm);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }

      return false;
    });
    this.productReviewHandler();
  };

  _proto.ariaDescribeReviewInputs = function ariaDescribeReviewInputs($form) {
    $form.find('[data-input]').each(function (_, input) {
      var $input = $(input);
      var msgSpanId = $input.attr('name') + "-msg";
      $input.siblings('span').attr('id', msgSpanId);
      $input.attr('aria-describedby', msgSpanId);
    });
  };

  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };

  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };

  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils/safe-string */ "./assets/js/theme/common/utils/safe-string.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");






var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_0__["default"])({
      submit: $reviewForm.find('input[type="submit"]'),
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__["announceInputErrorMessage"]
    });
    this.$reviewsContent = $('#product-reviews');
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }
  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */


  var _proto = _default.prototype;

  _proto.initLinkBind = function initLinkBind() {
    var _this = this;

    var $content = $('#productReviews-content', this.$reviewsContent);
    $('#productReview_link').on('click', function () {
      $('.productView-reviewTabLink').trigger('click');

      if (!$content.hasClass('is-open')) {
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__["CollapsibleEvents"].click);
      }
    });
  };

  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
      return;
    } // force collapse on page load


    this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__["CollapsibleEvents"].click);
  }
  /**
   * Inject ID into the pagination link
   */
  ;

  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);

    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #product-reviews");
    }

    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #product-reviews");
    }
  };

  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: Object(_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__["safeString"])(this.context.reviewRating)
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: Object(_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__["safeString"])(this.context.reviewSubject)
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: Object(_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__["safeString"])(this.context.reviewComment)
    }, {
      selector: '.writeReview-form [name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };

  _proto.validate = function validate() {
    return this.validator.performCheck();
  };

  return _default;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/*! exports provided: VideoGallery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGallery", function() { return VideoGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return videoGallery; });
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }

  var _proto = VideoGallery.prototype;

  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };

  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };

  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };

  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };

  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;

    if (isInitialized) {
      return;
    }

    $el.data(pluginKey, new VideoGallery($el));
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3NhZmUtc3RyaW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJzYWZlU3RyaW5nIiwic3RyIiwiZCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsImJvZHkiLCJ0ZXh0Q29udGVudCIsIldSSVRFX1JFVklFVyIsIm1vZGFsVHlwZXMiLCJQcm9kdWN0IiwiY29udGV4dCIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIiRyZXZpZXdMaW5rIiwiJCIsIiRidWxrUHJpY2luZ0xpbmsiLCJyZXZpZXdNb2RhbCIsIm1vZGFsRmFjdG9yeSIsIm9uUmVhZHkiLCJkb2N1bWVudCIsIm9uIiwiaW5kZXhPZiIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJ0aXRsZSIsInBhdGhuYW1lIiwidmFsaWRhdG9yIiwiY29sbGFwc2libGVGYWN0b3J5IiwicHJvZHVjdERldGFpbHMiLCJQcm9kdWN0RGV0YWlscyIsIkJDRGF0YSIsInByb2R1Y3RfYXR0cmlidXRlcyIsInNldFByb2R1Y3RWYXJpYW50IiwidmlkZW9HYWxsZXJ5IiwiYnVsa1ByaWNpbmdIYW5kbGVyIiwiJHJldmlld0Zvcm0iLCJjbGFzc2lmeUZvcm0iLCJsZW5ndGgiLCJyZXZpZXciLCJSZXZpZXciLCJzZXR1cEZvY3VzYWJsZUVsZW1lbnRzIiwicmVnaXN0ZXJWYWxpZGF0aW9uIiwiYXJpYURlc2NyaWJlUmV2aWV3SW5wdXRzIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwicHJvZHVjdFJldmlld0hhbmRsZXIiLCIkZm9ybSIsImZpbmQiLCJlYWNoIiwiXyIsImlucHV0IiwiJGlucHV0IiwibXNnU3BhbklkIiwiYXR0ciIsInNpYmxpbmdzIiwidHJpZ2dlciIsIlBhZ2VNYW5hZ2VyIiwibm9kIiwic3VibWl0IiwidGFwIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsIiRyZXZpZXdzQ29udGVudCIsIiRjb2xsYXBzaWJsZSIsImluaXRMaW5rQmluZCIsImluamVjdFBhZ2luYXRpb25MaW5rIiwiY29sbGFwc2VSZXZpZXdzIiwiJGNvbnRlbnQiLCJoYXNDbGFzcyIsIkNvbGxhcHNpYmxlRXZlbnRzIiwiY2xpY2siLCJoYXNoIiwiJG5leHRMaW5rIiwiJHByZXZMaW5rIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImVycm9yTWVzc2FnZSIsInJldmlld1JhdGluZyIsInJldmlld1N1YmplY3QiLCJyZXZpZXdDb21tZW50IiwiY2IiLCJ2YWwiLCJyZXN1bHQiLCJmb3JtcyIsImVtYWlsIiwicmV2aWV3RW1haWwiLCJWaWRlb0dhbGxlcnkiLCIkZWxlbWVudCIsIiRwbGF5ZXIiLCIkdmlkZW9zIiwiY3VycmVudFZpZGVvIiwiYmluZEV2ZW50cyIsInNlbGVjdE5ld1ZpZGVvIiwiZSIsInByZXZlbnREZWZhdWx0IiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImRhdGEiLCIkc2VsZWN0ZWRUaHVtYiIsInNldE1haW5WaWRlbyIsInNldEFjdGl2ZVRodW1iIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImJpbmQiLCJwbHVnaW5LZXkiLCIkdmlkZW9HYWxsZXJ5IiwiaW5kZXgiLCJlbGVtZW50IiwiJGVsIiwiaXNJbml0aWFsaXplZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsR0FBRCxFQUFTO0FBQy9CLE1BQU1DLENBQUMsR0FBRyxJQUFJQyxTQUFKLEVBQVY7QUFDQSxTQUFPRCxDQUFDLENBQUNFLGVBQUYsQ0FB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bkMsTUFBTXdFLFNBQVMsR0FBRyxlQUFsQjtBQUNBLE1BQU1DLGFBQWEsR0FBRzVGLENBQUMsWUFBVTJGLFNBQVYsT0FBdkI7QUFFQUMsZUFBYSxDQUFDMUQsSUFBZCxDQUFtQixVQUFDMkQsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQ25DLFFBQU1DLEdBQUcsR0FBRy9GLENBQUMsQ0FBQzhGLE9BQUQsQ0FBYjtBQUNBLFFBQU1FLGFBQWEsR0FBR0QsR0FBRyxDQUFDWCxJQUFKLENBQVNPLFNBQVQsYUFBK0JuQixZQUFyRDs7QUFFQSxRQUFJd0IsYUFBSixFQUFtQjtBQUNmO0FBQ0g7O0FBRURELE9BQUcsQ0FBQ1gsSUFBSixDQUFTTyxTQUFULEVBQW9CLElBQUluQixZQUFKLENBQWlCdUIsR0FBakIsQ0FBcEI7QUFDSCxHQVREO0FBVUgsQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBmdW5jdGlvbiBwYXJzZXMgSFRNTCBlbnRpdGllcyBpbiBzdHJpbmdzXG4gKiBAcGFyYW0gc3RyOiBTdHJpbmdcbiAqIEByZXR1cm5zIFN0cmluZ1xuKi9cbmV4cG9ydCBjb25zdCBzYWZlU3RyaW5nID0gKHN0cikgPT4ge1xuICAgIGNvbnN0IGQgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgcmV0dXJuIGQucGFyc2VGcm9tU3RyaW5nKHN0ciwgJ3RleHQvaHRtbCcpLmJvZHkudGV4dENvbnRlbnQ7XG59O1xuIiwiLypcbiBJbXBvcnQgYWxsIHByb2R1Y3Qgc3BlY2lmaWMganNcbiAqL1xuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi9wcm9kdWN0L3Jldmlld3MnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcbmltcG9ydCB2aWRlb0dhbGxlcnkgZnJvbSAnLi9wcm9kdWN0L3ZpZGVvLWdhbGxlcnknO1xuaW1wb3J0IHsgY2xhc3NpZnlGb3JtIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgbW9kYWxGYWN0b3J5LCB7IG1vZGFsVHlwZXMgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XG5cbmNvbnN0IHsgV1JJVEVfUkVWSUVXIH0gPSBtb2RhbFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIHRoaXMuJHJldmlld0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScpO1xuICAgICAgICB0aGlzLiRidWxrUHJpY2luZ0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1idWxrLXByaWNpbmdcIl0nKTtcbiAgICAgICAgdGhpcy5yZXZpZXdNb2RhbCA9IG1vZGFsRmFjdG9yeSgnI21vZGFsLXJldmlldy1mb3JtJylbMF07XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgLy8gTGlzdGVuIGZvciBmb3VuZGF0aW9uIG1vZGFsIGNsb3NlIGV2ZW50cyB0byBzYW5pdGl6ZSBVUkwgYWZ0ZXIgcmV2aWV3LlxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xvc2UuZm5kdG4ucmV2ZWFsJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEgJiYgdHlwZW9mIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHZhbGlkYXRvcjtcblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoJCgnLnByb2R1Y3RWaWV3JyksIHRoaXMuY29udGV4dCwgd2luZG93LkJDRGF0YS5wcm9kdWN0X2F0dHJpYnV0ZXMpO1xuICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzLnNldFByb2R1Y3RWYXJpYW50KCk7XG5cbiAgICAgICAgdmlkZW9HYWxsZXJ5KCk7XG5cbiAgICAgICAgdGhpcy5idWxrUHJpY2luZ0hhbmRsZXIoKTtcblxuICAgICAgICBjb25zdCAkcmV2aWV3Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLndyaXRlUmV2aWV3LWZvcm0nKTtcblxuICAgICAgICBpZiAoJHJldmlld0Zvcm0ubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgcmV2aWV3ID0gbmV3IFJldmlldygkcmV2aWV3Rm9ybSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ29wZW5lZC5mbmR0bi5yZXZlYWwnLCAnI21vZGFsLXJldmlldy1mb3JtJywgKCkgPT4gdGhpcy5yZXZpZXdNb2RhbC5zZXR1cEZvY3VzYWJsZUVsZW1lbnRzKFdSSVRFX1JFVklFVykpO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nLCAoKSA9PiB7XG4gICAgICAgICAgICB2YWxpZGF0b3IgPSByZXZpZXcucmVnaXN0ZXJWYWxpZGF0aW9uKHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgICB0aGlzLmFyaWFEZXNjcmliZVJldmlld0lucHV0cygkcmV2aWV3Rm9ybSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRyZXZpZXdGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdFJldmlld0hhbmRsZXIoKTtcbiAgICB9XG5cbiAgICBhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMoJGZvcm0pIHtcbiAgICAgICAgJGZvcm0uZmluZCgnW2RhdGEtaW5wdXRdJykuZWFjaCgoXywgaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgbXNnU3BhbklkID0gYCR7JGlucHV0LmF0dHIoJ25hbWUnKX0tbXNnYDtcblxuICAgICAgICAgICAgJGlucHV0LnNpYmxpbmdzKCdzcGFuJykuYXR0cignaWQnLCBtc2dTcGFuSWQpO1xuICAgICAgICAgICAgJGlucHV0LmF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknLCBtc2dTcGFuSWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm9kdWN0UmV2aWV3SGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJHJldmlld0xpbmsudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1bGtQcmljaW5nSGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyNidWxrX3ByaWNpbmcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJGJ1bGtQcmljaW5nTGluay50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCB7IENvbGxhcHNpYmxlRXZlbnRzIH0gZnJvbSAnLi4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCBmb3JtcyBmcm9tICcuLi9jb21tb24vbW9kZWxzL2Zvcm1zJztcbmltcG9ydCB7IHNhZmVTdHJpbmcgfSBmcm9tICcuLi9jb21tb24vdXRpbHMvc2FmZS1zdHJpbmcnO1xuaW1wb3J0IHsgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSB9IGZyb20gJy4uL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCRyZXZpZXdGb3JtKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJHJldmlld0Zvcm0uZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRyZXZpZXdzQ29udGVudCA9ICQoJyNwcm9kdWN0LXJldmlld3MnKTtcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUgPSAkKCdbZGF0YS1jb2xsYXBzaWJsZV0nLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgdGhpcy5pbml0TGlua0JpbmQoKTtcbiAgICAgICAgdGhpcy5pbmplY3RQYWdpbmF0aW9uTGluaygpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlUmV2aWV3cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGluaXRpYWwgcGFnZSBsb2FkLCB0aGUgdXNlciBjbGlja3Mgb24gXCIoMTIgUmV2aWV3cylcIiBsaW5rXG4gICAgICogVGhlIGJyb3dzZXIganVtcHMgdG8gdGhlIHJldmlldyBwYWdlIGFuZCBzaG91bGQgZXhwYW5kIHRoZSByZXZpZXdzIHNlY3Rpb25cbiAgICAgKi9cbiAgICBpbml0TGlua0JpbmQoKSB7XG4gICAgICAgIGNvbnN0ICRjb250ZW50ID0gJCgnI3Byb2R1Y3RSZXZpZXdzLWNvbnRlbnQnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgJCgnI3Byb2R1Y3RSZXZpZXdfbGluaycpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy1yZXZpZXdUYWJMaW5rJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIGlmICghJGNvbnRlbnQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xpY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZVJldmlld3MoKSB7XG4gICAgICAgIC8vIFdlJ3JlIGluIHBhZ2luYXRpbmcgc3RhdGUsIGRvIG5vdCBjb2xsYXBzZVxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignI3Byb2R1Y3QtcmV2aWV3cycpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjZSBjb2xsYXBzZSBvbiBwYWdlIGxvYWRcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0IElEIGludG8gdGhlIHBhZ2luYXRpb24gbGlua1xuICAgICAqL1xuICAgIGluamVjdFBhZ2luYXRpb25MaW5rKCkge1xuICAgICAgICBjb25zdCAkbmV4dExpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1uZXh0IC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG4gICAgICAgIGNvbnN0ICRwcmV2TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzIC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgaWYgKCRuZXh0TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRuZXh0TGluay5hdHRyKCdocmVmJywgYCR7JG5leHRMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwcmV2TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRwcmV2TGluay5hdHRyKCdocmVmJywgYCR7JHByZXZMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJWYWxpZGF0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKFt7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2cmF0aW5nXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBzYWZlU3RyaW5nKHRoaXMuY29udGV4dC5yZXZpZXdSYXRpbmcpLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGl0bGVcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHNhZmVTdHJpbmcodGhpcy5jb250ZXh0LnJldmlld1N1YmplY3QpLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGV4dFwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogc2FmZVN0cmluZyh0aGlzLmNvbnRleHQucmV2aWV3Q29tbWVudCksXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLndyaXRlUmV2aWV3LWZvcm0gW25hbWU9XCJlbWFpbFwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3RW1haWwsXG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVmlkZW9HYWxsZXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCkge1xuICAgICAgICB0aGlzLiRwbGF5ZXIgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1wbGF5ZXJdJyk7XG4gICAgICAgIHRoaXMuJHZpZGVvcyA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLWl0ZW1dJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge307XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHNlbGVjdE5ld1ZpZGVvKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7XG4gICAgICAgICAgICBpZDogJHRhcmdldC5kYXRhKCd2aWRlb0lkJyksXG4gICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogJHRhcmdldCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldE1haW5WaWRlbygpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKCk7XG4gICAgfVxuXG4gICAgc2V0TWFpblZpZGVvKCkge1xuICAgICAgICB0aGlzLiRwbGF5ZXIuYXR0cignc3JjJywgYC8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dGhpcy5jdXJyZW50VmlkZW8uaWR9YCk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlVGh1bWIoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvLiRzZWxlY3RlZFRodW1iLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiR2aWRlb3Mub24oJ2NsaWNrJywgdGhpcy5zZWxlY3ROZXdWaWRlby5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpZGVvR2FsbGVyeSgpIHtcbiAgICBjb25zdCBwbHVnaW5LZXkgPSAndmlkZW8tZ2FsbGVyeSc7XG4gICAgY29uc3QgJHZpZGVvR2FsbGVyeSA9ICQoYFtkYXRhLSR7cGx1Z2luS2V5fV1gKTtcblxuICAgICR2aWRlb0dhbGxlcnkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgJGVsID0gJChlbGVtZW50KTtcbiAgICAgICAgY29uc3QgaXNJbml0aWFsaXplZCA9ICRlbC5kYXRhKHBsdWdpbktleSkgaW5zdGFuY2VvZiBWaWRlb0dhbGxlcnk7XG5cbiAgICAgICAgaWYgKGlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICRlbC5kYXRhKHBsdWdpbktleSwgbmV3IFZpZGVvR2FsbGVyeSgkZWwpKTtcbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=