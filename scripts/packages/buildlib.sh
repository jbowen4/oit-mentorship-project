#!/usr/bin/env bash
echo "┏━━━ 📦 Building $(pwd) ━━━━━━━━━━━━━━━━━━━"
yarn tsc && tsc --build tsconfig.esm.json