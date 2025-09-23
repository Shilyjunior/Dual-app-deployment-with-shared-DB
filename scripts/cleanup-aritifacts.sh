#!/bin/bash
RETENTION_DAYS=${1:-7}

echo "Cleaning up artifacts older than $RETENTION_DAYS days"

find apps/artifacts -name "*.tar.gz" -mtime +$RETENTION_DAYS -delete

echo "Cleanup completed!"