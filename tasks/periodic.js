
'use strict';


module.exports = function register(grunt)
{
    grunt.registerMultiTask('periodic', 'Task to run other tasks once a given time period', function periodic(){
        
        //var period = this.data.period;
        var tasks = this.data.tasks;
        
        if (!Array.isArray(tasks))
        {
            tasks = [tasks];
        }
        
        var lastRun = readLastRun(this.target);
        grunt.log(lastRun);
        // If outside period, run the tasks
        
        saveLastRun(this.target);
        
    });
    
    
    
    var taskDataFolder = './.grunt/grunt-periodic/';
    
    
    function readLastRun(target)
    {
        return grunt.file.read(taskDataFolder + target);
    }
    
    
    // function checkOutsidePeriod()
    // {
        
    // }
    
    
    // function runTasks()
    // {
        
    // }
    
    
    function saveLastRun(target)
    {
        var now = new Date();
        grunt.file.write(taskDataFolder + target, now.toISOString());
    }

};