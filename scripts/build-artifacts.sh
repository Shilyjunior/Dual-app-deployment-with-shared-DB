#!/bin/bash
set -e

VERSION=${1:-1.0.0}
APP_TYPE=${2:-both}

echo "Building artifacts version $VERSION for $APP_TYPE"

if [[ "$APP_TYPE" == "flask" || "$APP_TYPE" == "both" ]]; then
    echo "Building Flask app..."
    mkdir -p apps/artifacts/flask-app
    tar -czf apps/artifacts/flask-app/flask-app-$VERSION.tar.gz \
        -C apps/flask-app \
        app.py requirements.txt templates/
fi

if [[ "$APP_TYPE" == "node" || "$APP_TYPE" == "both" ]]; then
    echo "Building Node.js app..."
    mkdir -p apps/artifacts/node-app
    tar -czf apps/artifacts/node-app/node-app-$VERSION.tar.gz \
        -C apps/node-app \
        index.js package.json
fi

echo "Artifacts built successfully!"