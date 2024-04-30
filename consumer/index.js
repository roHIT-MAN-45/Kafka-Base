import { kafka } from "../kafka/index.js";

const Consumer = kafka.consumer({ groupId: "demo-group" });

const main = async () => {
  try {
    await Consumer.connect();

    console.log("Consumer connected succesfully 🚀");

    await Consumer.subscribe({ topic: "demo-topic", fromBeginning: true });

    // SIGTERM : Process needs to be terminated gracefully ✋
    process.on("SIGTERM", async () => {
      await Consumer.disconnect();

      console.log("Consumer disconnected from Kafka 🚨");

      process.exit(0);
    });

    await Consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          partition,
          offset: message.offset,
          value: message.value?.toString(),
          key: message.key?.toString(),
        });
      },
    });
  } catch (error) {
    console.log("Consumer Error 💀 : ", error.message);
  }
};

main();
