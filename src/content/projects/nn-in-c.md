---
title: Neural Network in C, From Scratch
summary: A handwritten-digit classifier written in plain C with no machine-learning libraries, trained on the 60,000-image MNIST set. It gets about 98% of test digits right.
spec: ["C", "784-64-10 network", "Mini-batch SGD", "MNIST"]
category: Machine learning
status: Complete
period: Jan – Feb 2025
sortDate: 2025-02-25
role: Solo project
cover: nn-terminal
links:
  - label: Code on GitHub
    url: https://github.com/rohanpatrick568/NN-in-C
art: neural-net
---

## Why

I wanted to understand what a deep-learning framework actually does, so I wrote one small network myself: every matrix multiply, activation and gradient.

## What it is

A two-layer network that reads a 28×28 MNIST digit (784 inputs), passes it through a hidden layer of 64 ReLU neurons, and outputs probabilities for the ten digits with softmax. That's 858 neurons in total. It trains on the 60,000 training images and is scored on the 10,000 test images, which it never sees during training. It classifies about 98% of them correctly.

## How it works

- He initialization for the weights, cross-entropy loss, and mini-batch stochastic gradient descent with a batch size of 64 and a learning rate of 0.01.
- An interactive mode draws a test digit as ASCII art in the terminal and shows the network's guess.
- It builds with a single batch script on Windows using MinGW.
