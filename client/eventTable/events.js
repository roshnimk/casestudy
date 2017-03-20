eventApp.controller('eventTableController', ['$scope', function($scope) {
  $scope.Events = [{
      eventNumber: 'event 1',
      eventMembers: 10,
      eventStatus: 'Completed'
    },
    {
      eventNumber: 'event 2',
      eventMembers: 20,
      eventStatus: 'In progress'
    },
    {
      eventNumber: 'event 3',
      eventMembers: 30,
      eventStatus: 'Not started'
    },
    {
      eventNumber: 'event 4',
      eventMembers: 40,
      eventStatus: 'Not started'
    }
  ]
}])
