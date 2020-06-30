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
            path: '/pizza/',
            url: 'pizza.html',
            name: 'pizza',
        },
        {
            path: '/combos/',
            url: 'combos.html',
            name: 'combos',
        },
        {
            path: '/ingrediente/',
            url: 'ingrediente.html',
            name: 'ingrediente',
        },
        {
            path: '/carrito/',
            url: 'carrito.html',
            name: 'carrito',
        },
		{
            path: '/checkout/',
            url: 'checkout.html',
            name: 'checkout',
        },
        {
            path: '/carritocompra/',
            url: 'carritocompra.html',
            name: 'carritocompra',
        },
		{
			path: '/pago/',
			url: 'pago.html',
			name: 'pago',
		},
		{
			path: '/direcciones/',
			url: 'direcciones.html',
			name: 'direcciones',
		},
        {
            path: '/config/',
            url: 'config.html',
            name: 'config',
        },
        {
            path: '/cambiarcontra/',
            url: 'cambiarcontra.html',
            name: 'cambiarcontra',
        }
    ]
});

// Export selectors engine
var $$ = Dom7;

$$('#btnAlerta').on('click', function() {
    app.dialog.alert('Hola Diseño Web 2');
});
