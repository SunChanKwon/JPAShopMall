$(()=>{
    $('#Meunselect li').click(function(){
        // var idx = $(this).index();
        // $('#mypageTab li').removeClass('on');
        // $('#mypageTab li').eq(idx).addClass('on');
        // $('#mypageTab>div').hide();
        // $('#mypageTab>div').eq(idx).show();
    });
});
$('.test1').click(function ()
{
    console.log("Asdsad");
    $('.on').css('display','none');
    $('.test').css('display','block');
})

$('.joinBtn').click(function () {
    $('.MemberChageModal').css('display', 'block');
});

//오버레이영역 클릭시 모달창 닫기
$('.modalOverlay').click(function () {
    $('.MemberChageModal').css('display', 'none');
});

//약관동의창 취소버튼 동작
$('#joinCancelBtn').click(function () {
    $('.MemberChageModal').css('display', 'none');
});

function windowopen(){
    win = window.open('AdminInsert.html');
}
