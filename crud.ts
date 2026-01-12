
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

    // const users = await prisma.user.findMany({
    //     include: {
    //         posts: true,
    //         profiles : true
    //     }
    // })


    // update user

    // const userProfile = await prisma.profile.update({
    //     where: {
    //         userId : 1
    //     },
    //     data: {
    //         bio: "I am a backend focused developer"
    //     },
    //     select : {
    //         id : true,
    //         bio : true,
    //         user : {
    //             select : {
    //                 name :true,
    //                 email : true
    //             }
    //         }
    //     }
    // })
    
    // console.log("update : ", userProfile)



  //delete a user

//   const deleteUser = await prisma.user.delete({
//     where : {
//         id : 2
//     }  
//   })

//   console.log(deleteUser)

// const userById = await prisma.user.findUnique({
//     where : {
//         id :2
//     },
//     select : {
//         posts :true,
//         profiles :true
//     }
// })

// console.log(userById)



// upsert

 const upsertUser = await prisma.user.upsert ( {
    where : {
        email : "riddi@gmail.com"
    },
    update : {
        name : "Riddi Rani Sharma"
    },
    create : {
        name : "Riddi Rani Sharma",
        email : "riddi@gmail.com"
    }
 })

 console.log(upsertUser)
 }

run()
