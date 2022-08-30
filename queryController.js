import prisma from "./db.js";

async function findUsers(userName) {
  const findUser = await prisma.user.findMany({
    where: { userName },
  });
  console.log("find the user:", findUser);
}

// findUsers("boris");

async function findArticle(title) {
  const findArticle = await prisma.article.findMany({
    where: { title },
    // 增加 关联数据的显示
    include: {
      author: true,
    },
  });
  console.log("find the article:", findArticle);
}
findArticle("boris's topic for orm ");
