#!/usr/bin/env zsh

# ${0}		- The name of the script, e.g. "./deploy.sh"
# ${0:a}	- The absolute path of $0, "/home/myname/website/deploy.sh"
# ${0:a:h}  - The head of the absolute path to $0, "/home/myname/website"
#
SCRIPT_DIR=${0:a:h}

npx tailwindcss -i ./tailwind.css -o ./static/styles.css
hugo --gc --minify

# Change "website:" to whever you're hosting, assuming you have ssh access to that machine.
# For example: myname@example.com:/website/public
scp -r $SCRIPT_DIR/public/* website:

