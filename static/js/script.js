$(document).ready(function() {

    function setSmoothswap(){
        $('.smoothswap').smoothswap({
            marginHeight: 10,
            onswapped: function onSwapped(base, first, second) {
                base.children('.smoothswap-panel').each(function(index) {
            });
            register();
            }
        });
    }
    setSmoothswap();

    function register() {
        console.log('register');
        chrome.storage.local.clear();

        $(".smoothswap_form").each(function(i, elm){
            var $memo_contents = { content : $(elm).find('*[name=memo_content]').val() };
            chrome.storage.local.set({[i]: $memo_contents}, function() {
                console.log('contents stored');
            });
        });
    };

    // add
    $('#add_memo_form_button').on('click', function(e) {

        $('#add_memo_form_button').each(function(i, elm) {
            $(elm).prop('disabled', true).addClass('disabled');
        });

        var $clone_memo_form = $('#original_memo_form').clone(true).attr('id', 'add_memo_form').addClass('smoothswap_form smoothswap-panel flex shadow-box z-depth-2').removeAttr('style').show();
        $('#memo_form').append($clone_memo_form);

        setSmoothswap();

        $('#add_memo_form_button').each(function(i, elm) {
            $(elm).prop('disabled', false).removeClass('disabled');
        });
    });

    // register
    $('.update_memo_button').keyup(function() {

        register();
    });

    // delete
    $('.delete_forever').on('click', function(e) {

        $(this).parent().remove();

        register();
    });
});