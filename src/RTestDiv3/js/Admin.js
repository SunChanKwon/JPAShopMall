$('.joinBtn').click(function () {
    $('.AdminInsertModal').css('display', 'block');
});

$('.modalOverlay').click(function () {
    $('.AdminInsertModal').css('display', 'none');
});

$('#joinCancelBtn').click(function () {
    $('.AdminInsertModal').css('display', 'none');
});
