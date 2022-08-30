// 引入数据库的连接服务
import prisma from "./db.js";

// 创建用户
async function createUser() {
  try {
    await prisma.user.create({
      // 调用 prisma 的创建功能
      data: {
        userName: "boris",
        password: "boris",
        nickName: "xbp",
      },
    });
  } catch (err) {
    console.error("创建用户失败", err);
  }
}

// createUser();

async function createArticle() {
  // 查找第一个用户
  const user = await prisma.user.findFirst();
  try {
    await prisma.article.create({
      data: {
        title: "boris's topic for orm ",
        desc: "orm 框架尝鲜",
        authorId: user.id,
      },
    });
  } catch (err) {
    console.error("创建文章失败", err);
  }
}

// createArticle();

async function createWithInserd() {
  try {
    await prisma.user.create({
      data: {
        userName: "张三",
        password: "123456",
        nickName: "法外狂徒",
        article: {
          create: [
            {
              title: "我的奋斗",
              desc: "成名之作",
            },
          ],
        },
      },
    });
  } catch (err) {
    console.error("嵌套插入数据失败", err);
  }
}

createWithInserd();
