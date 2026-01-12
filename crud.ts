
import { prisma } from './lib/prisma'

async function run () {
    // const createUser = await prisma.user.create({
    //     data : {
    //         name : "Riddi Sharma",
    //         email : "riddi@gmail.com"
    //     }
    // })
    // console.log("User: ", createUser)


    // create post
    // const createPost = await prisma.post.create({
    //     data:{
    //         title : "This is title",
    //         content : "This is content",
    //         authorId : 1
    //     }
    // })
    // console.log("Post : ",createPost)


    // create profile
    // const createProfile = await prisma.profile.create({
    //     data : {
    //         bio : "I am student",
    //         userId: 1
    //     }
    // })

    // console.log(createProfile)




    // get all users

    const users = await prisma.user.findMany({
        include: {
            posts: true,
            profile : true
        }
    })
    console.log(users)

}

run()
