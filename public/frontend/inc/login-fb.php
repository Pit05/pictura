<script>
    // Additional JS functions here
window.fbAsyncInit = function() {
    FB.init({
        appId      : '132565730272019', // App ID
        version    : 'v2.1',
        status     : true, // check login status
        cookie     : true, // enable cookies to allow the server to access the session
        xfbml      : true,  // parse XFBML
        oauth      : true
    });

    // Additional init code here
    jQuery('#fb-root').trigger('facebook:init');

};

// Load the SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "../../../../connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

</script>
<script type="text/javascript">
var ajaxurl = 'http://seventhqueen.com/themes/kleo/wp-admin/admin-ajax.php';

jQuery(document).ready(function() {

    jQuery('.kleo-facebook-connect').click(function() {

        // fix iOS Chrome
        if (navigator.userAgent.match('CriOS')) {
            window.open('https://www.facebook.com/dialog/oauth?client_id=132565730272019&redirect_uri=' + document.location.href + '&scope=email,public_profile&response_type=token', '', null);
        } else {
            FB.login(function(FB_response){
                    if (FB_response.authResponse) {
                        fb_intialize(FB_response, '');
                    }
                },
                {
                    scope: 'email',
                    auth_type: 'rerequest',
                    return_scopes: true
                });
        }
    });

    jQuery("#fb-root").bind("facebook:init", function() {
        var accToken = jQuery.getUrlVar('#access_token');
        if (accToken) {
            var fbArr = { scopes: "email" };
            fb_intialize(fbArr, accToken);
        }
    });

});

function fb_intialize(FB_response, token){
    FB.api( '/me', 'GET', {
            fields : 'id,email,verified,name',
            access_token : token
        },
        function(FB_userdata){
            jQuery.ajax({
                type: 'POST',
                url: ajaxurl,
                data: {"action": "fb_intialize", "FB_userdata": FB_userdata, "FB_response": FB_response},
                success: function(user){
                    if( user.error ) {
                        alert( user.error );
                    }
                    else if( user.loggedin ) {
                        jQuery('#kleo-login-result').html(user.message);
                        if( user.type === 'login' ) {
                            if(window.location.href.indexOf("wp-login.html") > -1) {
                                window.location = user.siteUrl;
                            } else {
                                window.location.reload();
                            }
                        }
                        else if( user.type === 'register' ) {
                            window.location = user.url;
                        }
                    }
                }
            });
        }
    );
}

jQuery.extend({
    getUrlVars: function(){
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function(name){
        return jQuery.getUrlVars()[name];
    }
});
</script>
