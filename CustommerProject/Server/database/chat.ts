import { PrismaClient, Type } from "@prisma/client";
import { removeMessageWithId } from "./message";
import { getOneUserById } from "./user";
const prisma = new PrismaClient();

export async function getAllChats() {
  return await prisma.chat.findMany();
}

export async function getOneChatById(chatId: number) {
  return await prisma.chat.findUnique({ where: { id: chatId } });
}

export async function removeUserFromChat(userID: number, chatID: number) {
  const user = await getOneUserById(userID);
  const chat = await getOneChatById(chatID);
  if (user && chat) {
    let users = chat.users;
    users = users.filter((id: number) => id !== user.id);
    return await prisma.chat.update({
      data: { users },
      where: { id: chat.id },
    });
  }
}

export async function createChat(type: Type, users: number[], name: string) {
  return await prisma.chat.create({ data: { type, users, name } });
}

export async function editChat(
  messages: number[],
  users: number[],
  id: number,
  name: string
) {
  return await prisma.chat.update({
    data: { messages, users, name },
    where: { id },
  });
}

export async function removeChat(chatId: number) {
  const chat = await getOneChatById(chatId);
  if (chat) {
    let users = chat.users;
    let messages = chat.messages;
    users.forEach(async (id: number) => {
      await removeUserFromChat(id, chat.id);
    });
    messages.forEach(async (id: number) => {
      await removeMessageWithId(id);
    });
    return await prisma.chat.delete({ where: { id: chat.id } });
  }
}
