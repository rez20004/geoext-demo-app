/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('GeoExt.demo.app.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'GeoExt.form.field.GeocoderComboBox',

        'GeoExt.demo.app.view.main.MainController',
        'GeoExt.demo.app.view.main.MainModel',

        'GeoExt.demo.app.view.map.Map',
        'GeoExt.demo.app.view.layertree.LayerTree'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: 'border',

    items: [{
        xtype: 'GeoExt.demo.app.view.map.Map',
        region: 'center',
        layout: 'fit',
        tbar: [{
            xtype: 'gx_geocoder_combo',
            width: 300,
            url: 'https://nominatim.openstreetmap.org/search?format=json',
            bind: {
                map: '{map}',
                locationLayerStyle: '{locationLayerStyle}'
            },
            showLocationOnMap: true
        }]
    }, {
        region: 'west',
        width: 300,
        collapsible: true,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: {
            xtype: 'GeoExt.demo.app.view.layertree.LayerTree'
        }
    }]
});
