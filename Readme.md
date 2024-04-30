# Welcome to Basics: Kafka & Redpanda

Welcome to the Basics repository! This project provides a streamlined setup for Kafka producers and consumers using Node.js, orchestrated with Docker for seamless deployment.

## Overview

Basics is designed as a comprehensive starter kit for developers aiming to integrate Kafka with Redpanda, a high-performance streaming platform compatible with Kafka APIs. The repository offers clear examples of how to produce and consume messages, leveraging KafkaJS library alongside Faker.js for data generation.

## Setup

### Prerequisites

- Docker
- Node.js

### Quick Start

1. Clone this repository to your local machine.
2. Navigate to the repository directory.
3. Run `npm install` to install dependencies.
4. Start the Redpanda and Kafka containers with Docker:
   ```bash
   docker-compose up
   ```
5. Update Kafka broker configuration in `Producer/index.js` and `Consumer/index.js` if necessary to point to the Redpanda broker.
6. Start the Kafka producer:
   ```bash
   npm run start:producer
   ```
7. Start the Kafka consumer:
   ```bash
   npm run start:consumer
   ```

## Project Structure

The repository is organized as follows:

- `Producer/`: Contains the Kafka producer module.
- `Consumer/`: Contains the Kafka consumer module.
- `index.js`: Main entry point of the project.
- `package.json`: Project configuration and dependencies.

## Dependencies

The project relies on the following npm packages:

- `kafkajs`: Kafka client library for Node.js.
- `@faker-js/faker`: Library for generating synthetic data.

## Author

This repository is authored by Rohit Chavan.

## License

This project is licensed under the ISC License.
