$('#loginBtn').click(function () {
    $('.loginModal').css('display', 'block');
});

$(()=>{
    $('#Meunselect li').click(function(){
        var idx = $(this).index();
        $('#mypageTab li').removeClass('on');
        $('#mypageTab li').eq(idx).addClass('on');
        $('#mypageTab>div').hide();
        $('#mypageTab>div').eq(idx).show();
    });
});
/*test*/
function Memberchage(){
    window.open('MemberChage.html', '네이버팝업', 'width=500px,height=600px,scrollbars=yes');
}

/*test*/
function Memberchage(){
    window.open('MemberChage.html', '네이버팝업', 'width=500px,height=600px,scrollbars=yes');
}
/*관리자 수정 model*/
$('#loginBtn').click(function () {
    $('.loginModal').css('display', 'block');
});
