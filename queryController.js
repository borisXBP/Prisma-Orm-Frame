import prisma from "./db.js";

async function findUsers(userName) {
  // findMany 不输入参数时为查询所有数据
  const findUser = await prisma.user.findMany({
    // where 条件用于查询时的过滤
    where: { userName },
  });
  console.log("find the user:", findUser);
}

// findUsers("boris");

async function findArticle(title) {
  const findArticle = await prisma.article.findMany({
    where: { title },
    // 增加 关联数据的显示；关联查询
    include: {
      author: true,
    },
  });
  console.log("find the article:", findArticle);
}
// findArticle("boris's topic for orm ");

async function findWithPage() {}
