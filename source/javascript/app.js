import angular from 'angular'
import 'angular-ui-router'

const SINGLE_ELEMENT = 1;
const SECOND_IN_MILLISECONDS = 1000;
const MINUTES_IN_SECONDS = 60;
const EMPTY = 0;
const START_TIME = 0;

angular.module('thymer',['ui.router'])

.config(($stateProvider,$urlRouterProvider) => {
  $urlRouterProvider.otherwise('/jobs');

  $stateProvider
    .state('jobs',{
      url: '/jobs',
      templateUrl: 'assets/templates/jobs.html',
      controller: function($interval) {
        let ctrl = this;


        this.jobs = data;

        // cursors
        this.job = {}; // place holder for a new job
        this.running = {}; // current running job
        this.jobPromise = {}; // place holder for job $interval promise
        this.timeSegPromise = {}; // place holder for time seg $interval promise
        this.activeTimeSeg = {}; // current active time seg
        this.history = 0; //place holder for time

        /**
        * creates a new job object and places it at the start of jobs
        *
        */
        this.create = function(){
          this.job.time = START_TIME;
          this.jobs.unshift(this.job);
          this.job = {};
        };

        /**
         *
         *
         */
        this.play = function(job){
          if(this.running){
            this.pause(this.running);
          }
          this.running = job;
          this.history = this.running.time;
          this.startTimeSeg();
          this.jobPromise = $interval(function(){ ctrl.running.time = ctrl.history + ctrl.measureTimeSeg() },SECOND_IN_MILLISECONDS);
        };

        this.autoplay = function(){
          this.create();
          this.play(this.jobs[0]);
        };

        this.pause = function(job){
          $interval.cancel(this.jobPromise);
          this.finishTimeSeg();
          this.running = {};
          this.history = 0;
        };

        this.reset = function(job){
          job.time = START_TIME;
        };

        this.remove = function(job){
          let pos = this.jobs.indexOf(job);
          this.jobs.splice(pos,SINGLE_ELEMENT);
        };

        this.isRunning = function(job){
          if(job === this.running){ return true; }
          else { return false; }
        };

        this.hasSegs = function(job){
          if(!job.time_segs){ return false }
          if(job.time_segs.length == EMPTY){ return false }
          else { return true; }
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
          return Math.ceil(job.time) / SECOND_IN_MILLISECONDS;
        };

        this.getMinutes = function(job){
          return Math.floor(this.getSeconds(job) / MINUTES_IN_SECONDS);
        };

        let _newTimeSeg = function(){
          let now = Date.now();
          return { finish: now, start: now, use: true };
        };

        this.startTimeSeg = function(){
          if(!this.hasSegs(this.running)){this.running.time_segs = [];}

          this.activeTimeSeg = _newTimeSeg();
          this.running.time_segs.unshift(this.activeTimeSeg);
        };

        this.finishTimeSeg = function(){
          this.activeTimeSeg.finish = Date.now();
          this.activeTimeSeg = {};
        };

        this.measureTimeSeg = function(){
          if(this.activeTimeSeg){
            return Date.now() - this.activeTimeSeg.start;
          }
          else {
            console.log("no time being logged");
            return EMPTY;
          }
        }












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
