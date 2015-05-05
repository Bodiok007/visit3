Router.route('redirect', {
  path: '/',
  action: function() {
      this.redirect('/home');
    }
});

Router.route('home', {
  path: '/home',
  layoutTemplate: 'Layout',
  yieldTemplates: {
    'Nav': {to: 'nav'},
    'Footer': {to: 'footer'}
  },
});

Router.route('education', {
  path: '/education',
  layoutTemplate: 'Layout',
  yieldTemplates: {
    'Nav': {to: 'nav'},
    'Footer': {to: 'footer'}
  }
});

Router.route('skills', {
  path: '/skills',
  layoutTemplate: 'Layout',
  yieldTemplates: {
    'Nav': {to: 'nav'},
    'Footer': {to: 'footer'}
  }
});

Router.route('experience', {
  path: '/experience',
  layoutTemplate: 'Layout',
  yieldTemplates: {
    'Nav': {to: 'nav'},
    'Footer': {to: 'footer'}
  }
});

Router.route('contacts', {
  path: '/contacts',
  layoutTemplate: 'Layout',
  yieldTemplates: {
    'Nav': {to: 'nav'},
    'Footer': {to: 'footer'}
  }
});
