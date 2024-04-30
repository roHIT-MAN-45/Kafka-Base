import { kafka } from "../kafka/index.js";
import { faker } from "@faker-js/faker";

const Producer = kafka.producer();

const main = async () => {
  try {
    await Producer.connect();

    console.log("Producer connected succesfully 🚀");

    // SIGTERM : Process needs to be terminated gracefully ✋
    process.on("SIGTERM", async () => {
      await Producer.disconnect();

      console.log("Producer disconnected from Kafka 🚨");

      process.exit(0);
    });

    while (true) {
      await new Promise(async (res) => {
        await Producer.send({
          topic: "demo-topic",
          messages: [
            { key: faker.internet.userName(), value: faker.internet.emoji() },
          ],
        });

        setTimeout(() => res(null), 3 * Math.random() * 1000);
      });
    }

    await Producer.disconnect();
  } catch (error) {
    console.log("Producer Error 💀 : ", error.message);
  }
};

main();
