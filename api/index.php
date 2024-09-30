<?php
// 此php和保存链接的txt文件放在同一目录下
$filename = "img.txt";  /* 保存链接的txt文件名 */
if (!file_exists($filename)) {
    die('文件不存在');
}
// 从文本获取链接
$pics = [];
$fs = fopen($filename, "r");
while (!feof($fs)) {
    $line = trim(fgets($fs));
    if ($line != '') {
        array_push($pics, $line);
    }
}
fclose($fs); // 关闭文件句柄
// 从数组随机获取链接
$pic = $pics[array_rand($pics)];
$type = $_GET['type'] ?? 'default';

// 根据请求类型返回内容
switch ($type) {
    case 'json':
        header('Content-Type: application/json');
        echo json_encode(['pic' => $pic]);
        break;
    default:
        // 读取图片内容并输出
        $response = fetch_image($pic);
        if ($response !== false) {
            $image = imagecreatefromstring($response);
            if ($image !== false) {
                header('Content-Type: image/png');
                imagepng($image);
                imagedestroy($image);
            } else {
                die('Failed to create image resource.');
            }
        } else {
            die('Failed to fetch image.');
        }
        break;
}

// 定义一个函数来获取图片内容
function fetch_image($url) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    $response = curl_exec($ch);
    curl_close($ch);
    return $response;
}
?>
