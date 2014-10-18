var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Polymer',
    subtitle: 'Material Design on the Web',
    eventInfo: {
      title: 'Material Design',
      date: '21/10/2014'
    },
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: false, // Controlled in app.js 
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: '/images/google_developers_logo_tiny.png',
    fonts: [
      'Open Sans:600italic,400,300,600',
      'Source Code Pro',
      'Architects Daughter'
    ],
    theme: ['devfestbe2013'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Pieter-Jan Vandormael',
    company: 'GDG Brussels',
    gplus: 'http://plus.google.com/+PieterJanVandormael',
    twitter: '@pjv_',
    github: 'http://github.com/pjjjv/polymer-material-design'
  }/*, {
    name: 'Second Name',
    company: 'Job Title, Google',
    gplus: 'http://plus.google.com/1234567890',
    twitter: '@yourhandle',
    www: 'http://www.you.com',
    github: 'http://github.com/you'
  }*/]
};

