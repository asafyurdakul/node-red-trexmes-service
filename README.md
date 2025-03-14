# node-red-trexmes-service

This is a [Node-Red][1] package that communicates with a [trexMes Edge][2] NodeRED connector plugin

# Install

Run the following command in the root directory of your Node-RED install

    npm install node-red-trexmes-service

# Usage
This node group contains 14 separate nodes and communicates with the trexMes Edge panel software connector plugin.
Real time win form designs can be made with events.,
At the same time, event triggers are received from 150-200 panels.

Before starting to use nodes, it is mandatory to have the NodeRED connector plugin in the relevant tresMes panel software.

Flow creation is started with the "trex Subscriber" node. This node performs the recording process of the events used in the project on the panel side.

The "Custom Form" node contains form designs in xml format. With the entered format, the form in the xml design is created in real time on the panel side.

Nodes ending with "Events" are used to capture events sent from the panel or the custom form we created.

"Form Bind Controls" are used to bind input or other controls to the sent data on the custom form created in particular.

"Control Properties" is used to set the properties of objects on the node panel main form or custom form.

"Button Configurator" and "Main Form Action" are also used for more specific operations.
The example can be found in the node-red import examples page.


# Requirements

The package currently requires [Node.js 18.16][1] or higher.

# Authors

[Asaf Yurdakul][4]

[1]:http://nodered.org
[2]:https://trex.com.tr/
[4]:https://github.com/asafyurdakul

