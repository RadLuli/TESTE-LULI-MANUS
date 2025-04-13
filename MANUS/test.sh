#!/bin/bash

# Test script for Luli Radfahrer website
# This script will check for common issues before deployment

echo "Running pre-deployment tests for Luli Radfahrer website..."
echo "--------------------------------------------------------"

# Check directory structure
echo "Checking directory structure..."
if [ -d "/home/ubuntu/luli_website/deployment/css" ] && [ -d "/home/ubuntu/luli_website/deployment/js" ] && [ -d "/home/ubuntu/luli_website/deployment/img" ]; then
    echo "✓ Directory structure is correct"
else
    echo "✗ Directory structure is incomplete"
fi

# Check for required HTML files
echo "Checking HTML files..."
required_files=("index.html" "about.html" "media.html" "blog.html" "contact.html")
missing_files=0

for file in "${required_files[@]}"; do
    if [ -f "/home/ubuntu/luli_website/deployment/$file" ]; then
        echo "✓ $file exists"
    else
        echo "✗ $file is missing"
        missing_files=$((missing_files+1))
    fi
done

if [ $missing_files -eq 0 ]; then
    echo "✓ All required HTML files are present"
else
    echo "✗ $missing_files HTML files are missing"
fi

# Check for required CSS files
echo "Checking CSS files..."
if [ -f "/home/ubuntu/luli_website/deployment/css/styles.css" ]; then
    echo "✓ styles.css exists"
else
    echo "✗ styles.css is missing"
fi

# Check for required JS files
echo "Checking JavaScript files..."
required_js=("main.js" "external-content.js" "multilingual.js")
missing_js=0

for file in "${required_js[@]}"; do
    if [ -f "/home/ubuntu/luli_website/deployment/js/$file" ]; then
        echo "✓ $file exists"
    else
        echo "✗ $file is missing"
        missing_js=$((missing_js+1))
    fi
done

if [ $missing_js -eq 0 ]; then
    echo "✓ All required JavaScript files are present"
else
    echo "✗ $missing_js JavaScript files are missing"
fi

# Check HTML validity (basic check)
echo "Checking HTML validity..."
for file in "${required_files[@]}"; do
    if [ -f "/home/ubuntu/luli_website/deployment/$file" ]; then
        if grep -q "<!DOCTYPE html>" "/home/ubuntu/luli_website/deployment/$file"; then
            echo "✓ $file has valid DOCTYPE"
        else
            echo "✗ $file is missing DOCTYPE"
        fi
        
        if grep -q "<html" "/home/ubuntu/luli_website/deployment/$file"; then
            echo "✓ $file has html tag"
        else
            echo "✗ $file is missing html tag"
        fi
        
        if grep -q "<head>" "/home/ubuntu/luli_website/deployment/$file"; then
            echo "✓ $file has head tag"
        else
            echo "✗ $file is missing head tag"
        fi
        
        if grep -q "<body>" "/home/ubuntu/luli_website/deployment/$file"; then
            echo "✓ $file has body tag"
        else
            echo "✗ $file is missing body tag"
        fi
    fi
done

# Check for responsive meta tag
echo "Checking responsive design meta tag..."
for file in "${required_files[@]}"; do
    if [ -f "/home/ubuntu/luli_website/deployment/$file" ]; then
        if grep -q "viewport" "/home/ubuntu/luli_website/deployment/$file"; then
            echo "✓ $file has viewport meta tag"
        else
            echo "✗ $file is missing viewport meta tag"
        fi
    fi
done

# Check for multilingual support
echo "Checking multilingual support..."
if grep -q "language-toggle" "/home/ubuntu/luli_website/deployment/index.html"; then
    echo "✓ Language toggle is present"
else
    echo "✗ Language toggle is missing"
fi

echo "--------------------------------------------------------"
echo "Pre-deployment tests completed."
echo "Next steps: Set up local server for testing and prepare for domain deployment."
