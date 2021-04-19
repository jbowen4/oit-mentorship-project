#!/usr/bin/env bash
echo "┏━━━ 📦 Building Components ━━━━━━━━━━━━━━━━━━━"
lerna run buildlib && lerna run buildweb --include-dependencies --stream