addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const images = [
    "https://github.com/Edwardhhr/tuchuang/blob/main/img/wallhaven-2yqmq9_2560x1600.png?raw=true",
    "https://github.com/Edwardhhr/tuchuang/blob/main/img/wallhaven-2ywo9g_2560x1600.png?raw=true",
    "https://github.com/Edwardhhr/tuchuang/blob/main/img/wallhaven-5g9611_2560x1600.png?raw=true",
    "https://github.com/Edwardhhr/tuchuang/blob/main/img/wallhaven-7pr56v_2560x1600.png?raw=true",
    "https://github.com/Edwardhhr/tuchuang/blob/main/img/wallhaven-8586my_2560x1600.png?raw=true",
    "https://github.com/Edwardhhr/tuchuang/blob/main/img/wallhaven-d67r73_2560x1600.png?raw=true",
    "https://github.com/Edwardhhr/tuchuang/blob/main/img/wallhaven-exqqy8_2560x1600.png?raw=true",
    "https://github.com/Edwardhhr/tuchuang/blob/main/img/wallhaven-gpl8d3_2560x1600.png?raw=true",
    "https://github.com/Edwardhhr/tuchuang/blob/main/img/wallhaven-jxl56w_2560x1600.png?raw=true",
    "https://github.com/Edwardhhr/tuchuang/blob/main/img/wallhaven-l8o2op_2560x1600.png?raw=true",
    "https://github.com/Edwardhhr/tuchuang/blob/main/img/wallhaven-o58qx9_2560x1600.png?raw=true",
    "https://github.com/Edwardhhr/tuchuang/blob/main/img/wallhaven-p9596j_2560x1600.png?raw=true",
    "https://github.com/Edwardhhr/tuchuang/blob/main/img/wallhaven-qzyovr_2560x1600.png?raw=true",
    "https://github.com/Edwardhhr/tuchuang/blob/main/img/wallhaven-yxp9ll_2560x1600.png?raw=true",
    "https://github.com/Edwardhhr/tuchuang/blob/main/img/wallhaven-yxpwmx_2560x1600.png?raw=true",
    "https://github.com/Edwardhhr/tuchuang/blob/main/img/wallhaven-yxr83d_2560x1600.png?raw=true",
    "https://github.com/Edwardhhr/tuchuang/blob/main/img/%E5%B0%8F%E5%8D%96%E9%93%BA%20%E9%A3%9F%E6%9D%82%E5%BA%97%20%D0%A1%C3%A8%20%E5%8A%A8%E6%BC%AB%E9%A3%8E%E6%99%AF%204k%E5%A3%81%E7%BA%B83840x2160_%E5%BD%BC%E5%B2%B8%E5%9B%BE%E7%BD%91.jpg?raw=true"
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  const response = await fetch(randomImage);
  if (response.ok) {
    return new Response(response.body, {
      headers: {
        'content-type': 'image/png', // 或者根据实际图片类型设置
        'Access-Control-Allow-Origin': '*',
      },
    });
  } else {
    return new Response('Image not found', { status: 404 });
  }
}