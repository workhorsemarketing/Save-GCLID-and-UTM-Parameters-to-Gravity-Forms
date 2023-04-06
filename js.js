function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  let expires = "";
  if(exdays != 0){
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    expires = "expires="+ d.toUTCString()+";";
  }
  document.cookie = cname + "=" + cvalue + ";" + expires + "path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

jQuery(document).ready(function($){
  const url = new URL(window.location);
  const params = new URLSearchParams(url.search.slice(1));
  for (const key of params.keys()) {
    if(key == 'gclid' || key.indexOf('utm_') == 0) {
      setCookie(key, params.get(key), 0);
    }
  }

  $('.gform_wrapper [data-gf-name]').each(function () {
    const gfName = $(this).data('gf-name');
    if(gfName == 'gclid' || gfName.indexOf('utm_') == 0) {
      $(this).val(getCookie(gfName));
      if(params.has(gfName)) {
        $(this).val(params.get(gfName));
        setCookie(gfName, params.get(gfName), 0);
      }
    }
  });
});