    
// Scroll Pagina

    let navLink = $('#mainNav a.nav-link');

    navLink = navLink.map(function(i, el){
        
        let href = $(this).attr('href')
        if(href.indexOf('#') === 0){
            let cadaItem = $( $(this).attr('href') )
            if(cadaItem.length){
                return this
            }
        }
    })
      
    let navSection = navLink.map(function(i, el){
        let cadaSection = $( $(this).attr('href') )
        return cadaSection
    })
    
      
    navLink.on('click', function(e){
        e.preventDefault();
        
        //navLink.removeClass('active')
        //$(this).addClass('active')
        
        let href = $(this).attr('href')
        let alvo = $(href);
        let pos = alvo.position().top;
        
        $('html, body').animate({scrollTop: pos}, 1000)
        
    })
      
      
    $(window).on('scroll', function(){
        let scrollTop = $(this).scrollTop();
        //console.log(scrollTop);
        
        let atual = navSection.map(function(){
            let position = $(this).position().top;
            //console.log($(this).get(0).id, position)
            if(position < scrollTop + 20) {
                return this;                
            }
        })
        
        let ultimo = atual[atual.length - 1];
        //console.log(ultimo)
        let ultimoId = ultimo && ultimo.length ? ultimo[0].id : '';
        
        let mainNav = $('#mainNav')
        
        mainNav.find('.active').removeClass('active')
        
        mainNav.find('a[href="#'+ ultimoId +'"]').addClass('active')
        
        mainNav.find('.sr-only').appendTo('a[href="#'+ ultimoId +'"]')        
    })
      
    $('.section').last().css('min-height', '600px')