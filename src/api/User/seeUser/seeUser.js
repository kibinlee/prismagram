import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeUser: (_, args, { request }) => {
      //public profile
      const { id } = args;
      return prisma.user({ id });
    }
  }
};
