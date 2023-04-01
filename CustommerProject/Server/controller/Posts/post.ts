import { Request, Response } from "express";
import { addPost, editPostById, findAllPosts, findOnePostById, removePost } from "../../database/post";
import { VerifyToken } from "../../database/Auth/token";
import { Post } from "@prisma/client"
import { editUser, getOneUserById } from "../../database/user";

export async function getPosts(req: Request, res: Response) {
    try {
        const token = req.headers.authorization
        if (token) {
            const ValidateToken = VerifyToken(token)
            const posts = await findAllPosts()
            return res.status(200).json({ message: "All posts", posts })
        } else {
            return res.status(401).json({ message: "You must to login" })
        }
    } catch (error: any) {
        console.log(error.message)
        res.status(500).json({ message: "Internal error" })
    }
}

export async function getOnePostsById(req: Request, res: Response) {
    try {
        const token = req.headers.authorization
        const { postId } = req.body
        if (token && postId && Number(postId).toString() !== "NaN") {
            const ValidateToken = VerifyToken(token)
            const post = await findOnePostById(postId)
            if (post) {
                return res.status(200).json({ message: "post founded", post })
            } else {
                return res.status(404).json({ message: "Post not found!" })
            }
        } else {
            return res.status(401).json({ message: "You mst to login!" })
        }
    } catch (error: any) {
        console.log(error.message)
        res.status(500).json({ message: "Internal error" })
    }
}


export async function createNewPost(req: Request, res: Response) {
    try {
        const token = req.headers.authorization
        const { owner, title, published, typeOf }:
            { owner: number, title: string, published: boolean, typeOf: Post } = req.body
        if (token) {
            const ValidateToken = VerifyToken(token)
            const user = await getOneUserById(owner)
            if (ValidateToken && user) {
                const post = await addPost(user.id, user.name, title, published, typeOf)
                return res.status(201).json({ message: "Post created succesfully", post })
            } else {
                return res.status(404).json({ message: "Not Found!" })
            }
        } else {
            return res.status(401).json({ message: "You must to login!" })
        }
    } catch (error: any) {
        console.log(error.message)
        res.status(500).json({ message: "Internal error" })
    }
}

export async function updatePost(req: Request, res: Response) {
    try {
        const token = req.headers.authorization
        const { postId, owner, title, published, typeOf, commentId }:
            { postId: number, owner: number, title: string, published: boolean, typeOf: Post, commentId: number } = req.body
        if (token && owner) {
            const user = await getOneUserById(owner)
            const post = await findOnePostById(postId)
            if (user && post) {
                let comments: number[] = post.commentId
                if (commentId) {
                    comments.push(commentId)
                }
                const updatedPost = await editPostById(
                    post.id,
                    user.id,
                    user.name,
                    title ? title : post.title,
                    published ? published : post.published,
                    typeOf ? typeOf : post.typeOf,
                    commentId ? comments : post.commentId
                )
                return res.status(200).json({ message: "Edited post", post: updatedPost })
            } else {
                return res.status(404).json({ message: "You have some problems!" })
            }
        } else {
            return res.status(201).json({ message: "You must to login!" })
        }
    } catch (error: any) {
        console.log(error.message)
        res.status(500).json({ message: "Internal error" })
    }
}

export async function deletePost(req: Request, res: Response) {
    try {
        const token = req.headers.authorization
        const postId = req.headers.accept
        if (token && postId) {
            const ValidateToken = VerifyToken(token)
            const post = await findOnePostById(+postId)
            if (post && ValidateToken) {
                const user = await getOneUserById(post.owner)
                if (user) {
                    let posts = user.posts
                    posts = posts.filter((id: number) => id !== post.id)
                    await editUser(
                        user.id,
                        user.name,
                        user.lastname,
                        user.phoneNumber,
                        user.messages,
                        user.connectedChats,
                        user.password,
                        user.comments,
                        posts
                    )
                    const removedPost = await removePost(user.id, post.id)
                    return res.status(200).json({ message: "Post deleted succesfully", user })
                } else {
                    return res.status(404).json({ message: "User not found!" })
                }
            } else {
                return res.status(400).json({ message: "You have some mistakes!" })
            }
        } else {
            return res.status(401).json({ message: "You must to login" })
        }
    } catch (error: any) {
        console.log(error.message)
        res.status(500).json({ message: "Internal error" })
    }
}