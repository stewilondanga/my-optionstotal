var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

/*$(document).ready(function(){
	 $('.tooltipped').tooltip();
 });
$( "[id^=chkBox]" ).on( "click", function() {
 count();
});
function count() {
 var amountSelected = 0
 $('#applySelection tr').filter(':has(:checkbox:checked)').each(function() {
	 amountSelected += Number(($(this).find('[id^=price]').text()).replace(/[\(]/g,'-').replace(/[^0-9\.-]+/g,""));
 });
 var selectedPriceAmount = '$' + amountSelected.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 $('#totalPrice').text(selectedPriceAmount);
}
function allChecked() {
	 if (document.getElementById("checkAll").checked == true) {
		 $('[id^=chkBox]').prop('checked', true);
		 count();
	 }else {
		 $('[id^=chkBox]').prop('checked', false);
		 count();
	 }
}
