/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('BookLib.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    plugins: ['viewport'],

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'BookLib.view.main.MainController',
        'BookLib.view.main.MainModel',
        'BookLib.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },

        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },


    initComponent: function(config){
        var me = this;

        me.header.title = {
            text: I18n('appName'),
            flex: 0
        };
        me.items = [{
            title: I18n('section.home'),
            iconCls: 'fa-home',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'mainlist'
            }]
        }, {
            title: I18n('section.profile'),
            iconCls: 'fa-user',
            bind: {
                html: '{loremIpsum}'
            }
        }, {
            title: I18n('section.users'),
            iconCls: 'fa-users',
            bind: {
                html: '{loremIpsum}'
            }
        }, {
            title: I18n('section.groups'),
            iconCls: 'fa-globe',
            bind: {
                html: '{loremIpsum}'
            }
        }, {
            title: I18n('section.settings'),
            iconCls: 'fa-cog',
            bind: {
                html: '{loremIpsum}'
            }
        }];
        this.callParent();
    }
});
