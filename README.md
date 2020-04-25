# MemeLoop

The usage of async/await is forbidden until angular patches the problem with zone.js (async/await is not supported for change detection) - while typescript is compiled to esnext
or electron patches the problem with <script type=module> and nomodule from the generated index.html - while typescript is compiled to es2015
So for minimal friction I chose to remove the async/await and build the project to esnext
