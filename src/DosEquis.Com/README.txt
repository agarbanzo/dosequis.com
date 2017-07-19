IIS Setup
============================

Bind site to http:*:9090:

===========================
Wepback Dev Server
===========================

Webpack dev server will proxy requests from the MS server running on port localhost:9090 above, to localhost:8080 (localhost:8080 is webpack-dev-server's default port).

*Development: To start webpack-dev-ser with HRM enabled from terminal run: 'npm start'. (_build folder will automatically be deleted).

*bUILD: from terminal run: 'npm run build'. (_build folder will recompile).

===========================
Sprite Generation
===========================

Adding a .png file to the sprites/common/ico folder will automatically generate a new sprite sheet. All sprites are prefixed with icon- and have a class name of <icon-<your image name>'.

// EXAMPLE HTML USAGE

<i class="icon icon-home"></i>

*/

=================================
EVENTS
=================================
Event dispatcher is a lightweight javascript module for custom events handling
https://github.com/powerbot15/event-dispatcher

==================================
.NET View files
==================================


