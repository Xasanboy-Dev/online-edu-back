import { Post } from "@prisma/client"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function findAllPosts() {
    return await prisma.posts.findMany()
}

export async function findOnePostById(postId: number) {
    return await prisma.posts.findUnique({ where: { id: postId } })
}

export async function addPost(owner: number, ownerName: string, title: string, published: boolean, typeOf: Post) {
    return await prisma.posts.create({
        data: {
            owner,
            ownerName,
            title,
            published,
            typeOf
        }
    })
}

export async function editPostById(id: number, ownerId: number, ownerName: string, title: string, published: boolean, typeOf: Post, comments: number[]) {
    return await prisma.posts.update({
        where: {
            id
        },
        data: {
            commentId: comments,
            published,
            title,
            typeOf,

        }
    })
}


export async function removePost(userId: number, postId: number) {
    const user = await prisma.user.findUnique({ where: { id: userId } })
    if (user) {
        let comments: any = await prisma.user.update({
            where: { id: userId }, data: {
                comments: user.comments
            }
        })
        comments = comments.comments.filter((id: number) => id !== postId)
        await prisma.user.update({ data: { comments }, where: { id: user.id } })
        return await prisma.posts.delete({ where: { id: postId } })
    }
}

export async function findAllTruePosts(){
    return await prisma.posts.findMany({where:{}})
}