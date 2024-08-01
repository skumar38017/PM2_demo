PM2 excels as a premier process manager for Node.js applications, guaranteeing smooth operation, effective handling of multiple applications, centralized logging, load balancing, and a resilient ecosystem. This guide delineates PM2's significant advantages and furnishes a detailed, step-by-step installation and utilization walkthrough for Node.js on an AWS EC2 instance.

----------------------------------------------- **************************** --------------------------------------------------------

What is PM2?

PM2 is a popular process manager for Node.js applications that provides several benefits:

It allows you to keep your Node.js applications running continuously: PM2 can automatically restart your application if it crashes, and it can also automatically reload your application when you update your code.

It can help you manage multiple applications: PM2 allows you to manage multiple Node.js applications on the same server, and it provides a convenient CLI interface for starting, stopping, and monitoring your applications.

It provides centralized logging: PM2 can aggregate the logs from your Node.js applications into a single location, making it easier to manage and analyze your logs.

It supports load balancing: PM2 can distribute incoming requests across multiple instances of your Node.js application, allowing you to handle more traffic and improve the performance and reliability of your application.

It provides a robust ecosystem: PM2 has a large and active community, and it integrates with many popular tools and frameworks, making it a versatile and reliable choice for managing Node.js applications.

Overall, PM2 can help you streamline the deployment and management of your Node.js applications, improve their performance and reliability, and simplify your development workflow.


# To install PM2 with Node.js on an Amazon EC2 instance, follow these steps:
* Connect to your EC2 instance via SSH.
* Install Node.js and npm using the following command:
###

    sudo apt-get update
    sudo apt-get install nodejs
    sudo apt-get install npm


# Install PM2 using npm:
    sudo npm install pm2 -g

# Verify that PM2 has been installed correctly by running the following command:
    pm2 -v

# To start your Node.js application with PM2, navigate to your application directory and run the following command:
    pm2 start app.js
    pm2-dev start app.js


Replace app.js with the filename of your main Node.js file.
# To ensure that your Node.js application is started automatically after a system reboot, use the following command:
    pm2 startup
This will generate a command that you can copy and run to set up the necessary system startup scripts.

# Finally, use the following command to save your current PM2 process list:
    pm2 save

How to list all the processes inside the PM2 manager?

## To list all the processes inside the PM2 manager, you can use the following command:
    pm2 list
    pm2 list --sort [name|id|pid|memory|cpu|status|uptime][:asc|desc]
    pm2 list --sort uptime:desc
    pm2 show server

This command will display a table containing information about all the processes currently managed by PM2, including the process name, process ID (PID), status, and other details.

If you have a large number of processes and want to filter the results based on a specific criteria, you can use the --sort and --filter options. For example, to list all the running processes sorted by memory usage, you can use the following command:

    pm2 list --sort memory

#  To list all the processes with "app" in their name, you can use the following command:
    pm2 list --filter app

These options can help you quickly find the information you need and manage your processes more efficiently with PM2.


##  Monitoring all processes launched:
        pm2 monit
        
##### service 
        pm2 stop
        pm2 restart
        pm2 restart app --kill-timeout 5000
        pm2 start app.js --max-memory-restart 1G
        Restart at 12:00 pm every day
        pm2 start app.js --cron-restart="0 12 * * *"
        pm2 delete all
        pm2 reset all
        pm2 kill


## Start or Restart PM2 Processes:

If you’ve made changes to the ecosystem.config.js file, start or restart the processes with:
#
        pm2 start ecosystem.config.js
        pm2 reload ecosystem.config.js
