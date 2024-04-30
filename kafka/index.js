import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "kafka-service",
  brokers: ["localhost:9092"],
  connectionTimeout: 3000,
  requestTimeout: 5000,
});
