#!/bin/bash
cd /home/ec2-user/server
npm install --omit=dev
npm install pm2 -g