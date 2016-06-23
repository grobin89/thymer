import angular from 'angular'
import 'angular-ui-router'

angular.module('thymer',['ui.router'])

.config(($stateProvider,$urlRouterProvider) => {
  $urlRouterProvider.otherwise('/jobs');

  $stateProvider
    .state('jobs',{
      url: '/jobs',
      templateUrl: 'assets/templates/jobs.html',
      controller: function() {
        this.job = {};
        this.jobs = data;

        this.create = function(){};

        this.getTitle = function(job){
          if(job.alias){
            return job.alias;
          }
          else {
            return job.job_number;
          }
        };
      },
      controllerAs: 'jobCtrl',
    });
});


var data = [
  {
    job_number: 123456,
    alias: 'Team Meeting',
    time_segs: [
      {
        start: 0,
        finish: 0,
        use: true,
      }
    ],
    time: 0,
    open: true,
    pinned: false,
  },
  {
    job_number: 123432,
    //alias: 'Team Meeting',
    time_segs: [
      {
        start: 0,
        finish: 0,
        use: true,
      }
    ],
    time: 0,
    open: true,
    pinned: false,
  },
];
