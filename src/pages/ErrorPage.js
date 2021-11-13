import {Container} from "@mui/material";
import "../styles/ErrorPage.css";

export default function ErrorPage() {
    /*const {errorCode} = props;
    let title, message;
    switch (errorCode) {
        case "403":
            title = "无权访问";
            message = "客户端无权访问内容；也就是说，它是未经授权的，因此服务器拒绝提供请求的资源。 与 401 Unauthorized 不同，客户端的身份是服务器已知的。"
            break;
        case "404":
            title = "Not Found";
            message = "服务器找不到请求的资源。在浏览器中，这意味着无法识别 URL。在 API 中，这也可能意味着端点有效但资源本身不存在。 服务器也可以发送这个响应而不是 403 Forbidden 来向未经授权的客户端隐藏资源的存在。 这个响应代码可能是最广为人知的，因为它经常出现在网络上。"
            break;
        default:
            title = "Not Found";
            break;
    }*/
    window.document.title = "找不到请求的资源";

    return (
        <Container id="ErrorPage">
            <h1>404</h1>
            <details>
                <summary>detail</summary>
                <p>message</p>
            </details>
        </Container>
    );
}