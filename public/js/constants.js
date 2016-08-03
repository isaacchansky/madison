angular.module('madisonApp.constants', [])
  .constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  })
  .constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    independent: 'independent-sponsor',
    groupMember: 'group-member',
    basic: 'basic',
    guest: 'guest'
  })
  .constant('PROVINCES', {
    'US': {
      'AL': 'Alabama',
      'AK': 'Alaska',
      'AZ': 'Arizona',
      'AR': 'Arkansas',
      'CA': 'California',
      'CO': 'Colorado',
      'CT': 'Connecticut',
      'DE': 'Delaware',
      'DC': 'District of Columbia',
      'FL': 'Florida',
      'GA': 'Georgia',
      'HI': 'Hawaii',
      'ID': 'Idaho',
      'IL': 'Illinois',
      'IN': 'Indiana',
      'IA': 'Iowa',
      'KS': 'Kansas',
      'KY': 'Kentucky',
      'LA': 'Louisiana',
      'ME': 'Maine',
      'MD': 'Maryland',
      'MA': 'Massachusetts',
      'MI': 'Michigan',
      'MN': 'Minnesota',
      'MS': 'Mississippi',
      'MO': 'Missouri',
      'MT': 'Montana',
      'NE': 'Nebraska',
      'NV': 'Nevada',
      'NH': 'New Hampshire',
      'NJ': 'New Jersey',
      'NM': 'New Mexico',
      'NY': 'New York',
      'NC': 'North Carolina',
      'ND': 'North Dakota',
      'OH': 'Ohio',
      'OK': 'Oklahoma',
      'OR': 'Oregon',
      'PA': 'Pennsylvania',
      'RI': 'Rhode Island',
      'SC': 'South Carolina',
      'SD': 'South Dakota',
      'TN': 'Tennessee',
      'TX': 'Texas',
      'UT': 'Utah',
      'VT': 'Vermont',
      'VA': 'Virginia',
      'WA': 'Washington',
      'WV': 'West Virginia',
      'WI': 'Wisconsin',
      'WY': 'Wyoming',
      // Territories
      'AS': 'American Samoa',
      'FM': 'Federated States of Micronesia',
      'GU': 'Guam',
      'MH': 'Marshall Islands',
      'MP': 'Northern Mariana Islands',
      'PW': 'Palau',
      'PR': 'Puerto Rico',
      'VI': 'Virgin Islands',
    }
  })
  .constant('SITE', {
    name: 'Platform of the People'
  });
