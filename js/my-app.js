// Initialize your app
var app = new Framework7({
    id: 'com.app',
    root: '#app',
    theme: 'md',
    view: {
        pushState: false
    },
    cache: false,
    cacheDuration: 0,
    modalTitle: 'Pizza Time',
    dialog: {
        title: 'Pizza Time',
        buttonOk: 'Aceptar',
    },
    routes: [{
            path: '/home/',
            url: 'index.html',
            name: 'home',
        },
		{
            path: '/flores/',
            url: 'flores.html',
            name: 'flores',
        },
		{
            path: '/informacion/',
            url: 'informacion.html',
            name: 'informacion',
        },
		{
            path: '/perfil/',
            url: 'perfil.html',
            name: 'perfil',
        }
    ]
});

// Export selectors engine
var $$ = Dom7;

$$('#btnAlerta').on('click', function() {
    app.dialog.alert('Hola Diseño Web 2');
});
