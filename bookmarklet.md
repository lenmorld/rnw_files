# next step
javascript:location.href=document.location.href.toString().replace(/\.([0-9]+)/g, function(match, num) { return "." + (Number(num)+1) });

# prev step
javascript:location.href=document.location.href.toString().replace(/\.([0-9]+)/g, function(match, num) { return "." + (Number(num)-1) });
