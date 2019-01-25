[![Build Status](https://travis-ci.com/Magystius/Omega.svg?branch=master)](https://travis-ci.com/Magystius/Omega)
[![License](https://img.shields.io/github/license/magystius/omega.svg)](https://github.com/magystius/omega/blob/master/LICENSE.md)
[![Docker Stars](https://img.shields.io/docker/stars/tdekarz/omega.svg)](https://hub.docker.com/r/tdekarz/omega/)
[![Docker Pulls](https://img.shields.io/docker/pulls/tdekarz/omega.svg)](https://hub.docker.com/r/tdekarz/omega/)


# Ωmega

simple proof-of-concept web-app for container runtime environments.

# Usage
build the docker image and run it.
it contains a simple express server which listens on port 8080

## Basic
the app will return "αlpha" for every given path.
it also will generate logs to the console.

## Connection Check
to check internet connection behind a proxy use '/connection-check' to make a request against google.com. 
