(function($) {
    $(function() {

        $('ul.tabs-header').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("li.tab-b")
                .removeClass("show")
                .eq($(this).index())
                .addClass("show");
        });

    });
})(jQuery);

(function($) {
    $(function() {
        let counter = 0;
        $("#loadMore").on('click', function () {

                if  (counter > 0) {
                    $("#load").fadeIn(100);
                    $("#load").fadeOut(2000, addFragm2);
                }
                if (counter === 0) {
                    $("#load").fadeIn(100);
                    $("#load").fadeOut(2000, addFragm);
                    counter++;
                }

            function addFragm2() {

                    let fragm2 = $("<div class=\"square-img\" data-rel=\"Graphic\"><img src=\"StepProjectHam/graphicDesign/graphic-design1.jpg\" alt=\"1\"></div>\n" +
                        "<div class=\"square-img\" data-rel=\"Graphic\"><img src=\"StepProjectHam/graphicDesign/graphic-design2.jpg\" alt=\"2\"></div>\n" +
                        "<div class=\"square-img\" data-rel=\"Graphic\"><img src=\"StepProjectHam/graphicDesign/graphic-design3.jpg\"  alt=\"3\"></div>\n" +
                        "<div class=\"square-img\" data-rel=\"Graphic\"><img src=\"StepProjectHam/graphicDesign/graphic-design4.jpg\"  alt=\"4\"></div>\n" +
                        "<div class=\"square-img\" data-rel=\"Graphic\"><img src=\"StepProjectHam/graphicDesign/graphic-design5.jpg\"  alt=\"5\"></div>\n" +
                        "<div class=\"square-img\" data-rel=\"Wordpress\"><img src=\"StepProjectHam/wordpress/wordpress1.jpg\"  alt=\"6\"></div>\n" +
                        "<div class=\"square-img\" data-rel=\"Wordpress\"><img src=\"StepProjectHam/wordpress/wordpress2.jpg\"  alt=\"7\"></div>\n" +
                        "<div class=\"square-img\" data-rel=\"Graphic\"><img src=\"StepProjectHam/graphicDesign/graphic-design8.jpg\"  alt=\"8\"></div>\n" +
                        "<div class=\"square-img\" data-rel=\"Graphic\"><img  src=\"StepProjectHam/graphicDesign/graphic-design9.jpg\"  alt=\"9\"></div>\n" +
                        "<div class=\"square-img\" data-rel=\"Graphic\"><img src=\"StepProjectHam/graphicDesign/graphic-design10.jpg\"  alt=\"10\"></div>\n" +
                        "<div class=\"square-img\" data-rel=\"Graphic\"><img  src=\"StepProjectHam/graphicDesign/graphic-design11.jpg\"  alt=\"11\"></div>\n" +
                        "<div class=\"square-img\" data-rel=\"Graphic\"><img  src=\"StepProjectHam/graphicDesign/graphic-design12.jpg\" alt=\"12\"></div>");
                    $(".square-position").append(fragm2);
                    $('#loadMore').hide();
                }

                function addFragm () {
                    let fragm = $("<div class=\"square-img\" data-rel=\"Landing\"><img src=\"StepProjectHam/landingPage/landing-page1.jpg\" alt=\"1\"></div>\n" +
                        "<div class=\"square-img\" data-rel=\"Landing\"><img src=\"StepProjectHam/landingPage/landing-page2.jpg\" alt=\"2\"></div>\n" +
                        "<div class=\"square-img\" data-rel=\"Landing\"><img src=\"StepProjectHam/landingPage/landing-page3.jpg\" alt=\"3\"></div>\n" +
                        "<div class=\"square-img\" data-rel=\"Landing\"><img src=\"StepProjectHam/landingPage/landing-page4.jpg\" alt=\"4\"></div>\n" +
                        "<div class=\"square-img\" data-rel=\"Landing\"><img src=\"StepProjectHam/landingPage/landing-page5.jpg\" alt=\"5\"></div>\n" +
                        "<div class=\"square-img\" data-rel=\"Landing\"><img src=\"StepProjectHam/landingPage/landing-page6.jpg\" alt=\"6\"></div>\n" +
                        "<div class=\"square-img\" data-rel=\"Landing\"><img src=\"StepProjectHam/landingPage/landing-page7.jpg\" alt=\"7\"></div>\n" +
                        "<div class=\"square-img\" data-rel=\"Web\"><img  src=\"StepProjectHam/webDesign/web-design1.jpg\" alt=\"8\"></div>\n" +
                        "<div class=\"square-img\" data-rel=\"Web\"><img src=\"StepProjectHam/webDesign/web-design2.jpg\" alt=\"9\"></div>\n" +
                        "<div class=\"square-img\" data-rel=\"Web\"><img src=\"StepProjectHam/webDesign/web-design3.jpg\" alt=\"10\"></div>\n" +
                        "<div class=\"square-img\" data-rel=\"Web\"><img src=\"StepProjectHam/webDesign/web-design4.jpg\"  alt=\"11\"></div>\n" +
                        "<div class=\"square-img\" data-rel=\"Web\"><img src=\"StepProjectHam/webDesign/web-design5.jpg\"  alt=\"12\"></div>");
                    $(".square-position").append(fragm);

            }
        })
    });
})(jQuery);

(function($) {
    $(function(){
        $('.square-img').on('mouseover', function () {
            let category = $(this).attr('data-rel');
                $(this).append(`<div class="square-img2"><div class="square-icons"><i class="fa fa-link" aria-hidden="true"></i>'<i class="fa fa-search fa-search2" aria-hidden="true"></i></div><p class="square-paragraph">creative design</p><p class="square-paragraph-small">${category}</p></div>`);
        });
        $('.square-img').on('mouseleave', function () {
            $(this).find(".square-img2").remove();
        });
    })

})(jQuery);

(function($) {
    $(function() {
        function filterImage (event) {
                $('#theNavigation li').removeClass('nav-item-active');
                $(event.target).addClass('nav-item-active');

                let thisItem    = $(this).attr('data-rel');
                if(thisItem != "all") {
                    $('.square-img[data-rel='+thisItem+']').stop()
                        .animate({'width' : '24.5%',
                            'opacity' : 1,
                        });
                    $('.square-img[data-rel!='+thisItem+']').stop()
                        .animate({'width' : 0,
                            'opacity' : 0,
                        });
                } else {
                    $('.square-img').stop()
                        .animate({
                            'opacity': 1,
                            'width': '24.5%',
                        });
                }
        }
        $('#theNavigation li').on("click",filterImage);
    });
})(jQuery);

    $(function () {

        $("#point li:first-child").addClass("theActive").animate({'bottom': +20 +'%'}, 500);

        function slide(target) {
            $("#point li").removeClass("theActive").eq(target).addClass("theActive");
            $("#point li.theActive").animate({'bottom': +20 +'%'}, 500);
            $("#slider ul li").animate({'right': +174 * target + 'px'}, 250);
        }
        $("#point li").click(function() {
            let target = $(this).index();
            slide(target);
        });
        $("#next").click(function() {
            let target = $("#point li.theActive").index();
            if (target == $("#point li").length - 1) {
                target = -1;
            }
            target = target + 1;
            slide(target);

        });
        $("#prev").click(function() {
            let target = $("#point li.theActive").index();
            if (target == 0) {
                target = $("#point li").length;
            }
            target = target - 1;
            slide(target);
        });
    });

(function($) {
    $(function () {
        let count2 = 0;
        $('.grid').masonry({
            columnWidth: 370,
            itemSelector: '.grid-item',
            horizontalOrder: true,
            gutter: 15
        });

        function addGalleryImages() {
            count2++;
            if (count2 === 2) {
                $('#loadMore2').hide();
            }
            let elems = [getItemElement(), getItemElement(), getItemElement()];
            let $elems = $(elems);
            $('.grid').imagesLoaded(function () {
                $('.grid').append($elems).masonry('appended', $elems);

            });
        }

        function loadMoreGalleryImages() {
            $('#load2').fadeIn(1000);
            setTimeout(function () {
                $('#load2').fadeOut();
                addGalleryImages();
            }, 1400);

        }
        $('#loadMore2').on('click', loadMoreGalleryImages);

        function getItemElement() {
            let elem = document.createElement('div');
            let imageNum = Math.floor((Math.random() * 8) + 1);
            elem.innerHTML = `<img src="StepProjectHam/img/galery${imageNum}.png" alt="gallery image${imageNum}" ><div class="grid-hover"><div class="grid-hover-wrap"><i class="fa fa-search fa-search3" aria-hidden="true"></i><i class="fa fa-arrows-alt" aria-hidden="true"></i></div></div>`;
            elem.className = 'grid-item';
            return elem;
        }

    });
})(jQuery);
