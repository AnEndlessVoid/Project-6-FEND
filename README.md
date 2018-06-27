# Project 6 - FEND - Restaurant Reviews


## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you incrementally converted a static webpage to a mobile-ready web application. I was given a static design that lacked accessibility and converted the design to be responsive on different sized displays and accessible for screen reader use. I also added a service worker to begin the process of creating a seamless offline experience for my users.

### Specification

I have been provided the code for a restaurant reviews website. The code had a lot of issues. It was barely usable on a desktop browser, much less a mobile device. It also didn't include any standard accessibility features, and it didn't work offline at all. I updated the code to resolve these issues while still maintaining the included functionality.

### How to run it

1. Clone the repo in your computer.

2. In the folder of the repo, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
3. With your server running, visit the site: `http://localhost:8000`.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Dependencies

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/).
