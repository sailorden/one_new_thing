angular.module('starter.suggestions-factory', ['ionic'])

.factory('SuggestionsFactory', function() {
  var suggestions = {};

  suggestions.options = [
    {
      id: 1,
      title: 'Symphony Sushi',
      photo: '/img/symphony_sush.jpg',
      rating: 4,
      location: {
        street: '45 Gainsborough St',
        city: 'Boston',
        state: 'MA',
        zip: 02115
      },
      hours: {
        mon: '9-5pm',
        tue: '9-5pm',
        wed: '9-5pm',
        thu: '9-5pm',
        fri: '9-5pm',
        sat: '9-5pm',
        sun: '9-5pm',
      },
      tags: ['cool', 'fresh', 'sushi', 'restaurant'],
      price: '$$',
      phoneNumber: '(555) 555-5555',
      reviews: [{
        reviewer: 'Ariel W.',
        isFriend: true,
        timestamp: Date.now(),
        rating: 5,
        review: 'I love their chicken dumpling soup. Usually get two orders!'
      }],
      hasBeenTo: false
    },
    {
      id: 2,
      title: 'Petey Pete\'s Pizza & Pasta',
      photo: '/img/petey_petes.jpg',
      rating: 1,
      location: {
        street: '123 Pete St',
        city: 'Cambridge',
        state: 'MA',
        zip: 02110
      },
      hours: {
        mon: '9-5pm',
        tue: '9-5pm',
        wed: '9-5pm',
        thu: '9-5pm',
        fri: '9-5pm',
        sat: 'Closed',
        sun: 'Closed',
      },
      tags: ['gritty', 'urban', 'pizza', 'restaurant'],
      price: '$',
      phoneNumber: '(555) 555-5555',
      reviews: [{
        reviewer: 'Nick A.',
        isFriend: false,
        timestamp: Date.now(),
        rating: 1,
        review: 'The pizza is crummy. Pete is an asshole.'
      }],
      hasBeenTo: false
    }
  ];

  /**
   * getSuggestion()
   * @description: Gets the suggestion with the specified id
   * @param suggestionId The id of the suggestion
   * @returns Object a suggestion object
   */
  suggestions.getSuggestion = function(suggestionId) {
    var suggestionsLength = suggestions.options.length;
    for (var i = 0; i < suggestionsLength; i++) {
        if (suggestionId == suggestions.options[i].id) {
          return suggestions.options[i];
        }
    }
    return {};
  };

  return suggestions;
});