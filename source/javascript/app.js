import angular from 'angular'
import 'angular-ui-router'

angular.module('thymer',['ui.router'])

.config(($stateProvider,$urlRouterProvider) => {
  $urlRouterProvider.otherwise('/jobs');

  $stateProvider
    .state('jobs',{
      url: '/jobs',
      templateUrl: 'assets/templates/jobs.html',
      controller: function($interval) {
        var ctrl = this;

        this.job = {};
        this.jobs = data;

        this.running = {};
        this.promise = {};

        this.create = function(){
          this.job.time = 0;
          this.jobs.unshift(this.job);
          this.job = {};
        };

        this.play = function(job){
          if(this.running){
            $interval.cancel(this.promise);
          }
          this.running = job;
          this.promise = $interval(function(){ ctrl.running.time += 1000 },1000);
        };

        this.autoplay = function(){
          this.create();
          this.play(this.jobs[0]);
        };

        this.pause = function(job){
          $interval.cancel(this.promise);
          this.running = {};
        };

        this.reset = function(job){
          job.time = 0;
        };

        this.remove = function(job){};

        this.isRunning = function(job){
          if(job === this.running){ return true; }
          else { return false; }
        };

        this.hasSegs = function(job){
          if(!job.time_segs){ return false }
          if(job.time_segs.length == 0){ return false }
          else { return false }
        };

        this.getTitle = function(job){
          if(job.alias){
            return job.alias;
          }
          else {
            return job.job_number;
          }
        };

        this.getSeconds = function(job){
          return Math.ceil(job.time) / 1000;
        };

        this.getMinutes = function(job){
          return Math.floor(this.getSeconds(job) / 60);
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
