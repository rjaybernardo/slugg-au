

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656992893966').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1656992894044').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1656992893973').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
(function(jQuery) {
    var $module = jQuery('#m-1656992893979').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    (function( jQuery ){
  var $module = jQuery('#m-1656992894053').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $element.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var selectedVariant = $product.data('gfv3product').getVariant();
    customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
    var currentPrice = variant.price;
    var comparePrice = variant.compare_at_price;
    if(currentPrice != null && comparePrice != null){
      if(currentPrice < comparePrice){
        diff = comparePrice - currentPrice;
      }else{
        diff = currentPrice - comparePrice;
      }
      if(diff <= 0){
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'block'});
      }
    }else{
      $product.find('.gf_product-badge-anchor').css({'display': 'none'});
    }
  }
})( window.GemQuery || jQuery );
(function( jQuery ){
  var $module = jQuery('#m-1656992893978').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1656992893952').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1656992894011').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
(function(jQuery) {
    var $module = jQuery('#m-1656992894066').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    (function( jQuery ){
  var $module = jQuery('#m-1656992894022').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $element.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var selectedVariant = $product.data('gfv3product').getVariant();
    customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
    var currentPrice = variant.price;
    var comparePrice = variant.compare_at_price;
    if(currentPrice != null && comparePrice != null){
      if(currentPrice < comparePrice){
        diff = comparePrice - currentPrice;
      }else{
        diff = currentPrice - comparePrice;
      }
      if(diff <= 0){
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'block'});
      }
    }else{
      $product.find('.gf_product-badge-anchor').css({'display': 'none'});
    }
  }
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1656992894029').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1656992894067').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1656992893951').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
(function(jQuery) {
    var $module = jQuery('#m-1656992894049').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    (function( jQuery ){
  var $module = jQuery('#m-1656992894077').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $element.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var selectedVariant = $product.data('gfv3product').getVariant();
    customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
    var currentPrice = variant.price;
    var comparePrice = variant.compare_at_price;
    if(currentPrice != null && comparePrice != null){
      if(currentPrice < comparePrice){
        diff = comparePrice - currentPrice;
      }else{
        diff = currentPrice - comparePrice;
      }
      if(diff <= 0){
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'block'});
      }
    }else{
      $product.find('.gf_product-badge-anchor').css({'display': 'none'});
    }
  }
})( window.GemQuery || jQuery );
(function( jQuery ){
  var $module = jQuery('#m-1656992893972').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1656992893976').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1656992893898').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
(function(jQuery) {
    var $module = jQuery('#m-1656992893977').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    (function( jQuery ){
  var $module = jQuery('#m-1656992893986').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $element.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var selectedVariant = $product.data('gfv3product').getVariant();
    customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
    var currentPrice = variant.price;
    var comparePrice = variant.compare_at_price;
    if(currentPrice != null && comparePrice != null){
      if(currentPrice < comparePrice){
        diff = comparePrice - currentPrice;
      }else{
        diff = currentPrice - comparePrice;
      }
      if(diff <= 0){
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'block'});
      }
    }else{
      $product.find('.gf_product-badge-anchor').css({'display': 'none'});
    }
  }
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1656992894001').children('.module');   
    var navspeed = $module.data('navspeed'),
      autoplaytimeout = $module.data('autoplaytimeout'),
      autoplayhoverpause = $module.data('autoplayhoverpause'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),
      marginlg = parseInt($module.data('marginlg')),
      marginmd = parseInt($module.data('marginmd')),
      marginsm = parseInt($module.data('marginsm')),
      marginxs = parseInt($module.data('marginxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
    var autoplay = $module.data('autoplay'), 
        autoRefresh = true, 
        loop = $module.data('loop');
    } else {
    var autoplay = 0, 
        autoRefresh = false, 
        loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoRefresh: autoRefresh,
        autoplaySpeed: navspeed,
        autoplayTimeout: autoplaytimeout,
        loop: loop,
        navSpeed: navspeed,
        autoWidth: !1,
        responsiveClass:true,
        responsive:{
          0:{
            items:colxs,
            nav: navxs,
            dots:dotsxs,
            margin: marginxs
          },
          768:{
            items:colsm,
            nav: navsm,
            dots:dotssm,
            margin: marginsm
          },
          992:{
            items:colmd,
            nav: navmd,
            dots:dotsmd,
            margin: marginmd
          },
          1200:{
            items:collg,
            nav: navlg,
            dots:dotslg,
            margin: marginlg
          }
        },
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
          jQuery(window).trigger("resize");
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
      setTimeout(function() {	
        initCarousel();	
      }, 300)	
    } else {	
      initCarousel();	
    }
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656992893918').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1656992893931').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1656992894065').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
(function(jQuery) {
    var $module = jQuery('#m-1656992893932').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    (function( jQuery ){
  var $module = jQuery('#m-1656992894064').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $element.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var selectedVariant = $product.data('gfv3product').getVariant();
    customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
    var currentPrice = variant.price;
    var comparePrice = variant.compare_at_price;
    if(currentPrice != null && comparePrice != null){
      if(currentPrice < comparePrice){
        diff = comparePrice - currentPrice;
      }else{
        diff = currentPrice - comparePrice;
      }
      if(diff <= 0){
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'block'});
      }
    }else{
      $product.find('.gf_product-badge-anchor').css({'display': 'none'});
    }
  }
})( window.GemQuery || jQuery );
(function( jQuery ){
  var $module = jQuery('#m-1656992894070').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1656992893933').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1656992894057').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
(function(jQuery) {
    var $module = jQuery('#m-1656992893914').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    (function( jQuery ){
  var $module = jQuery('#m-1656992893913').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $element.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var selectedVariant = $product.data('gfv3product').getVariant();
    customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
    var currentPrice = variant.price;
    var comparePrice = variant.compare_at_price;
    if(currentPrice != null && comparePrice != null){
      if(currentPrice < comparePrice){
        diff = comparePrice - currentPrice;
      }else{
        diff = currentPrice - comparePrice;
      }
      if(diff <= 0){
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'block'});
      }
    }else{
      $product.find('.gf_product-badge-anchor').css({'display': 'none'});
    }
  }
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1656992893889').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1656992893893').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1656992894075').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
(function(jQuery) {
    var $module = jQuery('#m-1656992894093').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    (function( jQuery ){
  var $module = jQuery('#m-1656992894090').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $element.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var selectedVariant = $product.data('gfv3product').getVariant();
    customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
    var currentPrice = variant.price;
    var comparePrice = variant.compare_at_price;
    if(currentPrice != null && comparePrice != null){
      if(currentPrice < comparePrice){
        diff = comparePrice - currentPrice;
      }else{
        diff = currentPrice - comparePrice;
      }
      if(diff <= 0){
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'block'});
      }
    }else{
      $product.find('.gf_product-badge-anchor').css({'display': 'none'});
    }
  }
})( window.GemQuery || jQuery );
(function( jQuery ){
  var $module = jQuery('#m-1656992894095').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1656992894099').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1656992894096').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
(function(jQuery) {
    var $module = jQuery('#m-1656992894108').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    (function( jQuery ){
  var $module = jQuery('#m-1656992894109').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $element.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var selectedVariant = $product.data('gfv3product').getVariant();
    customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
    var currentPrice = variant.price;
    var comparePrice = variant.compare_at_price;
    if(currentPrice != null && comparePrice != null){
      if(currentPrice < comparePrice){
        diff = comparePrice - currentPrice;
      }else{
        diff = currentPrice - comparePrice;
      }
      if(diff <= 0){
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'block'});
      }
    }else{
      $product.find('.gf_product-badge-anchor').css({'display': 'none'});
    }
  }
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1656992894118').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').css('border', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1656992894132').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').css('border', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    