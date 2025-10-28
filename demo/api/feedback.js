export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, message, createdAt } = req.body;

    console.log("收到留言：", username, message, createdAt);

    // 这里可以未来接数据库，比如 Firebase 或 MongoDB
    // 暂时我们就先直接返回成功信息
    return res.status(200).json({
      success: true,
      message: "留言已保存（测试接口已收到）"
    });
  }

  // 不是 POST 请求
  return res.status(405).json({
    success: false,
    message: "仅支持 POST 请求"
  });
}
