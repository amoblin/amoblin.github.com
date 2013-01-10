$(document).ready(function(){
	
	// Add icons
	$('.has-icon').prepend('<span class="icon replace"></span>');
	
	var $main = $('#main article'),
		$sidebar = $('#main aside'),
		$buyButton = $('a.install-buy'),
		//$buyButton = new Array();
		lte8 = false;
		
	if( $.browser.msie && parseInt($.browser.version) < 9 ){
		lte8 = true;
	}
	
	// Add class to switch border on columns if main content is shorter than sidebar	
	if( $main.height() < $sidebar.height() ){
		$main.parent('section').addClass('tall-sidebar');
	}
	
	// Add dividers to FAQs
	$('section.faq-answer').append('<div class="divider"></div>');
	
	// New window for sharing links
	$('p.share a').click(function (event){
		var url = $(this).attr("href");
		var windowName = "sharepopup";
		var windowSettings = "width=450,height=410,scrollbars=auto";
	
		window.open(url, windowName, windowSettings);
		event.preventDefault();
	});
	
	// Buy options
	$buyButton.each(function(e){
		var $this = $(this),
			$options,
			origin = 35,
			destination = 45,
			overButton = false,
			overOptions = false,
			delayClose,
			fadeSpeed = 300,
			disablemacappstore = false;
			
    	if( $this.hasClass('nopopover') ){
    	  return true;
  	  }
  	if( $this.parent().hasClass('nopopover') ){
  	  return true;
  	}
  	
		if( lte8 ){
			fadeSpeed = 0;
		}
		
		if( $this.parent().hasClass('orient-up') ){
			origin = -136;
			destination = -126;
		}
		if( $this.parent().hasClass('nomacappstore') ){
		    disablemacappstore = true;
		    $this.css('cursor', 'auto');
	    }
		
		$options = $this.parent().children('ul.buy-options');
		
		if( $this.closest('header').length ){
			origin = 20;
			destination = 40;
			$options.css({
				left: -70
			});
		}
		
		$options.css({
			opacity: 0,
			top: origin
		});
		
		function closeOptions(){
			clearTimeout(delayClose);

			delayClose = setTimeout(
				function(){
					if( !overOptions && !overButton ){
						$options.stop().animate({
							top: origin,
							opacity: 0
						}, fadeSpeed, 'easeOutQuad', function(){
							$(this).hide();
						});
					}
				}, fadeSpeed
			);
		}
		
		$this.click(function(e){
		    if (disablemacappstore) {
		        return true;
	        }
			return false;
		});
		
		$this.mouseenter(function(){
		    if (disablemacappstore) {
                return;
            }
		    
			overButton = true;
			if( !overOptions ){
				$options.stop().show().animate({
					top: destination,
					opacity: 1 
				}, fadeSpeed, 'easeOutQuad', function(){
					if( lte8 ){
						this.style.removeAttribute('filter');
					}
				});
			}
		});
		
		$this.mouseleave(function(){
			overButton = false;
			closeOptions();
		});
		
		$options.mouseenter(function(){
			overOptions = true;
		});
		
		$options.mouseleave(function(){
			overOptions = false;
			closeOptions();
		});
		
	});

		
	// Load latest tweet
	$(".tweet").tweet({
		username: "sparrow",
		count: 1,
		fetch: 1,
		loading_text: "loading tweets...",
		template: "{text}",
		link_all: true
    });
	
	// Rotating quotes for homepage footer
	var $quotes = $('section.quotes li'),
		$quotescontainer = $('section.quotes'),
		$quotetext = $('section.quotes .quote-text p'),
		$quotearrow = $('<div class="replace quote-arrow"></div>'),
		$quote,
		$quotescontainer,
		currentquote = 0,
		quoteplay = true,
		quoteinterval = 100,
		quotenavoffset = 162; // because Chrome won't recognise the .position() correctly
		
	if( lte8 ){
		quoteinterval = 0;
	}
	
	var quotes = {
		init : function(){
			$quotes.each(function(index){
				$(this).click(function(){
					quoteplay = false;
					quotes.swapquote( index );
				});
			});
			$quotescontainer.append($quotearrow);
			quotes.swapquote(0);
		},
		navigate : function(index){
			setTimeout(function() {
				if(quoteplay === true){
					if(currentquote+1 < $quotes.length){
						currentquote++;
						quotes.swapquote(currentquote);
					} else {
						currentquote = 0;
						quotes.swapquote(0);
					}	
				}
			}, 4000);
		},
		swapquote : function(index){
			$quotetext.stop().animate({ opacity: 0 }, quoteinterval, function(){
				$quotes.removeClass('selected');
				$quotes.eq(index).addClass('selected');
				var $trigger = $quotes.eq(index).find('h3');
				var triggerpos = $trigger.position();
				$quotearrow.stop().animate({ left : triggerpos.left + quotenavoffset + ( $trigger.width() / 2 ) - ( $quotearrow.width() / 2 ) }, quoteinterval, 'easeOutExpo');
				$(this).html( $quotes.eq(index).find('p').html() ).animate({ opacity: 1 }, quoteinterval, function(){
					if( lte8 ){
						this.style.removeAttribute('filter');
					}
					if( quoteplay == true ){
						quotes.navigate(index);
					}
				});
			});
		}
	}
	quotes.init();
	
	// Set up loader image for subscription form
	var $subloading = $('<div class="form-loading replace"></div>');
	$('#mc-embedded-subscribe-form').append( $subloading );
	
});