[Prisma 中文官网](https://prisma.yoga/)

# 步骤

## 初始化及配置 prisma

```
npm install prisma -D  // 安装
npx prisma init -h    // 查看命令
npx prisma init   // 初始化 prisma，默认使用 PostgreSQL 数据库
npx prisma init --datasource-provider mysql // 指定连接的数据库
npx prisma init --datasource-provider sqlite // 指定使用 SQLite 数据库
npx prisma init --datasource-url mysql://user:password@localhost:3306/mydb // 指定连接的数据库
// 指定使用的数据库之后，需要先在 schema.prisma 中新建数据模型，同时可以进行关联表等操作
npx prisma db push  // 新建数据模型后，使用该命令可直接在当前文件夹直接生成数据库；修改数据模型之后也应使用该命令重新生成数据库和数据表
npx prisma studio  // 打开 prisma 内置的服务器以便在浏览器中查看数据库；注意：每次更新数据模型和数据库表之后，都需要重新启动 prisma 内置服务器，否则其显示的数据与实际数据库内容不符！！
```

## 数据库的操作

### 创建数据库对象：在根目录创建 db.js 文件，创建数据库连接对象并导出

```
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
db.$connect().catch((err) => console.err(err));

export default db;

```

### 创建控制器：在根目录创建 createController.js 文件，用于新增用户

详见 createController.js 文件内容

### 查询控制器：在根目录创建 queryController.js 文件，用于查询用户

详见 queryController.js 文件内容
