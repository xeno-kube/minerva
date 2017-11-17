#!/bin/sh

echo "[$(date)] $1" >> /minerva_activity.log

crond -b

echo "[$(date)] --- starting Minerva ---" >> /minerva_activity.log

node /dashboard/bin/www
