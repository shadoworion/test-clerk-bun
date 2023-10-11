import clerkClient from "@clerk/clerk-sdk-node";

const test = async () => {
  const users = await clerkClient.users.getUserList();
  console.log(users);
};

test();
