$('.AdminMember').click(function () {
    $('.AdminInsertModal').css('display', 'block'); //어드민 모달 뛰우기
});

$('.AllboardSelect').click(function () {
    $('.AllSelectBoardModal').css('display', 'block'); //모든 게시판 모달 뛰우기
});

$('.BlackboardSelect').click(function () {
    $('.BlackBoardSelectModal').css('display', 'block'); //모든 게시판 모달 뛰우기
});


$('.AdminQna').click(function () {
    $('.AdminSendQnqModal').css('display', 'block'); //1:1문의 모달
});

$('.AdminAMember').click(function () {
    $('.AdminModal').css('display', 'block'); //1:1문의 모달
});


$('.BlackBoard').click(function () {
    $('.BlackBoardModal').css('display', 'block'); //블럭게시물 조회모달
});



$('.modalOverlay').click(function () {
    $('.AdminInsertModal').css('display', 'none');
    $('.AdminSendQnqModal').css('display', 'none');
    $('.AllSelectBoardModal').css('display', 'none');
    $('.AdminModal').css('display', 'none');
    $('.BlackBoardSelectModal').css('display', 'none');
});

$('#joinCancelBtn').click(function () {
    $('.AdminInsertModal').css('display', 'none');
});

