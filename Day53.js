//! Question: Task Scheduler with Closures
//* Write a function taskScheduler that accepts a task function and a delay (in milliseconds). The taskScheduler should use closures to ensure the task executes only once, even if it is scheduled multiple times before the delay ends.

function taskScheduler(task, delay) {
    let isTaskScheduled = false; //? Closure variable to track the state

    return function () {
        if (!isTaskScheduled) {  //? Check if the task is not already scheduled
            isTaskScheduled = true; //? Mark the task as scheduled

            setTimeout(() => {
                task(); //? Execute the task
                isTaskScheduled = false; //? Reset the state after the task is done
            }, delay);
        }
    };
}

// Example Usage:
const task = () => console.log("Task executed!");
const scheduleTask = taskScheduler(task, 2000);

scheduleTask(); //? Will execute the task after 2 seconds
scheduleTask(); //? Ignored
scheduleTask(); //? Ignored

//! Output (after 2 seconds): "Task executed!"
