// Initialize app
var myapp = new framework7();

// If we need to use custom DOM library, let's save it to $$ variable
var $$ = Dom7;

// Add view
var mainView = myapp.addView('view-main',{
  // Because we want to use dynamic narbar, we need to enable it for this view:
  dynamicNavbar: true
});
