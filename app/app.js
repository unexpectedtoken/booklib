/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */

Ext.application({
    name: 'BookLib',
    requires: [
        'Ext.i18n.Bundle',
        'BookLib.view.main.Main'
    ],

    bundle: {
        bundle: 'locale/booklib',
        lang: navigator.language,
        path: 'resources',
        noCache: true,
        listeners: {
            loaded: function() {
                var me = this;
                window.I18n = function(key){return me.getMsg(key);};
                Ext.create('BookLib.view.main.Main');
            }
        }
    },

    extend: 'BookLib.Application'
});
