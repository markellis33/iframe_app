(function() {

  return ZendeskApps.defineApp(ZendeskApps.Site.NAV_BAR, {
    appID: '/apps/01-nav_bar/versions/1.0.0',
    defaultState: 'inactive',

    events: {
      'mouseover %inactive': '%hover',
      'mouseout  %hover':    '%inactive',
      paneswitch: function(event, newPane) {
        if (newPane !== this.settings.name) {
          this.switchTo('inactive');
        } else {
          this.switchTo('selected');
        }
      },
      click: function() {
        this.host.goToPath(helpers.fmt('apps/%@', this.settings.name));
        this.switchTo('selected');
      }
    },

    launch: function(host, settings) {
      host.addPane(settings.name,
                   this.renderTemplate('iframe'), {name: settings.name});
    }
  });

}());
